import Link from "next/link";
import SectionBadge from "./SectionBadge";

const verticals = [
  {
    slug: "academy",
    icon: "/icons/landing/graduation-cap.svg",
    name: "ConnectX Academy",
    tagline: "지식·실무·사람 연결",
    description:
      "자격증 취득 목적이 아닌, 복잡한 인프라와 클라우드 보안 실전에서 즉시 통하는 진짜 능력을 교육합니다.",
    tag: "실무 교육 프로그램",
    accent: "blue",
    highlighted: false,
  },
  {
    slug: "advisory",
    icon: "/icons/landing/shield.svg",
    name: "ConnectX Advisory",
    tagline: "기업 문제·기술·솔루션 연결",
    description:
      "전담 보안/인프라 책임자가 없이도 초기 스타트업 및 중소기업이 안전하고 탄탄하게 성장할 수 있도록 돕습니다.",
    tag: "인프라 및 보안 통합 컨설팅",
    accent: "blue",
    highlighted: true,
  },
  {
    slug: "wellness",
    icon: "/icons/landing/heart.svg",
    name: "ConnectX Wellness",
    tagline: "건강·전문가·데이터 연결",
    description:
      "무분별한 바이럴 광고를 넘어, 개인별 고유 바이오 데이터와 전문가 분석을 통해 진짜 맞춤형 기능식품을 제안합니다.",
    tag: "데이터 기반 큐레이션",
    accent: "teal",
    highlighted: false,
  },
] as const;

export default function BentoSection() {
  return (
    <section id="verticals" className="bg-cx-bg px-6 py-20 sm:px-[120px] sm:py-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionBadge>VERTICALS</SectionBadge>
          <h2 className="text-3xl font-semibold text-white sm:text-[44px]">세 가지 연결</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {verticals.map((v) => (
            <div
              key={v.slug}
              className={`flex h-[500px] flex-col justify-between rounded-3xl border p-10 ${
                v.highlighted
                  ? "border-connectx-blue bg-cx-bg"
                  : "border-cx-border bg-cx-card"
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-9 items-center justify-center rounded-lg border ${
                      v.accent === "teal"
                        ? "border-connectx-teal bg-connectx-teal/10"
                        : "border-connectx-blue bg-connectx-blue/10"
                    }`}
                  >
                    <img src={v.icon} alt="" aria-hidden className="size-[18px]" />
                  </div>
                  <span className="text-lg font-bold text-white">{v.name}</span>
                </div>
                <h3 className="text-[28px] font-semibold leading-tight text-white">{v.tagline}</h3>
                <p className="text-[15px] leading-relaxed text-cx-muted">{v.description}</p>
              </div>
              <div className="flex items-center justify-between whitespace-nowrap">
                <Link
                  href={`/${v.slug}`}
                  className="text-sm font-semibold text-connectx-teal transition hover:opacity-80"
                >
                  자세히 보기 →
                </Link>
                <span className="text-xs text-cx-dim">{v.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
