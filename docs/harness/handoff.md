# Handoff Log

append-only. 각 항목: 날짜 / 담당(팀) / 무엇을 했는지 / 다음에 필요한 것.

## 2026-08-18 — Claude Code (개발/디자인팀장)

- harness 구조(direction/handoff/decisions 문서, marketing-lead 서브에이전트)와
  Next.js+Tailwind 랜딩 페이지 1차 버전을 구현 시작.
- 다음에 필요한 것: marketing-lead를 실제로 호출해 Academy/Advisory/Wellness
  각 페이지의 사이트맵과 콘텐츠 기획을 받는 것 (다음 spec).

## 2026-08-18 — Claude Code (개발/디자인팀장) — bootstrap 완료

- harness 공유 문서(direction/handoff/decisions) + marketing-lead 서브에이전트
  정의 완료.
- Next.js + TypeScript + Tailwind 프로젝트 셀파딩 완료. `/`, `/academy`,
  `/advisory`, `/wellness` 4개 라우트 빌드/구동 확인.
- 랜딩 페이지(`/`)는 캔버스 원문 그대로의 1차 버전 — 카피 다듬기 없음.
- 다음에 필요한 것: marketing-lead 서브에이전트를 실제로 호출해 Academy/
  Advisory/Wellness 각 페이지의 사이트맵·콘텐츠 기획을 받아 다음 spec 진행.

## 2026-08-18 — marketing-lead (마케팅/홍보팀장)

- Academy/Advisory/Wellness 3개 상세 페이지 콘텐츠 기획 완료. 산출물:
  `docs/harness/marketing/academy.md`, `advisory.md`, `wellness.md`.
- 각 문서에 대상 페이지/목적/핵심 메시지/정보구조(섹션 순서)/섹션별
  카피 초안/톤앤매너 메모 포함. `lib/brand-units.ts`의 슬로건·connect
  phrase·Advisory position 원문은 변경 없이 그대로 앵커로 사용했고,
  ConnectX 마스터 브랜드 4단계(진단→큐레이션/설계→실행→지속관리)를 각
  유닛 서비스 흐름에 맞게 재해석해 섹션으로 반영.
- 3개 페이지 모두 랜딩 페이지 카드 블러브보다 한 단계 더 들어가도록
  설계: 문제 제기 → 연결 3축 설명 → (유닛별 특화 섹션) → 프로세스 →
  신뢰 요소 → FAQ → CTA 흐름을 공통 뼈대로 삼되, Academy는 개인/기업
  2트랙, Advisory는 Position 상세 설명, Wellness는 부모님/직장인
  페르소나 시나리오를 각각 추가.
- 콘텐츠 갭(다음 단계에서 반드시 확인 필요): 세 페이지 모두 구체
  커리큘럼/서비스 상품/제품 카테고리, 강사·팀·전문가 프로필, 실적·
  레퍼런스·인증 정보는 사업 측 원본 자료가 없어 각 문서에 도메인
  기반 placeholder로 표시해 두었다. 각 파일의 "[콘텐츠 갭 — 확인
  필요]" 표시 부분을 사업 담당자 확인 후 교체할 것.
- Wellness는 위탁판매 모델·건강기능식품 표시광고 관련 문구 리스크를
  톤앤매너 메모에 별도로 남겼으니 실제 카피 확정 전 법무/컴플라이언스
  확인 필요.
- 다음에 필요한 것: 개발/디자인팀장(Claude Code)이 이 3개 기획 문서를
  입력으로 받아 `/academy`, `/advisory`, `/wellness` 실제 페이지 구현
  spec을 진행. placeholder로 남긴 콘텐츠 갭은 별도로 사업 담당자에게
  확인 요청 필요.

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

## 2026-08-18 — Claude Code → Codex(CTO) 인계: 이미지 작업

사용자가 "텍스트 위주라 단조롭다"는 피드백을 두 번 주었다. 1차로 Claude
Code가 브랜드 컬러 기반 커스텀 SVG 일러스트/아이콘을 코드로 직접 그려
추가했지만(아래 "적용된 것" 참고), 그래도 부족하다는 피드백을 받았다.
Claude Code는 이미지 생성 도구가 없어(사진·AI 생성 이미지를 만들 수
없음) 사용자가 이 작업을 **Codex가 담당**하는 것으로 역할을 분리하기로
결정함 (`docs/harness/decisions.md` 참고).

**이미 적용된 것 (SVG, Claude Code):**
- `public/logo.png` — 사용자가 제공한 로고 파일, Header 좌상단에 사용 중
- `components/illustrations/HeroIllustration.tsx` — 추상 기하학 SVG
  일러스트 4종 (landing/academy/advisory/wellness), 각 히어로 섹션에 삽입
- `components/icons/AxisIcon.tsx` — 3축 연결 카드용 소형 SVG 아이콘 3종

**Codex에게 요청하는 것 — 실제 이미지(사진/AI 생성 이미지 등) 슬롯:**

| 페이지 | 위치 | 권장 형태 |
|---|---|---|
| 랜딩(`/`) | Hero 섹션, 현재 SVG 마크 자리 또는 그 주변 | 브랜드 톤(전문적/신뢰감)에 맞는 인프라·보안·연결을 은유하는 이미지 |
| Academy(`/academy`) | Hero 우측 (현재 SVG 자리), `components/detail/Hero.tsx` | 교육/실습 현장을 연상시키는 이미지 |
| Advisory(`/advisory`) | Hero 우측 (현재 SVG 자리) | 기업 컨설팅/인프라 진단을 연상시키는 이미지 |
| Wellness(`/wellness`) | Hero 우측 (현재 SVG 자리) | 건강기능식품/맞춤 추천을 연상시키는 이미지 (의약품 오인 표현·이미지 지양) |

**전달 방법 제안:** 이미지 파일을 `public/images/`에 넣고(예:
`public/images/academy-hero.jpg`), 어떤 파일을 어느 자리에 썼는지
`docs/harness/handoff.md`에 append로 알려주면 Claude Code가 다음 세션에서
`components/detail/Hero.tsx` 등에 배치를 이어받는다. 혹은 Codex가 직접
코드까지 수정해도 무방함 — 이 저장소는 공유 저장소이므로 커밋 히스토리로
서로 확인 가능.

## 2026-08-18 — Claude Code (개발/디자인팀장) — 이미지 배치 완료

- 사용자가 `sources/images/`에 4장(ChatGPT 생성 사진, 1672x941)을 직접
  전달. 내용 기반으로 매칭: 랜딩=대시보드 협업, Academy=서버랙 앞
  멘토링, Advisory=인프라 아키텍처 브리핑, Wellness=영양제 상담.
- WebP로 변환/압축(장당 ~1.7MB → ~45KB) 후 `public/images/hero-*.webp`에
  배치. 랜딩 Hero는 프로세스 4단계 아래 21:9 배너로, Academy/Advisory/
  Wellness Hero는 기존 2단 레이아웃의 우측 SVG 자리를 4:3 사진 카드로
  교체(`HeroContent.illustration` → `heroImage: {src, alt}`).
- 기존 SVG 히어로 일러스트(`components/illustrations/HeroIllustration.tsx`)
  는 삭제 — 3축 카드 아이콘(`AxisIcon`)은 그대로 유지.
- 부수적으로 발견한 버그도 같이 수정: 모바일 좁은 화면에서 Header 로고가
  flex 컨테이너에 눌려 찌그러져 보이던 문제(`shrink-0` 누락) 수정, nav도
  `flex-wrap` 처리해 좁은 화면에서 넘치지 않게 함.
- 다음에 필요한 것: 없음 — 이번 요청 범위는 완료. 사용자가 실제 배포
  화면에서 다시 확인 예정.

## 2026-08-19 — Claude Code (개발/디자인팀장) — Figma 랜딩페이지 리디자인 반영

- 사용자가 Figma에서 직접 디자인한 랜딩페이지 파일(`connectx-landing-redesign`
  프레임, fileKey `QaU1EUoJTCs6dGoYaH09Mf`)을 Figma MCP(`get_design_context`)로
  전 구간(nav-bar/hero/process/bento/academy·advisory·wellness-highlight/
  trust/faq/footer) 가져와 코드로 이식.
- 다크 테마(bg `#050714`/`#0a0d28` 교차, 카드 `#11142f`, 보더 `#1d234a`,
  텍스트 `#94a3b8`/`#64748b`, 기존 `connectx-blue`/`connectx-teal`는 Figma
  값과 정확히 일치해 그대로 재사용)로 전면 교체. `components/landing/*`
  9개 컴포넌트 신설, `app/page.tsx` 재작성, `Header`/`Footer`도 다크
  테마로 교체(사이트 전역 적용).
- 이미지 5장(hero-bg, academy/advisory/wellness 하이라이트, footer-cta-bg)과
  아이콘 10종(SVG)을 Figma 에셋 URL에서 다운로드해 `public/images/landing/`,
  `public/icons/landing/`에 커밋(Figma 임시 URL은 7일 후 만료되므로 코드에는
  로컬 경로만 사용). PNG는 WebP로 변환(장당 1.0~1.2MB → 40~70KB).
- 폰트: Figma 원본은 헤드라인에 `Wittgenstein`(Google Fonts 미제공, 한글
  글리프도 없어 실질적으로 원본에서도 자동 폴백됐을 폰트)을 지정하고 있어
  본문과 동일하게 Manrope(Latin) + Noto Sans KR(한글 폴백) 조합으로 통일.
  둘 다 `next/font/google`로 로드.
- `next.config.mjs`의 `output: "export"`(정적 export/GitHub Pages 배포)
  제약을 확인해 `next/image` 대신 기존 관례대로 순수 `<img>` 태그 사용.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 9페이지 전부
  생성 성공, dev 서버로 `/`·`/academy`·`/advisory`·`/wellness` 전부 200
  확인. 브라우저 스크린샷은 이 실행 환경에 헤드리스 브라우저용 시스템
  라이브러리(`libnspr4` 등)가 없고 sudo 권한도 없어 실행하지 못함 — 사용자가
  실제 화면에서 육안 확인 필요.
- 알아둘 것(다음에 필요한 것):
  1. `/academy`, `/advisory`, `/wellness`는 기존 라이트 테마
     `components/detail/*` 그대로 — 이제 다크 Header/Footer 사이에 라이트
     본문이 끼는 구조가 됨. 통일감이 필요하면 상세 페이지도 다크 테마로
     맞추는 후속 작업 필요(범위 밖이라 이번엔 손대지 않음).
  2. Footer의 Company 링크(소개/채용/문의하기)는 대응하는 페이지가 없어
     `href="#"` placeholder로 남김 — 실제 라우트/앵커 결정 필요.
  3. Header "상담 신청"과 Footer "무료 상담 신청" CTA는 전용 상담 신청
     페이지가 없어 임시로 `/advisory`로 연결 — 별도 상담 페이지가 생기면
     교체 필요.

## 2026-08-19 — Claude Code (개발/디자인팀장) — 상세페이지(academy/advisory/wellness) 다크 테마 통일

- 사용자 요청("Figma에서 디자인한 테마로 변경")에 따라 `components/detail/*`
  10개 섹션 컴포넌트 전부를 랜딩페이지와 동일한 다크 테마 토큰(`bg-cx-bg`/
  `bg-cx-bg-alt` 교차, `bg-cx-card`, `border-cx-border`, `text-cx-muted`,
  `connectx-blue`/`connectx-teal` 액센트)으로 재작성. Figma에는 이 상세
  페이지들의 별도 디자인이 없어(파일에 랜딩 프레임 1개만 존재) 랜딩에서
  이미 이식한 디자인 시스템을 그대로 확장 적용한 것 — 별도 Figma 조회 없음.
  - `DetailPage.tsx`에 `Tone`(`"bg" | "bg-alt"`) 타입을 추가하고 섹션
    배열 인덱스 기준으로 교차 배경을 자동 결정해 각 하위 컴포넌트에 전달
    (콘텐츠 데이터 구조는 페이지마다 섹션 구성이 달라 타입별 고정 배경
    대신 인덱스 기반 교차를 선택).
  - `FaqSection.tsx`는 정적 dt/dd에서 랜딩과 동일한 아코디언(클릭 토글)
    형태로 업그레이드 — `chevron-down.svg`(랜딩에서 이미 받아온 아이콘)
    재사용, client 컴포넌트로 전환.
  - CTA 버튼은 기존처럼 `<a>` 태그(외부 링크 `target=_blank` 처리 유지 —
    Wellness의 네이버 스마트스토어 링크 등)를 유지하고 시각 스타일만
    그라디언트 버튼으로 교체(랜딩 `PrimaryButton`과 동일 스타일이지만
    `Link` 강제 없이 로컬 스타일로 재구현).
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 9페이지 성공,
  dev 서버로 `/academy`·`/advisory`·`/wellness` 200 확인 + HTML에
  `bg-cx-bg`/`bg-cx-bg-alt`/`text-white` 클래스 정상 반영 확인.
- 다음에 필요한 것: 없음 — 요청 범위(다크 테마 통일) 완료. 사용자가
  실제 화면에서 확인 예정. Footer Company 링크(`#`)와 상담 신청 CTA
  전용 페이지는 사용자가 "추후 만들 예정"이라고 확인함 — 이번 세션에서는
  손대지 않음.
