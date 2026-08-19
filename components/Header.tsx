import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-cx-border/50 bg-[rgba(5,7,20,0.9)] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-y-3 px-6 py-4 sm:px-[120px] sm:py-5">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-connectx-blue text-lg font-extrabold text-white">
            X
          </span>
          <span className="text-[22px] font-extrabold whitespace-nowrap">
            <span className="text-white">Connect</span>
            <span className="text-connectx-teal">X</span>
          </span>
        </Link>
        <nav className="flex flex-wrap gap-6 text-[15px] sm:gap-10">
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
        <Link
          href="/advisory"
          className="shrink-0 rounded-md bg-connectx-blue px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
        >
          상담 신청
        </Link>
      </div>
    </header>
  );
}
