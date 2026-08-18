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
- **호스팅**: GitHub Pages (정적 export, `output: "export"`) + 가비아에서
  구매한 connectx.kr 커스텀 도메인. `.github/workflows/deploy.yml`이 main
  push마다 자동 빌드/배포. (2026-08-18)
- **npm audit 취약점(5건, 전부 high) 방치 결정**: 전부 `next` 14.2.35 →
  16.3.1(메이저 2단계) 강제 업그레이드로만 해결 가능. 취약점 내용(Server
  Actions DoS, Middleware SSRF, RSC 캐시 오염 등)은 전부 Next.js를
  self-host 서버로 돌릴 때 해당하는 이슈이며, 이 사이트는 정적 export만
  배포하므로 실질적 노출 없음. postcss/glob 취약점도 빌드 시점 전용 도구라
  공격 경로 없음. 따라서 지금 강제 업그레이드로 빌드를 깨뜨릴 위험을
  감수하지 않고 방치하기로 결정. Next 16 업그레이드는 나중에 별도
  작업으로, 충분히 테스트하며 진행할 것. (2026-08-18)
