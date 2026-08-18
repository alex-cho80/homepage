import AxisIcon, { type AxisIconVariant } from "@/components/icons/AxisIcon";
import type { ConnectAxesContent } from "@/lib/detail-pages/types";

const ICON_BY_POSITION: AxisIconVariant[] = ["cluster", "chain", "hex"];

export default function ConnectAxes({ section }: { section: ConnectAxesContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {section.axes.map((axis, i) => (
            <div key={axis.label} className="rounded-md border border-slate-200 bg-white p-6">
              <AxisIcon variant={ICON_BY_POSITION[i]} className="h-8 w-8 text-connectx-blue" />
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-connectx-blue">
                {axis.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{axis.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
