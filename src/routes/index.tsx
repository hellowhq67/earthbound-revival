import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Lightbulb, Package, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-product.jpg";
import studioImg from "@/assets/studio.jpg";
import { Reveal } from "@/components/reveal";
import { BrandMarquee } from "@/components/brand-marquee";
import { ProductCarousel } from "@/components/product-carousel";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Earthbound Brands — Brands brought to life" },
      { name: "description", content: "A global product, design & licensing agency partnering with iconic brands across home, fashion, food, lifestyle, auto, and entertainment." },
      { property: "og:title", content: "Earthbound Brands — Brands brought to life" },
      { property: "og:description", content: "Product, design & licensing for the world's most iconic brands." },
    ],
  }),
  component: Index,
});

const EXPERTISE = [
  { key: "Licensing",  icon: Sparkles,  desc: "Strategic brand extensions that scale with retail." },
  { key: "Product",    icon: Package,   desc: "Innovative product design and development." },
  { key: "Creative",   icon: Lightbulb, desc: "Brand identity and design ecosystems." },
];

const INDUSTRIES = ["Home", "Fashion", "Food & Beverage", "Lifestyle", "Auto", "Celebrity", "Character"];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium uppercase tracking-widest backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
          Brand · Product · Licensing
        </motion.div>

        <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-[9rem]">
          {"We are a".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mr-3 inline-block"
            >
              {w}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mr-3 inline-block italic gradient-text"
          >
            global agency
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="inline-block"
          >
            that brings brands{" "}
            <span className="italic text-brand">to life.</span>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground glow-brand transition-transform hover:scale-105"
          >
            View product gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground"
          >
            About the studio →
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-border p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-brand"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="border-y border-border bg-surface py-20 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="font-display text-2xl leading-relaxed text-balance md:text-4xl">
              We're the <span className="italic text-brand">brand behind the brand</span> in the
              ever-evolving retail industry. As a product, design and licensing agency, we credit
              our expertise to decades of work with iconic brands.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {EXPERTISE.map((item, i) => (
              <Reveal key={item.key} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">{item.key}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  <div className="mt-6 h-px w-12 bg-brand transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand marquee */}
      <BrandMarquee />

      {/* Industries */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <Reveal>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Industries
                </div>
                <h2 className="mt-3 font-display text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  Our industry <span className="italic text-brand">expertise.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-muted-foreground">
                  From boutique fashion lines to nationwide retail rollouts, our cross-disciplinary
                  team partners across every category that matters.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {INDUSTRIES.map((cat, i) => (
                <Reveal key={cat} delay={i * 0.04}>
                  <div className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-4 transition-colors hover:border-brand hover:bg-surface">
                    <span className="text-sm font-semibold uppercase tracking-wider">{cat}</span>
                    <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 text-brand" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-t border-border bg-surface py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                Selected work
              </div>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight md:text-6xl">
                Featured <span className="italic">product.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/products"
                className="hidden text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-brand md:inline-flex"
              >
                View all →
              </Link>
            </Reveal>
          </div>
          <ProductCarousel products={PRODUCTS.slice(0, 8)} />
        </div>
      </section>

      {/* Studio strip */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <img src={studioImg} alt="Earthbound studio" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                The studio
              </div>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight md:text-6xl">
                Built by <span className="italic">obsessives.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Three studios. One creative engine. We pair editorial-grade design with deep
                category expertise to launch licensed programs that retail loves and consumers
                remember.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:border-brand hover:text-brand"
              >
                Inside the studio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border bg-background py-24 md:py-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-5xl font-black tracking-tight text-balance md:text-7xl">
              Let's build the next <span className="italic text-brand">iconic brand.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Tell us where you're headed. We'll bring the strategy, design, and retail muscle.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-wider text-brand-foreground glow-brand-lg transition-transform hover:scale-105"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
