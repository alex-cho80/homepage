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

## 2026-09-29 — marketing-lead (마케팅/홍보팀장)

- 사용자 피드백("상담신청/무료 진단 신청 CTA가 너무 많다")에 따라 전 페이지
  CTA 인벤토리를 정리. 산출물: `docs/harness/marketing/cta-cleanup.md`.
- 결정: 페이지당 "신청" CTA는 전역 Header/Footer + 페이지 Hero + 하단
  마무리 1개, 총 4개(그중 Hero/하단 2개는 같은 액션의 반복 노출)로 통일.
  서로 다른 문구로 액션을 쪼개던 2차 버튼 3개 제거 대상으로 지정: Academy
  하단 secondary("커리큘럼 자료 요청"), Advisory 하단 secondary("담당자와
  상담 예약"), Wellness 하단 secondary("뉴스레터/소식 구독" — 실제 구독
  인프라 없이 "#"로 방치되어 있던 미기능 CTA).
- 유지하기로 한 각 CTA(전역/랜딩/Academy/Advisory/Wellness)별로 mailto
  subject·body 초안 작성 완료 — 수신 fortunecho@naver.com, 톤앤매너는
  기존 결정사항(전문적/신뢰감) 준수.
- 참고: 이번 세션에서는 프로젝트 전용 marketing-lead 서브에이전트 호출이
  하니스 제약으로 실패(커스텀 agent type 미등록 + API 연결 에러)해
  Claude Code(개발팀장)가 이 역할을 겸해 기획 문서를 직접 작성함.
- 다음에 필요한 것: 개발팀장이 위 문서의 "개발팀장에게 인계" 섹션을 입력으로
  받아 mailto 링크 구현 및 CTA 3개 제거 진행.

## 2026-09-29 — Claude Code (개발/디자인팀장) — CTA mailto 전환 완료

- `docs/harness/marketing/cta-cleanup.md` 기획안대로 구현:
  - `lib/mailto.ts` 신설 — 수신 주소(fortunecho@naver.com)와 페이지별
    mailto 링크(subject+body 인코딩) 5종을 공용 상수로 정의. 클릭 시
    사용자 기본 이메일 클라이언트(Gmail/Outlook 등)가 뜨는 방식.
  - Header/Footer의 "상담 신청"/"무료 상담 신청"을 임시 `/advisory` 링크
    대신 공용 mailto로 교체.
  - 랜딩 Hero "무료 진단 신청"을 mailto로 교체.
  - Academy/Advisory/Wellness Hero의 신청 CTA를 `#cta` 앵커 대신 mailto로
    직접 연결(스크롤 후 재클릭하는 2단계 흐름 제거). Academy는 기존
    CTA 배열 순서가 다른 두 페이지와 달리 신청 버튼이 2번째(보조 스타일)
    였던 것을 발견해 순서를 맞춰 신청 버튼을 1차(그라디언트) 버튼으로
    통일.
  - 하단 CtaSection의 미연결("#") 2차 버튼 3개(Academy "커리큘럼 자료
    요청", Advisory "담당자와 상담 예약", Wellness "뉴스레터/소식 구독")
    제거 — `secondaryLabel`/`secondaryHref`가 이미 optional 타입이라
    타입 변경 없이 데이터만 삭제.
  - Wellness 하단 primary("스마트스토어에서 구매하기")는 실제 외부
    구매 링크라 그대로 유지.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 9페이지 전부
  성공, `out/` 산출물에서 각 페이지 mailto 링크가 올바른 subject/body로
  인코딩된 것 직접 확인.
- 다음에 필요한 것: 없음 — 요청 범위(CTA 정리 + mailto 연결) 완료. 실제
  메일 클라이언트 동작은 사용자가 브라우저에서 클릭해 직접 확인 필요
  (이 실행 환경은 헤드리스 브라우저 실행 불가).

## 2026-09-30 — Claude Code (개발/디자인팀장) — 외부 UX 감사 보고서 반영, v1.0 태그

- 사용자가 OpenAI Astra 모델로 진행한 외부 UX 감사 보고서를 첨부. 원문은
  `docs/harness/ux-audit-20260930.md`에 보관. 큰 갈림길 2건은 사용자에게
  직접 확인 후 진행(결정 사항은 `docs/harness/decisions.md` 참고):
  1. mailto 방식 유지 (실제 폼 서비스로 전환 안 함 — 정적 export라 외부
     제출 서비스 연동이 추가로 필요하기 때문).
  2. Advisory 대표 서비스명을 "외부 기술기획실"에서 "IT 인프라·보안
     자문"으로 변경(브랜드 H1/positionBadge는 유지, 영문 뱃지만 한국어화).
- 반영한 항목:
  - 깨진 `#` 링크 정리: Footer의 소개/채용(콘텐츠 없어 제거), 이용약관
    (제거 — 법률 문서 임의 작성 회피), 문의하기(mailto로 전환).
  - **개인정보처리방침은 제거하지 않고 실제 페이지(`/privacy`)로 신규
    작성**해 Footer에 다시 연결 — 코드 리뷰 결과, mailto 폼 확대로 개인
    정보(Wellness는 건강 관련 고민까지) 수집이 늘어난 시점에 개인정보
    처리방침 없이 전부 제거하면 PIPA 상 문제 소지가 있다는 지적을 받아
    최소한의 정직한 기술적 데이터 처리 설명(서버 저장 없음, 이메일로만
    수집, 제3자 제공 없음 등)으로 신규 작성. 사업자 등록 정보 확정 후
    사업 담당자 검토 필요하다는 단서를 페이지 하단에 명시.
  - Wellness "1분 체크리스트" 안내와 스마트스토어 구매 버튼의 기대 불일치
    수정 — 체크리스트 문구 삭제, CTA를 "선택 기준" 안내로 재작성, 제거했던
    2차 CTA를 "제품 문의하기"(mailto)로 되살림.
  - 과장/미검증 문구 다수 순화(리포트 8.2 표 기준 + 동일 톤으로 확장
    적용): "유전적 건강 데이터", "바이오 데이터 모델링", "진짜 처방
    패키지", "전문가가 검수한", "국내 최대 규모 테크 기업", "리스크를
    원천 제거", "ConnectX Platform"(플랫폼 오인 소지) 등.
  - 홈 정보 순서 재배치: Hero → Bento(서비스 선택) → 유닛별 하이라이트 →
    Trust → Process(방법론, 기존엔 최상단) → FAQ 순으로 변경.
  - 홈 Hero 메쉬 도식에 빠져있던 Advisory 노드 추가(기존엔 Academy/
    Wellness만 있고 가운데 "ConnectX Platform" 큰 허브 — 플랫폼 오인 소지
    있어 허브 제거하고 3개 동등 노드로 재구성), 각 노드를 실제 링크로
    변경(기존엔 `href` 필드가 있어도 렌더링에서 안 쓰이던 죽은 필드).
  - 홈 Hero 1차/2차 CTA 우선순위 교체: "서비스 둘러보기"를 주 버튼,
    "무료 진단 신청"(mailto)을 보조 버튼으로 — 목적이 다른 방문자에게
    첫 화면에서 곧바로 특정 진단을 제안하면 모호하다는 지적 반영.
    `docs/harness/marketing/cta-cleanup.md`에 갱신 노트 추가.
  - Advisory 서비스 항목(offerings)에 결과물 예시 보강(현황 분석 리포트,
    정책·점검표, 요구사항 비교표 등), "상시 자문"을 "정기 자문(리테이너)"
    으로 구체화.
  - Academy 개인/기업 문의 경로 분리 — 기존엔 "기업 교육 담당자" 카드가
    실수로 Advisory 페이지(`/advisory`)로 연결되던 버그를 발견해 수정,
    개인/기업 각각 별도 mailto(`academyIndividualMailto`/
    `academyCorporateMailto`)로 연결.
  - 페이지별 브라우저 탭 타이틀을 브랜드명 대신 실제 서비스 설명으로 교체.
  - `/code-review` 실행 결과 반영: Hero/CtaSection의 CTA가 배열 인덱스
    (`i === 0`)로 primary/secondary 스타일을 결정하던 구조를 타입 필드
    (`variant: "primary" | "secondary"`)로 교체 — 지난 세션에서 Academy
    카드 순서를 수동으로 맞춰야 했던 것과 동일한 버그 클래스를 근본 수정.
    Hero.tsx/CtaSection.tsx가 중복 정의하던 버튼 스타일 클래스는
    `components/detail/ctaButtonStyles.ts` 공용 상수로 통합. `lib/mailto.ts`
    8개 export가 반복하던 템플릿도 `buildInquiryMailto` 헬퍼로 통합.
  - 반영하지 않은 항목(실 데이터/법률 검토 필요해 보류): 커리큘럼 상세
    정보, 자문 결과물의 구체적 SLA(횟수/응답시간), Wellness 전문가 검수
    체계 실체화, 실제 문의 폼(Formspree 등) 전환, 이용약관 신규 작성.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지(신규
  `/privacy` 포함) 전부 성공. `out/` 산출물에서 CTA variant 스타일,
  mesh 노드 링크, footer 개인정보처리방침 링크 직접 확인.
- git: 커밋 후 push, `v1.0` 태그 생성 완료 (아래 커밋 해시 참고).
- 다음에 필요한 것: "반영하지 않은 항목"에 열거한 실 데이터/법률 확인
  사항을 사업 담당자가 채워야 함. 실 문의 폼 전환은 Formspree 등 외부
  서비스 가입이 필요해 사용자 결정 대기 중.

## 2026-10-01 — Claude Code (개발/디자인팀장) — npm 취약점 재검토 + 콘텐츠 갭 보강

사용자가 "새로운 취약점 검토"와 "남겨진 미해결 항목(커리큘럼 세부 정보
등) 둘 다 진행"을 요청. 세션이 한 번 중단됐다가 2026-10-01에 이어서 완료.

- npm 취약점 재검토: `npm audit` 직접 실행해 GitHub이 push 시 경고한
  "31건"의 실체 확인 — 신규/별개 취약점이 아니라 기존 2026-08-18
  결정에서 다룬 `next`/`postcss`/`glob`과 같은 근본 원인 집합을 GitHub
  Dependabot이 개별 CVE 단위로 더 세분화해서 보여준 것(npm audit 기준
  7개 패키지 그룹, 개별 CVE 기준 약 40건). `js-yaml`, `brace-expansion`이
  새로 눈에 띄었으나 `npm ls`로 추적한 결과 둘 다 `eslint`/
  `eslint-config-next`의 개발용 전이 의존성이라 빌드/린트 시점에만
  실행되고 배포되는 정적 번들에는 포함되지 않음. `next` 취약점 묶음에
  RCE 등급 2건이 포함되어 있었으나 전부 self-host 서버 기능(Server
  Actions, Image Optimization API 등)에서만 발동하며, 이 사이트는
  `output: "export"`로 정적 HTML만 배포하므로 실제 공격면 없음. 결론:
  기존 방치 결정 유지, 코드 변경 없음. 상세 근거는
  `docs/harness/decisions.md`의 2026-09-30 항목(재검토) 참고.
- "반영하지 않은 항목" 콘텐츠 갭 보강 완료:
  - Academy 커리큘럼(`lib/detail-pages/academy.ts` offerings 5개 항목)에
    대상/방식/기간 추가. note도 "대상/기간/방식 포함" 언급으로 갱신.
  - Advisory 정기 자문(`lib/detail-pages/advisory.ts` offerings 마지막
    항목)에 "월 1~2회 정기 미팅" 예시 빈도 추가(정확한 횟수는 계약 시
    확정한다는 단서는 유지 — 실제 운영 SLA를 확정 선언하지 않음).
  - Wellness의 막연한 "전문가가 검수" 류 표현을 "식품의약품안전처
    표시기준 준수 여부, 원료·기능성 표시, 소비기한" 등 확인 가능한
    구체 기준으로 전부 교체 — connectAxes "전문가 연결" 축 본문과 trust
    섹션 포인트 둘 다 동일 톤으로 통일(이전엔 connectAxes만 반영되어
    페이지 내 구체성 수준이 섞여 있었음, 이번에 trust 섹션도 맞춤).
- 반영하지 않은 항목(여전히 보류): 이용약관(terms) 신규 작성 — 이번
  요청 범위에 없어 사용자에게 확인하지 않음. 실제 폼 서비스(Formspree
  등) 전환도 기존 결정대로 보류.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 전부
  성공, `out/` 산출물에서 Academy 커리큘럼 상세·Advisory SLA 문구·
  Wellness 구체 기준 문구가 올바르게 렌더링된 것 직접 확인.
- 다음에 필요한 것: 없음 — 이번 요청 범위(취약점 재검토 + 콘텐츠 갭)
  완료. 이용약관 작성 여부는 사용자가 필요시 별도 요청.

## 2026-10-01 — Claude Code (개발/디자인팀장) — Academy/Advisory/Wellness 시너지 루프 섹션 추가

- 사용자가 `ConnectX_사업계획서_v2.pdf`(Wellness 위탁판매 사업계획서)를 공유하며
  "홈페이지에서 세 사업이 연관성 없어 보인다, 서로 시너지 내는 사이클 구조를
  추구한다"고 지적.
- 사업계획서를 검토해 실제 연결 논리 2건을 발견: (1) 현재 사실 — Wellness 1차
  타깃(IT·사무직 직장인)이 Academy 수강생/Advisory 고객사 임직원과 겹치도록
  의도적으로 설계됨 (Ⅰ-2, Ⅲ-3). (2) 장기 지향(3단계) — Advisory의 보안·개인정보
  거버넌스 역량이 Wellness의 민감정보(검진 결과) 처리 핵심 해자로 지목됨(Ⅲ-2
  Four Pillars, SWOT). 단, (2)는 사업계획서 자체가 "3년차 이후" 비전으로 명시한
  것이라 현재형으로 쓰면 과장 — 2026-10-01 "콘텐츠 갭 처리 원칙"과 동일하게 현재/
  비전을 분리해서 반영하기로 사용자에게 확인(둘 다 반영).
- 구현: 홈페이지에 신규 `LoopSection`(`components/landing/LoopSection.tsx`) 추가,
  3개 VerticalHighlight 뒤·TrustSection 앞에 배치. 3단계 카드(Academy→Advisory→
  Wellness, "같은 사람·같은 신뢰"라는 현재 사실)와 점선 테두리로 구분한 "앞으로의
  방향"(Advisory 보안 역량 → Wellness 건강데이터 보호로 확장) 콜아웃을 분리해서
  구성. 기획 메모는 `docs/harness/marketing/synergy-loop.md`에 기록.
- 홈 FAQ "ConnectX는 어떤 회사인가요?" 답변에도 "세 서비스는 같은 사람들의 신뢰에서
  출발해 서로 연결되어 있으며" 한 문장 추가.
- 적용 범위는 홈페이지로 한정 — Academy/Advisory/Wellness 상세 페이지는 이번에
  손대지 않음(사용자 지적이 홈페이지 대상이었음).
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공, `out/`
  산출물에서 새 섹션 문구 렌더링 확인.
- 다음에 필요한 것: 아직 커밋/푸시 전 — 사용자 확인 후 진행 예정. 상세 페이지에도
  같은 연결 서사를 반영할지는 사용자가 필요시 별도 요청.

## 2026-10-01 — Claude Code (개발/디자인팀장) — 모바일 GNB 햄버거 메뉴 전환 (v1.1 이후 후속)

- v1.1에서 Header의 `order`/`w-full` 기반 2행 레이아웃으로 수정했으나, 사용자가
  실제 스마트폰에서 여전히 "상담 신청" 버튼이 줄바꿈된다고 재지적. 로고 원본
  파일(`public/logo-dark.png`, 398×92)과 버튼 폭을 계산해보니 320~360px 폭
  기기에서는 여유 공간이 10px 안팎으로 폰트 렌더링 차이만으로도 깨질 수 있는
  구조였음 — 여백 조정 같은 미세 수정으로는 재발 가능성이 높다고 판단.
- 사용자에게 두 가지 방안(①햄버거 메뉴 도입 ②현재 구조 유지하며 치수만 축소)을
  제시, ①(햄버거 메뉴, 추천안)으로 확정.
- 구현: `components/Header.tsx`를 클라이언트 컴포넌트로 전환(`useState`로 열림
  상태 관리). 모바일 1행에는 로고 + "상담 신청" 버튼(항상 노출, CTA는 1탭 접근
  유지) + 햄버거 아이콘만 배치. Academy/Advisory/Wellness 링크는 데스크톱
  (`sm:` 이상)에서는 기존처럼 인라인 노출, 모바일에서는 햄버거 탭 시 헤더 바로
  아래 드롭다운 패널로 펼쳐지는 구조로 변경. 햄버거/X 아이콘은 별도 에셋 없이
  인라인 SVG로 구현(기존 아이콘 세트에 메뉴 아이콘 없었음). 링크 클릭 시
  자동으로 메뉴 닫힘(App Router가 레이아웃을 유지한 채 클라이언트 네비게이션을
  하므로 상태 리셋 필요).
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공, `out/`
  산출물에서 초기 닫힘 상태의 aria-label/숨김 클래스 정상 렌더링 확인(실제 탭
  인터랙션은 헤드리스 브라우저 불가로 사용자가 직접 확인 필요).
- 다음에 필요한 것: 사용자가 실제 모바일 기기에서 햄버거 메뉴 동작(열기/닫기,
  링크 탭 시 자동 닫힘) 확인 필요.

## 2026-10-01 — Claude Code (개발/디자인팀장) — GNB "상담 신청" 버튼 제거

- 사용자 요청: GNB(헤더)에서 "상담 신청" 버튼을 없애는 게 맞을 것 같다.
- `components/Header.tsx`에서 CTA(`<a href={generalInquiryMailto}>`)를 제거하고
  미사용 import도 정리. 데스크톱은 로고—네비게이션 2개 요소로, 모바일은
  로고—햄버거 2개 요소로 단순화. Footer/랜딩 Hero/각 상세 페이지 CTA는
  그대로 유지되어 신청 경로 자체는 사이트에 계속 존재함(GNB 중복만 제거).
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공, `out/`
  산출물에서 `<header>` 태그 범위 내 "상담 신청" 텍스트가 더 이상 없음을 확인.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중.

## 2026-10-01 — Claude Code (개발/디자인팀장) — Footer CTA 배너 제거

- 사용자 요청: 페이지 하단 "필요한 서비스가 궁금하신가요? / 무료 상담 신청" 배너
  영역을 없애는 게 맞는 것 같다.
- `components/Footer.tsx` 상단의 배경 이미지 + 헤드라인 + 설명 + CTA 버튼 블록
  전체를 제거하고, 남은 하단부(로고 소개, Services/Company 링크, 저작권·
  개인정보처리방침)만 유지. 제거된 영역에서만 쓰이던 배경 이미지
  (`public/images/landing/footer-cta-bg.webp`, 다른 곳에서 미사용 확인 후
  git rm으로 삭제)도 함께 정리.
- 결과적으로 사이트 전체에서 "신청/상담" CTA는 Hero(랜딩 1곳) + 각 서비스 상세
  페이지(Hero + 하단, 2곳)로만 남음 — 전역 Header/Footer 중복 CTA는 이번과
  지난 GNB 제거 건으로 모두 정리됨.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공, `out/`
  산출물에서 해당 문구가 더 이상 없음을 확인.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중.

## 2026-10-01 — Claude Code (개발/디자인팀장) — 모바일 CTA 버튼 사이즈 축소

- 사용자 지적: 랜딩(서비스 둘러보기/커리큘럼 살펴보기/Advisory 자세히 보기/맞춤
  추천 받기)과 각 상세 페이지의 파란색 신청 버튼이 모바일에서 크게 보임.
- 원인: 버튼 패딩/폰트가 전부 고정값(`px-7 py-3.5 text-base`류)이라 데스크톱
  기준 사이즈가 모바일에도 그대로 적용되고 있었음 — 반응형 분기 없음.
- 수정: `px-5 py-2.5 text-sm` (모바일) → `sm:px-7 sm:py-3.5 sm:text-base|text-[15px]`
  (데스크톱, 기존 사이즈 그대로 유지) 패턴을 아래 3곳에 적용:
  - `components/landing/PrimaryButton.tsx` (VerticalHighlight CTA 3개)
  - `components/landing/HeroSection.tsx` (랜딩 Hero 버튼 2개)
  - `components/detail/ctaButtonStyles.ts` (Academy/Advisory/Wellness
    Hero+하단 CTA 공용 스타일 — 이 한 파일 수정으로 3개 상세 페이지 전부 반영)
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공, `out/`
  산출물에서 4곳 전부 `px-5 py-2.5 text-sm ... sm:px-7 sm:py-3.5` 클래스 렌더링
  확인.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중.

## 2026-10-01 — Claude Code (개발/디자인팀장) — 랜딩 모바일 레이아웃 정리 (BentoSection 고정 높이 버그)

- 사용자가 "Advisory 자세히 보기/맞춤 추천 받기 버튼이 여전히 커 보인다 + 전체적
  으로 모바일이 지저분하다"고 재지적. 라이브 사이트(www.connectx.kr)를 직접
  curl로 확인한 결과 4개 버튼 전부 `px-5 py-2.5 text-sm ... sm:px-7 sm:py-3.5`
  클래스가 정확히 서버에 반영돼 있었음 — 버튼 자체는 재발 버그가 아니라 브라우저/
  CDN 캐시 혹은 체감(이미지·카드가 큰 섹션 안에 있어 상대적으로 커 보임) 문제일
  가능성이 높음.
- 대신 `grep -rn 'h-\[' / 'text-\[2-9...px\]'`로 전체 컴포넌트를 스캔해 실제
  반응형 버그를 발견: `components/landing/BentoSection.tsx`의 카드가 전체
  코드베이스에서 유일하게 모바일 분기 없는 고정 `h-[500px]`를 쓰고 있었음 —
  좁은 화면에서 모든 화면폭에 동일한 500px를 강제해, 내용(헤드라인+설명+칩)이
  줄바꿈으로 늘어나면 카드 안에서 잘리거나 어색한 빈 공간이 생기는 구조.
  태그라인도 `text-[28px]` 고정이라 모바일에서 축소 없이 그대로 적용됨.
- 수정:
  - `BentoSection.tsx`: `h-[500px] p-10` → `p-6 sm:h-[500px] sm:p-10` (모바일은
    내용에 맞춰 높이 자동, 데스크톱은 기존 유지). 태그라인
    `text-[28px]` → `text-xl sm:text-[28px]`.
  - `TrustSection.tsx` 카드: `p-10` → `p-6 sm:p-10`
  - `ProcessSection.tsx`(랜딩) 카드: `p-8` → `p-6 sm:p-8`
  - `LoopSection.tsx` 3단계 카드 + "앞으로의 방향" 박스: `p-8` → `p-6 sm:p-8`
  (모바일 카드 패딩을 전반적으로 줄여 좁은 화면에서 체감 여백을 확보 — 패딩이
  클수록 본문 영역이 좁아져 줄바꿈이 늘고 더 빽빽하고 "지저분해" 보이는 역설적
  효과가 있었음.)
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공, `out/`
  산출물에서 `sm:h-[500px] sm:p-10`, `sm:text-[28px]`, `p-6 sm:p-10/p-8` 클래스
  전부 렌더링 확인.
- 다음에 필요한 것: 사용자가 실제 모바일에서 다시 확인 — 그래도 "Advisory
  자세히 보기" 버튼이 커 보이면 캐시 문제이니 강력 새로고침/시크릿창으로
  재확인 요청 필요.

## 2026-10-01 — Claude Code (개발/디자인팀장) — VerticalHighlight "바로가기" 버튼 제거 + ui-ux-pro-max 스킬 기반 점검

- 사용자가 스크린샷(커리큘럼 살펴보기/Advisory 자세히 보기/맞춤 추천 받기 버튼)과
  함께 "메인페이지에서 바로가기를 빼는 게 나을 것 같다"고 요청, 동시에
  "ui/ux pro max skill 사용해서 수정 + 전반적으로 pc/mobile ui/ux 재검토"
  요청.
- **스킬 호출 관련 메모**: `Skill({skill: "ui-ux-pro-max"})` 및
  `project:ui-ux-pro-max` 둘 다 "Unknown skill" 에러 — 이전 세션에서
  `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill`가
  "/plugin isn't available"로 실패했음에도 한 번 "스킬 발견됨" 알림이 떴던
  잔재로 추정. 실제로는 `/home/devops/project/.claude/skills/ui-ux-pro-max/`에
  SKILL.md + 데이터(CSV)/검색 스크립트(Python)가 파일로는 존재해서, Skill
  도구 대신 SKILL.md를 직접 읽고 `python3 scripts/search.py "..." --domain ux`
  를 직접 실행해 가이드라인을 수동으로 적용함.
- **버튼 제거**: `components/landing/VerticalHighlight.tsx`에서 CTA
  (`ctaLabel`/`ctaHref` prop + 내부 `PrimaryButton` 렌더링)를 완전히 제거.
  더 이상 쓰이지 않는 `components/landing/PrimaryButton.tsx` 삭제,
  `app/page.tsx`의 VerticalHighlight 호출 3곳에서 해당 prop 제거. 이
  섹션들의 서비스 진입 경로는 바로 위 `BentoSection`의 "자세히 보기 →"
  링크로 충분하다고 판단(동일 서비스로의 중복 진입 경로 제거).
- **스킬 체크리스트 기반 발견 사항 반영** (`ux-guidelines.csv` "touch-target-size"
  — CRITICAL, "최소 44x44px"): 지난 커밋들에서 모바일 CTA 버튼을
  `py-2.5 + text-sm`(높이 약 40px)로 줄였던 게 44px 최소 터치 타겟에 약간
  못 미쳤던 것을 발견 — `py-2.5` → `py-3`(높이 44px)로 조정. 적용 범위:
  `components/landing/HeroSection.tsx` 버튼 2개,
  `components/detail/ctaButtonStyles.ts`(Academy/Advisory/Wellness 공용,
  3페이지 전부 반영). 햄버거 메뉴 버튼도 `size-9`(36px) → `size-11`(44px).
- **의도적으로 반영 안 한 항목**: 스킬 체크리스트의 "readable-font-size —
  모바일 본문 최소 16px" (HIGH)는 사이트 전반(Trust/Loop/Process 설명,
  FAQ 답변, 상세페이지 본문 등)이 대부분 14~15px를 쓰고 있어 정면으로
  위배되지만, 이는 Figma에서 가져온 기존 디자인 시스템 전체의 타이포 스케일
  문제라 이번 범위(버튼 정리)를 넘어서는 전체 재설계에 해당 — 사용자 확인
  없이 임의로 사이트 전체 본문 폰트 크기를 올리지 않음. 필요하면 별도 작업
  으로 논의 요청.
- **확인한 항목(문제 없음)**: `outline-none` 전역 미사용(포커스 상태 보존),
  고정 큰 `w-[...]px` 중 모바일에서 가로 스크롤을 유발할 요소 없음(전부
  `max-w-[...]` + `w-full` 조합), 터치 타겟 간 gap 전부 8px 이상.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공, `out/`
  산출물에서 버튼 3개 제거 확인 + `py-3`/`size-11` 터치 타겟 수정 렌더링 확인.
- 다음에 필요한 것: 사용자가 실제 모바일/PC에서 재확인. 본문 폰트 크기(16px)
  이슈를 다룰지는 사용자 결정 필요.

## 2026-10-01 — Claude Code (개발/디자인팀장) — ui-ux-pro-max 데이터 기반 추가 점검(색상 대비)

- `uipro-cli`(npm)로 설치한 `ui-ux-pro-max` 스킬을 Skill 도구로 호출 시도 —
  reload 이후에도 "Unknown skill" 에러 지속. 설치 파일(SKILL.md, 11개 CSV,
  스택별 CSV 13개, 검색 스크립트)은 `uipro init --ai claude`가 생성해야 할
  목록과 정확히 일치해 설치 자체는 정상 — 이 세션 환경(Claude Agent SDK
  기반)이 프로젝트 레벨 `.claude/skills/`를 Skill 도구 레지스트리에 로드하지
  않는 환경 제약으로 결론. 사용자에게 설명 후, 앞으로도 SKILL.md/search.py를
  직접 읽고 실행하는 방식으로 계속 진행하기로 합의.
- 해당 방식으로 `landing`/`web` 도메인 추가 조회 + 코드베이스 직접 대조:
  - 시맨틱 HTML(`div onClick` 안티패턴), 아이콘 `aria-hidden`/이미지 `alt`,
    `outline-none` 미사용 등은 전부 이미 준수 상태 확인(문제 없음).
  - **색상 대비 CRITICAL 항목 위반 발견**: `tailwind.config.ts`의
    `cx-dim`(#64748b, Footer 저작권/BentoSection 태그/OfferingsGrid 안내
    문구/개인정보처리방침 날짜 등 5곳에 사용)이 배경(`cx-bg` #050714) 대비
    WCAG AA 최소 기준(4.5:1)에 못 미치는 4.21:1로 계산됨(파이썬으로 상대
    휘도/대비비 직접 계산). 모두 12~14px 작은 텍스트라 완화 기준(3:1)도
    적용 안 됨.
  - 수정: `cx-dim` 값을 `#64748b` → `#7587a0`로 소폭 밝게 조정(대비비
    5.47:1로 통과). 토큰 자체를 바꿔 5곳 전부 한 번에 수정, 디자인 의도
    (가장 옅은 보조 텍스트)는 유지하면서 육안상 차이는 미미함.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중.

## 2026-10-01 — Claude Code (개발/디자인팀장) — 개인정보처리방침 문구 정리 + Footer 로고 좌측정렬 + 로고 에셋 흐림/번짐 수정

- 사용자 요청 3건:
  1. 개인정보처리방침 페이지 맨 아래 "본 방침은... 초안이며..." 단서 문단 제거.
  2. Footer 하단 로고+소개문구 블록을 모바일에서 좌측 정렬로.
  3. 로고 자체의 "테두리가 깨져 보이는" 문제 해결.
- **1번**: `app/privacy/page.tsx`에서 해당 단락(`<p>` 전체) 삭제.
- **2번**: `components/Footer.tsx`의 로고+소개문구를 감싸는 div에 암묵적
  `align-items: stretch` 기본값에 기대지 않도록 `items-start text-left`를
  명시적으로 추가(`w-full` 추가해 `max-w-[320px]`가 실제로 상한선 역할을
  하도록). 외곽 컨테이너는 이미 `items-start`였으나 안쪽 div는 정렬을
  지정하지 않고 있었음 — 명시적으로 고정.
- **3번(핵심 조사)**: `public/logo-dark.png`를 파이썬(PIL+numpy)으로 픽셀
  단위 분석 — X 아이콘 외곽선에서 알파값이 0→255로 "한 번에" 뛰는 하드
  컷오프와, 그 경계 픽셀의 RGB가 실제 브랜드 블루가 아닌 희끄무레한
  흰색 계열(예: 231,238,254)인 것을 확인. 과거 handoff 기록("다크모드
  리컬러")상 원래 흰 배경용으로 디자인된 로고를 다크테마용으로 재채색하는
  과정에서 안티앨리어싱 경계 픽셀이 흰색 쪽으로 남은 채 처리된 것으로
  추정 — 다크 배경 위에서 흐릿한 흰 테두리/번짐으로 보이는 원인.
  - 수정: git에 커밋된 원본을 기준으로 (a) 아이콘 영역(좌측 ~120px)에만
    1px 알파 침식(erosion)을 적용해 오염된 경계 픽셀 제거, (b) premultiplied
    alpha 방식으로 72px 높이(최대 표시 크기의 2배, 레티나 대응)로
    리샘플링 후 un-premultiply — 흰 번짐 없는 재압축. 텍스트 워드마크
    영역(x≥120)은 침식 없이 보존(처음 전체 영역에 침식을 걸었다가 얇은
    글자 획이 거의 지워지는 실패를 먼저 겪고, 아이콘 영역만으로 범위를
    좁혀 재작업함).
  - 검증 방법: 헤드리스 브라우저가 없어 Read 도구로 PNG를 직접 시각
    확인 + Python으로 실제 Header(36px)/Footer(28px) 표시 크기로 리사이즈
    후 8배 확대한 비교 이미지를 만들어 원본과 나란히 대조, 흰 번짐이
    확실히 줄어든 것을 육안으로 확인.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공, `out/`
  산출물에서 개인정보처리방침 문구 삭제 확인 + Footer 정렬 클래스 렌더링
  확인.
- 다음에 필요한 것: 사용자가 실제 화면(PC/모바일)에서 로고 선명도와 Footer
  정렬 재확인 필요 — 소스 PNG 자체가 398x92로 저해상도라 완벽한 벡터
  수준 선명도는 한계가 있음(벡터/고해상도 원본이 있으면 교체 권장).

## 2026-10-01 — Claude Code (개발/디자인팀장) — logo-dark.png 완전 재생성(흰 배경 원본에서 다크모드 재채색)

- 사용자가 로고 이미지를 다시 첨부하며 "ui-ux pro max skill 사용해서 교체"
  요청. 첨부 파일을 `public/logo.png`(기존 라이트모드 원본)와 픽셀 단위로
  비교한 결과 완전히 동일한 파일(diff bbox 없음) — 새 에셋이 아니라 기존
  원본을 다시 보내준 것으로, "이 원본에서 다크모드용을 제대로 다시 만들어
  달라"는 의도로 해석.
- 지난 수정(알파 침식 기반 패치)은 이미 손상된 `logo-dark.png`를 땜질한
  것이었던 반면, 이번에는 **깨끗한 원본(`public/logo.png`, 흰 배경 +
  남색(#0b1d3a) 텍스트 + 파랑(#0052ff 계열)/청록(#00c2c2 계열) 아이콘)에서
  처음부터 다시 생성**:
  1. 흰 배경 기준 알파 추출: `alpha = max(255-R, 255-G, 255-B)` 공식으로
     흰색에서 얼마나 벗어났는지를 불투명도로 변환(부드러운 안티앨리어싱
     경계 자동 보존).
  2. 텍스트/아이콘 분리: 각 픽셀의 최대 채널값이 150 미만이면 "어두운
     텍스트"(남색, 최대 채널 약 58~61)로 분류해 흰색으로 재채색, 150
     이상이면 "아이콘"(파랑/청록, 항상 한 채널이 255 근접)으로 분류해
     원래 색 유지 — 아이콘 그라데이션은 전혀 건드리지 않음.
  3. premultiplied alpha 방식으로 72px 높이(레티나 2x)로 LANCZOS 리샘플링
     후 un-premultiply — 리샘플링 단계에서 흰 번짐이 재발하지 않도록.
  - 과거 "다크모드 리컬러" 작업(2026-08-18~19 handoff 기록)에서 만들어진
    로고보다 품질이 좋음 — 그 작업은 어떤 방식으로 재채색했는지 기록이
    없어 안티앨리어싱 경계 처리가 누락됐던 것으로 추정되나, 이번엔 처음부터
    투명도/재채색을 수식으로 명시적으로 계산해 경계가 깨끗함.
- 검증: Read 도구로 PNG 직접 시각 확인(아이콘 확대샷 포함) + Python으로
  실제 Header(36px)·Footer(28px) 표시 크기 렌더링 후 6배 확대 비교 —
  흰 번짐/할로 없음, 아이콘 그라데이션과 텍스트 모두 선명하게 확인.
  `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중. 사용자가 실제 배포 화면에서
  최종 확인 권장.

## 2026-10-01 — Claude Code (개발/디자인팀장) — Wellness CTA 본문 수동 줄바꿈

- 사용자 요청: "브랜드, 제품 정보, 구매 조건을 확인하고 비교해 보세요." /
  "더 궁금한 점은 언제든 문의해 주세요." 두 문장을 항상 이 지점에서
  줄바꿈.
- `components/detail/CtaSection.tsx`의 본문 `<p>`에 `whitespace-pre-line`
  클래스 추가(공유 컴포넌트이므로 Academy/Advisory는 줄바꿈 문자가 없어
  영향 없음), `lib/detail-pages/wellness.ts`의 해당 `body` 문자열 중간에
  `\n` 삽입.
- 검증: `tsc --noEmit` 통과, `npm run build` 성공, `out/` 산출물에
  `whitespace-pre-line` 클래스와 `\n` 포함된 문자열 렌더링 확인.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중.

## 2026-10-01 — Claude Code (개발/디자인팀장) — 사이트 전체 PC/모바일 줄바꿈 전수 점검

- 사용자 요청: connectx.kr을 PC/모바일로 직접 보고 줄바꿈·비최적화 요소를
  찾아 수정, ui-ux-pro-max 스킬 활용.
- 헤드리스 브라우저가 없어 "직접 본다"를 다음 방식으로 대체: (1) 모든
  h1/h2/h3·버튼·칩·태그 텍스트와 폰트 크기/컨테이너 폭을 코드에서 추출,
  (2) WSL 마운트에서 실제 Noto Sans KR 가변 폰트
  (`/mnt/c/Windows/Fonts/NotoSansKR-VF.ttf`)를 찾아 PIL로 **실제 렌더링
  폭을 픽셀 단위로 정밀 측정**, semibold/bold 등 실제 폰트 굵기까지
  반영. 각 요소의 실제 컨테이너 가용폭(패딩 제외)과 비교해 진짜 오버플로우만
  선별(문단형 h2가 2줄로 자연스럽게 나뉘는 건 정상으로 간주, 버튼/칩처럼
  한 줄이어야 하는 요소의 오버플로우만 "버그"로 판정).
- **핵심 발견 1 — 한글 word-break 근본 원인**: 브라우저 기본값에서 한글은
  "단어" 개념이 없어 아무 음절 사이에서나 줄바꿈된다 — 이게 바로 지난
  Wellness CTA 제목이 "기준부/터 꼼꼼하게"처럼 음절 중간에서 깨졌던 근본
  원인. Tailwind `break-keep`(`word-break: keep-all`)을 적용하면 띄어쓰기
  지점에서만 줄바꿈되어 훨씬 자연스러움. `word-break`는 상속 속성이라
  섹션 최상위 컨테이너 한 곳에만 걸어도 하위 텍스트 전부에 적용됨을
  활용해 랜딩 6개 섹션 + 상세 페이지 공용 컴포넌트 9개(Hero, SectionHeading,
  CtaSection, ProblemStatement, ConnectAxes, TrustPoints, OfferingsGrid,
  AudienceSplit, PositionDetail, ProcessSteps, 양쪽 FaqSection) + Footer +
  개인정보처리방침 페이지까지 전부 적용.
- **핵심 발견 2 — BentoSection 카드 제목 실제 오버플로우**: "필요한 서비스를
  선택하세요" 카드 3개의 태그라인(`text-xl sm:text-[28px]`)이 측정 결과
  **모바일(279px 가용)뿐 아니라 데스크톱(304px 가용)에서도** 전부
  오버플로우(329~405px 필요) — 1200px대 일반 데스크톱 화면에서도 카드
  제목이 줄바꿈되고 있었음(이 태그라인은 지난 2026-09-30 UX 감사 때
  직접 교체한 문구라 길이 체크 없이 넣은 게 원인으로 추정). `text-[19px]`
  고정 크기로 축소해 세 카드 전부 모바일·데스크톱 모두 한 줄에 들어가도록
  수정(반응형 분기 불필요 — 두 가용폭 차이가 크지 않아 하나의 크기로 충분).
- **CtaSection 구조 개선**: 지난 세션에서 Wellness 제목이 길어 CtaSection
  전체(Academy/Advisory 포함)를 13px로 줄였던 것을 되돌림 —
  `CtaContent` 타입에 `headingClassName?` 선택적 필드 추가, 기본값은
  원래 크기(32px/40px, 다른 섹션 제목과 통일)로 복원하고 Wellness
  컨텐츠에서만 13px/28px 오버라이드 적용. Academy/Advisory는 원래도
  한 줄에 들어가는 짧은 제목이라 불필요하게 작아져 있었던 걸 바로잡음.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공,
  `out/` 산출물에서 Academy CTA 제목 32px 복원·Wellness 13px 유지·
  BentoSection 19px·`break-keep` 전 페이지 반영 전부 확인.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중. (참고: `ui-ux-pro-max`는
  여전히 Skill 도구로 호출 불가 — 이번엔 스킬 대신 실제 폰트 픽셀 측정이라는
  더 정밀한 방법으로 대체.)

## 2026-10-01 — Claude Code (개발/디자인팀장) — "일하는 사람" 브랜드 연계 문구 반영

- 사용자가 외부 작성 문서(`ConnectX_브랜드_연계전략_및_홈페이지_문구제안.md`)를
  공유 — Academy(역량)·Advisory(안정적 업무환경)·Wellness(건강한 일상)를
  "일하는 사람"이라는 공통 고객 관점으로 연결하는 문구 제안. 기획 메모는
  `docs/harness/marketing/working-person-brand-narrative.md`에 기록.
- 반영: 홈 Hero 설명 문구, BentoSection 카드 3개(타이틀/설명/버튼 라벨
  전체), "세 가지가 서로를 연결합니다" 섹션 전면 교체(헤딩/인트로/3카드),
  Wellness Hero 설명 문구, Footer 브랜드 소개, 홈 FAQ 답변(새 서사와
  통일).
- 기존 구조 보존을 위한 조정: 홈 Hero H1("연결이 만드는 변화")과 Wellness
  Hero H1("ConnectX Wellness")은 Figma 비주얼 아이덴티티/기존 명명 패턴
  유지 차원에서 그대로 두고, 문서의 헤드라인은 subtitle에 통합. LoopSection
  "앞으로의 방향"(보안 역량→건강데이터 보호) 콜아웃은 문서가 다루지 않은
  별개의 유효한 사업계획서 근거라 유지, 3카드 본문만 새 서사로 교체.
- 문서 7번 지적(현재/계획 혼동) 추가 점검 — 지난 세션에서 놓친 Wellness
  잔여 과장 표현 4곳 발견·수정: connectAxes "데이터 연결", process
  "큐레이션/설계"·"지속관리", FAQ "추천이 마음에 안 들면", trust 포인트
  "먹는 것을 계속 기록". 전부 "자동 추적 시스템" 뉘앙스 → "다시 문의하면
  안내"로 낮춤(2026-10-01 콘텐츠 갭 원칙과 동일 기준).
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공,
  `out/` 산출물에서 모든 신규 문구와 과장 표현 수정분 렌더링 확인.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중.

## 2026-10-01 — Claude Code (개발/디자인팀장) — Academy 프로세스 헤딩 수정 + 전역 정렬 text-justify 통일

- Academy 상세페이지 "진단 → 큐레이션/설계 → 실행 → 지속관리, Academy에서는
  이렇게 이어집니다" 헤딩이 모바일에서 어색하게 줄바꿈된다는 스크린샷 제보.
  Advisory/Wellness는 동일 섹션에 "진단 → 큐레이션/설계 → 실행 →
  지속관리"만 쓰는데 Academy만 뒤에 불필요한 절이 붙어있었던 게 원인 —
  실측(1062px vs 가용 327px, 3줄 이상 필요) 확인 후 다른 두 페이지와
  동일하게 축약. 동일 패턴의 다른 헤딩 전수 측정 결과 이 건이 유일한
  이상치였음(나머지는 전부 2줄 이내로 자연스럽게 래핑).
- 사용자가 "스마트폰에서 정렬이 제각각(가운데/왼쪽 섞임), 기본 정렬로
  통일해달라"고 요청 → 범위 확인 질문(메인 Hero 포함 여부)에 "전체 다"로
  답변 → 구체적 정렬 방식 재확인 질문에서 "왼쪽 정렬"이 아니라
  **"양쪽정렬(justify)"**을 명시적으로 선택(두 방식의 시각적 차이를
  미리보기로 보여준 뒤 확정).
- 발견한 실제 비일관성: 랜딩의 Hero/Bento/Trust/Process/Loop/FAQ 섹션
  인트로(배지+제목+설명)는 전부 `text-center`인데, VerticalHighlight
  (Academy/Advisory/Wellness 소개 블록)만 유일하게 암묵적 왼쪽 정렬
  (`items-start`, text-align 클래스 없음) — 이게 "제각각" 느낌의 원인.
  상세 페이지는 공용 `SectionHeading`이 전부 `text-center`라 자체는
  일관됐으나 랜딩과 다른 방식.
- 수정: 코드베이스 전체에서 `text-center` 완전 제거, 전부 `text-justify`로
  교체(랜딩 6개 섹션 인트로 전체, FAQ 아코디언 질문/답변 양쪽, 상세 페이지
  `SectionHeading`/`Hero`/`CtaSection`/`OfferingsGrid` note, 그리고 본래
  왼쪽 정렬이던 `VerticalHighlight`에도 명시적 `text-justify` 추가해 전부
  동일하게 통일). `word-break`와 마찬가지로 `text-align`도 상속 속성이라
  섹션 최상위 컨테이너 한 곳에만 걸어 하위 텍스트까지 전파되도록 활용.
  - 블록 자체의 중앙/좌측 배치(`mx-auto`/`items-center` 등 flex 레이아웃)는
    건드리지 않음 — 이번 요청은 텍스트 정렬(text-align)에 대한 것이고
    버튼 그룹이 가운데 배치되는 등은 별개의, 문제 없는 패턴이라 판단.
  - detail Hero.tsx의 `mx-auto max-w-2xl md:mx-0`(문단 중앙 배치)와
    `justify-center md:justify-start`(버튼 반응형 분기)도 제거해 모바일/
    데스크톱 분기 없이 완전히 통일.
  - Footer 브랜드 블록(`items-start text-left`)은 그대로 유지 — 바로 이전
    세션에서 사용자가 명시적으로 요청한 "로고 왼쪽정렬"이라 이번 justify
    통일 범위에서 의도적으로 제외.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공,
  `out/` 산출물 전수 검사로 `text-center` 0건, `text-justify` 전 페이지
  반영 확인.
- 다음에 필요한 것: 사용자가 실제 화면에서 justify 적용 결과 확인 —
  특히 짧은 제목은 1줄이라 justify와 왼쪽 정렬이 시각적으로 동일하게
  보이고, 2줄 이상 래핑되는 문단에서만 양쪽 끝 맞춤 효과가 보일 것.

## 2026-10-01 — Claude Code (개발/디자인팀장) — text-justify → text-left 정정

- 사용자가 "죄송합니다. 양쪽 정렬로 변경할게요"라고 요청 — v1.8에서 이미
  양쪽정렬(justify)을 적용한 상태라 모순되어 재확인 질문. "왼쪽정렬(left)로
  변경"으로 확답받음 — 즉 실제로는 justify→left 되돌리기였음(용어 혼동
  3회째라 재확인이 맞았음).
- 수정: 지난 커밋(58fcb6f)에서 `text-center`를 교체했던 모든 위치의
  `text-justify`를 `text-left`로 일괄 치환(19개 파일, sed 일괄 처리 후
  파일별 diff 직접 확인). 레이아웃 단순화(단락 `mx-auto` 중앙 배치 제거,
  버튼 반응형 분기 제거 등 justify 작업 때 같이 정리한 부분)는 왼쪽
  정렬에도 동일하게 적합해 되돌리지 않고 유지.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공,
  `grep`으로 `text-justify`/`text-center` 코드베이스 전체에서 0건 확인.
- 다음에 필요한 것: 없음 — 커밋/푸시 대기 중.

## 2026-10-01 — Claude Code (개발/디자인팀장) — 상세페이지 "타이틀"만 가운데 정렬로 복원

- 사용자가 "Academy/Advisory/Wellness 페이지의 타이틀은 가운데 정렬을
  유지해야 할 것 같다"고 요청. 범위 확인 질문(Hero 제목만 vs 페이지 내
  모든 섹션 제목)에 "페이지 안의 모든 섹션 제목"으로 답변.
- 수정: 섹션 "제목(heading)" 요소에만 `text-center`를 다시 추가하고
  본문/버튼은 왼쪽 정렬 그대로 유지(지난 커밋에서 전체를 왼쪽으로 통일한
  범위를 타이틀만 되돌림):
  - `components/detail/Hero.tsx`의 `<h1>`에 `text-center` 추가(라벨/
    서브타이틀/버튼은 부모의 `text-left` 그대로 상속).
  - `components/detail/SectionHeading.tsx`(문제 제기/3축 연결/프로세스/
    제공 서비스/대상/신뢰 포인트/FAQ 헤딩에 전부 쓰이는 공용 컴포넌트)를
    `text-center`로 변경 — 이 한 곳 수정으로 세 페이지 모든 섹션 제목에
    일괄 반영됨.
  - `components/detail/CtaSection.tsx`의 `<h2>`에 `text-center` 추가(본문
    `<p>`은 왼쪽 정렬 유지), Wellness 전용 `headingClassName` 오버라이드
    (`lib/detail-pages/wellness.ts`)에도 `text-center` 추가.
- 검증: `tsc --noEmit` 통과, `npm run build` 정적 export 10페이지 성공.
- 사용자가 거의 동시에 "모바일에서 글자가 폭에 안 맞아 줄바꿈되고
  가독성이 안 좋다"고 추가 요청 — 구체적 위치 없이 일반론이라, 지난
  세션의 폰트 픽셀 실측(헤딩/카드 라벨 전수 검사, BentoSection·Academy
  헤딩 수정 완료) 결과를 근거로 "추가로 발견된 오버플로우 없음"을
  보고하고 스크린샷 요청함 — 캐시 문제(방금 전 정렬 건도 캐시였음)일
  가능성 언급.
- 다음에 필요한 것: 1) 타이틀 센터링 커밋/푸시 대기. 2) 모바일 가독성
  건은 사용자 스크린샷 수신 후 구체적 위치 파악 필요.

## 2026-10-01 — Claude Code (개발/디자인팀장) — 실제 기기 스크린샷 기반 모바일 헤딩 줄바꿈 수정

- 사용자가 실제 안드로이드 기기(SKT, 1080x2340) 스크린샷 6장을 첨부 —
  랜딩/Academy/Advisory/Wellness 전반을 보여줌. 대부분 깔끔했으나 2곳이
  3줄로 어색하게 줄바꿈됨: VerticalHighlight의 Advisory 제목("우리 회사에
  맞는 IT" / "인프라와 보안, 함께" / "설계합니다")과 ConnectAxes의 Advisory
  제목("기업" / "문제ㆍ기술ㆍ솔루션을" / "연결합니다" — "기업"이 단독으로
  한 줄을 차지).
- **실제 기기 폭 역산**: 기존에 가정했던 모바일 가용폭(363px)으로 시뮬레이션
  해보니 두 경우 다 2줄로 예측돼 실제 결과와 불일치 — 실제 줄바꿈 지점
  (예: "IT" 다음에서 끊기고 "인프라와"가 다음 줄로 안 붙는 지점)을 역산해
  실제 가용폭이 약 340px(기기 DPR을 2.625가 아닌 더 높은 값으로 재추정)
  임을 확인. 이 보정된 340px로 다시 시뮬레이션하니 스크린샷의 정확한
  줄바꿈 지점까지 그대로 재현됨 — 모델 검증 완료 후 적정 크기 탐색.
  - 이번에도 `ui-ux-pro-max` 스킬의 Skill 도구 호출은 불가해 동일하게
    실제 폰트(Noto Sans KR VF) + Python 그리디 줄바꿈 시뮬레이션으로 대체.
- 수정: `components/detail/SectionHeading.tsx` 32px→28px(모바일만,
  데스크톱 40px 유지), `components/landing/VerticalHighlight.tsx` h2
  `text-3xl`(30px)→`text-[26px]`, `components/detail/CtaSection.tsx`
  기본 헤딩도 동일하게 32px→28px(일관성 차원, Wellness 전용 오버라이드는
  무관). 보정된 340px 기준으로 두 컴포넌트가 쓰이는 모든 텍스트(상세
  페이지 섹션 제목 16개, VerticalHighlight 3개, 랜딩 섹션 인트로 5개)를
  전수 시뮬레이션해 단독 단어가 한 줄을 차지하는 경우가 더 없는지 확인
  후 적용 — 해당 2곳만 유일한 문제였음.
- 검증: `tsc --noEmit` 통과, `npm run build` 성공, `out/` 산출물에서 새
  크기 반영 확인 + 시뮬레이션으로 원래 3줄이었던 두 헤딩이 깔끔한 2줄로
  바뀌는 것 확인.
- 다음에 필요한 것: 사용자 요청대로 이번 건 + 지난 "타이틀 가운데 정렬"
  건을 한 번에 커밋/푸시.
