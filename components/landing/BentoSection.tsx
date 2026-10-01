import Link from "next/link";
import SectionBadge from "./SectionBadge";

const verticals = [
  {
    slug: "academy",
    icon: "/icons/landing/graduation-cap.svg",
    name: "ConnectX Academy",
    tagline: "더 잘할 수 있는 역량",
    description:
      "현업에서 마주하는 IT 인프라·보안 과제를 실습으로 익히고, 업무에 적용할 수 있는 역량을 키웁니다.",
    tag: "실무 교육 프로그램",
    linkLabel: "교육 과정 살펴보기",
    accent: "blue",
    highlighted: false,
  },
  {
    slug: "advisory",
    icon: "/icons/landing/shield.svg",
    name: "ConnectX Advisory",
    tagline: "안심하고 일할 수 있는 환경",
    description:
      "우리 회사의 규모와 상황에 맞는 IT 인프라·보안 방향을 정하고, 실행을 위한 우선순위를 함께 세웁니다.",
    tag: "IT 인프라·보안 자문",
    linkLabel: "자문 서비스 살펴보기",
    accent: "blue",
    highlighted: true,
  },
  {
    slug: "wellness",
    icon: "/icons/landing/heart.svg",
    name: "ConnectX Wellness",
    tagline: "나를 챙길 수 있는 일상",
    description:
      "바쁜 일상에서도 건강을 위한 선택이 어렵지 않도록, 건강기능식품의 성분과 제품 정보를 알기 쉽게 안내합니다.",
    tag: "건강기능식품 셀렉션",
    linkLabel: "건강기능식품 살펴보기",
    accent: "teal",
    highlighted: false,
  },
] as const;

export default function BentoSection() {
  return (
    <section id="verticals" className="bg-cx-bg px-6 py-20 sm:px-[120px] sm:py-[140px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-justify">
          <SectionBadge>VERTICALS</SectionBadge>
          <h2 className="break-keep text-3xl font-semibold text-white sm:text-[44px]">필요한 서비스를 선택하세요</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {verticals.map((v) => (
            <div
              key={v.slug}
              className={`flex flex-col justify-between rounded-3xl border p-6 sm:h-[500px] sm:p-10 ${
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
                <h3 className="break-keep text-[19px] font-semibold leading-tight text-white">{v.tagline}</h3>
                <p className="break-keep text-[15px] leading-relaxed text-cx-muted">{v.description}</p>
              </div>
              <div className="flex items-center justify-between whitespace-nowrap">
                <Link
                  href={`/${v.slug}`}
                  className="break-keep text-sm font-semibold text-connectx-teal transition hover:opacity-80"
                >
                  {v.linkLabel} →
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
