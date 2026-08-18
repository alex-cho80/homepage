import ComingSoon from "@/components/ComingSoon";
import { brandUnits } from "@/lib/brand-units";

export default function AcademyPage() {
  const unit = brandUnits.find((u) => u.slug === "academy")!;
  return <ComingSoon unit={unit} />;
}
