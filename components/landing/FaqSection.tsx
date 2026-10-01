"use client";

import { useState } from "react";
import SectionBadge from "./SectionBadge";

const faqs = [
  {
    question: "ConnectX는 어떤 회사인가요?",
    answer:
      "ConnectX는 IT 실무교육(Academy), IT 인프라·보안 자문(Advisory), 건강기능식품 셀렉션(Wellness)을 제공하는 브랜드입니다. 세 서비스는 같은 사람들의 신뢰에서 출발해 서로 연결되어 있으며, 필요에 따라 하나의 서비스만 이용하시거나 여러 서비스를 함께 이용하실 수 있습니다.",
  },
  {
    question: "서비스별로 따로 상담해야 하나요?",
    answer:
      "아닙니다. 하나의 채널로 문의하시면 필요에 따라 Academy·Advisory·Wellness 서비스를 함께 안내해드립니다.",
  },
  {
    question: "비용은 어떻게 되나요?",
    answer:
      "서비스별 초기 상담과 기본 진단은 무료로 제공되며, 진단 범위와 이후 프로젝트 규모에 따라 견적이 달라집니다.",
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
