"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter Pack",
    italic: false,
    price: "$1,500",
    cadence: "/ month",
    summary: "For founders validating a new offer.",
    items: [
      "10 ad variations / month",
      "2 hook angles per concept",
      "48-hour turnaround",
      "Vertical 9:16, native pacing",
      "1 round of revisions",
    ],
    highlighted: false,
  },
  {
    name: "Scale Pack",
    italic: true,
    price: "$3,000",
    cadence: "/ month",
    summary: "For brands spending $50K+/month on paid social.",
    items: [
      "30 ad variations / month",
      "Hook + angle + CTA testing matrix",
      "24-hour winner re-cuts",
      "Weekly creative strategy call",
      "Test-tracking sheet (what shipped, what won)",
      "Unlimited minor revisions",
      "Slack channel access",
    ],
    highlighted: true,
  },
  {
    name: "Performance Partner",
    italic: false,
    price: "Custom",
    cadence: "",
    summary: "For brands shipping daily across Meta, TikTok, and YouTube.",
    items: [
      "60+ variations / month",
      "Embedded into your creative ops",
      "Same-day winner iteration",
      "Multi-platform: Meta, TikTok, YouTube",
      "Quarterly creative audits",
      "Direct line to founder",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-b border-[var(--color-border-subtle)] py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="mono-label">Pricing</div>
          <h2 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.025em]">
            <span className="block">Built for testing infrastructure.</span>
            <span className="block font-display font-light italic text-[var(--color-text-tertiary)]">
              Not for one-off videos.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative flex flex-col rounded-[14px] border p-8 md:p-10 ${
                t.highlighted
                  ? "border-[var(--color-accent-gold)] bg-[var(--color-bg-secondary)]"
                  : "border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]"
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-2 left-8 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-warm)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-bg-primary)]">
                  Most popular
                </div>
              )}

              <h3
                className={`text-[26px] font-medium leading-[1.1] tracking-[-0.01em] ${
                  t.italic
                    ? "font-display font-light italic text-[var(--color-accent-warm)]"
                    : "text-[var(--color-text-primary)]"
                }`}
              >
                {t.name}
              </h3>

              <div
                style={{ fontFamily: "var(--font-data)" }}
                className="mt-6 flex items-baseline gap-1"
              >
                <span className="text-[16px] font-light text-[var(--color-text-tertiary)]">
                  $
                </span>
                <span className="text-[48px] font-light leading-none tracking-[-0.03em] text-[var(--color-text-primary)]">
                  {t.price.replace("$", "")}
                </span>
                {t.cadence && (
                  <span className="text-[13px] font-light tracking-[0.02em] text-[var(--color-text-tertiary)]">
                    {t.cadence}
                  </span>
                )}
              </div>

              <p className="mt-4 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
                {t.summary}
              </p>

              <ul className="mt-8 divide-y divide-[var(--color-border-subtle)] border-y border-[var(--color-border-subtle)]">
                {t.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 py-3 text-[14px] leading-[1.55] text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-warm)]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/prakharpundir/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-medium transition-transform duration-300 hover:scale-[1.02] ${
                  t.highlighted
                    ? "bg-[var(--color-accent-warm)] text-[var(--color-bg-primary)]"
                    : "border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-warm)] hover:text-[var(--color-accent-warm)]"
                }`}
              >
                <span>Book a Call</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
