import type { Metadata } from "next";
import DetailPage from "@/components/detail/DetailPage";
import { academyContent } from "@/lib/detail-pages/academy";

export const metadata: Metadata = {
  title: "IT 인프라·보안 실무교육",
  description:
    "지식ㆍ실무ㆍ사람을 연결해, 기초 개념부터 실제 운영·장애 대응까지 실습으로 배우는 인프라/보안 역량을 만듭니다.",
};

export default function AcademyPage() {
  return <DetailPage content={academyContent} />;
}
