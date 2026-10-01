import Link from "next/link";
import SectionBadge from "./SectionBadge";

const verticals = [
  {
    slug: "academy",
    icon: "/icons/landing/graduation-cap.svg",
    name: "ConnectX Academy",
    tagline: "현업에 적용하는 IT 실무교육",
    description:
      "기초 개념부터 실제 운영·장애 대응까지, 복잡한 인프라와 클라우드 보안을 실습으로 익히는 교육입니다.",
    tag: "실무 교육 프로그램",
    accent: "blue",
    highlighted: false,
  },
  {
    slug: "advisory",
    icon: "/icons/landing/shield.svg",
    name: "ConnectX Advisory",
    tagline: "기업을 위한 IT 인프라·보안 자문",
    description:
      "전담 인프라·보안 책임자가 없어도 초기 스타트업 및 중소기업이 안전하고 탄탄하게 성장할 수 있도록 돕습니다.",
    tag: "IT 인프라·보안 자문",
    accent: "blue",
    highlighted: true,
  },
  {
    slug: "wellness",
    icon: "/icons/landing/heart.svg",
    name: "ConnectX Wellness",
    tagline: "선택 기준을 안내하는 건강기능식품",
    description:
      "홍보성 정보에 기대지 않고, 표시 성분과 제품 정보를 비교해 나에게 맞는 건강기능식품을 선택할 수 있도록 돕습니다.",
    tag: "건강기능식품 셀렉션",
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
          <h2 className="text-3xl font-semibold text-white sm:text-[44px]">필요한 서비스를 선택하세요</h2>
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
                <h3 className="text-xl font-semibold leading-tight text-white sm:text-[28px]">{v.tagline}</h3>
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
