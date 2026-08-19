import Link from "next/link";
import SectionBadge from "./SectionBadge";

const meshNodes = [
  { label: "Academy", icon: "/icons/landing/book-open.svg", href: "/academy" },
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

      <div className="relative flex w-full max-w-[800px] flex-col items-center gap-8 text-center">
        <SectionBadge>CONNECTX SYNERGY</SectionBadge>
        <h1 className="text-5xl font-extrabold leading-[1.15] text-white sm:text-[80px]">
          연결이 만드는
          <span className="text-connectx-teal"> 변화</span>
        </h1>
        <p className="max-w-[640px] text-lg leading-relaxed text-cx-muted sm:text-xl">
          진단에서 지속관리까지, ConnectX가 IT 인프라 · 보안 · 건강을 하나로 연결하여
          기업과 개인의 지속 가능한 성장을 설계합니다.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/advisory"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-connectx-blue to-connectx-teal px-7 py-3.5 text-base font-bold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90"
          >
            무료 진단 신청
            <img src="/icons/landing/arrow-right.svg" alt="" aria-hidden className="size-3.5" />
          </Link>
          <a
            href="#verticals"
            className="rounded-lg border border-cx-border bg-cx-bg px-7 py-3.5 text-base font-semibold text-cx-muted transition hover:text-white"
          >
            서비스 둘러보기
          </a>
        </div>
      </div>

      <div className="relative mt-24 hidden w-full max-w-[1200px] items-center sm:flex">
        <div className="flex flex-1 items-center gap-10">
          <div className="flex flex-1 flex-col items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-connectx-blue bg-connectx-blue/[0.13]">
              <img src={meshNodes[0].icon} alt="" aria-hidden className="size-[22px]" />
            </div>
            <span className="text-sm font-bold text-white">{meshNodes[0].label}</span>
          </div>
          <img src="/icons/landing/mesh-line.svg" alt="" aria-hidden className="h-px w-40 shrink-0" />
          <div className="flex flex-1 flex-col items-center gap-3">
            <div className="flex size-16 items-center justify-center rounded-full border-2 border-connectx-teal bg-connectx-teal/20 blur-[0.5px]">
              <div className="flex size-8 items-center justify-center rounded-2xl bg-connectx-teal text-base font-extrabold text-cx-bg">
                C
              </div>
            </div>
            <span className="text-sm font-extrabold text-connectx-teal">ConnectX Platform</span>
          </div>
          <img src="/icons/landing/mesh-line.svg" alt="" aria-hidden className="h-px w-40 shrink-0" />
          <div className="flex flex-1 flex-col items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-connectx-teal bg-connectx-teal/[0.13]">
              <img src={meshNodes[1].icon} alt="" aria-hidden className="size-[22px]" />
            </div>
            <span className="text-sm font-bold text-white">{meshNodes[1].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
