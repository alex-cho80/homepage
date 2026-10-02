import SectionBadge from "./SectionBadge";

const steps = [
  {
    number: "01",
    name: "Academy",
    title: "실무에 필요한 지식과 경험을 연결합니다",
    body: "배움으로 역량을 키웁니다.",
  },
  {
    number: "02",
    name: "Advisory",
    title: "기업의 과제에 맞는 기술과 실행 방법을 연결합니다",
    body: "자문으로 업무의 기반을 다집니다.",
  },
  {
    number: "03",
    name: "Wellness",
    title: "건강을 위한 선택에 필요한 정보와 제품을 연결합니다",
    body: "건강한 일상으로 성장을 이어갑니다.",
  },
] as const;

export default function LoopSection() {
  return (
    <section className="bg-cx-bg-alt px-6 py-20 sm:px-[120px] sm:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16 sm:gap-20">
        <div className="flex flex-col items-center gap-4 text-left">
          <SectionBadge>CONNECT LOOP</SectionBadge>
          <h2 className="break-keep text-center text-3xl font-semibold text-white sm:text-[44px]">
            성장하는 일에도, 건강한 일상에도 필요한 연결
          </h2>
          <p className="max-w-[560px] break-keep text-base text-cx-muted">
            새로운 기술을 배우고, 안정적인 환경에서 일하며, 바쁜 하루 속에서도 나를
            챙기는 것 — ConnectX는 이 모든 것이 일하는 사람에게 필요한 기반이라고
            생각합니다.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 rounded-2xl border border-cx-border bg-cx-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-connectx-teal">{step.number}</span>
                <span className="text-sm font-bold uppercase tracking-wide text-cx-muted">
                  {step.name}
                </span>
              </div>
              <h3 className="break-keep text-lg font-bold text-white">{step.title}</h3>
              <p className="break-keep text-sm leading-relaxed text-cx-muted">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[800px] rounded-2xl border border-dashed border-connectx-teal/40 bg-connectx-teal/[0.05] p-6 text-left sm:p-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-connectx-teal">
            앞으로의 방향
          </p>
          <p className="mt-3 break-keep text-[15px] leading-relaxed text-cx-muted">
            장기적으로는 Advisory의 보안·개인정보 보호 역량을 기업 임직원 건강관리
            데이터까지 연결해, 신뢰가 신뢰를 낳는 선순환 구조로 확장할 계획입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
