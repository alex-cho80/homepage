import SectionBadge from "./SectionBadge";
import PrimaryButton from "./PrimaryButton";

type Props = {
  badge: string;
  title: string;
  description: string;
  chips: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bg?: "bg" | "bg-alt";
};

export default function VerticalHighlight({
  badge,
  title,
  description,
  chips,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  reverse = false,
  bg = "bg-alt",
}: Props) {
  return (
    <section className={bg === "bg-alt" ? "bg-cx-bg-alt" : "bg-cx-bg"}>
      <div
        className={`mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-6 py-16 sm:gap-20 sm:px-[120px] sm:py-[120px] ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        <div className="flex flex-1 flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-4">
            <SectionBadge>{badge}</SectionBadge>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-[38px]">{title}</h2>
            <p className="text-base leading-relaxed text-cx-muted">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-lg border border-cx-border bg-cx-card px-4 py-2 text-sm font-semibold text-white"
              >
                {chip}
              </span>
            ))}
          </div>
          <PrimaryButton href={ctaHref}>{ctaLabel}</PrimaryButton>
        </div>
        <div className="h-[280px] w-full flex-1 overflow-hidden rounded-[20px] border border-cx-border sm:h-[400px]">
          <img src={image} alt={imageAlt} className="size-full object-cover" />
        </div>
      </div>
    </section>
  );
}
