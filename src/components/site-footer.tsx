import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[120%] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-brand-foreground glow-brand">
                <span className="font-display text-base font-black">E</span>
              </span>
              <span className="font-display text-xl font-bold">
                Earthbound<span className="text-brand">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-md font-display text-2xl italic leading-snug text-foreground">
              We are a global agency that brings <span className="text-brand">brands to life</span>.
            </p>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Product, design, and licensing — credited to decades of work with iconic brands across
              fashion, food, lifestyle, and entertainment.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Studio
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand">About</Link></li>
              <li><Link to="/products" className="hover:text-brand">Products</Link></li>
              <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Locations
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>New York</li>
              <li>Bentonville</li>
              <li>Providence</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Earthbound Brands. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-brand"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn"  className="hover:text-brand"><Linkedin  className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter"   className="hover:text-brand"><Twitter   className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}