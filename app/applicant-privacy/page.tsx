import PolicyPage from "@/app/components/content/PolicyPage";
import { applicantPrivacyPolicy } from "@/content/legal";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: applicantPrivacyPolicy.title,
  description: applicantPrivacyPolicy.description,
  path: applicantPrivacyPolicy.path,
});

export default function ApplicantPrivacyRoute() {
  return <PolicyPage doc={applicantPrivacyPolicy} />;
}
