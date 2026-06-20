"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    label: "Brief & Strategy",
    body: "You share winning ads, target audience, and the angles that matter. We reverse-engineer hook patterns from your top performers and the rest of your category.",
    detail: "Day 0",
  },
  {
    n: "02",
    label: "Variation Generation",
    body: "Our AI avatar pipeline ships 10 hook variations × 3 angles per concept. Native vertical, native voice, native pacing — built for the feed, not for a pitch deck.",
    detail: "Day 1 – 2",
  },
  {
    n: "03",
    label: "Test, Iterate, Scale",
    body: "Winners get 5 more variations within 24 hours. Losers die fast. We work to your testing budget — not the other way around.",
    detail: "Day 3 +",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative border-b border-[var(--color-border-subtle)] py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="mono-label">The process</div>
          <h2 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.025em]">
            <span className="block">From brief to 30 testable variations.</span>
            <span className="block font-display font-light italic text-[var(--color-text-tertiary)]">
              In 48 hours.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[var(--color-border-subtle)] bg-[var(--color-border-subtle)] md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[var(--color-bg-secondary)] p-8 transition-colors duration-500 hover:bg-[var(--color-bg-tertiary)] md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-[44px] font-light leading-none text-[var(--color-text-tertiary)] transition-colors duration-500 group-hover:text-[var(--color-accent-warm)]">
                  {s.n}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                  {s.detail}
                </div>
              </div>

              <h3 className="mt-10 text-[22px] font-medium leading-[1.15] tracking-[-0.01em] text-[var(--color-text-primary)]">
                {s.label}
              </h3>

              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--color-text-secondary)]">
                {s.body}
              </p>

              <svg
                className="absolute right-6 top-6 h-3 w-3 text-[var(--color-text-tertiary)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M2 6h8M6 2l4 4-4 4" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
