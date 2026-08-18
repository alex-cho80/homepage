const GRADIENT_STOPS = (
  <>
    <stop offset="0" stopColor="#0052ff" />
    <stop offset="1" stopColor="#00c2c2" />
  </>
);

function LandingMark() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="h-full w-full">
      <defs>
        <linearGradient id="landing-grad" x1="0" y1="0" x2="200" y2="200">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>
      <line x1="24" y1="24" x2="176" y2="176" stroke="url(#landing-grad)" strokeWidth="2" />
      <line x1="176" y1="24" x2="24" y2="176" stroke="url(#landing-grad)" strokeWidth="2" />
      <circle cx="24" cy="24" r="6" fill="#0052ff" />
      <circle cx="176" cy="24" r="6" fill="#0052ff" />
      <circle cx="24" cy="176" r="6" fill="#00c2c2" />
      <circle cx="176" cy="176" r="6" fill="#00c2c2" />
      <circle cx="100" cy="100" r="9" fill="url(#landing-grad)" />
    </svg>
  );
}

function AcademyMark() {
  return (
    <svg viewBox="0 0 200 220" fill="none" aria-hidden className="h-full w-full">
      <line x1="100" y1="180" x2="100" y2="30" stroke="#cbd5e1" strokeWidth="1.5" />
      <polygon
        points="100,201 60.2,178 60.2,132 100,109 139.8,132 139.8,178"
        fill="none"
        stroke="#0052ff"
        strokeWidth="2"
      />
      <polygon
        points="100,138 67.1,119 67.1,81 100,62 132.9,81 132.9,119"
        fill="none"
        stroke="#3d8bff"
        strokeWidth="2"
      />
      <polygon
        points="100,82 74,67 74,37 100,22 126,37 126,67"
        fill="none"
        stroke="#00c2c2"
        strokeWidth="2"
      />
      <circle cx="100" cy="155" r="3" fill="#0052ff" />
      <circle cx="100" cy="100" r="3" fill="#3d8bff" />
      <circle cx="100" cy="52" r="3" fill="#00c2c2" />
    </svg>
  );
}

function AdvisoryMark() {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="h-full w-full">
      <polygon
        points="100,20 169.3,60 169.3,140 100,180 30.7,140 30.7,60"
        fill="none"
        stroke="#0b1d3a"
        strokeWidth="2"
      />
      <line x1="100" y1="70" x2="70" y2="100" stroke="#0052ff" strokeWidth="1.5" />
      <line x1="100" y1="70" x2="130" y2="100" stroke="#0052ff" strokeWidth="1.5" />
      <line x1="70" y1="100" x2="100" y2="135" stroke="#00c2c2" strokeWidth="1.5" />
      <line x1="130" y1="100" x2="100" y2="135" stroke="#00c2c2" strokeWidth="1.5" />
      <line x1="70" y1="100" x2="130" y2="100" stroke="#cbd5e1" strokeWidth="1.5" />
      <circle cx="100" cy="70" r="4" fill="#0052ff" />
      <circle cx="70" cy="100" r="4" fill="#0052ff" />
      <circle cx="130" cy="100" r="4" fill="#0052ff" />
      <circle cx="100" cy="135" r="4" fill="#00c2c2" />
    </svg>
  );
}

function WellnessMark() {
  const nodes: [number, number, string][] = [
    [170, 100, "#0052ff"],
    [135, 160.6, "#2f8fff"],
    [65, 160.6, "#00b0b0"],
    [30, 100, "#00c2c2"],
    [65, 39.4, "#00b0b0"],
    [135, 39.4, "#2f8fff"],
  ];
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className="h-full w-full">
      {nodes.map(([x, y]) => (
        <line key={`${x}-${y}`} x1="100" y1="100" x2={x} y2={y} stroke="#cbd5e1" strokeWidth="1.5" />
      ))}
      <circle cx="100" cy="100" r="10" fill="none" stroke="#0b1d3a" strokeWidth="2" />
      {nodes.map(([x, y, color]) => (
        <circle key={`${x}-${y}-dot`} cx={x} cy={y} r="5" fill={color} />
      ))}
    </svg>
  );
}

const VARIANTS = {
  landing: LandingMark,
  academy: AcademyMark,
  advisory: AdvisoryMark,
  wellness: WellnessMark,
} as const;

export type HeroIllustrationVariant = keyof typeof VARIANTS;

export default function HeroIllustration({
  variant,
  className,
}: {
  variant: HeroIllustrationVariant;
  className?: string;
}) {
  const Mark = VARIANTS[variant];
  return (
    <div className={className}>
      <Mark />
    </div>
  );
}
