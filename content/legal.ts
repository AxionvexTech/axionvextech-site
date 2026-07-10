import { siteConfig } from "./site";

export type PolicySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PolicyDoc = {
  title: string;
  path: string;
  description: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: string;
  sections: PolicySection[];
  contactNote: string;
};

/**
 * Edit these documents directly. Pages render from this file.
 * Replace names, processors, retention periods, and jurisdiction when counsel reviews.
 */
export const privacyPolicy: PolicyDoc = {
  title: "Privacy Policy",
  path: "/privacy",
  description: "How Axionvex Tech collects, uses, and protects personal information.",
  effectiveDate: siteConfig.legal.privacyEffective,
  lastUpdated: siteConfig.legal.privacyEffective,
  intro:
    "This Privacy Policy explains how Axionvex Tech collects, uses, shares, and protects personal information when you visit our website, contact us, request an assessment, or otherwise interact with our marketing and recruiting surfaces.",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `${siteConfig.legal.entity} (“Axionvex Tech,” “we,” “us”) operates ${siteConfig.url} and related public pages.`,
        `For privacy questions, email ${siteConfig.legal.privacyEmail}.`,
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "We collect information you submit and limited technical data needed to run the site.",
      ],
      bullets: [
        "Contact and inquiry details such as name, work email, company, role, website, project context, and budget range",
        "Files or notes you choose to upload with an inquiry, when that feature is enabled",
        "Career or talent-network details such as resume information, links, skills, availability, and work authorization notes",
        "Technical data such as IP address, browser type, device type, approximate location derived from IP, pages viewed, and referral source",
        "Communication records when you email us or reply to our messages",
      ],
    },
    {
      heading: "How we use information",
      paragraphs: ["We use personal information to:"],
      bullets: [
        "Respond to inquiries and qualify potential engagements",
        "Schedule discovery conversations and send related follow-up",
        "Operate, secure, and improve the website",
        "Review applications and talent-network submissions",
        "Send operational messages related to a request you made",
        "Comply with legal obligations and protect against abuse or fraud",
      ],
    },
    {
      heading: "Legal bases",
      paragraphs: [
        "Where applicable law requires a legal basis, we rely on one or more of the following: performance of a request or contract, legitimate interests in operating a B2B services business, consent where we ask for it, and legal compliance.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "We may use essential cookies required for site operation and limited analytics to understand aggregate traffic and conversion events.",
        "We do not sell personal information. If we add a third-party analytics or advertising tool, we will update this policy and, where required, request consent.",
      ],
    },
    {
      heading: "How we share information",
      paragraphs: [
        "We share information only with service providers that help us operate the business, and only as needed for that purpose.",
      ],
      bullets: [
        "Email and form delivery providers",
        "Hosting, security, and infrastructure providers",
        "Applicant tracking or spreadsheet tools used in recruiting operations",
        "Professional advisors such as legal or accounting counsel when required",
        "Authorities when required by law or to protect rights and safety",
      ],
    },
    {
      heading: "International transfers",
      paragraphs: [
        "We operate as a remote-first team and may process information in the United States and other countries where our providers or collaborators work. Where required, we use appropriate transfer safeguards offered by our processors.",
      ],
    },
    {
      heading: "Retention",
      paragraphs: [
        "We keep inquiry and project-related records for as long as needed to manage the relationship, follow up on active opportunities, meet legal requirements, and resolve disputes.",
        "Applicant records are retained for recruiting and future role consideration unless you ask us to delete them and no legal retention duty applies.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We use administrative, technical, and organizational measures appropriate to the sensitivity of the information we handle. No method of transmission or storage is fully secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "Your choices and rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, or restrict certain personal information, or to object to certain processing. To make a request, email the privacy contact below. We may need to verify your identity before acting on the request.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "Our website and services are directed to businesses and professionals. We do not knowingly collect personal information from children under 16.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may update this policy from time to time. The effective date above will change when we publish a revision. Continued use of the site after an update means the revised policy applies to later collection and use.",
      ],
    },
  ],
  contactNote: `Privacy contact: ${siteConfig.legal.privacyEmail}`,
};

export const termsOfUse: PolicyDoc = {
  title: "Terms of Use",
  path: "/terms",
  description: "Terms governing use of the Axionvex Tech website.",
  effectiveDate: siteConfig.legal.termsEffective,
  lastUpdated: siteConfig.legal.termsEffective,
  intro:
    "These Terms of Use govern your access to and use of the Axionvex Tech website and public content. By using the site, you agree to these terms.",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        `This website is operated by ${siteConfig.legal.entity}. Business inquiries: ${siteConfig.primaryEmail}.`,
      ],
    },
    {
      heading: "Informational purpose",
      paragraphs: [
        "Website content is provided for general business information about our services, methods, and public materials. It is not legal, financial, security, or technical advice for your specific situation.",
        "Case studies, diagrams, and examples describe approaches and outcomes at a high level. They do not guarantee similar results for every engagement.",
      ],
    },
    {
      heading: "No automatic engagement",
      paragraphs: [
        "Submitting a form, booking a conversation, or browsing the site does not create a client relationship, statement of work, or employment relationship.",
        "Paid work begins only under a separate written agreement signed by authorized parties.",
      ],
    },
    {
      heading: "Acceptable use",
      paragraphs: [
        "You agree not to misuse the site. Prohibited conduct includes attempting to disrupt the site, scraping in a way that harms performance, submitting malicious files, impersonating another person or company, or using the site for unlawful purposes.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "Unless otherwise noted, the site’s text, branding, layout, diagrams, and other materials are owned by Axionvex Tech or used under license. You may view and share links for ordinary business evaluation. You may not copy, republish, or commercially reuse site materials without prior written permission.",
      ],
    },
    {
      heading: "Third-party links and tools",
      paragraphs: [
        "The site may link to third-party websites or tools such as calendaring or form providers. We are not responsible for third-party content, policies, or availability.",
      ],
    },
    {
      heading: "Disclaimer of warranties",
      paragraphs: [
        "The site is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, Axionvex Tech and its people will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the site or reliance on public content.",
        "If liability cannot be excluded, our aggregate liability related to site use is limited to one hundred U.S. dollars (USD $100).",
      ],
    },
    {
      heading: "Indemnity",
      paragraphs: [
        "You agree to defend and indemnify Axionvex Tech against claims arising from your misuse of the site or your violation of these terms, to the extent permitted by law.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        `These terms are governed by the laws of ${siteConfig.legal.jurisdiction}, without regard to conflict-of-law rules. Courts in that jurisdiction will have exclusive venue for disputes arising from these terms or the site, except where applicable law requires otherwise.`,
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may update these terms by posting a revised version on this page. The effective date will change when we do. Continued use after an update constitutes acceptance of the revised terms.",
      ],
    },
  ],
  contactNote: `Questions about these terms: ${siteConfig.primaryEmail}`,
};

export const applicantPrivacyPolicy: PolicyDoc = {
  title: "Applicant Privacy Notice",
  path: "/applicant-privacy",
  description:
    "How Axionvex Tech handles candidate and talent-network information.",
  effectiveDate: siteConfig.legal.privacyEffective,
  lastUpdated: siteConfig.legal.privacyEffective,
  intro:
    "This notice explains how Axionvex Tech handles personal information submitted by job applicants, contractors, and talent-network candidates. It supplements our general Privacy Policy.",
  sections: [
    {
      heading: "Scope",
      paragraphs: [
        "This notice covers applications, talent-network profiles, evaluations, interview notes, and related recruiting communications.",
        "It does not cover employee HR records after hire, which may be handled under separate internal policies.",
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: ["Depending on the role and process, we may collect:"],
      bullets: [
        "Identity and contact details",
        "Resume, portfolio, GitHub, LinkedIn, or work samples",
        "Role preferences, skills, experience, and availability",
        "Compensation expectations when you choose to share them",
        "Work authorization or contractor eligibility information you provide",
        "Interview notes, evaluation results, and communication history",
        "References you authorize us to contact",
      ],
    },
    {
      heading: "What we do not ask for at intake",
      paragraphs: [
        "We do not require application fees. We do not ask applicants to rent or transfer online accounts, share personal platform credentials, impersonate another person, purchase equipment from a named individual, or provide hidden remote access to a personal device.",
        `Report suspicious recruiting contact to ${siteConfig.legal.applicantSafetyEmail}.`,
      ],
    },
    {
      heading: "How we use applicant information",
      paragraphs: ["We use applicant information to:"],
      bullets: [
        "Assess fit for open or future roles",
        "Communicate about process steps and outcomes",
        "Run practical evaluations relevant to the role",
        "Maintain a talent network for later consideration when you opt in",
        "Improve recruiting operations and protect against fraud or abuse",
        "Meet legal and recordkeeping obligations",
      ],
    },
    {
      heading: "Sharing",
      paragraphs: [
        "Applicant information is shared only with people involved in hiring decisions and with processors that support recruiting operations, such as email, form, storage, or scheduling tools.",
        "We do not sell applicant information.",
      ],
    },
    {
      heading: "Retention",
      paragraphs: [
        "We retain applicant records for the recruiting cycle and for a reasonable period afterward so we can consider you for related roles, unless you request deletion earlier and no legal duty requires retention.",
        "If you join the talent network, we keep your profile until you ask to be removed or the profile becomes inactive under our retention practice.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        `You may request access, correction, or deletion of applicant information by emailing ${siteConfig.legal.privacyEmail}. You may also ask to be removed from the talent network at any time.`,
        "We may retain limited information as needed to document the request and comply with law.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We limit access to applicant data to people with a recruiting need and use provider controls appropriate for professional recruiting records.",
      ],
    },
  ],
  contactNote: `Applicant privacy: ${siteConfig.legal.privacyEmail}. Applicant safety: ${siteConfig.legal.applicantSafetyEmail}.`,
};
