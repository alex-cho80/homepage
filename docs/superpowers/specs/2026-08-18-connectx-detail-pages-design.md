# ConnectX 브랜드 유닛 상세 페이지 — Academy / Advisory / Wellness

날짜: 2026-08-18

## 배경

이전 spec(`2026-08-18-connectx-homepage-harness-design.md`)에서 ConnectX
랜딩 페이지와 `/academy`, `/advisory`, `/wellness` 3개 라우트를 "준비
중입니다" placeholder로 만들었다. 이후 marketing-lead 서브에이전트가
`docs/harness/marketing/{academy,advisory,wellness}.md`에 3개 페이지의
정보구조·섹션별 카피 초안·톤앤매너를 기획했다. 이 spec은 그 기획을
실제 페이지로 구현하는 작업을 다룬다.

## 콘텐츠 구조 분석

3개 페이지는 페이지마다 순서와 구성이 완전히 같지는 않지만(Advisory만
"Position 상세 설명" 섹션이 Hero 바로 다음에 추가로 있음), 섹션의 **모양**
기준으로는 재사용 가능하다:

| 섹션 모양 | Academy | Advisory | Wellness |
|---|---|---|---|
| Hero | ✓ | ✓ (Position 배지 추가) | ✓ |
| Position 상세 설명 | — | ✓ (전용) | — |
| 문제 제기 (리스트) | ✓ | ✓ | ✓ |
| 3축 연결 카드 | ✓ (지식/실무/사람) | ✓ (기업문제/기술/솔루션) | ✓ (건강/전문가/데이터) |
| 프로세스 4단계 | ✓ | ✓ | ✓ |
| 카드 그리드 (과정/서비스영역/제품카테고리) | ✓ | ✓ | ✓ |
| 2단 구성 (대상별 안내 / 타깃별 시나리오) | ✓ | — | ✓ |
| 신뢰 요소 | ✓ | ✓ | ✓ |
| FAQ | ✓ | ✓ | ✓ |
| CTA | ✓ | ✓ | ✓ |

## 아키텍처

**콘텐츠와 렌더링을 분리한다.** 각 페이지는 타입이 있는 콘텐츠 데이터
객체(섹션의 순서 있는 배열)를 갖고, 공유 `DetailPage` 컴포넌트가 그
배열을 순회하며 섹션 타입에 맞는 컴포넌트를 렌더링한다. 페이지마다
순서/구성이 달라도(Advisory에만 있는 Position 섹션 등) 콘텐츠 데이터의
배열 구성만 다르면 되고, 렌더링 로직은 완전히 공유된다.

```
lib/detail-pages/
├── types.ts       # DetailPageContent, 섹션 유니온 타입 정의
├── academy.ts      # academyContent: DetailPageContent
├── advisory.ts      # advisoryContent: DetailPageContent
└── wellness.ts      # wellnessContent: DetailPageContent

components/detail/
├── DetailPage.tsx     # content.sections를 순회하며 타입별 컴포넌트로 분기
├── Hero.tsx           # 라벨/타이틀/서브카피/(옵션)Position배지/CTA버튼
├── ProblemStatement.tsx
├── ConnectAxes.tsx     # 3열 카드 (고정 3개)
├── PositionDetail.tsx   # Advisory 전용
├── ProcessSteps.tsx     # 4단계 (라벨+본문), 랜딩 Hero와는 별도 컴포넌트
├── OfferingsGrid.tsx    # 카드 그리드 (3~6개 가변)
├── AudienceSplit.tsx    # 2단 구성 (옵션: 카드별 크로스링크)
├── TrustPoints.tsx
├── FaqSection.tsx      # 정적 리스트 (아코디언 아님)
└── CtaSection.tsx

app/academy/page.tsx    # <DetailPage content={academyContent} />
app/advisory/page.tsx
app/wellness/page.tsx
```

`components/ComingSoon.tsx`는 세 라우트 모두 더 이상 사용하지 않으므로
삭제한다.

## 콘텐츠 소스 원칙

- 브랜드 유닛 핵심 데이터(`lib/brand-units.ts`)는 이전 spec에서 이미
  확정되어 변경하지 않는다. 상세 페이지 콘텐츠는 이 파일을 참조하지 않고
  독립적인 `lib/detail-pages/*.ts`에 마케팅 기획서 카피를 그대로 옮긴다
  (동일 문구가 다른 곳에서도 필요하면 이후 리팩터링 대상이지 지금 범위는
  아니다).
- 마케팅 기획서의 `[콘텐츠 갭 — 확인 필요]` 표시 부분(커리큘럼명, 서비스
  상품명, 제품 카테고리, 강사/팀 프로필 등)은 기획서가 제안한 예시
  placeholder 문구를 사용자에게는 일반 문구로 그대로 노출한다 — UI상
  "준비 중" 배지나 별도 시각 표시를 하지 않는다. (2026-08-18 사용자 확정)
- 마케팅 기획서는 FAQ 질문만 제시하고 답변은 비워두었다. 답변은 개발/
  디자인팀장(Claude Code)이 각 페이지의 톤앤매너 메모(과장 금지, 미확정
  사실 단정 금지 — 특히 Academy의 취업연계, Wellness의 의학적 효능,
  Advisory의 구체적 수치)를 지키며 짧고 안전하게 작성한다.
- Wellness 페이지는 마케팅 기획서가 명시적으로 플래그한 대로 "치료/완치/
  질병예방" 등 의약품 오인 표현을 사용하지 않는다.

## Hero CTA 버튼 동작

이 프로젝트는 아직 문의 폼/백엔드가 없다(비목표, 아래 참조). Hero의 CTA
버튼은 같은 페이지 내 해당 섹션으로 스크롤하는 앵커 링크로 구현한다
(예: `#offerings`, `#cta`). 각 섹션 컴포넌트는 `id` 속성을 받아
`<section id={...}>`로 렌더링한다.

## 시각 디자인

기존 랜딩 페이지(Hero, BrandUnitCard, Header, Footer)에 적용된
frontend-design 결과물의 디자인 토큰(`connectx-navy`, `connectx-accent`,
`rounded-md`, 얇은 보더, 모노스페이스 라벨 등)과 일관되게 만든다. 새로운
색상 토큰은 추가하지 않는다. 상세 페이지의 시각 디자인도 frontend-design
스킬로 한 번 더 검증한다.

## 비목표 (Non-goals)

- 실제 문의/상담 폼, 이메일 발송, CRM 연동
- 실제 커리큘럼명, 서비스 상품명, 제품 카테고리, 강사/팀 프로필, 고객
  레퍼런스 등 사업 측 실데이터 확보 (마케팅 기획서의 placeholder 예시를
  그대로 사용)
- 배포/호스팅/도메인 결정
- 다국어(영문 등) 지원

## 테스트 전략

이전 spec과 동일하게 `npm run build` 성공 + 라우트별 curl 콘텐츠 확인을
검증 기준으로 삼는다. 정적 콘텐츠 페이지이므로 별도 컴포넌트 테스트
프레임워크는 도입하지 않는다.
