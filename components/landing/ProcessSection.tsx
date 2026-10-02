import SectionBadge from "./SectionBadge";

const steps = [
  {
    number: "01",
    title: "진단",
    description: "인프라 보안 상태부터 개인의 생활습관과 건강 상태까지 꼼꼼하게 확인합니다.",
    hasArrow: true,
  },
  {
    number: "02",
    title: "큐레이션/설계",
    description: "현황에 맞는 IT 아키텍처와 맞춤형 건강기능식품 구성을 상세히 기획합니다.",
    hasArrow: true,
  },
  {
    number: "03",
    title: "실행",
    description: "실무 교육 지원, 엔지니어링 수행, 기업별 맞춤형 솔루션을 실제 적용 단계에 배포합니다.",
    hasArrow: true,
  },
  {
    number: "04",
    title: "지속관리",
    description: "Retainer 자문 및 맞춤 영양제 정기 리포트를 통해 완성도 높은 케어를 제공합니다.",
    hasArrow: false,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-cx-bg-alt px-6 py-20 sm:px-[120px] sm:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16 sm:gap-20">
        <div className="flex flex-col items-center gap-4 text-left">
          <SectionBadge>METHODOLOGY</SectionBadge>
          <h2 className="break-keep text-center text-3xl font-semibold text-white sm:text-[44px]">이렇게 함께합니다</h2>
          <p className="max-w-[520px] break-keep text-base text-cx-muted">
            문제를 명확히 짚어내고 솔루션을 설계하여 실현한 뒤, 개선 효과가 지속되도록
            전 여정을 함께합니다.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-6 rounded-2xl border border-cx-border bg-cx-card p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-extrabold text-connectx-teal">{step.number}</span>
                {step.hasArrow && (
                  <img src="/icons/landing/arrow-right.svg" alt="" aria-hidden className="size-[18px]" />
                )}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="break-keep text-xl font-bold text-white">{step.title}</h3>
                <p className="break-keep text-sm leading-relaxed text-cx-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
