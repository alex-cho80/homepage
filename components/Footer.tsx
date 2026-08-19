import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";

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
          지금 연결을 시작하세요
        </h2>
        <p className="relative max-w-[480px] text-base text-cx-muted">
          더 안전하게 성장하고, 더 영리하게 대처하며, 완전히 보살핌 받는 비즈니스 환경을 설계합니다.
        </p>
        <Link
          href="/advisory"
          className="relative flex items-center gap-2 rounded-lg bg-gradient-to-r from-connectx-blue to-connectx-teal px-7 py-3.5 text-base font-bold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90"
        >
          무료 상담 신청
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="border-t border-cx-border px-6 pb-10 pt-16 sm:px-[120px] sm:pt-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-12 sm:flex-row">
          <div className="flex max-w-[320px] flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-connectx-blue text-sm font-extrabold text-white">
                X
              </span>
              <span className="text-lg font-extrabold text-white">ConnectX</span>
            </div>
            <p className="text-[13px] leading-relaxed text-cx-muted">
              IT 아카데미, 테크 자문 서비스, 그리고 의과학 기반 건강 관리를 하나의 체인으로 매끄럽게 연결합니다.
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
              <Link href="#" className="text-[13px] text-cx-muted transition hover:text-white">
                소개
              </Link>
              <Link href="#" className="text-[13px] text-cx-muted transition hover:text-white">
                채용
              </Link>
              <Link href="#" className="text-[13px] text-cx-muted transition hover:text-white">
                문의하기
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-[1200px] flex-col items-start justify-between gap-3 text-xs text-cx-dim sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <p>대표자: 김커넥트 | 서울시 강남구 테헤란로 123 ConnectX 타워</p>
            <p>© {new Date().getFullYear()} ConnectX. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white">
              이용약관
            </Link>
            <Link href="#" className="font-bold transition hover:text-white">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
