import type { DetailPageContent } from "@/lib/detail-pages/types";
import Hero from "./Hero";
import ProblemStatement from "./ProblemStatement";
import ConnectAxes from "./ConnectAxes";
import PositionDetail from "./PositionDetail";
import ProcessSteps from "./ProcessSteps";
import OfferingsGrid from "./OfferingsGrid";
import AudienceSplit from "./AudienceSplit";
import TrustPoints from "./TrustPoints";
import FaqSection from "./FaqSection";
import CtaSection from "./CtaSection";

export default function DetailPage({ content }: { content: DetailPageContent }) {
  return (
    <main>
      {content.sections.map((section) => {
        switch (section.type) {
          case "hero":
            return <Hero key={section.id} section={section} />;
          case "problem":
            return <ProblemStatement key={section.id} section={section} />;
          case "connectAxes":
            return <ConnectAxes key={section.id} section={section} />;
          case "positionDetail":
            return <PositionDetail key={section.id} section={section} />;
          case "process":
            return <ProcessSteps key={section.id} section={section} />;
          case "offerings":
            return <OfferingsGrid key={section.id} section={section} />;
          case "audienceSplit":
            return <AudienceSplit key={section.id} section={section} />;
          case "trust":
            return <TrustPoints key={section.id} section={section} />;
          case "faq":
            return <FaqSection key={section.id} section={section} />;
          case "cta":
            return <CtaSection key={section.id} section={section} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
