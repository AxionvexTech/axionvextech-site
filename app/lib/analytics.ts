type AnalyticsEvent =
  | "assessment_cta_clicked"
  | "assessment_form_started"
  | "assessment_form_submitted"
  | "contact_form_submitted"
  | "case_study_opened"
  | "solution_page_viewed"
  | "ai_standards_viewed"
  | "job_viewed"
  | "job_application_clicked"
  | "talent_network_submitted"
  | "article_cta_clicked";

/** Privacy-respecting stub until analytics provider is verified. */
export function trackEvent(event: AnalyticsEvent, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", event, payload ?? {});
  }
  // Provider wiring deferred pending privacy review (CONTENT_VERIFICATION.md).
}
