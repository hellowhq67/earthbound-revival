const BRANDS = [
  "WENDY'S", "BETTER HOMES & GARDENS", "CRAYOLA", "POPSUGAR", "MARVEL",
  "HARLEY-DAVIDSON", "NATIONAL GEOGRAPHIC", "DISCOVERY", "POPULAR MECHANICS",
  "REAL SIMPLE", "GOOD HOUSEKEEPING", "FORD", "JEEP", "HASBRO",
];

export function BrandMarquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...BRANDS, ...BRANDS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-surface to-transparent" />
      <div className={`flex w-max gap-12 ${reverse ? "marquee-reverse" : "marquee"}`}>
        {items.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex shrink-0 items-center gap-3 font-display text-3xl font-black tracking-tight text-muted-foreground/70 md:text-5xl"
          >
            {brand}
            <span className="h-2 w-2 rounded-full bg-brand" />
          </div>
        ))}
      </div>
    </div>
  );
}