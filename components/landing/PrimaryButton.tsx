import Link from "next/link";

export default function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-connectx-blue to-connectx-teal px-7 py-3.5 text-base font-bold text-white shadow-[0_4px_8px_rgba(0,82,255,0.25)] transition hover:opacity-90"
    >
      {children}
      <img src="/icons/landing/arrow-right.svg" alt="" aria-hidden className="size-3.5" />
    </Link>
  );
}
