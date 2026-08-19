import type { HeroContent } from "@/lib/detail-pages/types";

function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {};
}

export default function Hero({ section }: { section: HeroContent }) {
  return (
    <section id={section.id} className="bg-cx-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 sm:py-28 md:grid-cols-2 md:gap-20">
        <div className="text-center md:text-left">
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-connectx-teal">
            {section.label}
          </p>
          <h1 className="mt-4 text-[40px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[52px]">
            {section.title}
          </h1>
          {section.positionBadge && (
            <p className="mt-5 inline-block rounded-full border border-connectx-blue/20 bg-connectx-blue/[0.07] px-4 py-1.5 text-[13px] font-semibold tracking-wide text-connectx-teal">
              {section.positionBadge}
            </p>
          )}
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.6] text-cx-muted md:mx-0">
            {section.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {section.ctas.map((cta, i) => (
              <a
                key={cta.label}
                href={cta.href}
                {...externalProps(cta.href)}
                className={
                  i === 0
                    ? "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-connectx-blue to-connectx-teal px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90"
                    : "rounded-full border border-white/[0.12] px-7 py-3.5 text-[15px] font-medium text-cx-muted transition hover:border-white/25 hover:text-white"
                }
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <img
          src={section.heroImage.src}
          alt={section.heroImage.alt}
          className="aspect-[4/3] w-full rounded-[24px] object-cover object-right shadow-[3px_5px_30px_rgba(0,0,0,0.35)]"
        />
      </div>
    </section>
  );
}
