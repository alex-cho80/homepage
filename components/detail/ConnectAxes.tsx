import AxisIcon, { type AxisIconVariant } from "@/components/icons/AxisIcon";
import type { ConnectAxesContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";
import SectionHeading from "./SectionHeading";

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
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <SectionHeading>{section.heading}</SectionHeading>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {section.axes.map((axis, i) => (
            <div
              key={axis.label}
              className="rounded-2xl border border-white/[0.08] bg-cx-card p-8"
            >
              <div className="flex size-12 items-center justify-center rounded-xl border border-connectx-blue bg-connectx-blue/10">
                <AxisIcon variant={ICON_BY_POSITION[i]} className="h-6 w-6 text-connectx-teal" />
              </div>
              <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.06em] text-connectx-teal">
                {axis.label}
              </p>
              <p className="mt-3 text-[15px] leading-[1.6] text-cx-muted">{axis.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
