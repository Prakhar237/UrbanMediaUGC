"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Will AI avatars look fake to my audience?",
    a: "Used poorly, yes. Used well, no. The avatars we ship are vetted on three vectors: micro-expression realism, lip-sync precision, and culturally native delivery. Every variation is QC'd against the same bar: would a paid social user scrolling at 2am stop on this? If the answer is no, it doesn't ship.",
  },
  {
    q: "How does this compare to hiring real UGC creators?",
    a: "Real creators are great when you have a brief that won't change for six weeks. Performance marketing isn't that. Industry rates land near $198/video before you stack 30–50% for usage rights and another 30%/month for whitelisting (JoinBrands 2025, Superscale 2026). At that rate you ship 4–8 variants a month. The same budget here ships 20–30+.",
  },
  {
    q: "Can you match our brand voice and ad style?",
    a: "Yes. We start by reverse-engineering your top 10 winning ads — hook structure, pacing, CTA framing, even shot composition. Every variation is generated against that voice spec, not a generic template.",
  },
  {
    q: "What platforms do these work on?",
    a: "Meta (Facebook + Instagram), TikTok, YouTube Shorts, and Snap. Native vertical 9:16 by default, with 1:1 and 16:9 cuts on request. We don't ship a single asset across platforms — pacing and hook structure are tuned per channel.",
  },
  {
    q: "How fast can you turn around revisions?",
    a: "Minor revisions (copy, CTA, pacing tweaks) within 24 hours. New angles or hooks within 48. If a variant performs, you get 5 more cuts of it within 24 hours so you can scale before the hook fatigues.",
  },
  {
    q: "What if a variation doesn't perform?",
    a: "That's the whole point — most won't. The math of paid social is that the majority of variants underperform; you only need a small share to win to lift account-level results. Kill losers on day 3, double down on winners. Volume is the strategy, not the symptom.",
  },
  {
    q: "Do I own the content and usage rights?",
    a: "Full commercial usage rights for paid media across all platforms, in perpetuity. No model release issues, no creator licensing renewals, no surprise takedown requests.",
  },
  {
    q: "Can I see real performance numbers from your work?",
    a: "Honest answer: I'm early. I won't put fake metrics on a landing page. On the discovery call I'll walk you through what I've shipped (including BiblePeaceFinder), the creative process, the hook frameworks, and any live performance data that exists — including what hasn't worked.",
  },
];

function Item({
  q, a, open, onToggle, index,
}: {
  q: string; a: string; open: boolean; onToggle: () => void; index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[var(--color-border-subtle)]"
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="text-[18px] font-medium leading-[1.4] tracking-[-0.005em] text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent-warm)]">
          {q}
        </span>
        <span
          className={`relative inline-block h-5 w-5 shrink-0 transition-transform duration-500 ${open ? "rotate-45" : ""}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        >
          <span className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-[var(--color-text-secondary)]" />
          <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-[var(--color-text-secondary)]" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 pr-8 text-[15px] leading-[1.7] text-[var(--color-text-secondary)]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative border-b border-[var(--color-border-subtle)] py-32 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">

          {/* Sticky sidebar with HQ visual */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="mono-label">Objection handling</div>
              <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.025em]">
                <span className="block">Questions performance</span>
                <span className="block font-display font-light italic text-[var(--color-accent-warm)]">
                  marketers ask.
                </span>
              </h2>
              <p className="mt-6 max-w-sm text-[14px] leading-[1.6] text-[var(--color-text-tertiary)]">
                If you have a question that isn't here, the discovery call is
                the right place to ask it.
              </p>

              {/* HQ sidebar art */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="mt-10 overflow-hidden rounded-[20px] border border-[var(--color-border-subtle)]"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/faq-sidebar.png"
                    alt="Abstract golden question mark art"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)]/40 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* FAQ accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-[var(--color-border-subtle)]">
              {faqs.map((f, i) => (
                <Item
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                  index={i}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
