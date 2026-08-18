import type { Metadata } from "next";
import DetailPage from "@/components/detail/DetailPage";
import { advisoryContent } from "@/lib/detail-pages/advisory";

export const metadata: Metadata = {
  title: "Advisory",
  description:
    "기업 문제ㆍ기술ㆍ솔루션을 연결해, 전담 인프라·보안 책임자 없이도 안전하게 성장할 수 있게 합니다.",
};

export default function AdvisoryPage() {
  return <DetailPage content={advisoryContent} />;
}
