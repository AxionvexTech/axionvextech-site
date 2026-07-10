import { proofLabels, type ProofType } from "@/content/case-studies";

export function ProofLabel({
  type,
  onDark = false,
}: {
  type: ProofType;
  onDark?: boolean;
}) {
  return (
    <span className={`proof-label ${onDark ? "proof-label-on-dark" : ""}`}>
      {proofLabels[type]}
    </span>
  );
}
