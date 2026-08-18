import Hero from "@/components/Hero";
import BrandUnitCard from "@/components/BrandUnitCard";
import { brandUnits } from "@/lib/brand-units";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {brandUnits.map((unit) => (
            <BrandUnitCard key={unit.slug} unit={unit} />
          ))}
        </div>
      </section>
    </main>
  );
}
