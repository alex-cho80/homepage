import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";
import { generalInquiryMailto } from "@/lib/mailto";

export default function Footer() {
  return (
    <footer className="bg-cx-bg">
      <div className="relative flex flex-col items-center gap-9 overflow-hidden px-6 py-20 text-center sm:px-[120px] sm:py-[120px]">
        <img
          src="/images/landing/footer-cta-bg.webp"
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(5,7,20,0.85)]" aria-hidden />
        <h2 className="relative text-4xl font-semibold text-white sm:text-[56px]">
          필요한 서비스가 궁금하신가요?
        </h2>
        <p className="relative max-w-[480px] text-base text-cx-muted">
          더 안전하게, 더 영리하게, 안정적으로 운영하고 성장할 수 있는 비즈니스 환경을 설계합니다.
        </p>
        <a
          href={generalInquiryMailto}
          className="relative flex items-center gap-2 rounded-lg bg-gradient-to-r from-connectx-blue to-connectx-teal px-7 py-3.5 text-base font-bold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90"
        >
          무료 상담 신청
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="border-t border-cx-border px-6 pb-10 pt-16 sm:px-[120px] sm:pt-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-12 sm:flex-row">
          <div className="flex max-w-[320px] flex-col gap-4">
            <img src="/logo-dark.png" alt="ConnectX" className="h-7 w-auto object-contain" />
            <p className="text-[13px] leading-relaxed text-cx-muted">
              IT 실무교육, IT 인프라·보안 자문, 그리고 건강기능식품 셀렉션을 하나의 브랜드로 연결합니다.
            </p>
          </div>
          <div className="flex gap-16 sm:gap-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold text-white">Services</p>
              {brandUnits.map((unit) => (
                <Link
                  key={unit.slug}
                  href={`/${unit.slug}`}
                  className="text-[13px] text-cx-muted transition hover:text-white"
                >
                  {unit.name.replace("ConnectX ", "")}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold text-white">Company</p>
              <a
                href={generalInquiryMailto}
                className="text-[13px] text-cx-muted transition hover:text-white"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-[1200px] flex-col items-start justify-between gap-3 text-xs text-cx-dim sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ConnectX. All rights reserved.</p>
          <Link href="/privacy" className="font-bold transition hover:text-white">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
