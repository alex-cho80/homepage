import AxisIcon, { type AxisIconVariant } from "@/components/icons/AxisIcon";
import type { ConnectAxesContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";

const ICON_BY_POSITION: AxisIconVariant[] = ["cluster", "chain", "hex"];

export default function ConnectAxes({
  section,
  tone,
}: {
  section: ConnectAxesContent;
  tone: Tone;
}) {
  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {section.axes.map((axis, i) => (
            <div key={axis.label} className="rounded-2xl border border-cx-border bg-cx-card p-6">
              <AxisIcon variant={ICON_BY_POSITION[i]} className="h-8 w-8 text-connectx-teal" />
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-connectx-teal">
                {axis.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cx-muted">{axis.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
