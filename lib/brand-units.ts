export type BrandUnit = {
  slug: "academy" | "advisory" | "wellness";
  domain: string;
  name: string;
  connectPhrase: string;
  description: string;
  position?: string;
  positionDetails?: string[];
};

export const brandUnits: BrandUnit[] = [
  {
    slug: "academy",
    domain: "인프라/보안 교육",
    name: "ConnectX Academy",
    connectPhrase: "지식ㆍ실무ㆍ사람 연결",
    description: "인프라/보안 교육",
  },
  {
    slug: "advisory",
    domain: "인프라/보안 컨설팅",
    name: "ConnectX Advisory",
    connectPhrase: "기업 문제ㆍ기술ㆍ솔루션 연결",
    description: "인프라/보안 컨설팅",
    position: "SMB Infra & Security Transformation Partner",
    positionDetails: [
      "전담 인프라·보안 책임자를 채용하기 어려운 기업의 외부 전문팀",
      "기업의 IT 인프라와 보안을 함께 보는 외부 기술기획실",
    ],
  },
  {
    slug: "wellness",
    domain: "건강기능식품 위탁판매",
    name: "ConnectX Wellness",
    connectPhrase: "건강ㆍ전문가ㆍ데이터 연결",
    description: "건강기능식품 위탁판매",
  },
];
