import PolicyPage from "@/app/components/content/PolicyPage";
import { privacyPolicy } from "@/content/legal";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  path: privacyPolicy.path,
});

export default function PrivacyRoute() {
  return <PolicyPage doc={privacyPolicy} />;
}
