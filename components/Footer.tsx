import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";
import { generalInquiryMailto } from "@/lib/mailto";

export default function Footer() {
  return (
    <footer className="bg-cx-bg">
      <div className="border-t border-cx-border px-6 pb-10 pt-16 sm:px-[120px] sm:pt-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-12 sm:flex-row">
          <div className="flex w-full max-w-[320px] flex-col items-start gap-4 text-left">
            <img src="/logo-dark.png" alt="ConnectX" className="h-7 w-auto object-contain" />
            <p className="break-keep text-[13px] leading-relaxed text-cx-muted">
              IT 실무교육, 인프라·보안 자문, 건강기능식품 큐레이션을 통해 일하는 사람의 역량과 업무 환경, 건강한 일상을 함께 지원합니다.
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
