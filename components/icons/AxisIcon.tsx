const VARIANTS = {
  cluster: (
    <>
      <line x1="20" y1="8" x2="10" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="8" x2="30" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="8" r="3" fill="currentColor" />
      <circle cx="10" cy="30" r="3" fill="currentColor" />
      <circle cx="30" cy="30" r="3" fill="currentColor" />
    </>
  ),
  chain: (
    <>
      <line x1="6" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="20" r="3" fill="currentColor" />
      <circle cx="20" cy="20" r="3.5" fill="white" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="34" cy="20" r="3" fill="currentColor" />
    </>
  ),
  hex: (
    <>
      <polygon
        points="20,6 32,13 32,27 20,34 8,27 8,13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </>
  ),
} as const;

export type AxisIconVariant = keyof typeof VARIANTS;

export default function AxisIcon({
  variant,
  className,
}: {
  variant: AxisIconVariant;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      {VARIANTS[variant]}
    </svg>
  );
}
