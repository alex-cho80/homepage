import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";
import { generalInquiryMailto } from "@/lib/mailto";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-cx-border/50 bg-[rgba(5,7,20,0.9)] backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4 sm:flex-nowrap sm:px-[120px] sm:py-5">
        <Link href="/" className="order-1 flex shrink-0 items-center">
          <img src="/logo-dark.png" alt="ConnectX" className="h-8 w-auto object-contain sm:h-9" />
        </Link>
        <nav className="order-3 flex w-full gap-5 overflow-x-auto text-[15px] sm:order-2 sm:w-auto sm:gap-10 sm:overflow-visible">
          {brandUnits.map((unit) => (
            <Link
              key={unit.slug}
              href={`/${unit.slug}`}
              className="shrink-0 font-medium text-cx-muted transition hover:text-white"
            >
              {unit.name.replace("ConnectX ", "")}
            </Link>
          ))}
        </nav>
        <a
          href={generalInquiryMailto}
          className="order-2 shrink-0 rounded-md bg-connectx-blue px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90 sm:order-3"
        >
          상담 신청
        </a>
      </div>
    </header>
  );
}
