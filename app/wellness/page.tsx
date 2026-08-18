import ComingSoon from "@/components/ComingSoon";
import { brandUnits } from "@/lib/brand-units";

export default function WellnessPage() {
  const unit = brandUnits.find((u) => u.slug === "wellness")!;
  return <ComingSoon unit={unit} />;
}
