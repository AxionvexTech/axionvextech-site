import PolicyPage from "@/app/components/content/PolicyPage";
import { termsOfUse } from "@/content/legal";
import { createMetadata } from "@/app/lib/seo";

export const metadata = createMetadata({
  title: termsOfUse.title,
  description: termsOfUse.description,
  path: termsOfUse.path,
});

export default function TermsRoute() {
  return <PolicyPage doc={termsOfUse} />;
}
