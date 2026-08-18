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
