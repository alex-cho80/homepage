export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-[40px]">
      {children}
    </h2>
  );
}
