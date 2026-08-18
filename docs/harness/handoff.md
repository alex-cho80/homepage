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
