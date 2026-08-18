export type HeroContent = {
  type: "hero";
  id: string;
  label: string;
  title: string;
  subtitle: string;
  positionBadge?: string;
  ctas: { label: string; href: string }[];
};

export type ProblemContent = {
  type: "problem";
  id: string;
  heading: string;
  items: string[];
};

export type ConnectAxis = { label: string; body: string };

export type ConnectAxesContent = {
  type: "connectAxes";
  id: string;
  heading: string;
  axes: [ConnectAxis, ConnectAxis, ConnectAxis];
};

export type PositionDetailContent = {
  type: "positionDetail";
  id: string;
  heading: string;
  paragraphs: string[];
};

export type ProcessStep = { label: string; body: string };

export type ProcessContent = {
  type: "process";
  id: string;
  heading: string;
  steps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep];
};

export type OfferingItem = { title: string; body: string };

export type OfferingsContent = {
  type: "offerings";
  id: string;
  heading: string;
  items: OfferingItem[];
  note?: string;
};

export type AudienceColumn = {
  title: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
};

export type AudienceSplitContent = {
  type: "audienceSplit";
  id: string;
  heading: string;
  columns: [AudienceColumn, AudienceColumn];
};

export type TrustContent = {
  type: "trust";
  id: string;
  heading: string;
  points: string[];
};

export type FaqItem = { question: string; answer: string };

export type FaqContent = {
  type: "faq";
  id: string;
  heading: string;
  items: FaqItem[];
};

export type CtaContent = {
  type: "cta";
  id: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export type DetailSection =
  | HeroContent
  | ProblemContent
  | ConnectAxesContent
  | PositionDetailContent
  | ProcessContent
  | OfferingsContent
  | AudienceSplitContent
  | TrustContent
  | FaqContent
  | CtaContent;

export type DetailPageContent = {
  sections: DetailSection[];
};
