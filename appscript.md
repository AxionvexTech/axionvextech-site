/**
 * Axionvex Hiring System - Final Apps Script
 * Flow:
 * 1) Website application stays on website + Resend
 * 2) Candidate receives role-based Tally link
 * 3) Tally webhook hits this Apps Script
 * 4) Script validates, scores, organizes ATS data in Google Sheet
 * 5) Manual final review in ats_tracker
 * 6) Approved rows are pushed to website webhook
 */

const SHEET_APPLICATIONS = 'applications';
const SHEET_EVALUATIONS = 'evaluations';
const SHEET_ATS = 'ats_tracker';
const SHEET_SETTINGS = 'settings';
const SHEET_LOG = 'event_log';

function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || 'health';
  if (action === 'health') {
    return jsonOutput({ ok: true, service: 'axionvex-hiring-app-script', time: new Date().toISOString() });
  }
  if (action === 'processApproved') {
    const result = processApprovedCandidates();
    return jsonOutput({ ok: true, result });
  }
  return jsonOutput({ ok: false, error: 'Unknown action' });
}

function doPost(e) {
  try {
    const payload = parseIncomingPayload_(e);
    const headers = parseIncomingHeaders_(e);
    const action = (payload.action || payload.eventType || '').toString().trim();

    // Main webhook path: Tally submission
    const result = handleTallySubmission_(payload, headers);
    return jsonOutput({ ok: true, result });
  } catch (error) {
    logEvent_('ERROR', 'doPost', String(error && error.stack || error));
    notifyManagerError_(String(error && error.stack || error));
    return jsonOutput({ ok: false, error: String(error && error.message || error) });
  }
}

function parseIncomingPayload_(e) {
  if (!e || !e.postData || !e.postData.contents) return {};
  const raw = e.postData.contents;
  try {
    return JSON.parse(raw);
  } catch (err) {
    // fallback for form-encoded style
    const obj = {};
    raw.split('&').forEach(pair => {
      const parts = pair.split('=');
      if (parts.length >= 2) {
        obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts.slice(1).join('='));
      }
    });
    return obj;
  }
}

function parseIncomingHeaders_(e) {
  const result = {};
  if (!e || !e.parameter) return result;
  Object.keys(e.parameter).forEach(k => result[k] = e.parameter[k]);
  return result;
}

function jsonOutput(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleTallySubmission_(payload, headers) {
  ensureWorkbookStructure_();

  const normalized = normalizeTallySubmission_(payload);
  writeEvaluationRow_(normalized);
  upsertAtsTracker_(normalized);

  const managerEmail = getSetting_('manager_email') || 'manager@axionvextech.com';
  GmailApp.sendEmail(
    managerEmail,
    '[Axionvex] New Tally evaluation received',
    buildManagerEvaluationEmail_(normalized)
  );

  logEvent_('INFO', 'handleTallySubmission_', 'Processed application_id=' + normalized.application_id);
  return {
    application_id: normalized.application_id,
    role: normalized.role,
    validation_status: normalized.validation_status,
    score_total: normalized.score_total,
    recommendation: normalized.recommendation
  };
}

function normalizeTallySubmission_(payload) {
  const allFields = flattenAnyTallyFields_(payload);
  const rawRole = firstNonEmpty_(
    allFields.role,
    allFields.role_key,
    allFields.applied_role,
    allFields.position,
    allFields['Role'],
    allFields['role']
  );

  const role = normalizeRoleKey_(rawRole);
  const fullName = firstNonEmpty_(
    allFields.full_name,
    allFields.fullname,
    allFields.name,
    allFields['Full name'],
    allFields['Candidate Name']
  );
  const email = firstNonEmpty_(
    allFields.email,
    allFields.email_address,
    allFields['Email'],
    allFields['Email Address']
  );
  const applicationId = firstNonEmpty_(
    allFields.application_id,
    allFields.app_id,
    allFields['Application ID']
  ) || createApplicationId_();
  const source = firstNonEmpty_(allFields.source, 'tally');

  const submittedAt = new Date();
  const roleDisplay = roleToDisplayName_(role);
  const answers = collectAnswerMap_(allFields);

  const validation = validateSubmission_(applicationId, fullName, email, role);
  const scoreObj = scoreSubmissionByRole_(role, answers, allFields, validation.valid);

  return {
    submitted_at: submittedAt,
    raw_payload: JSON.stringify(payload),
    application_id: applicationId,
    full_name: fullName || '',
    email: email || '',
    role: role || '',
    role_display: roleDisplay,
    source: source,
    validation_status: validation.status,
    validation_notes: validation.notes,
    score_total: scoreObj.total,
    score_band: scoreObj.band,
    recommendation: scoreObj.recommendation,
    workspace_group: roleToWorkspaceGroup_(role),
    answers_json: JSON.stringify(answers),
    field_map_json: JSON.stringify(allFields),
    tally_form_id: detectTallyFormId_(payload),
    tally_submission_id: firstNonEmpty_((payload.data||{}).submissionId, (payload.data||{}).responseId, payload.submissionId, payload.responseId, ''),
    evaluation_summary: scoreObj.summary
  };
}

function flattenAnyTallyFields_(payload) {
  const out = {};

  // Top-level scalar keys (eventId, eventType, createdAt)
  Object.keys(payload || {}).forEach(k => {
    if (typeof payload[k] !== 'object') out[k] = payload[k];
  });

  // Tally webhook nests everything under payload.data
  // Structure: { eventType, data: { formId, formName, submissionId, respondentId, fields: [...] } }
  const data = payload.data || {};
  Object.keys(data).forEach(k => {
    if (typeof data[k] !== 'object') out[k] = data[k];
  });

  // Fields array lives at payload.data.fields (not payload.fields)
  const fields = (data.fields) || (payload.fields) || [];
  if (Array.isArray(fields)) {
    fields.forEach(item => {
      const label = firstNonEmpty_(item.label, item.title, item.key, item.name);
      const key = sanitizeKey_(label);
      const value = extractFieldValue_(item);
      if (key && value !== '') out[key] = value;
      if (label && value !== '') out[label] = value;
    });
  }

  // Hidden fields may also be nested separately in some payload variants
  const hidden = payload.hiddenFields || payload.hidden_fields || payload.hidden || data.hiddenFields || {};
  Object.keys(hidden || {}).forEach(k => {
    out[sanitizeKey_(k)] = hidden[k];
    out[k] = hidden[k];
  });

  return out;
}

function extractFieldValue_(item) {
  if (!item) return '';
  if (typeof item.value === 'string') return item.value;
  if (typeof item.answer === 'string') return item.answer;
  if (typeof item.text === 'string') return item.text;
  if (Array.isArray(item.value)) return item.value.join(', ');
  if (Array.isArray(item.answer)) return item.answer.join(', ');
  if (item.value && typeof item.value === 'object') return JSON.stringify(item.value);
  if (item.answer && typeof item.answer === 'object') return JSON.stringify(item.answer);
  return '';
}

function sanitizeKey_(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function normalizeRoleKey_(rawRole) {
  const value = sanitizeKey_(rawRole);
  const map = {
    recruiter: 'recruiter',
    talent_operations_coordinator: 'recruiter',
    talent_and_operations_coordinator: 'recruiter',
    talent_coordinator: 'recruiter',
    delivery_coordinator: 'recruiter',
    proxy_interviewer: 'proxy_interviewer',
    technical_interviewer: 'proxy_interviewer',
    client_facing_technical_lead: 'proxy_interviewer',
    technical_interview_specialist: 'proxy_interviewer',
    developer: 'developer',
    full_stack_developer: 'developer',
    full_stack_engineer: 'developer',
    frontend_developer: 'developer',
    backend_developer: 'developer',
    software_engineer: 'developer',
    headhunter: 'headhunter',
    talent_sourcer: 'headhunter',
    social_marketer: 'social_marketer',
    social_media_marketer: 'social_marketer',
    outreach_marketer: 'social_marketer',
    reverse_recruiter: 'reverse_recruiter',
    normal_job_bidder: 'normal_job_bidder',
    job_bidder: 'normal_job_bidder',
    tailored_job_bidder: 'tailored_job_bidder',
    tailor_job_bidder: 'tailored_job_bidder'
  };
  return map[value] || value || '';
}

function roleToDisplayName_(role) {
  const map = {
    recruiter: 'Recruiter / Talent Coordinator',
    proxy_interviewer: 'Technical Interview Lead',
    developer: 'Developer / Engineer',
    headhunter: 'Headhunter / Talent Sourcer',
    social_marketer: 'Social Media / Outreach Marketer',
    reverse_recruiter: 'Reverse Recruiter',
    normal_job_bidder: 'General Job Bidder',
    tailored_job_bidder: 'Tailored Job Bidder'
  };
  return map[role] || role;
}

function roleToWorkspaceGroup_(role) {
  if (['proxy_interviewer', 'developer'].indexOf(role) >= 0) return 'proxy_workspace';
  if (['recruiter', 'headhunter', 'social_marketer'].indexOf(role) >= 0) return 'va_workspace';
  if (['reverse_recruiter', 'normal_job_bidder', 'tailored_job_bidder'].indexOf(role) >= 0) return 'job_bidder_workspace';
  return 'unassigned';
}

function validateSubmission_(applicationId, fullName, email, role) {
  const notes = [];
  if (!applicationId) notes.push('Missing application_id');
  if (!fullName) notes.push('Missing full_name');
  if (!email) notes.push('Missing email');
  if (!role) notes.push('Missing role');
  const valid = notes.length === 0;
  return {
    valid: valid,
    status: valid ? 'valid' : 'incomplete',
    notes: notes.join('; ')
  };
}

function collectAnswerMap_(fieldMap) {
  const out = {};
  Object.keys(fieldMap || {}).forEach(k => {
    const key = sanitizeKey_(k);
    if (
      key &&
      ['application_id', 'full_name', 'fullname', 'name', 'email', 'email_address', 'role', 'role_key', 'source'].indexOf(key) === -1
    ) {
      out[key] = fieldMap[k];
    }
  });
  return out;
}

function scoreSubmissionByRole_(role, answers, fieldMap, isValid) {
  if (!isValid) {
    return { total: 60, band: 'C', recommendation: 'hold', summary: 'Submission incomplete - manual review required' };
  }
  const textBlob = Object.keys(answers).map(k => String(answers[k] || '')).join(' ').trim();
  const lengthScore = Math.min(25, Math.floor(textBlob.length / 120));
  const linkBonus = hasAnyLink_(textBlob) ? 8 : 0;
  const englishSignal = textSignalScore_(textBlob, ['client', 'process', 'strategy', 'communicate', 'organize', 'screen', 'proposal', 'source']);
  const technicalSignal = textSignalScore_(textBlob, ['react', 'api', 'server', 'state', 'props', 'dashboard', 'performance', 'architecture', 'deployment']);
  const persuasionSignal = textSignalScore_(textBlob, ['outreach', 'response', 'candidate', 'position', 'trust', 'proposal', 'bid', 'close']);

  let total = 55 + lengthScore + linkBonus;
  switch (role) {
    case 'proxy_interviewer':
      total += technicalSignal + englishSignal;
      break;
    case 'developer':
      total += technicalSignal + Math.floor(englishSignal / 2);
      break;
    case 'recruiter':
    case 'headhunter':
      total += englishSignal + persuasionSignal;
      break;
    case 'social_marketer':
    case 'reverse_recruiter':
    case 'normal_job_bidder':
    case 'tailored_job_bidder':
      total += persuasionSignal + Math.floor(englishSignal / 2);
      break;
    default:
      total += englishSignal;
  }
  if (total > 100) total = 100;

  let band = 'C';
  let recommendation = 'hold';
  if (total >= 85) { band = 'A'; recommendation = 'shortlist'; }
  else if (total >= 75) { band = 'B'; recommendation = 'review'; }
  else if (total >= 65) { band = 'C'; recommendation = 'hold'; }
  else { band = 'D'; recommendation = 'reject'; }

  return {
    total: total,
    band: band,
    recommendation: recommendation,
    summary: 'Auto-scored from Tally answers for role=' + role
  };
}

function textSignalScore_(text, keywords) {
  const lower = String(text || '').toLowerCase();
  let score = 0;
  keywords.forEach(k => {
    if (lower.indexOf(k) >= 0) score += 2;
  });
  return Math.min(18, score);
}

function hasAnyLink_(text) {
  return /https?:\/\/|linkedin\.com|github\.com|portfolio/i.test(String(text || ''));
}

function detectTallyFormId_(payload) {
  const data = payload.data || {};
  return firstNonEmpty_(data.formId, data.form_id, payload.formId, payload.form_id, '');
}

function writeEvaluationRow_(data) {
  const sh = getSheet_(SHEET_EVALUATIONS);
  sh.appendRow([
    new Date(),
    data.tally_submission_id,
    data.tally_form_id,
    data.application_id,
    data.full_name,
    data.email,
    data.role,
    data.role_display,
    data.source,
    data.validation_status,
    data.validation_notes,
    data.score_total,
    data.score_band,
    data.recommendation,
    data.workspace_group,
    data.evaluation_summary,
    data.answers_json,
    data.field_map_json,
    data.raw_payload
  ]);
}

function upsertAtsTracker_(data) {
  const sh = getSheet_(SHEET_ATS);
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const appIdCol = headers.indexOf('application_id');
  let foundRow = -1;
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][appIdCol]) === String(data.application_id)) {
      foundRow = i + 1;
      break;
    }
  }

  const rowObj = [
    data.application_id,
    data.full_name,
    data.email,
    data.role,
    data.role_display,
    data.source,
    '',
    data.submitted_at,
    data.validation_status,
    data.validation_notes,
    data.score_total,
    data.score_band,
    data.recommendation,
    data.workspace_group,
    data.recommendation === 'shortlist' ? 'shortlisted' : (data.recommendation === 'review' ? 'review' : (data.recommendation === 'reject' ? 'rejected' : 'hold')),
    'pending',
    '',
    'no',
    'no',
    '',
    '',
    new Date()
  ];

  if (foundRow > 0) {
    sh.getRange(foundRow, 1, 1, rowObj.length).setValues([rowObj]);
  } else {
    sh.appendRow(rowObj);
  }
}

function processApprovedCandidates() {
  ensureWorkbookStructure_();
  const sh = getSheet_(SHEET_ATS);
  const values = sh.getDataRange().getValues();
  if (values.length < 2) return { scanned: 0, pushed: 0 };

  const headers = values[0];
  const idx = indexMap_(headers);
  let pushed = 0;

  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const finalReview = String(row[idx.final_review_status] || '').toLowerCase();
    const websiteNotified = String(row[idx.website_notified] || '').toLowerCase();
    if (finalReview === 'approved' && websiteNotified !== 'yes') {
      const workspaceGroup = String(row[idx.workspace_group] || 'general');
      const slackLink = getSetting_('slack_invite_' + workspaceGroup) || '';
      const payload = {
        application_id: row[idx.application_id],
        full_name: row[idx.full_name],
        email: row[idx.email],
        role: row[idx.role],
        role_display: row[idx.role_display],
        score_total: row[idx.score_total],
        score_band: row[idx.score_band],
        recommendation: row[idx.recommendation],
        invite_channel: workspaceGroup,
        slack_invite_url: slackLink
      };
      const res = postApprovedToWebsite_(payload);
      if (res.ok) {
        sh.getRange(i + 1, idx.website_notified + 1).setValue('yes');
        sh.getRange(i + 1, idx.slack_invite_sent + 1).setValue(res.invite_sent ? 'yes' : 'pending');
        sh.getRange(i + 1, idx.slack_invite_sent_at + 1).setValue(res.sent_at || new Date());
        sh.getRange(i + 1, idx.website_response + 1).setValue(JSON.stringify(res));
        sh.getRange(i + 1, idx.last_updated + 1).setValue(new Date());
        pushed++;
      } else {
        sh.getRange(i + 1, idx.website_response + 1).setValue(JSON.stringify(res));
      }
    }
  }

  return { scanned: values.length - 1, pushed: pushed };
}

function postApprovedToWebsite_(payload) {
  const url = getSetting_('website_approval_webhook_url');
  const secret = getSetting_('webhook_shared_secret');
  if (!url || !secret) return { ok: false, error: 'Missing website_approval_webhook_url or webhook_shared_secret' };

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    muteHttpExceptions: true,
    contentType: 'application/json',
    headers: {
      'x-axionvex-secret': secret,
      'x-axionvex-source': 'google-apps-script'
    },
    payload: JSON.stringify(payload)
  });

  const code = response.getResponseCode();
  const body = response.getContentText();
  try {
    const parsed = JSON.parse(body);
    parsed.ok = code >= 200 && code < 300 && parsed.ok !== false;
    return parsed;
  } catch (err) {
    return { ok: code >= 200 && code < 300, invite_sent: false, sent_at: '', raw: body };
  }
}

function ensureWorkbookStructure_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = [
    { name: SHEET_APPLICATIONS, headers: ['application_id','submitted_at','full_name','email','phone','role','role_display','country','timezone','linkedin','github','portfolio','source','manager_email_sent','candidate_email_sent','website_notes'] },
    { name: SHEET_EVALUATIONS, headers: ['logged_at','tally_submission_id','tally_form_id','application_id','full_name','email','role','role_display','source','validation_status','validation_notes','score_total','score_band','recommendation','workspace_group','evaluation_summary','answers_json','field_map_json','raw_payload_json'] },
    { name: SHEET_ATS, headers: ['application_id','full_name','email','role','role_display','source','application_date','evaluation_date','validation_status','validation_notes','score_total','score_band','recommendation','workspace_group','shortlist_status','final_review_status','final_review_notes','website_notified','slack_invite_sent','slack_invite_sent_at','website_response','last_updated'] },
    { name: SHEET_SETTINGS, headers: ['key','value','description'] },
    { name: SHEET_LOG, headers: ['logged_at','level','context','message'] }
  ];

  sheets.forEach(def => {
    let sh = ss.getSheetByName(def.name);
    if (!sh) sh = ss.insertSheet(def.name);
    if (sh.getLastRow() === 0) sh.appendRow(def.headers);
    if (def.name === SHEET_ATS) applyAtsSheetValidation_(sh);
    styleHeaderRow_(sh);
  });

  seedSettings_();
}

function styleHeaderRow_(sh) {
  const range = sh.getRange(1, 1, 1, sh.getLastColumn());
  range.setFontWeight('bold').setBackground('#16324F').setFontColor('#FFFFFF');
  sh.setFrozenRows(1);
  sh.autoResizeColumns(1, Math.min(sh.getLastColumn(), 12));
}

function applyAtsSheetValidation_(sh) {
  const statusRule = SpreadsheetApp.newDataValidation().requireValueInList(['pending','approved','rejected'], true).setAllowInvalid(false).build();
  const shortlistRule = SpreadsheetApp.newDataValidation().requireValueInList(['shortlisted','review','hold','rejected'], true).setAllowInvalid(false).build();
  sh.getRange('O2:O1000').setDataValidation(shortlistRule);
  sh.getRange('P2:P1000').setDataValidation(statusRule);
}

function seedSettings_() {
  const sh = getSheet_(SHEET_SETTINGS);
  const existing = sh.getDataRange().getValues();
  if (existing.length > 1) return;

  const rows = [
    ['manager_email','manager@axionvextech.com','Manager notification address'],
    ['website_approval_webhook_url','https://your-domain.com/api/hiring/approved-candidate','Website endpoint that sends Slack invite / onboarding email'],
    ['webhook_shared_secret','CHANGE_ME','Must match website secret header'],
    ['tally_recruiter_url','https://tally.so/r/GxJe7O','Recruiter form URL'],
    ['tally_proxy_interviewer_url','https://tally.so/r/ODJQVM','Proxy interviewer form URL'],
    ['tally_developer_url','https://tally.so/r/VLMpx6','Developer form URL'],
    ['tally_headhunter_url','https://tally.so/r/PdXRPx','Headhunter form URL'],
    ['tally_social_marketer_url','https://tally.so/r/EkJqa2','Social marketer form URL'],
    ['tally_reverse_recruiter_url','https://tally.so/r/44oaG5','Reverse recruiter form URL'],
    ['tally_normal_job_bidder_url','https://tally.so/r/ja7eE1','Normal job bidder form URL'],
    ['tally_tailored_job_bidder_url','https://tally.so/r/2EJjRM','Tailored job bidder form URL'],
    ['slack_invite_proxy_workspace','','Slack invite URL for proxy interviewers & developers'],
    ['slack_invite_va_workspace','','Slack invite URL for recruiters, headhunters & marketers'],
    ['slack_invite_job_bidder_workspace','','Slack invite URL for job bidders']
  ];
  sh.getRange(2,1,rows.length,rows[0].length).setValues(rows);
}

function getSetting_(key) {
  const sh = getSheet_(SHEET_SETTINGS);
  const values = sh.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]) === String(key)) return values[i][1];
  }
  return '';
}

function getSheet_(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  return sh;
}

function indexMap_(headers) {
  const map = {};
  headers.forEach((h, i) => map[sanitizeKey_(h)] = i);
  return map;
}

function firstNonEmpty_() {
  for (let i = 0; i < arguments.length; i++) {
    const v = arguments[i];
    if (v !== null && v !== undefined && String(v).trim() !== '') return String(v).trim();
  }
  return '';
}

function createApplicationId_() {
  const d = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');
  return 'AXV-' + d;
}

function logEvent_(level, context, message) {
  const sh = getSheet_(SHEET_LOG);
  sh.appendRow([new Date(), level, context, message]);
}

function notifyManagerError_(message) {
  const managerEmail = getSetting_('manager_email') || 'manager@axionvextech.com';
  GmailApp.sendEmail(managerEmail, '[Axionvex] Apps Script error', message);
}

function buildManagerEvaluationEmail_(data) {
  return [
    'A new Tally evaluation has been received.',
    '',
    'Candidate: ' + data.full_name,
    'Email: ' + data.email,
    'Role: ' + data.role + ' (' + data.role_display + ')',
    'Application ID: ' + data.application_id,
    'Validation: ' + data.validation_status,
    'Validation Notes: ' + data.validation_notes,
    'Score: ' + data.score_total,
    'Band: ' + data.score_band,
    'Recommendation: ' + data.recommendation,
    'Workspace Group: ' + data.workspace_group,
    '',
    'Open the Google Sheet to review and set final_review_status when ready.'
  ].join('\n');
}