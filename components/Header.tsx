"use client";

import { useState } from "react";
import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-cx-border/50 bg-[rgba(5,7,20,0.9)] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 sm:px-[120px] sm:py-5">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img src="/logo-dark.png" alt="ConnectX" className="h-8 w-auto object-contain sm:h-9" />
        </Link>

        <nav className="hidden gap-10 text-[15px] sm:flex">
          {brandUnits.map((unit) => (
            <Link
              key={unit.slug}
              href={`/${unit.slug}`}
              className="font-medium text-cx-muted transition hover:text-white"
            >
              {unit.name.replace("ConnectX ", "")}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 shrink-0 items-center justify-center rounded-md border border-cx-border text-white sm:hidden"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-cx-border/50 px-6 py-4 sm:hidden">
          {brandUnits.map((unit) => (
            <Link
              key={unit.slug}
              href={`/${unit.slug}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-[15px] font-medium text-cx-muted transition hover:bg-cx-card hover:text-white"
            >
              {unit.name.replace("ConnectX ", "")}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
