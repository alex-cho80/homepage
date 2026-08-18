import ComingSoon from "@/components/ComingSoon";
import { brandUnits } from "@/lib/brand-units";

export default function AdvisoryPage() {
  const unit = brandUnits.find((u) => u.slug === "advisory")!;
  return <ComingSoon unit={unit} />;
}
