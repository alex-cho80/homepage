import type { DetailPageContent } from "./types";

export const advisoryContent: DetailPageContent = {
  sections: [
    {
      type: "hero",
      id: "hero",
      label: "인프라/보안 컨설팅",
      title: "ConnectX Advisory",
      positionBadge: "SMB Infra & Security Transformation Partner",
      subtitle:
        "기업 문제ㆍ기술ㆍ솔루션을 연결해, 전담 인프라·보안 책임자 없이도 안전하게 성장할 수 있게 합니다.",
      ctas: [
        { label: "무료 진단 신청", href: "#cta" },
        { label: "서비스 영역 보기", href: "#offerings" },
      ],
    },
    {
      type: "positionDetail",
      id: "position",
      heading: "왜 '외부 기술기획실'인가",
      paragraphs: [
        "많은 중소기업은 인프라와 보안을 각각 채용하거나, 아예 겸임으로 떠안습니다. 그 결과 문제가 생기기 전까지는 아무도 전체 그림을 보지 못합니다.",
        "Advisory는 그 자리를 대신 채웁니다. 전담 인프라·보안 책임자를 채용하기 어려운 기업을 위한 외부 전문팀으로, 인프라와 보안을 따로 보지 않고 외부 기술기획실처럼 함께 봅니다.",
      ],
    },
    {
      type: "problem",
      id: "problem",
      heading: "이런 고민, 익숙하신가요",
      items: [
        "IT 인프라 담당자가 한 명뿐이거나, 다른 업무와 겸임하고 있다.",
        "보안 사고가 나야만 보안을 생각하게 된다 — 사전 점검 체계가 없다.",
        "클라우드/솔루션 도입을 검토 중인데, 무엇이 우리 규모에 맞는지 판단할 사람이 없다.",
        "인프라 이슈와 보안 이슈가 따로따로 대응되어, 전체 리스크가 안 보인다.",
      ],
    },
    {
      type: "connectAxes",
      id: "connect",
      heading: "기업 문제ㆍ기술ㆍ솔루션을 연결합니다",
      axes: [
        {
          label: "기업 문제 연결",
          body: "예산, 인력, 업종 특성까지 고려해 우리 회사가 실제로 겪는 문제를 먼저 정확히 정의합니다.",
        },
        {
          label: "기술 연결",
          body: "정의된 문제에 맞는 인프라/보안 기술과 아키텍처 판단을 제공합니다. 유행이 아니라 규모에 맞는 기술.",
        },
        {
          label: "솔루션 연결",
          body: "판단에서 끝나지 않고, 실제로 도입 가능한 솔루션ㆍ벤더ㆍ운영 체계로 연결해 실행까지 이어갑니다.",
        },
      ],
    },
    {
      type: "process",
      id: "process",
      heading: "진단 → 큐레이션/설계 → 실행 → 지속관리",
      steps: [
        { label: "진단", body: "현재 인프라/보안 현황을 점검하고 리스크를 진단합니다." },
        {
          label: "큐레이션/설계",
          body: "기업 규모와 예산에 맞는 개선 우선순위와 아키텍처를 설계합니다.",
        },
        { label: "실행", body: "구축/이행을 직접 지원하거나, 내부 인력과 함께 실행합니다." },
        {
          label: "지속관리",
          body: "1회성 컨설팅으로 끝내지 않고, 외부 기술기획실처럼 지속적으로 모니터링ㆍ리테이너 형태로 함께합니다.",
        },
      ],
    },
    {
      type: "offerings",
      id: "offerings",
      heading: "무엇을 함께 보나요",
      items: [
        { title: "인프라 아키텍처 진단/설계", body: "현재 인프라 구조를 진단하고 개선 아키텍처를 설계합니다." },
        { title: "보안 체계 수립", body: "정책과 프로세스 관점에서 기업 규모에 맞는 보안 체계를 수립합니다." },
        { title: "컴플라이언스 대응 지원", body: "관련 규정/인증 대응에 필요한 준비를 지원합니다." },
        { title: "클라우드 전환 자문", body: "클라우드 전환 시점과 방식에 대한 자문을 제공합니다." },
        { title: "솔루션/벤더 선정 자문", body: "기업 규모와 예산에 맞는 솔루션ㆍ벤더 선정을 돕습니다." },
        { title: "상시 자문 (리테이너)", body: "일회성이 아닌 지속적인 자문 관계로 함께합니다." },
      ],
      note: "위 서비스 구성은 예시이며, 실제 상품/패키지는 진단 결과에 따라 상담을 통해 안내드립니다.",
    },
    {
      type: "trust",
      id: "trust",
      heading: "왜 Advisory인가",
      points: ["인프라와 보안을 함께 보는 팀", "기업 규모에 맞는 현실적인 제안", "1회성이 아닌 지속 관리"],
    },
    {
      type: "faq",
      id: "faq",
      heading: "자주 묻는 질문",
      items: [
        {
          question: "정규 인력 채용 대신 Advisory를 쓰면 무엇이 다른가요?",
          answer:
            "채용·교육에 드는 시간과 비용 없이, 인프라와 보안을 함께 보는 외부 전문팀을 바로 활용하실 수 있습니다.",
        },
        {
          question: "우리 회사 규모가 작은데도 대응이 되나요?",
          answer:
            "Advisory는 전담 책임자를 두기 어려운 SMB를 위한 서비스입니다. 회사 규모와 예산에 맞는 범위로 진단부터 시작합니다.",
        },
        {
          question: "일회성 컨설팅인가요, 지속적인 관리인가요?",
          answer:
            "진단과 설계 이후에도 리테이너 형태의 지속 관리를 제공합니다. 필요에 따라 일회성 진단만 받으실 수도 있습니다.",
        },
        {
          question: "인프라와 보안을 각각 따로 의뢰할 수도 있나요?",
          answer: "가능합니다. 다만 Advisory는 두 영역을 함께 보는 것을 권장드리며, 상담 시 필요 범위를 함께 정하실 수 있습니다.",
        },
      ],
    },
    {
      type: "cta",
      id: "cta",
      heading: "지금 무료로 진단받아보세요",
      body: "전담 책임자가 없어도 괜찮습니다. 지금 상태를 먼저 함께 점검해드립니다.",
      primaryLabel: "무료 진단 신청",
      primaryHref: "#",
      secondaryLabel: "담당자와 상담 예약",
      secondaryHref: "#",
    },
  ],
};
