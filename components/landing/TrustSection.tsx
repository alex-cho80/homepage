import SectionBadge from "./SectionBadge";

const points = [
  {
    icon: "/icons/landing/user-check.svg",
    title: "현직 실무자가 직접 설계",
    description: "시장의 죽은 이론이 아닙니다. 국내 최대 규모 테크 기업의 시니어 엔지니어링 리더들이 직접 수립하고 실행합니다.",
  },
  {
    icon: "/icons/landing/shield.svg",
    title: "인프라와 보안을 함께 보는 팀",
    description: "인프라 없는 보안도, 보안 없는 인프라도 무의미합니다. 하나의 관점으로 결합하여 리스크를 원천 제거합니다.",
  },
  {
    icon: "/icons/landing/refresh-cw.svg",
    title: "1회성이 아닌 지속 관리",
    description: "처방과 설계 단계에서 멈추지 않고, 정기 리포트와 상시 자문 서비스를 제공해 변화를 끝까지 유지합니다.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-cx-bg px-6 py-20 sm:px-[120px] sm:py-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16 sm:gap-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionBadge>WHY CONNECTX</SectionBadge>
          <h2 className="text-3xl font-semibold text-white sm:text-[44px]">왜 ConnectX인가</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex flex-col gap-5 rounded-2xl border border-cx-border bg-cx-card p-10"
            >
              <div className="flex size-12 items-center justify-center rounded-xl border border-connectx-blue bg-connectx-blue/10">
                <img src={point.icon} alt="" aria-hidden className="size-5" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-white">{point.title}</h3>
                <p className="text-sm leading-relaxed text-cx-muted">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
