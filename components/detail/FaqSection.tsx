"use client";

import { useState } from "react";
import type { FaqContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";
import SectionHeading from "./SectionHeading";

export default function FaqSection({ section, tone }: { section: FaqContent; tone: Tone }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-28">
        <SectionHeading>{section.heading}</SectionHeading>
        <div className="mt-14 space-y-4">
          {section.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-white/[0.08] bg-cx-card p-7"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-[15px] font-semibold text-white">{item.question}</span>
                  <img
                    src="/icons/landing/chevron-down.svg"
                    alt=""
                    aria-hidden
                    className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="mt-4 text-[15px] leading-[1.6] text-cx-muted">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
