import type { Metadata } from "next";
import DetailPage from "@/components/detail/DetailPage";
import { wellnessContent } from "@/lib/detail-pages/wellness";

export const metadata: Metadata = {
  title: "Wellness",
  description: "건강ㆍ전문가ㆍ데이터를 연결해, 나에게 맞는 영양제를 정확하게 찾아드립니다.",
};

export default function WellnessPage() {
  return <DetailPage content={wellnessContent} />;
}
