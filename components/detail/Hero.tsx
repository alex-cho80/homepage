import type { HeroContent } from "@/lib/detail-pages/types";

function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {};
}

export default function Hero({ section }: { section: HeroContent }) {
  return (
    <section id={section.id} className="bg-cx-bg">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div className="text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-connectx-teal">
            {section.label}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {section.title}
          </h1>
          {section.positionBadge && (
            <p className="mt-4 inline-block rounded-full border border-connectx-blue/20 bg-connectx-blue/[0.07] px-4 py-1.5 text-xs font-semibold tracking-wide text-connectx-teal">
              {section.positionBadge}
            </p>
          )}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cx-muted md:mx-0">
            {section.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {section.ctas.map((cta, i) => (
              <a
                key={cta.label}
                href={cta.href}
                {...externalProps(cta.href)}
                className={
                  i === 0
                    ? "inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-connectx-blue to-connectx-teal px-6 py-3 text-sm font-bold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90"
                    : "rounded-lg border border-cx-border bg-cx-bg px-6 py-3 text-sm font-semibold text-cx-muted transition hover:text-white"
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
          className="aspect-[4/3] w-full rounded-[20px] border border-cx-border object-cover object-right"
        />
      </div>
    </section>
  );
}
