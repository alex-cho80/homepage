export default function Hero() {
  const steps = ["진단", "큐레이션/설계", "실행", "지속관리"];
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-connectx-navy sm:text-6xl">
          ConnectX
        </h1>
        <ol className="mt-14 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-0">
          {steps.map((step, i) => (
            <li key={step} className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex w-32 flex-col items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-connectx-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-md border border-connectx-navy/15 bg-white px-4 py-2 text-sm font-semibold text-connectx-navy shadow-sm">
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="relative hidden h-px w-10 shrink-0 bg-slate-300 md:block"
                >
                  <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-connectx-accent" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
