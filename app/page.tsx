import type { Metadata } from "next";
import HeroSection from "@/components/landing/HeroSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BentoSection from "@/components/landing/BentoSection";
import VerticalHighlight from "@/components/landing/VerticalHighlight";
import LoopSection from "@/components/landing/LoopSection";
import TrustSection from "@/components/landing/TrustSection";
import FaqSection from "@/components/landing/FaqSection";

export const metadata: Metadata = {
  title: "ConnectX | IT 실무교육 · 인프라 및 보안 자문 · 건강기능식품",
  description:
    "IT 실무교육(Academy), IT 인프라·보안 자문(Advisory), 건강기능식품 셀렉션(Wellness)을 제공하는 ConnectX입니다.",
};

export default function Home() {
  return (
    <main className="bg-cx-bg">
      <HeroSection />
      <BentoSection />
      <VerticalHighlight
        badge="CONNECTX ACADEMY"
        title="실무에서 통하는 인프라/보안 역량"
        description="대규모 트래픽 설계와 침해 사고 대응은 이론만으로 익히기 어렵습니다. ConnectX Academy는 실전 인프라 구축과 침해 실습 시나리오를 바탕으로 현업 경험을 가진 강사진이 직접 설계하고 밀착 교육합니다."
        chips={["현직 실무자 강의", "실습 중심 커리큘럼", "수료 후 네트워크"]}
        image="/images/landing/academy.webp"
        imageAlt="서버랙 앞에서 실무 교육을 받는 모습"
        bg="bg-alt"
      />
      <VerticalHighlight
        badge="CONNECTX ADVISORY"
        title="우리 회사에 맞는 IT 인프라와 보안, 함께 설계합니다"
        description="전담 IT·보안 책임자를 채용하기 부담스러운 중소기업과 스타트업을 위해, ConnectX가 인프라 아키텍처 수립과 보안 체계 대응을 정기 자문 파트너십으로 함께합니다."
        chips={["인프라+보안 통합 진단", "기업 규모 맞춤 제안", "정기 자문 리테이너"]}
        image="/images/landing/advisory.webp"
        imageAlt="인프라 아키텍처를 브리핑하는 모습"
        reverse
        bg="bg"
      />
      <VerticalHighlight
        badge="CONNECTX WELLNESS"
        title="선택 기준을 안내하는 건강기능식품"
        description="영양제, 어떤 기준으로 선택하시나요? ConnectX는 브랜드·제품 정보·표시 성분을 정리해 비교할 수 있도록 돕고, 필요와 상황에 맞는 카테고리를 안내합니다."
        chips={["표시 성분·정보 비교", "카테고리별 큐레이션", "구매 전 상담 지원"]}
        image="/images/landing/wellness.webp"
        imageAlt="영양제 상담을 받는 모습"
        bg="bg-alt"
      />
      <LoopSection />
      <TrustSection />
      <ProcessSection />
      <FaqSection />
    </main>
  );
}
