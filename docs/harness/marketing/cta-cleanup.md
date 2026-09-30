# CTA 정리 — 신청/상담 버튼 통합 및 mailto 전환

대상: 랜딩(`/`), Academy, Advisory, Wellness 전 페이지
목적: 페이지마다 "신청/상담" CTA가 최대 5개까지 흩어져 있다는 사용자 피드백 해소.
모든 CTA는 클릭 시 사용자 기본 이메일 클라이언트가 뜨는 `mailto:fortunecho@naver.com` 링크로 동작.

## 원칙

- 페이지당 **하나의 명확한 신청 액션**만 남긴다 (Hero 1개 + 하단 마무리 1개 — 같은 액션의 반복 노출은
  표준 패턴이라 유지). 전역 Header/Footer도 동일 액션의 반복이라 유지.
- 서로 다른 문구로 액션을 쪼개는 2차 요청 버튼(자료 요청, 상담 예약 등)은 제거해 액션을 하나로 통일.
- 콘텐츠 탐색용 스크롤 버튼(`#offerings`, `#verticals` 등)은 신청 폼이 아니므로 그대로 둔다.
- Wellness의 실제 구매 링크(스마트스토어)는 외부 이커머스 액션이라 mailto 대상이 아니므로 그대로 둔다.

## 페이지별 CTA 유지/제거 결정

| 페이지 | 위치 | 현재 라벨 | 현재 href | 결정 | 비고 |
|---|---|---|---|---|---|
| 전역 | Header | 상담 신청 | /advisory | **유지 → mailto** | 전 페이지 공통 진입점 |
| 전역 | Footer | 무료 상담 신청 | /advisory | **유지 → mailto** | 전 페이지 공통 마무리 |
| 랜딩 | Hero 1차 | 무료 진단 신청 | /advisory | **유지 → mailto** | |
| 랜딩 | Hero 2차 | 서비스 둘러보기 | #verticals | 유지 (변경 없음) | 스크롤 이동 |
| Academy | Hero 1차 | 상담 신청하기 | #cta | **유지 → mailto (직접)** | 앵커 경유 대신 바로 mailto |
| Academy | Hero 2차 | 커리큘럼 살펴보기 | #offerings | 유지 (변경 없음) | 스크롤 이동 |
| Academy | 하단 primary | 무료 상담 신청 | # | **유지 → mailto** | |
| Academy | 하단 secondary | 커리큘럼 자료 요청 | # | **제거** | Hero 2차 "커리큘럼 살펴보기"와 목적 중복, 별도 자료 발송 프로세스 없음 |
| Advisory | Hero 1차 | 무료 진단 신청 | #cta | **유지 → mailto (직접)** | |
| Advisory | Hero 2차 | 서비스 영역 보기 | #offerings | 유지 (변경 없음) | 스크롤 이동 |
| Advisory | 하단 primary | 무료 진단 신청 | # | **유지 → mailto** | |
| Advisory | 하단 secondary | 담당자와 상담 예약 | # | **제거** | 하단 primary와 사실상 동일 액션, 문구만 다름 |
| Wellness | Hero 1차 | 내 맞춤 추천 받기 | #cta | **유지 → mailto (직접)** | |
| Wellness | Hero 2차 | 제품 카테고리 보기 | #offerings | 유지 (변경 없음) | 스크롤 이동 |
| Wellness | 하단 primary | 스마트스토어에서 구매하기 | 외부 링크 | 유지 (변경 없음) | 실 구매 링크, mailto 대상 아님 |
| Wellness | 하단 secondary | 뉴스레터/소식 구독 | # | **제거** | 별도 구독 인프라(메일링 리스트 등) 없이 "#"로 방치된 미기능 CTA. 신청 폼과 성격도 달라 지금 단계에서는 페이지를 더 가볍게 만드는 쪽이 낫다고 판단. 추후 실제 뉴스레터 운영을 시작하면 별도로 추가 |

결과: 페이지당 신청류 CTA가 기존 최대 5개 → Header/Footer(전역 2개) + Hero 1개 + 하단 1개 = **4개**로 정리되고,
그중 Hero/하단 2개는 같은 액션의 자연스러운 반복 노출이라 실질적으로는 "한 가지 요청"만 남는다.
Academy/Advisory 하단 secondary, Wellness 하단 secondary 총 3개 버튼 제거.

## mailto 제목/본문 초안

수신 주소 공통: `fortunecho@naver.com`. 본문은 이용자가 빈칸만 채워 보내는 템플릿 형식.
톤앤매너는 기존 결정사항(전문적/신뢰감 우선, Advisory는 B2B 포지셔닝 고려)을 따름.

### 전역 Header/Footer (페이지 무관 공통 진입점)

- Subject: `[ConnectX] 상담 신청`
- Body:
  ```
  안녕하세요, ConnectX 상담을 신청합니다.

  ▶ 성함:
  ▶ 연락처:
  ▶ 관심 서비스 (Academy / Advisory / Wellness):
  ▶ 문의 내용:
  ```

### 랜딩 Hero — "무료 진단 신청"

- Subject: `[ConnectX] 무료 진단 신청`
- Body:
  ```
  안녕하세요, ConnectX 무료 진단을 신청합니다.

  ▶ 성함:
  ▶ 연락처:
  ▶ 회사명 (해당 시):
  ▶ 관심 영역 (인프라/보안 · 교육 · 건강관리):
  ▶ 문의 내용:
  ```

### Academy (Hero + 하단) — "상담 신청하기" / "무료 상담 신청"

- Subject: `[ConnectX Academy] 상담 신청`
- Body:
  ```
  안녕하세요, ConnectX Academy 상담을 신청합니다.

  ▶ 성함:
  ▶ 연락처:
  ▶ 소속 (개인 / 회사명):
  ▶ 관심 과정 또는 목표 (취업/이직/재직자 역량강화 등):
  ▶ 문의 내용:
  ```

### Advisory (Hero + 하단) — "무료 진단 신청"

- Subject: `[ConnectX Advisory] 무료 진단 신청`
- Body:
  ```
  안녕하세요, ConnectX Advisory 무료 진단을 신청합니다.

  ▶ 성함:
  ▶ 연락처:
  ▶ 회사명:
  ▶ 임직원 규모 (선택):
  ▶ 현재 인프라/보안 관련 고민:
  ```

### Wellness (Hero) — "내 맞춤 추천 받기"

- Subject: `[ConnectX Wellness] 맞춤 추천 신청`
- Body:
  ```
  안녕하세요, ConnectX Wellness 맞춤 추천을 신청합니다.

  ▶ 성함:
  ▶ 연락처:
  ▶ 나이대 / 성별 (선택):
  ▶ 현재 챙겨 먹는 영양제 또는 건강 고민:
  ```

## 개발팀장에게 인계

- 위 표의 "제거" 항목 3개(Academy 하단 secondary, Advisory 하단 secondary, Wellness 하단 secondary)를
  각 `lib/detail-pages/*.ts`의 `cta` 섹션에서 삭제하고, `CtaSection` 컴포넌트가 secondary 없이도
  자연스럽게 렌더링되는지 확인할 것 (이미 `section.secondaryLabel && section.secondaryHref` 조건부
  렌더링이라 타입만 optional로 유지하면 코드 변경 없이 데이터만 지워도 됨).
- "유지 → mailto" 항목은 공용 mailto 빌더 유틸로 구현 권장 (주소 하드코딩 분산 방지).
- Academy/Advisory/Wellness Hero 1차 CTA는 기존 `#cta` 앵커 대신 바로 mailto로 연결 — 하단 CtaSection까지
  스크롤한 뒤 다시 버튼을 눌러야 하는 2단계 흐름 제거.
