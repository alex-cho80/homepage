export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="break-keep text-center text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
      {children}
    </h2>
  );
}
