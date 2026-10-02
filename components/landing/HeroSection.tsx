import SectionBadge from "./SectionBadge";
import { landingDiagnosisMailto } from "@/lib/mailto";

const meshNodes = [
  { label: "Academy", icon: "/icons/landing/book-open.svg", href: "/academy" },
  { label: "Advisory", icon: "/icons/landing/shield.svg", href: "/advisory" },
  { label: "Wellness", icon: "/icons/landing/activity.svg", href: "/wellness" },
] as const;

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-cx-bg px-6 pb-24 pt-32 sm:px-[120px] sm:pb-[120px] sm:pt-[220px]">
      <img
        src="/images/landing/hero-bg.webp"
        alt=""
        aria-hidden
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 1400px 900px at 50% 55%, rgba(5,7,20,0.2) 0%, rgba(5,7,20,1) 95%)",
        }}
      />

      <div className="relative flex w-full max-w-[800px] flex-col items-center gap-8 text-left">
        <SectionBadge>CONNECTX SYNERGY</SectionBadge>
        <h1 className="break-keep text-center text-5xl font-extrabold leading-[1.15] text-white sm:text-[80px]">
          연결이 만드는
          <span className="text-connectx-teal"> 변화</span>
        </h1>
        <p className="max-w-[640px] break-keep text-lg leading-relaxed text-cx-muted sm:text-xl">
          일의 성장과 일상의 건강을 연결합니다. 실무에 필요한 배움, 기업에 맞는 IT
          인프라·보안 자문, 바쁜 일상 속 건강을 위한 선택까지 — 일하는 사람과 그
          사람이 속한 조직의 더 나은 내일을 함께 만듭니다.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#verticals"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-connectx-blue to-connectx-teal px-5 py-3 text-sm font-bold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90 sm:px-7 sm:py-3.5 sm:text-base"
          >
            서비스 둘러보기
            <img src="/icons/landing/arrow-right.svg" alt="" aria-hidden className="size-3.5" />
          </a>
          <a
            href={landingDiagnosisMailto}
            className="rounded-lg border border-cx-border bg-cx-bg px-5 py-3 text-sm font-semibold text-cx-muted transition hover:text-white sm:px-7 sm:py-3.5 sm:text-base"
          >
            무료 진단 신청
          </a>
        </div>
      </div>

      <div className="relative mt-24 hidden w-full max-w-[1200px] items-center justify-center sm:flex">
        {meshNodes.map((node, i) => (
          <div className="flex items-center" key={node.label}>
            {i > 0 && (
              <img src="/icons/landing/mesh-line.svg" alt="" aria-hidden className="h-px w-24 shrink-0 sm:w-40" />
            )}
            <a href={node.href} className="flex flex-col items-center gap-3 px-4 transition hover:opacity-80">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-connectx-teal bg-connectx-teal/[0.13]">
                <img src={node.icon} alt="" aria-hidden className="size-[22px]" />
              </div>
              <span className="text-sm font-bold text-white">{node.label}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
