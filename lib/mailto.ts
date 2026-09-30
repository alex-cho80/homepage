export const CONTACT_EMAIL = "fortunecho@naver.com";

export function buildMailtoHref(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildInquiryMailto(subject: string, greeting: string, fields: string[]) {
  const body = `${greeting}\n\n${fields.map((field) => `▶ ${field}:`).join("\n")}\n`;
  return buildMailtoHref(subject, body);
}

export const generalInquiryMailto = buildInquiryMailto(
  "[ConnectX] 무료 상담 신청",
  "안녕하세요, ConnectX 상담을 신청합니다.",
  ["성함", "연락처", "관심 서비스 (Academy / Advisory / Wellness)", "문의 내용"]
);

export const landingDiagnosisMailto = buildInquiryMailto(
  "[ConnectX] 무료 진단 신청",
  "안녕하세요, ConnectX 무료 진단을 신청합니다.",
  ["성함", "연락처", "회사명 (해당 시)", "관심 영역 (인프라/보안 · 교육 · 건강관리)", "문의 내용"]
);

export const academyConsultMailto = buildInquiryMailto(
  "[ConnectX Academy] 상담 신청",
  "안녕하세요, ConnectX Academy 상담을 신청합니다.",
  ["성함", "연락처", "소속 (개인 / 회사명)", "관심 과정 또는 목표 (취업/이직/재직자 역량강화 등)", "문의 내용"]
);

export const advisoryDiagnosisMailto = buildInquiryMailto(
  "[ConnectX Advisory] 무료 진단 신청",
  "안녕하세요, ConnectX Advisory 무료 진단을 신청합니다.",
  ["성함", "연락처", "회사명", "임직원 규모 (선택)", "현재 인프라/보안 관련 고민"]
);

export const wellnessRecommendationMailto = buildInquiryMailto(
  "[ConnectX Wellness] 맞춤 추천 신청",
  "안녕하세요, ConnectX Wellness 맞춤 추천을 신청합니다.",
  ["성함", "연락처", "나이대 / 성별 (선택)", "현재 챙겨 먹는 영양제 또는 건강 고민 (선택)"]
);

export const wellnessProductInquiryMailto = buildInquiryMailto(
  "[ConnectX Wellness] 제품 문의",
  "안녕하세요, ConnectX Wellness 제품에 대해 문의드립니다.",
  ["성함", "연락처", "문의하시는 제품 또는 카테고리", "문의 내용"]
);

export const academyIndividualMailto = buildInquiryMailto(
  "[ConnectX Academy] 개인 교육 문의",
  "안녕하세요, ConnectX Academy 개인 교육을 문의합니다.",
  ["성함", "연락처", "목표 (취업 / 이직 / 재직자 역량강화 등)", "문의 내용"]
);

export const academyCorporateMailto = buildInquiryMailto(
  "[ConnectX Academy] 기업 맞춤교육 문의",
  "안녕하세요, ConnectX Academy 기업 맞춤교육을 문의합니다.",
  ["담당자 성함", "연락처", "회사명", "교육 대상 인원 및 목표", "문의 내용"]
);
