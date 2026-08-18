# ConnectX 홈페이지 — 다중 에이전트 Harness 구조 설계

날짜: 2026-08-18

## 배경

옵시디언 볼트 `06.사업/01.사업계획.canvas`에 정리된 사업 구조를 바탕으로
ConnectX 브랜드 홍보용 웹사이트를 만든다. ConnectX는 마스터 브랜드이며 그
아래 3개 Brand Unit이 있다.

- **ConnectX Academy** — 인프라/보안 교육. "지식·실무·사람 연결"
- **ConnectX Advisory** — 인프라/보안 컨설팅. "기업 문제·기술·솔루션 연결".
  포지션: SMB Infra & Security Transformation Partner (전담 인프라·보안
  책임자를 채용하기 어려운 기업을 위한 외부 기술기획실)
- **ConnectX Wellness** — 건강기능식품 위탁판매. "건강·전문가·데이터 연결".
  타깃: 부모님, 직장인

마스터 브랜드 공통 프로세스: **진단 → 큐레이션/설계 → 실행 → 지속관리**

이 작업은 여러 AI 도구(Codex CLI, Claude Code)를 팀처럼 협업시키는 "harness
엔지니어링" 구조로 진행한다. 이 spec은 그 협업 구조와, 그 구조 위에서 처음
돌아가는 결과물(빈 Next.js 프로젝트 + 랜딩 페이지 하나)까지를 다룬다. 각
Brand Unit의 상세 페이지/콘텐츠/사이트맵은 marketing-lead 서브에이전트의
기획 산출물을 받은 뒤 별도 spec으로 진행한다 (이번 spec의 범위 밖).

## 역할 구조

- **CTO — Codex (별도 CLI 세션)**: 홈페이지 구축 총괄. 방향성/기준 수립,
  팀 간 역할 분배 조정. Claude Code와 실시간으로 통신할 수 없으므로
  `docs/harness/direction.md`를 통해 지시를 남긴다.
- **개발/디자인팀장 — Claude Code (이 세션)**: superpowers, frontend-design
  플러그인을 활용해 실제 구현(코드, 비주얼 디자인)을 담당. marketing-lead
  서브에이전트를 Agent 도구로 호출해 기획을 받아 구현에 반영한다.
- **마케팅/홍보팀장 — `.claude/agents/marketing-lead.md` 서브에이전트**:
  사이트 기획(정보구조/사이트맵), 레이아웃 배치, 카피·톤앤매너 방향 제안.
  코드/비주얼 구현에는 관여하지 않는다.

## 협업 프로토콜 — 공유 문서

CLI 세션 간 직접 통신이 불가능하므로 저장소 내 문서를 통해 조정한다.

```
docs/harness/
├── direction.md    # Codex가 작성/갱신: 방향성, 기준, 우선순위, 역할분배 결정
├── handoff.md       # append-only 인계 로그: 누가 언제 무엇을 넘겼는지
└── decisions.md     # 확정된 의사결정 기록 (번복 방지용)
```

- Claude Code(나)는 작업 시작 시 `direction.md`를 먼저 읽고 그 지시를 따른다.
- 작업을 완료하면 `handoff.md`에 요약을 append한다 (날짜, 무엇을 했는지,
  다음에 필요한 것).
- `decisions.md`는 이미 확정되어 재논의 대상이 아닌 사항을 쌓아둔다.
  이번 spec에서 확정된 아래 항목으로 시드한다:
  - 사이트 범위: ConnectX 통합 1개 사이트, 3개 유닛은 하위 섹션/페이지
  - 기술 스택: Next.js + Tailwind CSS
  - 마케팅팀장 역할: 기획 전담, 구현 미관여
  - 협업 방식: 공유 문서 기반 (실시간 통신 불가 전제)

이 문서들은 일반 마크다운이며 별도 툴링 없이 세 "팀"(Codex 세션, Claude
Code 세션, marketing-lead 서브에이전트) 모두 Read/Write로 접근한다.

## marketing-lead 서브에이전트

`.claude/agents/marketing-lead.md`에 정의하는 Claude Code 커스텀
서브에이전트.

- **담당**: 페이지별 목적/핵심 메시지/정보구조(사이트맵) 기획, 레이아웃
  배치 제안, 카피·톤앤매너 방향
- **비담당**: 코드 작성, 비주얼 디자인(색상/타이포 등 구현 디테일), 배포
- **도구 권한**: Read, Write(기획 문서 작성용), WebSearch, WebFetch
  (경쟁사/레퍼런스 벤치마킹용). Edit, Bash 등 코드 조작 도구는 부여하지 않음.
- **산출물 위치**: `docs/harness/marketing/` 아래 기획 문서 (다음 spec에서
  실제로 호출해 산출물을 받음. 이번 spec에서는 에이전트 정의만 만든다)

## 개발/디자인팀장(Claude Code) 워크플로

1. 세션 시작 시 `docs/harness/direction.md` 확인
2. 기능 단위 작업에는 superpowers 표준 워크플로(brainstorming,
   test-driven-development 등) 적용
3. 비주얼/레이아웃 결정에는 frontend-design 스킬 사용
4. marketing-lead 서브에이전트 산출물을 입력으로 구현
5. 완료 시 `docs/harness/handoff.md`에 요약 기록

## 이번 spec의 구현 범위

### 1. Harness 인프라
- `docs/harness/direction.md`, `handoff.md`, `decisions.md` 생성
  (decisions.md는 위 확정 사항으로 시드, 나머지는 빈 템플릿)
- `.claude/agents/marketing-lead.md` 서브에이전트 정의 작성

### 2. Next.js 프로젝트 셀파딩
- Next.js (App Router) + TypeScript + Tailwind CSS 새 프로젝트를 저장소
  루트에 생성
- 라우트 구조: `/`, `/academy`, `/advisory`, `/wellness` 폴더를 만들되
  `/academy`, `/advisory`, `/wellness`는 "준비 중" placeholder만 (본문
  콘텐츠는 다음 spec)
- 공통 레이아웃(헤더에 ConnectX 워드마크, 푸터) 구성

### 3. 랜딩 페이지 (`/`)
캔버스 원문 콘텐츠를 그대로 사용해 구성. 카피 다듬기/마케팅 메시지 설계는
marketing-lead가 다음 단계에서 담당하므로, 이번 랜딩 페이지는 캔버스 문구를
그대로 배치하는 "1차 버전"이다.

- 히어로 섹션: "ConnectX" + 4단계 프로세스 "진단 → 큐레이션/설계 → 실행 →
  지속관리"
- 3개 Brand Unit 카드 섹션 (Academy / Advisory / Wellness), 각 카드에
  캔버스에 있는 텍스트(브랜드 유닛명, 연결 컨셉, Advisory의 Position 설명)
  그대로 노출, 각 카드는 해당 `/academy` 등 라우트로 링크
- 시각 디자인은 frontend-design 스킬로 방향 수립 (전문적/신뢰감 있는 톤 —
  Advisory의 B2B 포지셔닝을 고려)

### 4. 검증
- `npm run build`로 빌드 성공 확인
- `npm run dev`로 로컬 구동 후 브라우저에서 랜딩 페이지 및 3개 라우트 확인

## 이번 spec에서 제외되는 것 (Non-goals)

- Academy/Advisory/Wellness 페이지의 실제 콘텐츠/사이트맵 (marketing-lead
  기획 산출물이 나온 뒤 별도 spec)
- 배포/호스팅/도메인 결정
- CMS, 폼 제출, 분석 도구 연동 등 기능적 요소
- marketing-lead를 실제로 호출해 기획을 받는 것 (에이전트 "정의"만 이번
  범위, "실행"은 다음 spec)

## 테스트 전략

프론트엔드 정적 페이지이므로 별도 단위 테스트 스위트보다 빌드 성공 +
수동 브라우저 확인을 검증 기준으로 삼는다. 추후 페이지/기능이 늘어나면
필요에 따라 컴포넌트 테스트를 추가한다.
