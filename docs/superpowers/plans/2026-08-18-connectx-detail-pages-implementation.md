# ConnectX Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `/academy`, `/advisory`, `/wellness` "coming soon" placeholders with real content pages, built from `docs/harness/marketing/{academy,advisory,wellness}.md`, using a shared content-data + section-component architecture.

**Architecture:** Content and rendering are separated. `lib/detail-pages/types.ts` defines a discriminated-union `DetailSection` type and a `DetailPageContent = { sections: DetailSection[] }` shape. Three content files (`lib/detail-pages/{academy,advisory,wellness}.ts`) each export an ordered array of sections. Ten section components in `components/detail/` each render one section type. `components/detail/DetailPage.tsx` maps `content.sections` to the matching component via a switch on `section.type`. Each of the three route pages becomes a one-line `<DetailPage content={...} />`.

**Tech Stack:** Same as the existing project — Next.js (App Router), TypeScript, Tailwind CSS 3. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-08-18-connectx-detail-pages-design.md`

## Global Constraints

- No new Tailwind color tokens — use only `connectx-navy`, `connectx-accent`, and standard Tailwind `slate-*`/`white` (matching `components/Hero.tsx` and `components/BrandUnitCard.tsx`'s existing visual language: `rounded-md`, thin `border-slate-200`/`border-connectx-navy/15` borders, `font-mono uppercase tracking-widest` labels, `text-connectx-navy` headings).
- Brand-unit copy in `lib/brand-units.ts` is NOT touched by this plan — detail-page content lives independently in `lib/detail-pages/*.ts`.
- Section content is transcribed verbatim from `docs/harness/marketing/{academy,advisory,wellness}.md`, EXCEPT FAQ answers, which those documents left blank — this plan's content files include drafted answers (see each content file below). FAQ answers must not: promise job placement/이직 성공 (Academy), state unconfirmed specific figures or client names (Advisory), or use medical claim language like "치료"/"완치"/"질병 예방" (Wellness) — per each page's 마케팅 기획서 톤앤매너 메모.
- `[콘텐츠 갭 — 확인 필요]` items in the marketing docs (curriculum names, service packages, product categories, instructor/team profiles) are rendered as ordinary copy, verbatim from this plan's content files — no "준비 중" badges or visual gap-markers in the UI (per 2026-08-18 user decision recorded in the spec).
- There is no contact form/backend in this project (explicit non-goal). Hero and mid-page CTA buttons link to same-page section anchors (`#sectionId`, matching an actual section `id` in that page's content array). The terminal CTA section's own buttons (which have nothing further on the page to link to) use `href="#"`. This is intentional, not a bug — do not "fix" it by inventing a mailto address or contact page.
- Verification bar is `npm run build` succeeding (this also type-checks the whole project, including files not yet imported by any page) plus route curl checks — no component test framework is introduced.

---

### Task 1: Section content types + 10 section components + DetailPage dispatcher

**Files:**
- Create: `lib/detail-pages/types.ts`
- Create: `components/detail/Hero.tsx`
- Create: `components/detail/ProblemStatement.tsx`
- Create: `components/detail/ConnectAxes.tsx`
- Create: `components/detail/PositionDetail.tsx`
- Create: `components/detail/ProcessSteps.tsx`
- Create: `components/detail/OfferingsGrid.tsx`
- Create: `components/detail/AudienceSplit.tsx`
- Create: `components/detail/TrustPoints.tsx`
- Create: `components/detail/FaqSection.tsx`
- Create: `components/detail/CtaSection.tsx`
- Create: `components/detail/DetailPage.tsx`

**Interfaces:**
- Produces: every type in `lib/detail-pages/types.ts` (`HeroContent`, `ProblemContent`, `ConnectAxesContent`, `PositionDetailContent`, `ProcessContent`, `OfferingsContent`, `AudienceSplitContent`, `TrustContent`, `FaqContent`, `CtaContent`, `DetailSection`, `DetailPageContent`) — Tasks 2-4 build content objects typed against these.
- Produces: `DetailPage({ content }: { content: DetailPageContent })` default export from `components/detail/DetailPage.tsx` — Tasks 2-4's page files import and render this with their content object.
- No task before this one; nothing to consume.

- [ ] **Step 1: Create `lib/detail-pages/types.ts`**

```ts
export type HeroContent = {
  type: "hero";
  id: string;
  label: string;
  title: string;
  subtitle: string;
  positionBadge?: string;
  ctas: { label: string; href: string }[];
};

export type ProblemContent = {
  type: "problem";
  id: string;
  heading: string;
  items: string[];
};

export type ConnectAxis = { label: string; body: string };

export type ConnectAxesContent = {
  type: "connectAxes";
  id: string;
  heading: string;
  axes: [ConnectAxis, ConnectAxis, ConnectAxis];
};

export type PositionDetailContent = {
  type: "positionDetail";
  id: string;
  heading: string;
  paragraphs: string[];
};

export type ProcessStep = { label: string; body: string };

export type ProcessContent = {
  type: "process";
  id: string;
  heading: string;
  steps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
};

export type OfferingItem = { title: string; body: string };

export type OfferingsContent = {
  type: "offerings";
  id: string;
  heading: string;
  items: OfferingItem[];
  note?: string;
};

export type AudienceColumn = {
  title: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
};

export type AudienceSplitContent = {
  type: "audienceSplit";
  id: string;
  heading: string;
  columns: [AudienceColumn, AudienceColumn];
};

export type TrustContent = {
  type: "trust";
  id: string;
  heading: string;
  points: string[];
};

export type FaqItem = { question: string; answer: string };

export type FaqContent = {
  type: "faq";
  id: string;
  heading: string;
  items: FaqItem[];
};

export type CtaContent = {
  type: "cta";
  id: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type DetailSection =
  | HeroContent
  | ProblemContent
  | ConnectAxesContent
  | PositionDetailContent
  | ProcessContent
  | OfferingsContent
  | AudienceSplitContent
  | TrustContent
  | FaqContent
  | CtaContent;

export type DetailPageContent = {
  sections: DetailSection[];
};
```

- [ ] **Step 2: Create `components/detail/Hero.tsx`**

```tsx
import type { HeroContent } from "@/lib/detail-pages/types";

export default function Hero({ section }: { section: HeroContent }) {
  return (
    <section id={section.id} className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
          {section.label}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-connectx-navy sm:text-5xl">
          {section.title}
        </h1>
        {section.positionBadge && (
          <p className="mt-4 inline-block rounded-full border border-connectx-accent/30 bg-white px-4 py-1.5 font-mono text-xs font-semibold tracking-wide text-connectx-accent">
            {section.positionBadge}
          </p>
        )}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
          {section.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {section.ctas.map((cta, i) => (
            <a
              key={cta.label}
              href={cta.href}
              className={
                i === 0
                  ? "rounded-md bg-connectx-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-connectx-navy/90"
                  : "rounded-md border border-connectx-navy/20 px-5 py-2.5 text-sm font-semibold text-connectx-navy transition hover:border-connectx-accent hover:text-connectx-accent"
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/detail/ProblemStatement.tsx`**

```tsx
import type { ProblemContent } from "@/lib/detail-pages/types";

export default function ProblemStatement({ section }: { section: ProblemContent }) {
  return (
    <section id={section.id} className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
        {section.heading}
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {section.items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 4: Create `components/detail/ConnectAxes.tsx`**

```tsx
import type { ConnectAxesContent } from "@/lib/detail-pages/types";

export default function ConnectAxes({ section }: { section: ConnectAxesContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {section.axes.map((axis) => (
            <div key={axis.label} className="rounded-md border border-slate-200 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-connectx-accent">
                {axis.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{axis.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Create `components/detail/PositionDetail.tsx`**

```tsx
import type { PositionDetailContent } from "@/lib/detail-pages/types";

export default function PositionDetail({ section }: { section: PositionDetailContent }) {
  return (
    <section id={section.id} className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
        {section.heading}
      </h2>
      <div className="mt-8 space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create `components/detail/ProcessSteps.tsx`**

```tsx
import type { ProcessContent } from "@/lib/detail-pages/types";

export default function ProcessSteps({ section }: { section: ProcessContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.steps.map((step, i) => (
            <li key={step.label} className="rounded-md border border-connectx-navy/15 bg-slate-50 p-5">
              <span className="font-mono text-xs tracking-widest text-connectx-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-semibold text-connectx-navy">{step.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Create `components/detail/OfferingsGrid.tsx`**

```tsx
import type { OfferingsContent } from "@/lib/detail-pages/types";

export default function OfferingsGrid({ section }: { section: OfferingsContent }) {
  return (
    <section id={section.id} className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
        {section.heading}
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <div key={item.title} className="rounded-md border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-connectx-navy">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
          </div>
        ))}
      </div>
      {section.note && (
        <p className="mt-6 text-center text-xs leading-relaxed text-slate-400">{section.note}</p>
      )}
    </section>
  );
}
```

- [ ] **Step 8: Create `components/detail/AudienceSplit.tsx`**

```tsx
import Link from "next/link";
import type { AudienceSplitContent } from "@/lib/detail-pages/types";

export default function AudienceSplit({ section }: { section: AudienceSplitContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {section.columns.map((column) => (
            <div key={column.title} className="rounded-md border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-connectx-navy">{column.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{column.body}</p>
              {column.linkLabel && column.linkHref && (
                <Link
                  href={column.linkHref}
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-connectx-accent hover:underline"
                >
                  {column.linkLabel}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 9: Create `components/detail/TrustPoints.tsx`**

```tsx
import type { TrustContent } from "@/lib/detail-pages/types";

export default function TrustPoints({ section }: { section: TrustContent }) {
  return (
    <section id={section.id} className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
        {section.heading}
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {section.points.map((point) => (
          <li
            key={point}
            className="rounded-md border-l-2 border-connectx-accent bg-slate-50 p-5 text-sm leading-relaxed text-slate-600"
          >
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 10: Create `components/detail/FaqSection.tsx`**

```tsx
import type { FaqContent } from "@/lib/detail-pages/types";

export default function FaqSection({ section }: { section: FaqContent }) {
  return (
    <section id={section.id} className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-connectx-navy">
          {section.heading}
        </h2>
        <dl className="mt-10 space-y-6">
          {section.items.map((item) => (
            <div key={item.question} className="rounded-md border border-slate-200 bg-white p-5">
              <dt className="text-sm font-semibold text-connectx-navy">Q. {item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">A. {item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
```

- [ ] **Step 11: Create `components/detail/CtaSection.tsx`**

```tsx
import type { CtaContent } from "@/lib/detail-pages/types";

export default function CtaSection({ section }: { section: CtaContent }) {
  return (
    <section id={section.id} className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-connectx-navy">{section.heading}</h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600">{section.body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={section.primaryHref}
          className="rounded-md bg-connectx-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-connectx-navy/90"
        >
          {section.primaryLabel}
        </a>
        {section.secondaryLabel && section.secondaryHref && (
          <a
            href={section.secondaryHref}
            className="rounded-md border border-connectx-navy/20 px-6 py-3 text-sm font-semibold text-connectx-navy transition hover:border-connectx-accent hover:text-connectx-accent"
          >
            {section.secondaryLabel}
          </a>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 12: Create `components/detail/DetailPage.tsx`**

```tsx
import type { DetailPageContent } from "@/lib/detail-pages/types";
import Hero from "./Hero";
import ProblemStatement from "./ProblemStatement";
import ConnectAxes from "./ConnectAxes";
import PositionDetail from "./PositionDetail";
import ProcessSteps from "./ProcessSteps";
import OfferingsGrid from "./OfferingsGrid";
import AudienceSplit from "./AudienceSplit";
import TrustPoints from "./TrustPoints";
import FaqSection from "./FaqSection";
import CtaSection from "./CtaSection";

export default function DetailPage({ content }: { content: DetailPageContent }) {
  return (
    <main>
      {content.sections.map((section) => {
        switch (section.type) {
          case "hero":
            return <Hero key={section.id} section={section} />;
          case "problem":
            return <ProblemStatement key={section.id} section={section} />;
          case "connectAxes":
            return <ConnectAxes key={section.id} section={section} />;
          case "positionDetail":
            return <PositionDetail key={section.id} section={section} />;
          case "process":
            return <ProcessSteps key={section.id} section={section} />;
          case "offerings":
            return <OfferingsGrid key={section.id} section={section} />;
          case "audienceSplit":
            return <AudienceSplit key={section.id} section={section} />;
          case "trust":
            return <TrustPoints key={section.id} section={section} />;
          case "faq":
            return <FaqSection key={section.id} section={section} />;
          case "cta":
            return <CtaSection key={section.id} section={section} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
```

- [ ] **Step 13: Run build to verify (type-check only — nothing renders these yet)**

Run: `npm run build`
Expected: Exit code 0. This type-checks every `.ts`/`.tsx` file in the project per `tsconfig.json`'s `include`, so it will catch prop-shape mismatches in these files even though no page imports them yet.

- [ ] **Step 14: Commit**

```bash
git add lib/detail-pages/types.ts components/detail/
git commit -m "Add detail-page section types, section components, and DetailPage dispatcher"
```

---

### Task 2: Academy content + wire into `/academy`

**Files:**
- Create: `lib/detail-pages/academy.ts`
- Modify: `app/academy/page.tsx`

**Interfaces:**
- Consumes: all types from `lib/detail-pages/types.ts` and `DetailPage` from `components/detail/DetailPage.tsx` (Task 1).
- Produces: `academyContent: DetailPageContent`, consumed only by `app/academy/page.tsx` in this task.

- [ ] **Step 1: Create `lib/detail-pages/academy.ts`**

```ts
import type { DetailPageContent } from "./types";

export const academyContent: DetailPageContent = {
  sections: [
    {
      type: "hero",
      id: "hero",
      label: "인프라/보안 교육",
      title: "ConnectX Academy",
      subtitle:
        "지식ㆍ실무ㆍ사람을 연결해, 자격증이 아니라 실전에서 통하는 인프라/보안 역량을 만듭니다.",
      ctas: [
        { label: "커리큘럼 살펴보기", href: "#offerings" },
        { label: "상담 신청하기", href: "#cta" },
      ],
    },
    {
      type: "problem",
      id: "problem",
      heading: "이론은 많은데, 실무는 왜 늘 낯설까요",
      items: [
        "자격증 커리큘럼은 실제 장애 대응, 보안 사고 대응과 거리가 있습니다.",
        "혼자 독학하기엔 무엇부터 봐야 할지, 지금 배우는 게 현업에서 통하는지 확인할 방법이 없습니다.",
        "기업 입장에서도 신입/재직자를 어디까지, 어떻게 교육해야 실무 투입이 빨라지는지 기준이 없습니다.",
      ],
    },
    {
      type: "connectAxes",
      id: "connect",
      heading: "지식ㆍ실무ㆍ사람, 세 가지를 함께 연결합니다",
      axes: [
        {
          label: "지식 연결",
          body: "인프라 운영과 보안 실무의 기본기부터 최신 위협 대응까지, 흩어진 지식을 체계적인 커리큘럼으로 정리합니다.",
        },
        {
          label: "실무 연결",
          body: "이론 강의가 아니라 실제 장비/환경/사례를 다루는 실습 중심으로 설계합니다. 배운 것이 바로 현업에서 통하도록.",
        },
        {
          label: "사람 연결",
          body: "현업 강사, 함께 배우는 동료, 선배 수료생까지 — 수료 이후에도 이어지는 실무자 네트워크를 만듭니다.",
        },
      ],
    },
    {
      type: "process",
      id: "process",
      heading: "진단 → 큐레이션/설계 → 실행 → 지속관리, Academy에서는 이렇게 이어집니다",
      steps: [
        { label: "진단", body: "현재 역량과 목표(취업/이직/재직자 역량강화)를 먼저 확인합니다." },
        {
          label: "큐레이션/설계",
          body: "목표에 맞는 과정과 순서를 설계합니다 — 필요한 것만, 필요한 순서로.",
        },
        { label: "실행", body: "실습 중심 교육을 진행합니다." },
        { label: "지속관리", body: "수료 후에도 커뮤니티/후속 학습으로 역량을 이어갑니다." },
      ],
    },
    {
      type: "offerings",
      id: "offerings",
      heading: "과정 안내",
      items: [
        { title: "인프라 운영 기초", body: "서버/네트워크 운영의 기본기를 다지는 입문 과정입니다." },
        { title: "클라우드 인프라", body: "클라우드 환경에서의 인프라 설계와 운영을 다룹니다." },
        { title: "네트워크 보안", body: "네트워크 계층의 보안 위협과 방어 기법을 실습합니다." },
        { title: "보안 관제/침해대응", body: "보안 사고 탐지부터 대응까지의 실무 프로세스를 익힙니다." },
        {
          title: "컴플라이언스/보안관리체계",
          body: "기업이 갖춰야 할 보안 관리 체계와 규정 대응을 다룹니다.",
        },
      ],
      note: "위 과정 구성은 예시이며, 실제 개설 과정/차수는 상담을 통해 안내드립니다.",
    },
    {
      type: "audienceSplit",
      id: "audience",
      heading: "누구를 위한 과정인가요",
      columns: [
        {
          title: "개인 수강생",
          body: "인프라/보안 분야로 취업·이직을 준비 중이거나, 현재 업무 역량을 실무 수준으로 끌어올리고 싶은 분.",
        },
        {
          title: "기업 교육 담당자",
          body: "신입/재직자 인프라·보안 교육을 위탁하고 싶은 기업, 팀 단위 역량강화가 필요한 조직.",
          linkLabel: "Advisory 살펴보기",
          linkHref: "/advisory",
        },
      ],
    },
    {
      type: "trust",
      id: "trust",
      heading: "현업이 가르칩니다",
      points: [
        "현직 인프라/보안 실무자가 직접 설계하고 강의합니다.",
        "이론이 아니라 실제 장비와 사례로 검증한 커리큘럼입니다.",
        "수료 후에도 이어지는 실무자 네트워크가 있습니다.",
      ],
    },
    {
      type: "faq",
      id: "faq",
      heading: "자주 묻는 질문",
      items: [
        {
          question: "온라인/오프라인 중 어떤 방식인가요?",
          answer: "과정별로 운영 방식이 다를 수 있습니다. 상담 시 희망하시는 방식에 맞는 과정을 안내해드립니다.",
        },
        {
          question: "선수 지식이 없어도 들을 수 있나요?",
          answer: "과정마다 권장 선수 지식 수준이 다릅니다. 상담을 통해 현재 수준에 맞는 과정을 먼저 진단해드립니다.",
        },
        {
          question: "기업 단체 교육도 가능한가요?",
          answer: "가능합니다. 조직의 인원 규모와 목표에 맞춰 교육 구성을 별도로 상담해드립니다.",
        },
        {
          question: "수료 후 취업/이직 연계가 있나요?",
          answer:
            "수료생 네트워크와 실무자 커뮤니티를 통해 이어지는 연결을 지원합니다. 구체적인 연계 범위는 과정별로 상담 시 안내해드립니다.",
        },
      ],
    },
    {
      type: "cta",
      id: "cta",
      heading: "지금 상담을 신청하세요",
      body: "어떤 과정이 나에게 맞는지, 우리 조직에 필요한 교육은 무엇인지 먼저 진단해드립니다.",
      primaryLabel: "무료 상담 신청",
      primaryHref: "#",
      secondaryLabel: "커리큘럼 자료 요청",
      secondaryHref: "#",
    },
  ],
};
```

- [ ] **Step 2: Replace `app/academy/page.tsx`**

```tsx
import DetailPage from "@/components/detail/DetailPage";
import { academyContent } from "@/lib/detail-pages/academy";

export default function AcademyPage() {
  return <DetailPage content={academyContent} />;
}
```

- [ ] **Step 3: Run build to verify**

Run: `npm run build`
Expected: Exit code 0, route table includes `/academy`.

- [ ] **Step 4: Commit**

```bash
git add lib/detail-pages/academy.ts app/academy/page.tsx
git commit -m "Build ConnectX Academy detail page from marketing-lead planning doc"
```

---

### Task 3: Advisory content + wire into `/advisory`

**Files:**
- Create: `lib/detail-pages/advisory.ts`
- Modify: `app/advisory/page.tsx`

**Interfaces:**
- Consumes: all types from `lib/detail-pages/types.ts` and `DetailPage` from `components/detail/DetailPage.tsx` (Task 1).
- Produces: `advisoryContent: DetailPageContent`, consumed only by `app/advisory/page.tsx` in this task.

- [ ] **Step 1: Create `lib/detail-pages/advisory.ts`**

```ts
import type { DetailPageContent } from "./types";

export const advisoryContent: DetailPageContent = {
  sections: [
    {
      type: "hero",
      id: "hero",
      label: "인프라/보안 컨설팅",
      title: "ConnectX Advisory",
      positionBadge: "SMB Infra & Security Transformation Partner",
      subtitle:
        "기업 문제ㆍ기술ㆍ솔루션을 연결해, 전담 인프라·보안 책임자 없이도 안전하게 성장할 수 있게 합니다.",
      ctas: [
        { label: "무료 진단 신청", href: "#cta" },
        { label: "서비스 영역 보기", href: "#offerings" },
      ],
    },
    {
      type: "positionDetail",
      id: "position",
      heading: "왜 '외부 기술기획실'인가",
      paragraphs: [
        "많은 중소기업은 인프라와 보안을 각각 채용하거나, 아예 겸임으로 떠안습니다. 그 결과 문제가 생기기 전까지는 아무도 전체 그림을 보지 못합니다.",
        "Advisory는 그 자리를 대신 채웁니다. 전담 인프라·보안 책임자를 채용하기 어려운 기업을 위한 외부 전문팀으로, 인프라와 보안을 따로 보지 않고 외부 기술기획실처럼 함께 봅니다.",
      ],
    },
    {
      type: "problem",
      id: "problem",
      heading: "이런 고민, 익숙하신가요",
      items: [
        "IT 인프라 담당자가 한 명뿐이거나, 다른 업무와 겸임하고 있다.",
        "보안 사고가 나야만 보안을 생각하게 된다 — 사전 점검 체계가 없다.",
        "클라우드/솔루션 도입을 검토 중인데, 무엇이 우리 규모에 맞는지 판단할 사람이 없다.",
        "인프라 이슈와 보안 이슈가 따로따로 대응되어, 전체 리스크가 안 보인다.",
      ],
    },
    {
      type: "connectAxes",
      id: "connect",
      heading: "기업 문제ㆍ기술ㆍ솔루션을 연결합니다",
      axes: [
        {
          label: "기업 문제 연결",
          body: "예산, 인력, 업종 특성까지 고려해 우리 회사가 실제로 겪는 문제를 먼저 정확히 정의합니다.",
        },
        {
          label: "기술 연결",
          body: "정의된 문제에 맞는 인프라/보안 기술과 아키텍처 판단을 제공합니다. 유행이 아니라 규모에 맞는 기술.",
        },
        {
          label: "솔루션 연결",
          body: "판단에서 끝나지 않고, 실제로 도입 가능한 솔루션ㆍ벤더ㆍ운영 체계로 연결해 실행까지 이어갑니다.",
        },
      ],
    },
    {
      type: "process",
      id: "process",
      heading: "진단 → 큐레이션/설계 → 실행 → 지속관리",
      steps: [
        { label: "진단", body: "현재 인프라/보안 현황을 점검하고 리스크를 진단합니다." },
        {
          label: "큐레이션/설계",
          body: "기업 규모와 예산에 맞는 개선 우선순위와 아키텍처를 설계합니다.",
        },
        { label: "실행", body: "구축/이행을 직접 지원하거나, 내부 인력과 함께 실행합니다." },
        {
          label: "지속관리",
          body: "1회성 컨설팅으로 끝내지 않고, 외부 기술기획실처럼 지속적으로 모니터링ㆍ리테이너 형태로 함께합니다.",
        },
      ],
    },
    {
      type: "offerings",
      id: "offerings",
      heading: "무엇을 함께 보나요",
      items: [
        { title: "인프라 아키텍처 진단/설계", body: "현재 인프라 구조를 진단하고 개선 아키텍처를 설계합니다." },
        { title: "보안 체계 수립", body: "정책과 프로세스 관점에서 기업 규모에 맞는 보안 체계를 수립합니다." },
        { title: "컴플라이언스 대응 지원", body: "관련 규정/인증 대응에 필요한 준비를 지원합니다." },
        { title: "클라우드 전환 자문", body: "클라우드 전환 시점과 방식에 대한 자문을 제공합니다." },
        { title: "솔루션/벤더 선정 자문", body: "기업 규모와 예산에 맞는 솔루션ㆍ벤더 선정을 돕습니다." },
        { title: "상시 자문 (리테이너)", body: "일회성이 아닌 지속적인 자문 관계로 함께합니다." },
      ],
      note: "위 서비스 구성은 예시이며, 실제 상품/패키지는 진단 결과에 따라 상담을 통해 안내드립니다.",
    },
    {
      type: "trust",
      id: "trust",
      heading: "왜 Advisory인가",
      points: ["인프라와 보안을 함께 보는 팀", "기업 규모에 맞는 현실적인 제안", "1회성이 아닌 지속 관리"],
    },
    {
      type: "faq",
      id: "faq",
      heading: "자주 묻는 질문",
      items: [
        {
          question: "정규 인력 채용 대신 Advisory를 쓰면 무엇이 다른가요?",
          answer:
            "채용·교육에 드는 시간과 비용 없이, 인프라와 보안을 함께 보는 외부 전문팀을 바로 활용하실 수 있습니다.",
        },
        {
          question: "우리 회사 규모가 작은데도 대응이 되나요?",
          answer:
            "Advisory는 전담 책임자를 두기 어려운 SMB를 위한 서비스입니다. 회사 규모와 예산에 맞는 범위로 진단부터 시작합니다.",
        },
        {
          question: "일회성 컨설팅인가요, 지속적인 관리인가요?",
          answer:
            "진단과 설계 이후에도 리테이너 형태의 지속 관리를 제공합니다. 필요에 따라 일회성 진단만 받으실 수도 있습니다.",
        },
        {
          question: "인프라와 보안을 각각 따로 의뢰할 수도 있나요?",
          answer: "가능합니다. 다만 Advisory는 두 영역을 함께 보는 것을 권장드리며, 상담 시 필요 범위를 함께 정하실 수 있습니다.",
        },
      ],
    },
    {
      type: "cta",
      id: "cta",
      heading: "지금 무료로 진단받아보세요",
      body: "전담 책임자가 없어도 괜찮습니다. 지금 상태를 먼저 함께 점검해드립니다.",
      primaryLabel: "무료 진단 신청",
      primaryHref: "#",
      secondaryLabel: "담당자와 상담 예약",
      secondaryHref: "#",
    },
  ],
};
```

- [ ] **Step 2: Replace `app/advisory/page.tsx`**

```tsx
import DetailPage from "@/components/detail/DetailPage";
import { advisoryContent } from "@/lib/detail-pages/advisory";

export default function AdvisoryPage() {
  return <DetailPage content={advisoryContent} />;
}
```

- [ ] **Step 3: Run build to verify**

Run: `npm run build`
Expected: Exit code 0, route table includes `/advisory`.

- [ ] **Step 4: Commit**

```bash
git add lib/detail-pages/advisory.ts app/advisory/page.tsx
git commit -m "Build ConnectX Advisory detail page from marketing-lead planning doc"
```

---

### Task 4: Wellness content + wire into `/wellness`

**Files:**
- Create: `lib/detail-pages/wellness.ts`
- Modify: `app/wellness/page.tsx`

**Interfaces:**
- Consumes: all types from `lib/detail-pages/types.ts` and `DetailPage` from `components/detail/DetailPage.tsx` (Task 1).
- Produces: `wellnessContent: DetailPageContent`, consumed only by `app/wellness/page.tsx` in this task.

- [ ] **Step 1: Create `lib/detail-pages/wellness.ts`**

```ts
import type { DetailPageContent } from "./types";

export const wellnessContent: DetailPageContent = {
  sections: [
    {
      type: "hero",
      id: "hero",
      label: "건강기능식품 위탁판매",
      title: "ConnectX Wellness",
      subtitle: "건강ㆍ전문가ㆍ데이터를 연결해, 나에게 맞는 영양제를 정확하게 찾아드립니다.",
      ctas: [
        { label: "내 맞춤 추천 받기", href: "#cta" },
        { label: "제품 카테고리 보기", href: "#offerings" },
      ],
    },
    {
      type: "problem",
      id: "problem",
      heading: "영양제, 아무거나 드시고 계신가요",
      items: [
        "광고에서 본 제품과 내 몸에 필요한 제품은 다를 수 있습니다.",
        "부모님 영양제를 사드리고 싶은데, 무엇부터 챙겨야 할지 모르겠습니다.",
        "매일 바쁜 직장인은 피로, 눈 건강, 면역 중 뭐가 먼저인지조차 따져볼 시간이 없습니다.",
      ],
    },
    {
      type: "connectAxes",
      id: "connect",
      heading: "건강ㆍ전문가ㆍ데이터를 연결합니다",
      axes: [
        {
          label: "건강 연결",
          body: "지금의 몸 상태와 생활 습관에서 출발합니다. 유행하는 성분이 아니라 내게 필요한 것부터.",
        },
        { label: "전문가 연결", body: "전문가가 검수한 제품과 정보만 안내합니다. 광고가 아니라 근거." },
        {
          label: "데이터 연결",
          body: "한 번의 추천으로 끝나지 않습니다. 기록을 바탕으로 계속 맞춰가며 필요할 때 다시 챙깁니다.",
        },
      ],
    },
    {
      type: "audienceSplit",
      id: "audience",
      heading: "이런 분들께 필요합니다",
      columns: [
        {
          title: "부모님을 위해",
          body: "직접 챙겨드리기 어려운 부모님 건강, 무엇을 먼저 챙겨야 할지 몰라 미루고 계셨다면. 나이대와 상태에 맞는 제품을 대신 골라드립니다.",
        },
        {
          title: "직장인을 위해",
          body: "피로, 스트레스, 면역 — 다 챙기고 싶지만 시간이 없는 직장인을 위해. 지금 가장 필요한 것부터 순서대로 안내합니다.",
        },
      ],
    },
    {
      type: "process",
      id: "process",
      heading: "진단 → 큐레이션/설계 → 실행 → 지속관리",
      steps: [
        { label: "진단", body: "간단한 체크리스트로 지금 몸 상태와 생활 습관을 확인합니다." },
        { label: "큐레이션/설계", body: "전문가와 데이터를 바탕으로 맞춤 제품 조합을 구성합니다." },
        { label: "실행", body: "구성된 제품을 편하게 받아보실 수 있도록 연결합니다." },
        { label: "지속관리", body: "섭취 기록과 변화에 맞춰 다음 추천을 계속 업데이트합니다." },
      ],
    },
    {
      type: "offerings",
      id: "offerings",
      heading: "카테고리별로 살펴보기",
      items: [
        { title: "면역", body: "변화하는 계절과 환경 속에서 몸의 방어력을 지켜주는 제품군입니다." },
        { title: "피로회복/활력", body: "일상의 피로를 관리하고 활력을 더하는 제품군입니다." },
        { title: "눈 건강", body: "화면 사용이 많은 일상에서 눈 건강을 챙기는 제품군입니다." },
        { title: "장 건강", body: "장 건강 균형을 돕는 제품군입니다." },
        { title: "뼈/관절", body: "나이가 들수록 신경 쓰이는 뼈와 관절 건강을 위한 제품군입니다." },
        { title: "수면/스트레스", body: "편안한 휴식과 스트레스 관리를 돕는 제품군입니다." },
      ],
      note: "위 카테고리는 예시이며, 실제 취급 제품/구성은 맞춤 추천 시 안내드립니다.",
    },
    {
      type: "trust",
      id: "trust",
      heading: "믿고 선택하는 이유",
      points: ["전문가가 검수한 제품만 소개합니다", "광고비가 아니라 필요에 따라 추천합니다", "먹는 것을 계속 기록하고 관리합니다"],
    },
    {
      type: "faq",
      id: "faq",
      heading: "자주 묻는 질문",
      items: [
        {
          question: "직접 제조하는 제품인가요?",
          answer:
            "ConnectX Wellness는 직접 제조하지 않고, 전문가가 검수한 여러 제품 중 나에게 맞는 것을 골라드리는 위탁판매 방식으로 운영됩니다.",
        },
        {
          question: "부모님 것도 대신 신청할 수 있나요?",
          answer: "네, 가능합니다. 부모님의 상태를 대신 체크하시고 맞춤 추천을 받아보실 수 있습니다.",
        },
        {
          question: "정기 구독도 가능한가요?",
          answer: "정기적으로 필요한 제품은 구독 형태로 안내받으실 수 있습니다. 자세한 내용은 맞춤 추천 시 함께 안내해드립니다.",
        },
        {
          question: "추천이 마음에 안 들면 바꿀 수 있나요?",
          answer: "네, 기록과 피드백을 바탕으로 추천을 다시 조정해드립니다.",
        },
      ],
    },
    {
      type: "cta",
      id: "cta",
      heading: "지금 내 맞춤 추천을 받아보세요",
      body: "1분 체크리스트로 시작합니다. 나에게, 혹은 부모님께 필요한 것부터 안내해드립니다.",
      primaryLabel: "맞춤 추천 시작하기",
      primaryHref: "#",
      secondaryLabel: "뉴스레터/소식 구독",
      secondaryHref: "#",
    },
  ],
};
```

- [ ] **Step 2: Replace `app/wellness/page.tsx`**

```tsx
import DetailPage from "@/components/detail/DetailPage";
import { wellnessContent } from "@/lib/detail-pages/wellness";

export default function WellnessPage() {
  return <DetailPage content={wellnessContent} />;
}
```

- [ ] **Step 3: Run build to verify**

Run: `npm run build`
Expected: Exit code 0, route table includes `/wellness`.

- [ ] **Step 4: Commit**

```bash
git add lib/detail-pages/wellness.ts app/wellness/page.tsx
git commit -m "Build ConnectX Wellness detail page from marketing-lead planning doc"
```

---

### Task 5: Remove ComingSoon, visual consistency pass, final verification

**Files:**
- Delete: `components/ComingSoon.tsx`
- Modify (possibly): `components/detail/*.tsx` (only if the frontend-design pass in Step 2 calls for adjustments — see that step)
- Modify: `docs/harness/handoff.md`

**Interfaces:**
- Consumes: nothing new. Confirms Tasks 2-4 left no remaining import of `ComingSoon`.

- [ ] **Step 1: Confirm `ComingSoon` has no remaining importers, then delete it**

```bash
grep -rl "ComingSoon" app/ components/ || true
```

Expected: no output (Tasks 2-4 already replaced all three usages in `app/academy/page.tsx`, `app/advisory/page.tsx`, `app/wellness/page.tsx`). If this prints a file, stop and report BLOCKED — do not delete `ComingSoon.tsx` while something still imports it.

```bash
rm components/ComingSoon.tsx
```

- [ ] **Step 2: Validate visual consistency with the frontend-design skill**

The 10 section components from Task 1 already reuse the landing page's exact design tokens (`connectx-navy`/`connectx-accent`, `rounded-md`, `font-mono uppercase tracking-widest` labels) as a concrete starting point — this is not a from-scratch design pass like the landing page's. Invoke the `frontend-design` skill and review all three built pages (`/academy`, `/advisory`, `/wellness`) together against `components/Hero.tsx`/`components/BrandUnitCard.tsx`'s established visual language and `docs/harness/decisions.md`'s "전문적/신뢰감 우선" tone. Adjust `components/detail/*.tsx` directly if the skill's guidance calls for it (all three pages share these components, so one set of edits applies everywhere). Re-run `npm run build` after any change.

- [ ] **Step 3: Full production build**

Run: `npm run build`
Expected: Exit code 0, route table shows exactly 5 routes: `/`, `/academy`, `/advisory`, `/wellness`, `/_not-found`.

- [ ] **Step 4: Start production server and curl-check content**

```bash
npm run start -- -p 3100 &
sleep 2
```

```bash
curl -s http://localhost:3100/academy | grep -o "ConnectX Academy"
curl -s http://localhost:3100/academy | grep -o "인프라 운영 기초"
curl -s http://localhost:3100/academy | grep -o "Advisory 살펴보기"
curl -s http://localhost:3100/advisory | grep -o "ConnectX Advisory"
curl -s http://localhost:3100/advisory | grep -o "SMB Infra"
curl -s http://localhost:3100/advisory | grep -o "외부 기술기획실"
curl -s http://localhost:3100/wellness | grep -o "ConnectX Wellness"
curl -s http://localhost:3100/wellness | grep -o "부모님을 위해"
curl -s http://localhost:3100/wellness | grep -o "정기 구독도 가능한가요"
```

Expected: every command prints the matched string (non-empty output). Note: do not write a check for the full literal string `"SMB Infra & Security Transformation Partner"` — React HTML-escapes `&` to `&amp;` in rendered output, so a literal `&` grep will not match even though the content is correct; the `"SMB Infra"` partial check above is deliberately chosen to avoid this.

```bash
kill %1
```

- [ ] **Step 5: Append summary to `docs/harness/handoff.md`**

Append this entry (do not remove any existing entries):

```markdown

## 2026-08-18 — Claude Code (개발/디자인팀장) — Academy/Advisory/Wellness 상세 페이지 완료

- marketing-lead의 3개 기획 문서를 바탕으로 `/academy`, `/advisory`,
  `/wellness` 실제 콘텐츠 페이지 구현 완료. `ComingSoon` placeholder는
  제거.
- 콘텐츠와 렌더링을 분리하는 구조로 구현: `lib/detail-pages/*.ts`(콘텐츠)
  + `components/detail/*.tsx`(공유 섹션 컴포넌트 10개) + `DetailPage`
  디스패처.
- 마케팅 기획서의 `[콘텐츠 갭 — 확인 필요]` 표시 부분(커리큘럼명, 서비스
  상품, 제품 카테고리, 강사/팀 프로필)은 기획서가 제안한 예시 문구를
  그대로 사용해 일반 카피처럼 노출 중 — 실데이터 확보 전 임시 상태.
- FAQ 답변은 마케팅 기획서에 없어 개발팀장이 각 페이지 톤앤매너 메모를
  지키며 직접 작성함(과장/미확정 사실 단정 지양).
- 다음에 필요한 것: 사업 담당자로부터 실제 커리큘럼/서비스 상품/제품
  카테고리/팀 프로필/실적 자료를 확보해 placeholder 교체. Wellness는
  카피 확정 전 건강기능식품 표시광고 관련 법무 검토 필요(마케팅 기획서
  기존 플래그 유지).
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "Remove ComingSoon placeholder; verify build and detail-page content"
```
