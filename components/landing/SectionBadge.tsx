export default function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-connectx-blue/20 bg-connectx-blue/[0.07] px-4 py-1.5 text-[13px] font-bold text-connectx-teal">
      {children}
    </span>
  );
}
