import SectionBadge from "./SectionBadge";

const steps = [
  {
    number: "01",
    name: "Academy",
    title: "IT 실무교육으로 만난 사람들",
    body: "인프라/보안 실무를 함께 공부하는 수강생들 — 대부분 IT·사무직 직장인입니다.",
  },
  {
    number: "02",
    name: "Advisory",
    title: "인프라·보안 자문으로 쌓은 신뢰",
    body: "기업의 민감한 시스템과 데이터를 다루며 쌓은 신뢰는 쉽게 만들어지지 않습니다.",
  },
  {
    number: "03",
    name: "Wellness",
    title: "그 신뢰를 바탕으로 건강관리까지",
    body: "Wellness의 첫 고객은 바로 그 신뢰를 가진 사람들 — 같은 IT·사무직 직장인입니다.",
  },
] as const;

export default function LoopSection() {
  return (
    <section className="bg-cx-bg-alt px-6 py-20 sm:px-[120px] sm:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16 sm:gap-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionBadge>CONNECT LOOP</SectionBadge>
          <h2 className="text-3xl font-semibold text-white sm:text-[44px]">
            세 가지가 서로를 연결합니다
          </h2>
          <p className="max-w-[560px] text-base text-cx-muted">
            Academy와 Advisory에서 만난 사람들의 신뢰가 Wellness로 이어지고, 그 신뢰는
            다시 ConnectX 전체를 더 단단하게 만듭니다.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 rounded-2xl border border-cx-border bg-cx-card p-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-connectx-teal">{step.number}</span>
                <span className="text-sm font-bold uppercase tracking-wide text-cx-muted">
                  {step.name}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-cx-muted">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[800px] rounded-2xl border border-dashed border-connectx-teal/40 bg-connectx-teal/[0.05] p-8 text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-connectx-teal">
            앞으로의 방향
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-cx-muted">
            장기적으로는 Advisory의 보안·개인정보 보호 역량을 기업 임직원 건강관리
            데이터까지 연결해, 신뢰가 신뢰를 낳는 선순환 구조로 확장할 계획입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
