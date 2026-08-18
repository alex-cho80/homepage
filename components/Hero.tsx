import HeroIllustration from "@/components/illustrations/HeroIllustration";

export default function Hero() {
  const steps = ["진단", "큐레이션/설계", "실행", "지속관리"];
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <HeroIllustration variant="landing" className="mx-auto h-24 w-24" />
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-connectx-navy sm:text-6xl">
          ConnectX
        </h1>
        <ol className="mt-14 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-0">
          {steps.map((step, i) => (
            <li key={step} className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex w-32 flex-col items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-connectx-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-md border border-connectx-navy/15 bg-white px-4 py-2 text-sm font-semibold text-connectx-navy shadow-sm">
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden h-px w-10 shrink-0 bg-gradient-to-r from-connectx-blue to-connectx-teal md:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
