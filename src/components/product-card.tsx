import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${product.color}55, transparent 60%), linear-gradient(135deg, var(--surface), var(--surface-2))`,
        }}
      >
        {/* Decorative product mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-40 w-40 items-center justify-center rounded-full text-4xl font-black uppercase text-white/95 shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 font-display"
            style={{ backgroundColor: product.color }}
          >
            {product.brand.split(" ").map((w) => w[0]).join("").slice(0, 2)}
          </div>
        </div>
        <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur">
          {product.category}
        </div>
        <ArrowUpRight className="absolute right-3 top-3 h-5 w-5 -translate-x-2 translate-y-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
      <div className="space-y-1 p-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand">{product.brand}</div>
        <h3 className="font-display text-lg font-bold leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.tagline}</p>
      </div>
    </motion.article>
  );
}