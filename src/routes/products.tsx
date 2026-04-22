import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { ProductCarousel } from "@/components/product-carousel";
import { ProductCard } from "@/components/product-card";
import { BrandMarquee } from "@/components/brand-marquee";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import productsImg from "@/assets/products-grid.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Earthbound Brands" },
      { name: "description", content: "Browse the Earthbound Brands product gallery — licensed retail design across home, fashion, food, lifestyle, auto, and character." },
      { property: "og:title", content: "Products — Earthbound Brands" },
      { property: "og:description", content: "Featured licensed product design from Earthbound Brands." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = useMemo(
    () => (filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <img src={productsImg} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand">
              Product gallery
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight text-balance md:text-8xl">
              Built for <span className="italic text-brand">retail.</span>
              <br />
              Loved by <span className="italic">people.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A selection of licensed product programs across every category we live in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured carousel */}
      <section className="border-y border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">Carousel</div>
                <h2 className="mt-2 font-display text-3xl font-black md:text-5xl">Featured drops.</h2>
              </div>
            </div>
          </Reveal>
          <ProductCarousel products={PRODUCTS} />
        </div>
      </section>

      {/* Filtered grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "border-brand bg-brand text-brand-foreground glow-brand"
                    : "border-border bg-transparent text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">No products in this category yet.</p>
          )}
        </div>
      </section>

      <BrandMarquee reverse />
    </>
  );
}