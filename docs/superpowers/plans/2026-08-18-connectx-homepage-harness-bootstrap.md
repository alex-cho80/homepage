# ConnectX Homepage — Harness Bootstrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up the multi-agent harness collaboration scaffolding (shared docs + marketing-lead subagent) and a working Next.js + Tailwind project with a first-version landing page built from the ConnectX business-plan canvas content, plus placeholder routes for the three brand units.

**Architecture:** Two independent layers. (1) A harness layer of plain markdown files (`docs/harness/`) plus one Claude Code subagent definition (`.claude/agents/marketing-lead.md`) — no code, no build step. (2) A Next.js 14 App Router project at the repo root (TypeScript + Tailwind CSS) with a shared `brand-units` data module feeding a `Header`, a landing page (`Hero` + `BrandUnitCard` grid), and three "coming soon" placeholder routes.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS 3, npm (Node v22.22.1 confirmed installed).

**Spec:** `docs/superpowers/specs/2026-08-18-connectx-homepage-harness-design.md`

## Global Constraints

- Package manager: npm (no pnpm/yarn available in this environment).
- Framework: Next.js App Router + TypeScript + Tailwind CSS 3 — per spec §"이번 spec의 구현 범위 → 2. Next.js 프로젝트 셀파딩".
- Routes required: `/`, `/academy`, `/advisory`, `/wellness` — per spec.
- `/academy`, `/advisory`, `/wellness` are placeholder-only ("준비 중") in this plan; full content is out of scope — per spec Non-goals.
- Landing page copy must be the canvas text verbatim (no paraphrasing/marketing polish) — per spec §"랜딩 페이지 (`/`)": "캔버스 문구를 그대로 배치하는 1차 버전".
- Visual tone: professional/trustworthy, informed by Advisory's B2B positioning — per `docs/harness/decisions.md` (seeded in Task 1).
- Verification bar for this plan is `npm run build` succeeding plus a manual/curl route check — no component test framework is introduced (per spec §"테스트 전략").

---

### Task 1: Harness shared documents + marketing-lead subagent

**Files:**
- Create: `docs/harness/direction.md`
- Create: `docs/harness/handoff.md`
- Create: `docs/harness/decisions.md`
- Create: `.claude/agents/marketing-lead.md`

**Interfaces:**
- Produces: `docs/harness/decisions.md` seeded with the 4 confirmed decisions from brainstorming (site scope, tech stack, marketing-lead role boundary, collaboration protocol) — later tasks and future sessions read this file as the source of truth for things already decided.
- Produces: `.claude/agents/marketing-lead.md` — a Claude Code subagent invocable via the Agent tool with `subagent_type: marketing-lead` (not invoked in this plan; definition only, per spec Non-goals).

- [ ] **Step 1: Create `docs/harness/direction.md`**

```markdown
# Direction

Codex(CTO)가 이 문서에 방향성/기준/우선순위/역할분배 결정사항을 기록합니다.
Claude Code는 세션 시작 시 이 문서를 먼저 읽습니다.

(2026-08-18 harness bootstrap 시점: 아직 Codex 세션에서 작성된 추가 지시
없음. 최초 방향성은 `docs/superpowers/specs/2026-08-18-connectx-homepage-harness-design.md`
스펙을 따름.)
```

- [ ] **Step 2: Create `docs/harness/handoff.md`**

```markdown
# Handoff Log

append-only. 각 항목: 날짜 / 담당(팀) / 무엇을 했는지 / 다음에 필요한 것.

## 2026-08-18 — Claude Code (개발/디자인팀장)

- harness 구조(direction/handoff/decisions 문서, marketing-lead 서브에이전트)와
  Next.js+Tailwind 랜딩 페이지 1차 버전을 구현 시작.
- 다음에 필요한 것: marketing-lead를 실제로 호출해 Academy/Advisory/Wellness
  각 페이지의 사이트맵과 콘텐츠 기획을 받는 것 (다음 spec).
```

- [ ] **Step 3: Create `docs/harness/decisions.md`**

```markdown
# Decisions

확정되어 재논의 대상이 아닌 사항. 새 결정은 append.

- **사이트 범위**: ConnectX 통합 1개 사이트, Academy/Advisory/Wellness는
  하위 섹션/페이지(`/academy`, `/advisory`, `/wellness`)로 구성. (2026-08-18)
- **기술 스택**: Next.js (App Router) + TypeScript + Tailwind CSS, npm.
  (2026-08-18)
- **marketing-lead 역할**: 사이트 기획/정보구조/카피 방향만 담당. 코드·비주얼
  구현에는 관여하지 않음. (2026-08-18)
- **협업 방식**: Codex와 Claude Code는 별도 CLI 세션이라 실시간 통신이
  불가능하므로 `docs/harness/` 공유 문서로 조정. (2026-08-18)
- **톤앤매너**: 전문적/신뢰감 우선. Advisory의 B2B 포지셔닝(SMB Infra &
  Security Transformation Partner)을 고려한 톤을 전체 사이트 기본값으로 삼음.
  (2026-08-18)
```

- [ ] **Step 4: Create `.claude/agents/marketing-lead.md`**

```markdown
---
name: marketing-lead
description: 마케팅/홍보팀장. 사이트 기획(정보구조/사이트맵), 레이아웃 배치,
  카피·톤앤매너 방향을 제안합니다. 코드 작성이나 비주얼 디자인 구현은
  하지 않습니다. 새 페이지나 브랜드 유닛의 콘텐츠 방향을 기획해야 할 때
  사용하세요.
tools: Read, Write, WebSearch, WebFetch
---

당신은 ConnectX의 마케팅/홍보팀장입니다.

## 담당 범위

- 페이지별 목적, 핵심 메시지, 정보구조(사이트맵) 기획
- 레이아웃 배치 제안 (어떤 섹션이 어떤 순서로 나와야 하는지)
- 카피/톤앤매너 방향 제안

## 담당하지 않는 것

- 코드 작성, 컴포넌트 구현
- 색상/타이포그래피 등 비주얼 디자인 구현 디테일 (이건 개발/디자인팀장의 몫)
- 배포, 인프라 결정

## 산출물

기획 결과는 `docs/harness/marketing/` 아래 마크다운 문서로 작성하세요.
문서에는 반드시 다음을 포함합니다: 대상 페이지, 목적, 핵심 메시지,
섹션 순서(정보구조), 각 섹션의 카피 초안, 톤앤매너 메모.

작업 전 `docs/harness/decisions.md`를 읽고 이미 확정된 사항(사이트 범위,
톤앤매너 기본값 등)과 충돌하지 않도록 하세요. 작업 완료 후
`docs/harness/handoff.md`에 요약을 append 하세요.
```

- [ ] **Step 5: Commit**

```bash
git add docs/harness/ .claude/agents/marketing-lead.md
git commit -m "Add harness shared docs and marketing-lead subagent"
```

---

### Task 2: Next.js + TypeScript + Tailwind project scaffold

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `next-env.d.ts`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create/Modify: `.gitignore`

**Interfaces:**
- Produces: Tailwind theme colors `connectx-navy` (`#0f172a`) and `connectx-accent` (`#0ea5e9`), available as `text-connectx-navy`, `bg-connectx-navy`, `text-connectx-accent`, `hover:text-connectx-accent`, `hover:border-connectx-accent` — Tasks 3-5 use these class names.
- Produces: root layout `app/layout.tsx` exporting default `RootLayout({ children })` — Task 3 modifies this to wrap children with `Header`/`Footer`.
- Produces: npm scripts `dev`, `build`, `start`, `lint` — every later task's verification step calls `npm run build`.

- [ ] **Step 1: Initialize package.json and install dependencies**

```bash
npm init -y
npm install next@^14.2.0 react@^18.3.0 react-dom@^18.3.0
npm install -D typescript@^5.4.0 @types/node@^20 @types/react@^18 @types/react-dom@^18 tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0 eslint@^8 eslint-config-next@^14.2.0
```

- [ ] **Step 2: Set package.json scripts**

Edit `package.json`, replace the `"scripts"` object with:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

Also add `"private": true` at the top level if `npm init -y` did not already.

- [ ] **Step 3: Create `next.config.mjs`**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
```

- [ ] **Step 4: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Create `next-env.d.ts`**

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
```

- [ ] **Step 6: Create `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "connectx-navy": "#0f172a",
        "connectx-accent": "#0ea5e9",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 7: Create `postcss.config.js`**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 8: Create `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 9: Create `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnectX",
  description: "진단 → 큐레이션/설계 → 실행 → 지속관리",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-connectx-navy antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 10: Create `app/page.tsx` (placeholder, replaced in Task 4)**

```tsx
export default function Home() {
  return <main className="p-8">ConnectX</main>;
}
```

- [ ] **Step 11: Create `.gitignore`**

```
node_modules
.next
out
.env*.local
*.tsbuildinfo
```

- [ ] **Step 12: Run build to verify the scaffold works**

Run: `npm run build`
Expected: Exit code 0, output shows a route table including `/` as a static route.

- [ ] **Step 13: Commit**

```bash
git add -A
git commit -m "Scaffold Next.js + TypeScript + Tailwind project"
```

---

### Task 3: Brand-unit data module + shared Header/Footer layout

**Files:**
- Create: `lib/brand-units.ts`
- Create: `components/Header.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: Tailwind classes `text-connectx-navy`, `bg-connectx-navy`, `hover:text-connectx-accent` from Task 2.
- Produces: `export type BrandUnit = { slug: "academy" | "advisory" | "wellness"; domain: string; name: string; connectPhrase: string; description: string; position?: string; positionDetails?: string[] }` and `export const brandUnits: BrandUnit[]` from `lib/brand-units.ts` — Tasks 4 and 5 import both.
- Produces: `Header` and `Footer` default exports from `components/Header.tsx` / `components/Footer.tsx` — consumed only by `app/layout.tsx` in this task.

- [ ] **Step 1: Create `lib/brand-units.ts`**

Content is transcribed verbatim from `06.사업/01.사업계획.canvas`.

```ts
export type BrandUnit = {
  slug: "academy" | "advisory" | "wellness";
  domain: string;
  name: string;
  connectPhrase: string;
  description: string;
  position?: string;
  positionDetails?: string[];
};

export const brandUnits: BrandUnit[] = [
  {
    slug: "academy",
    domain: "인프라/보안 교육",
    name: "ConnectX Academy",
    connectPhrase: "지식ㆍ실무ㆍ사람 연결",
    description: "인프라/보안 교육",
  },
  {
    slug: "advisory",
    domain: "인프라/보안 컨설팅",
    name: "ConnectX Advisory",
    connectPhrase: "기업 문제ㆍ기술ㆍ솔루션 연결",
    description: "인프라/보안 컨설팅",
    position: "SMB Infra & Security Transformation Partner",
    positionDetails: [
      "전담 인프라·보안 책임자를 채용하기 어려운 기업의 외부 전문팀",
      "기업의 IT 인프라와 보안을 함께 보는 외부 기술기획실",
    ],
  },
  {
    slug: "wellness",
    domain: "건강기능식품 위탁판매",
    name: "ConnectX Wellness",
    connectPhrase: "건강ㆍ전문가ㆍ데이터 연결",
    description: "건강기능식품 위탁판매",
  },
];
```

- [ ] **Step 2: Create `components/Header.tsx`**

```tsx
import Link from "next/link";
import { brandUnits } from "@/lib/brand-units";

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          ConnectX
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          {brandUnits.map((unit) => (
            <Link
              key={unit.slug}
              href={`/${unit.slug}`}
              className="hover:text-connectx-accent"
            >
              {unit.name.replace("ConnectX ", "")}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 3: Create `components/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} ConnectX. All rights reserved.
    </footer>
  );
}
```

- [ ] **Step 4: Wire Header/Footer into `app/layout.tsx`**

Replace the file with:

```tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConnectX",
  description: "진단 → 큐레이션/설계 → 실행 → 지속관리",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col bg-white text-connectx-navy antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Run build to verify**

Run: `npm run build`
Expected: Exit code 0. (The Header links to `/academy`, `/advisory`, `/wellness`, which don't exist as routes yet — this is expected and resolved in Task 5; Next.js does not fail the build over `<Link>` targets that don't exist yet.)

- [ ] **Step 6: Commit**

```bash
git add lib/brand-units.ts components/Header.tsx components/Footer.tsx app/layout.tsx
git commit -m "Add brand-units data module and shared Header/Footer layout"
```

---

### Task 4: Landing page — Hero + brand unit cards

**Files:**
- Create: `components/Hero.tsx`
- Create: `components/BrandUnitCard.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `BrandUnit` type and `brandUnits` from `lib/brand-units.ts` (Task 3).
- Produces: `BrandUnitCard({ unit }: { unit: BrandUnit })` default export — used only here, but the prop shape (`{ unit: BrandUnit }`) is the same shape Task 5's `ComingSoon` component takes, for consistency.

- [ ] **Step 1: Create `components/Hero.tsx`**

```tsx
export default function Hero() {
  const steps = ["진단", "큐레이션/설계", "실행", "지속관리"];
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-connectx-navy sm:text-5xl">
        ConnectX
      </h1>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-lg font-medium text-slate-600">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-3">
            <span className="rounded-full bg-connectx-navy px-4 py-2 text-white">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span className="text-slate-400">→</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/BrandUnitCard.tsx`**

```tsx
import Link from "next/link";
import type { BrandUnit } from "@/lib/brand-units";

export default function BrandUnitCard({ unit }: { unit: BrandUnit }) {
  return (
    <Link
      href={`/${unit.slug}`}
      className="flex flex-col rounded-xl border border-slate-200 p-6 transition hover:border-connectx-accent hover:shadow-md"
    >
      <p className="text-sm font-medium text-slate-500">{unit.description}</p>
      <h3 className="mt-2 text-xl font-bold text-connectx-navy">
        {unit.name}
      </h3>
      <p className="mt-2 text-sm text-slate-600">({unit.connectPhrase})</p>
      {unit.position && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <p className="text-sm font-semibold text-connectx-accent">
            {unit.position}
          </p>
          <ul className="mt-2 space-y-1 text-xs text-slate-500">
            {unit.positionDetails?.map((detail) => (
              <li key={detail}>({detail})</li>
            ))}
          </ul>
        </div>
      )}
    </Link>
  );
}
```

- [ ] **Step 3: Replace `app/page.tsx`**

```tsx
import Hero from "@/components/Hero";
import BrandUnitCard from "@/components/BrandUnitCard";
import { brandUnits } from "@/lib/brand-units";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {brandUnits.map((unit) => (
            <BrandUnitCard key={unit.slug} unit={unit} />
          ))}
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 4: Validate visual direction with the frontend-design skill**

The Tailwind classes above (`connectx-navy` navy + `connectx-accent` sky-blue,
rounded pill process steps, bordered hover cards) are a concrete starting
point, not a final decision — per spec §"랜딩 페이지" the visual direction is
owned by the frontend-design skill, informed by `docs/harness/decisions.md`'s
"전문적/신뢰감 우선, Advisory의 B2B 포지셔닝 고려" tone.

Invoke the `frontend-design` skill and review `Hero.tsx`, `BrandUnitCard.tsx`,
and (from Task 3) `Header.tsx`/`Footer.tsx` against it — same design tokens,
so one pass covers all of them. Adjust typography, spacing, or color usage
directly in these files if the skill's guidance calls for it. Re-run
`npm run build` after any change.

- [ ] **Step 5: Run build to verify**

Run: `npm run build`
Expected: Exit code 0.

- [ ] **Step 6: Commit**

```bash
git add components/Hero.tsx components/BrandUnitCard.tsx app/page.tsx components/Header.tsx components/Footer.tsx
git commit -m "Build ConnectX landing page: hero process steps + brand unit cards"
```

---

### Task 5: Placeholder routes for Academy / Advisory / Wellness

**Files:**
- Create: `components/ComingSoon.tsx`
- Create: `app/academy/page.tsx`
- Create: `app/advisory/page.tsx`
- Create: `app/wellness/page.tsx`

**Interfaces:**
- Consumes: `BrandUnit` type and `brandUnits` from `lib/brand-units.ts` (Task 3).
- Produces: routes `/academy`, `/advisory`, `/wellness`, resolving the links `Header` (Task 3) and `BrandUnitCard` (Task 4) already point at.

- [ ] **Step 1: Create `components/ComingSoon.tsx`**

```tsx
import type { BrandUnit } from "@/lib/brand-units";

export default function ComingSoon({ unit }: { unit: BrandUnit }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="text-sm font-medium text-slate-500">{unit.description}</p>
      <h1 className="mt-2 text-3xl font-bold text-connectx-navy">
        {unit.name}
      </h1>
      <p className="mt-4 text-slate-600">({unit.connectPhrase})</p>
      <p className="mt-12 text-sm text-slate-400">페이지 준비 중입니다.</p>
    </main>
  );
}
```

- [ ] **Step 2: Create `app/academy/page.tsx`**

```tsx
import ComingSoon from "@/components/ComingSoon";
import { brandUnits } from "@/lib/brand-units";

export default function AcademyPage() {
  const unit = brandUnits.find((u) => u.slug === "academy")!;
  return <ComingSoon unit={unit} />;
}
```

- [ ] **Step 3: Create `app/advisory/page.tsx`**

```tsx
import ComingSoon from "@/components/ComingSoon";
import { brandUnits } from "@/lib/brand-units";

export default function AdvisoryPage() {
  const unit = brandUnits.find((u) => u.slug === "advisory")!;
  return <ComingSoon unit={unit} />;
}
```

- [ ] **Step 4: Create `app/wellness/page.tsx`**

```tsx
import ComingSoon from "@/components/ComingSoon";
import { brandUnits } from "@/lib/brand-units";

export default function WellnessPage() {
  const unit = brandUnits.find((u) => u.slug === "wellness")!;
  return <ComingSoon unit={unit} />;
}
```

- [ ] **Step 5: Run build to verify all 4 routes compile**

Run: `npm run build`
Expected: Exit code 0, route table lists `/`, `/academy`, `/advisory`, `/wellness`.

- [ ] **Step 6: Commit**

```bash
git add components/ComingSoon.tsx app/academy app/advisory app/wellness
git commit -m "Add placeholder routes for Academy, Advisory, Wellness"
```

---

### Task 6: Final integration verification + handoff update

**Files:**
- Modify: `docs/harness/handoff.md`

**Interfaces:**
- Consumes: all routes and components from Tasks 2-5.

- [ ] **Step 1: Full production build**

Run: `npm run build`
Expected: Exit code 0, route table shows exactly 4 routes: `/`, `/academy`, `/advisory`, `/wellness`.

- [ ] **Step 2: Start production server in the background**

```bash
npm run start -- -p 3100 &
sleep 2
```

- [ ] **Step 3: Curl-check each route for expected content**

```bash
curl -s http://localhost:3100/ | grep -o "ConnectX Academy"
curl -s http://localhost:3100/ | grep -o "ConnectX Advisory"
curl -s http://localhost:3100/ | grep -o "ConnectX Wellness"
curl -s http://localhost:3100/ | grep -o "SMB Infra & Security Transformation Partner"
curl -s http://localhost:3100/academy | grep -o "페이지 준비 중입니다"
curl -s http://localhost:3100/advisory | grep -o "페이지 준비 중입니다"
curl -s http://localhost:3100/wellness | grep -o "페이지 준비 중입니다"
```

Expected: Every command prints the matched string (non-empty output).

- [ ] **Step 4: Stop the server**

```bash
kill %1
```

- [ ] **Step 5: Append summary to `docs/harness/handoff.md`**

Append this entry (do not remove the existing 2026-08-18 entry from Task 1):

```markdown

## 2026-08-18 — Claude Code (개발/디자인팀장) — bootstrap 완료

- harness 공유 문서(direction/handoff/decisions) + marketing-lead 서브에이전트
  정의 완료.
- Next.js + TypeScript + Tailwind 프로젝트 셀파딩 완료. `/`, `/academy`,
  `/advisory`, `/wellness` 4개 라우트 빌드/구동 확인.
- 랜딩 페이지(`/`)는 캔버스 원문 그대로의 1차 버전 — 카피 다듬기 없음.
- 다음에 필요한 것: marketing-lead 서브에이전트를 실제로 호출해 Academy/
  Advisory/Wellness 각 페이지의 사이트맵·콘텐츠 기획을 받아 다음 spec 진행.
```

- [ ] **Step 6: Commit**

```bash
git add docs/harness/handoff.md
git commit -m "Verify build and routes; log handoff for harness bootstrap"
```
