"use client";

import { useState } from "react";
import SectionBadge from "./SectionBadge";

const faqs = [
  {
    question: "ConnectX는 어떤 회사인가요?",
    answer:
      "ConnectX는 비즈니스의 가장 핵심인 IT 기술 역량(Academy), 안전한 시스템 환경(Advisory), 그리고 구성원의 신체 에너지 밸런스(Wellness)를 기술적 연동 모델로 관리하는 통합 솔루션 브랜드입니다.",
  },
  {
    question: "서비스별로 따로 상담해야 하나요?",
    answer:
      "아닙니다. 하나의 채널을 통해 원스톱으로 접근할 수 있으며, 기업 인프라 진단 신청 시 구성원 웰니스 진단 혜택이 유기적으로 통합 지원됩니다.",
  },
  {
    question: "비용은 어떻게 되나요?",
    answer:
      "진단 및 기획 초기 1단계 과정은 완전 무료로 제공되며, 이후 진행되는 프로젝트 규모 및 리테이너 등급에 따라 맞춤 견적 요금제가 적용됩니다.",
  },
  {
    question: "상담부터 서비스 시작까지 얼마나 걸리나요?",
    answer: "신청 완료 후 24시간 이내에 담당자가 배정되며, 상세 사전 진단 설계까지 총 3~5영업일 가량이 소요됩니다.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cx-bg-alt px-6 py-16 sm:px-[120px] sm:py-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="text-3xl font-semibold text-white sm:text-[44px]">자주 묻는 질문</h2>
        </div>
        <div className="flex w-full max-w-[800px] flex-col gap-4">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-cx-border bg-cx-card p-6"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-bold text-white">{faq.question}</span>
                  <img
                    src="/icons/landing/chevron-down.svg"
                    alt=""
                    aria-hidden
                    className={`size-[18px] shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="mt-4 text-sm leading-relaxed text-cx-muted">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
