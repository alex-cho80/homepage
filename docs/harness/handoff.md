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
