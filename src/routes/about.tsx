import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { BrandMarquee } from "@/components/brand-marquee";
import studioImg from "@/assets/studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — Earthbound Brands" },
      { name: "description", content: "Meet the Earthbound studio — three locations, one creative engine bringing brands to life." },
      { property: "og:title", content: "Studio — Earthbound Brands" },
      { property: "og:description", content: "Inside the Earthbound studio: people, process, and craft." },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { v: "30+", l: "Years bringing brands to life" },
  { v: "120+", l: "Licensed programs launched" },
  { v: "3",  l: "Studios across the US" },
  { v: "∞",  l: "Coffees consumed" },
];

const VALUES = [
  { t: "Brand fluency", d: "We speak the language of equity, audience, and retail — fluently and natively." },
  { t: "Craft over noise", d: "Restraint, precision, and editorial standards — every detail earns its place." },
  { t: "Retail reality", d: "Designed to ship. Built to perform. Loved by buyers and consumers alike." },
  { t: "Partnership", d: "We become an extension of your team. Your wins are our wins." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">The studio</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 max-w-5xl font-display text-5xl font-black leading-[0.95] tracking-tight text-balance md:text-8xl">
              The brand behind <span className="italic text-brand">the brand.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Earthbound Brands is a global product, design, and licensing agency. We partner with
              the world's most iconic names to design, develop, and launch programs that move at
              retail and live in culture.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div>
                <div className="font-display text-5xl font-black text-brand md:text-6xl">{s.v}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <img src={studioImg} alt="Inside the studio" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-4xl font-black tracking-tight md:text-5xl">
                What we <span className="italic text-brand">stand for.</span>
              </h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {VALUES.map((v, i) => (
                <Reveal key={v.t} delay={i * 0.05}>
                  <div className="border-l-2 border-brand/40 pl-5 transition-colors hover:border-brand">
                    <h3 className="font-display text-xl font-bold">{v.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-black tracking-tight md:text-6xl">
              Want to <span className="italic text-brand">work together?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-brand-foreground glow-brand transition-transform hover:scale-105"
            >
              Say hello <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}