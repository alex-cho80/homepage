import type { Metadata } from "next";
import DetailPage from "@/components/detail/DetailPage";
import { wellnessContent } from "@/lib/detail-pages/wellness";

export const metadata: Metadata = {
  title: "건강기능식품 셀렉션",
  description: "건강ㆍ전문가ㆍ데이터를 연결해, 제품 정보를 비교하고 선택할 수 있도록 돕습니다.",
};

export default function WellnessPage() {
  return <DetailPage content={wellnessContent} />;
}
