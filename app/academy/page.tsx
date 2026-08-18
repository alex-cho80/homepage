import type { Metadata } from "next";
import DetailPage from "@/components/detail/DetailPage";
import { academyContent } from "@/lib/detail-pages/academy";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "지식ㆍ실무ㆍ사람을 연결해, 자격증이 아니라 실전에서 통하는 인프라/보안 역량을 만듭니다.",
};

export default function AcademyPage() {
  return <DetailPage content={academyContent} />;
}
