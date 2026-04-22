import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What does Earthbound do?",
  "Show me product categories",
  "How does licensing work?",
];

const PROJECT_KB = `Earthbound Brands is a global product, design, and licensing agency.
Services: Licensing, Product Design & Development, Creative & Brand Identity.
Industries: Home, Fashion, Food & Beverage, Lifestyle, Auto, Celebrity, Character.
Featured brands include Wendy's, Better Homes & Gardens, Crayola, and many more.
Locations: New York, Bentonville, Providence.
`;

function generateLocalReply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("product") || q.includes("catalog"))
    return "Our product catalog spans Home, Fashion, Food & Beverage, Lifestyle, Auto, Celebrity, and Character. Head to the Products page to browse the full carousel — every piece is built with the licensee in mind.";
  if (q.includes("licens"))
    return "Licensing at Earthbound is end-to-end: we build and steward brand programs, then design retail-ready products. We've credited decades of work with iconic brands. Want me to connect you with our licensing team?";
  if (q.includes("contact") || q.includes("hire") || q.includes("project"))
    return "Tell us about your brand on the Contact page — we typically reply within one business day.";
  if (q.includes("location") || q.includes("office") || q.includes("where"))
    return "We have studios in New York, Bentonville, and Providence.";
  if (q.includes("hello") || q.includes("hi") || q.includes("hey"))
    return "Hey there 👋 I'm the Earthbound assistant. Ask me about our services, products, or process.";
  return `Great question. Here's the short version:\n\n${PROJECT_KB}\n\nWant me to point you to a specific page?`;
}

export function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Earthbound brand assistant. Ask me about our services, products, or how to start a project.",
    },
  ]);
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value) return;
    setMessages((m) => [...m, { role: "user", content: value }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: generateLocalReply(value) }]);
      setThinking(false);
      toast.success("New reply from Earthbound assistant");
    }, 700 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground glow-brand-lg pulse-brand transition-transform hover:scale-110"
        aria-label="Open AI assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="b" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Sparkles className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 z-50 flex h-[min(560px,80vh)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl glow-brand-lg sm:right-6"
          >
            <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold">Earthbound Assistant</div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> AI-powered · online
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-3">
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-brand text-brand-foreground"
                          : "bg-surface-2 text-foreground"
                      }`}
                    >
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {thinking && (
                  <div className="flex justify-start">
                    <div className="flex gap-1 rounded-2xl bg-surface-2 px-4 py-3">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "120ms" }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "240ms" }} />
                    </div>
                  </div>
                )}
              </div>

              {messages.length <= 1 && (
                <div className="mt-4 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Suggested
                  </div>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="block w-full rounded-lg border border-border bg-background px-3 py-2 text-left text-sm transition-colors hover:border-brand hover:text-brand"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-surface px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about brands, products, services…"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-brand"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground transition-transform hover:scale-110 disabled:opacity-50"
                disabled={!input.trim() || thinking}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}