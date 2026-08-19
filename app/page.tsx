import HeroSection from "@/components/landing/HeroSection";
import ProcessSection from "@/components/landing/ProcessSection";
import BentoSection from "@/components/landing/BentoSection";
import VerticalHighlight from "@/components/landing/VerticalHighlight";
import TrustSection from "@/components/landing/TrustSection";
import FaqSection from "@/components/landing/FaqSection";

export default function Home() {
  return (
    <main className="bg-cx-bg">
      <HeroSection />
      <ProcessSection />
      <BentoSection />
      <VerticalHighlight
        badge="CONNECTX ACADEMY"
        title="실무에서 통하는 인프라/보안 역량"
        description="대규모 트래픽 설계와 침해 사고 대응은 책에서 배울 수 없습니다. ConnectX 아카데미는 글로벌 수준의 실천 인프라 구축 및 가상 침해 실습 시나리오를 바탕으로 현업 탑클래스 리더들이 직접 설계하고 밀착 교육합니다."
        chips={["현직 실무자 강의", "실습 중심 커리큘럼", "수료 후 독점 네트워크"]}
        ctaLabel="커리큘럼 살펴보기"
        ctaHref="/academy"
        image="/images/landing/academy.webp"
        imageAlt="서버랙 앞에서 실무 교육을 받는 모습"
        bg="bg-alt"
      />
      <VerticalHighlight
        badge="CONNECTX ADVISORY"
        title="당신의 외부 기술기획실"
        description="중소기업이나 스타트업에게 최고 수준의 CTO, CISO를 풀타임으로 고용하는 것은 불가능에 가깝습니다. ConnectX가 인프라 아키텍처 수립과 보안 거버넌스 규정 대응을 합리적 리테이너 파트너십을 통해 밀착 대행합니다."
        chips={["인프라+보안 통합 진단", "기업 규모 맞춤 제안", "상시 자문 리테이너"]}
        ctaLabel="무료 진단 신청"
        ctaHref="/advisory"
        image="/images/landing/advisory.webp"
        imageAlt="인프라 아키텍처를 브리핑하는 모습"
        reverse
        bg="bg"
      />
      <VerticalHighlight
        badge="CONNECTX WELLNESS"
        title="데이터 기반 맞춤 영양제 큐레이션"
        description="매일 챙겨먹는 영양제, 맞춤 가이드라인 없이 과다복용하고 계시진 않나요? ConnectX는 식생활 자가진단 기록과 바이오 데이터 결합 모델링을 통해 오직 나에게 필요한 진짜 처방 패키지를 추천하고 매달 갱신 모니터링을 진행합니다."
        chips={["의학/영양학 전문가 상담", "데이터 기반 추천 알고리즘", "주기적인 웰니스 관리"]}
        ctaLabel="맞춤 추천 받기"
        ctaHref="/wellness"
        image="/images/landing/wellness.webp"
        imageAlt="영양제 상담을 받는 모습"
        bg="bg-alt"
      />
      <TrustSection />
      <FaqSection />
    </main>
  );
}
