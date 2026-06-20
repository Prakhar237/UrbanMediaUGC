"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Hire a UGC creator",
    price: "~$198 / video",
    meta: "+30–50% usage rights · +30%/mo whitelisting",
    body: "You wait. You hope they understand the brief. You ship one variant per week. Add usage and whitelisting fees and your real per-asset cost is closer to $400.",
    footnote: "JoinBrands 2025, Superscale 2026",
    highlight: false,
  },
  {
    title: "Hire an agency",
    price: "$5,000+ / month retainer",
    meta: "8–12 videos · 2-week revision cycles",
    body: "Strategy decks. Account managers. Slow revisions. Your testing cadence dies in their Slack — and you still don't ship enough variants to fight creative fatigue.",
    footnote: "Industry retainer benchmark",
    highlight: false,
  },
  {
    title: "Urban Media",
    price: "$1.5K – $3K / month",
    meta: "20–30+ variations · 48hr turnaround",
    body: "Hooks, angles, CTAs — generated, tested, killed, scaled. Built around your testing infrastructure, not mine. AI-led production cuts creative cost ~35% vs. studio.",
    footnote: "TrueFan / Mesha, 2025",
    highlight: true,
  },
];

export default function VelocityArgument() {
  return (
    <section
      id="services"
      className="relative border-b border-[var(--color-border-subtle)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">

          {/* Left sticky column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="mono-label">The velocity problem</div>
              <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em]">
                <span className="block">You ship 8 videos a month.</span>
                <span className="mt-1 block font-display font-light italic text-[var(--color-accent-warm)]">
                  Top accounts ship 40–70.
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                Creative fatigue kills paid social. Research shows creative
                drives 70–80% of performance — more than copy, targeting, or
                bidding combined.
              </p>
            </div>
          </div>

          {/* Right cards column */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {cards.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative overflow-hidden rounded-[14px] border p-8 md:p-10 ${
                    c.highlight
                      ? "border-[var(--color-accent-gold)] bg-[var(--color-bg-secondary)]"
                      : "border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                        Option / 0{i + 1}
                      </div>
                      <h3 className={`mt-2 text-[26px] font-medium leading-[1.1] tracking-[-0.01em] ${
                        c.highlight ? "text-[var(--color-accent-warm)]" : "text-[var(--color-text-primary)]"
                      }`}>
                        {c.title}
                      </h3>
                    </div>
                    <div style={{ fontFamily: "var(--font-data)" }} className="text-right text-[15px] font-medium tracking-[-0.01em] text-[var(--color-text-primary)]">
                      {c.price}
                    </div>
                  </div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
                    {c.meta}
                  </div>
                  <p className="mt-6 max-w-lg text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                    {c.body}
                  </p>
                  <div className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                    Source · {c.footnote}
                  </div>
                  {c.highlight && (
                    <div className="pointer-events-none absolute -inset-px rounded-[14px] border border-[var(--color-accent-gold)]/40" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
