import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Earthbound Brands" },
      { name: "description", content: "We'd love to hear from you. Tell us about your brand and we'll be in touch within one business day." },
      { property: "og:title", content: "Contact — Earthbound Brands" },
      { property: "og:description", content: "Start a project with Earthbound Brands." },
    ],
  }),
  component: ContactPage,
});

const TOPICS = ["Licensing", "Product", "Creative", "Press / Other"];
const OFFICES = [
  { city: "New York",     line: "Headquarters" },
  { city: "Bentonville",  line: "Retail studio" },
  { city: "Providence",   line: "Design lab" },
];

function ContactPage() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Message sent! We'll be in touch within one business day.", {
      description: `Topic: ${topic}`,
    });
    form.reset();
  };

  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">Contact</div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-3 font-display text-5xl font-black leading-[0.95] tracking-tight text-balance md:text-7xl">
                We'd love to <span className="italic text-brand">hear from you.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-muted-foreground">
                Tell us about your brand, your goals, and what you're trying to ship. We typically
                reply within one business day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              <Reveal delay={0.2}>
                <a href="mailto:hello@earthboundbrands.com" className="group flex items-center gap-3 text-sm hover:text-brand">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-brand">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@earthboundbrands.com
                </a>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-brand">
                    <Phone className="h-4 w-4" />
                  </span>
                  +1 (646) 525-1010
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
                  {OFFICES.map((o) => (
                    <div key={o.city} className="rounded-xl border border-border bg-card p-4">
                      <MapPin className="h-4 w-4 text-brand" />
                      <div className="mt-2 font-display text-lg font-bold">{o.city}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{o.line}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <motion.form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-6 md:p-10 glow-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Topic
                </div>
                <div className="flex flex-wrap gap-2">
                  {TOPICS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTopic(t)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                        topic === t
                          ? "border-brand bg-brand text-brand-foreground"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" placeholder="Jane Doe" />
                <Field name="company" label="Company" placeholder="Acme Co." />
                <Field name="email" label="Email" type="email" placeholder="jane@acme.com" />
                <Field name="phone" label="Phone" placeholder="Optional" />
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your brand and what you're building…"
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto glow-brand"
              >
                {submitting ? "Sending…" : "Send message"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                By submitting this form, you agree to our Privacy Policy.
              </p>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text",
}: { name: string; label: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
    </label>
  );
}