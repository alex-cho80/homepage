import type { DetailPageContent } from "./types";

export const wellnessContent: DetailPageContent = {
  sections: [
    {
      type: "hero",
      id: "hero",
      label: "건강기능식품 위탁판매",
      title: "ConnectX Wellness",
      subtitle: "건강ㆍ전문가ㆍ데이터를 연결해, 나에게 맞는 영양제를 정확하게 찾아드립니다.",
      ctas: [
        { label: "내 맞춤 추천 받기", href: "#cta" },
        { label: "제품 카테고리 보기", href: "#offerings" },
      ],
    },
    {
      type: "problem",
      id: "problem",
      heading: "영양제, 아무거나 드시고 계신가요",
      items: [
        "광고에서 본 제품과 내 몸에 필요한 제품은 다를 수 있습니다.",
        "부모님 영양제를 사드리고 싶은데, 무엇부터 챙겨야 할지 모르겠습니다.",
        "매일 바쁜 직장인은 피로, 눈 건강, 면역 중 뭐가 먼저인지조차 따져볼 시간이 없습니다.",
      ],
    },
    {
      type: "connectAxes",
      id: "connect",
      heading: "건강ㆍ전문가ㆍ데이터를 연결합니다",
      axes: [
        {
          label: "건강 연결",
          body: "지금의 몸 상태와 생활 습관에서 출발합니다. 유행하는 성분이 아니라 내게 필요한 것부터.",
        },
        { label: "전문가 연결", body: "전문가가 검수한 제품과 정보만 안내합니다. 광고가 아니라 근거." },
        {
          label: "데이터 연결",
          body: "한 번의 추천으로 끝나지 않습니다. 기록을 바탕으로 계속 맞춰가며 필요할 때 다시 챙깁니다.",
        },
      ],
    },
    {
      type: "audienceSplit",
      id: "audience",
      heading: "이런 분들께 필요합니다",
      columns: [
        {
          title: "부모님을 위해",
          body: "직접 챙겨드리기 어려운 부모님 건강, 무엇을 먼저 챙겨야 할지 몰라 미루고 계셨다면. 나이대와 상태에 맞는 제품을 대신 골라드립니다.",
        },
        {
          title: "직장인을 위해",
          body: "피로, 스트레스, 면역 — 다 챙기고 싶지만 시간이 없는 직장인을 위해. 지금 가장 필요한 것부터 순서대로 안내합니다.",
        },
      ],
    },
    {
      type: "process",
      id: "process",
      heading: "진단 → 큐레이션/설계 → 실행 → 지속관리",
      steps: [
        { label: "진단", body: "간단한 체크리스트로 지금 몸 상태와 생활 습관을 확인합니다." },
        { label: "큐레이션/설계", body: "전문가와 데이터를 바탕으로 맞춤 제품 조합을 구성합니다." },
        { label: "실행", body: "구성된 제품을 편하게 받아보실 수 있도록 연결합니다." },
        { label: "지속관리", body: "섭취 기록과 변화에 맞춰 다음 추천을 계속 업데이트합니다." },
      ],
    },
    {
      type: "offerings",
      id: "offerings",
      heading: "카테고리별로 살펴보기",
      items: [
        { title: "면역", body: "변화하는 계절과 환경 속에서 몸의 방어력을 지켜주는 제품군입니다." },
        { title: "피로회복/활력", body: "일상의 피로를 관리하고 활력을 더하는 제품군입니다." },
        { title: "눈 건강", body: "화면 사용이 많은 일상에서 눈 건강을 챙기는 제품군입니다." },
        { title: "장 건강", body: "장 건강 균형을 돕는 제품군입니다." },
        { title: "뼈/관절", body: "나이가 들수록 신경 쓰이는 뼈와 관절 건강을 위한 제품군입니다." },
        { title: "수면/스트레스", body: "편안한 휴식과 스트레스 관리를 돕는 제품군입니다." },
      ],
      note: "위 카테고리는 예시이며, 실제 취급 제품/구성은 맞춤 추천 시 안내드립니다.",
    },
    {
      type: "trust",
      id: "trust",
      heading: "믿고 선택하는 이유",
      points: ["전문가가 검수한 제품만 소개합니다", "광고비가 아니라 필요에 따라 추천합니다", "먹는 것을 계속 기록하고 관리합니다"],
    },
    {
      type: "faq",
      id: "faq",
      heading: "자주 묻는 질문",
      items: [
        {
          question: "직접 제조하는 제품인가요?",
          answer:
            "ConnectX Wellness는 직접 제조하지 않고, 전문가가 검수한 여러 제품 중 나에게 맞는 것을 골라드리는 위탁판매 방식으로 운영됩니다.",
        },
        {
          question: "부모님 것도 대신 신청할 수 있나요?",
          answer: "네, 가능합니다. 부모님의 상태를 대신 체크하시고 맞춤 추천을 받아보실 수 있습니다.",
        },
        {
          question: "정기 구독도 가능한가요?",
          answer: "정기적으로 필요한 제품은 구독 형태로 안내받으실 수 있습니다. 자세한 내용은 맞춤 추천 시 함께 안내해드립니다.",
        },
        {
          question: "추천이 마음에 안 들면 바꿀 수 있나요?",
          answer: "네, 기록과 피드백을 바탕으로 추천을 다시 조정해드립니다.",
        },
      ],
    },
    {
      type: "cta",
      id: "cta",
      heading: "지금 내 맞춤 추천을 받아보세요",
      body: "1분 체크리스트로 시작합니다. 나에게, 혹은 부모님께 필요한 것부터 안내해드립니다.",
      primaryLabel: "맞춤 추천 시작하기",
      primaryHref: "#",
      secondaryLabel: "뉴스레터/소식 구독",
      secondaryHref: "#",
    },
  ],
};
