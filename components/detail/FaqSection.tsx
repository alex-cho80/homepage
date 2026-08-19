"use client";

import { useState } from "react";
import type { FaqContent } from "@/lib/detail-pages/types";
import type { Tone } from "./DetailPage";

export default function FaqSection({ section, tone }: { section: FaqContent; tone: Tone }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={section.id} className={tone === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white">
          {section.heading}
        </h2>
        <div className="mt-10 space-y-4">
          {section.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="rounded-xl border border-cx-border bg-cx-card p-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-sm font-bold text-white">{item.question}</span>
                  <img
                    src="/icons/landing/chevron-down.svg"
                    alt=""
                    aria-hidden
                    className={`size-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="mt-3 text-sm leading-relaxed text-cx-muted">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
