"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─── data ─────────────────────────────────────────────────────────────── */

const phases = [
  {
    n: "01",
    week: "Week 1",
    label: "Brief + Strategy",
    you: [
      "Winning ads you've already run",
      "Target audience & pain points",
      "Angles that matter to your brand",
    ],
    deliver: ["Script concepts (3–5 directions)", "Hook matrix: 9+ tested openers"],
    img: "/process-brief-strategy.png",
    imgAlt: "Content strategy dashboard showing hook matrix and script concepts",
  },
  {
    n: "02",
    week: "Weeks 2–4",
    label: "Production + Iteration",
    bullets: [
      "3 base AI avatar videos — fresh concepts, not templates",
      "27 variations: hook swaps, CTA tests, cut lengths",
      "Delivered in rolling batches as they're ready",
    ],
    img: "/process-production-variations.png",
    imgAlt: "Three smartphone screens showing AI avatar UGC variations",
  },
];

const deliverables = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 13.5V4.5C3 3.675 3.675 3 4.5 3h6l4.5 4.5v6c0 .825-.675 1.5-1.5 1.5H4.5C3.675 15 3 14.325 3 13.5z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path d="M10.5 3v4.5H15" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    title: "Google Drive folder",
    desc: "Organized by concept, labeled for easy upload",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 8h6M6 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="13" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Testing tracker",
    desc: "What shipped, what's live, what won",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M15 3H3a1 1 0 00-1 1v8a1 1 0 001 1h4l2 2 2-2h4a1 1 0 001-1V4a1 1 0 00-1-1z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path d="M6 7.5h6M6 10h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Slack or email channel",
    desc: "Direct line for revisions — no ticket system",
  },
];

/* ─── sub-components ────────────────────────────────────────────────────── */

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof phases)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]"
    >
      {/* top image zone */}
      <div className="relative h-[220px] w-full overflow-hidden bg-[var(--color-bg-tertiary)] md:h-[260px]">
        <Image
          src={phase.img}
          alt={phase.imgAlt}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* gradient overlay to bleed into card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-[var(--color-bg-secondary)]/10 to-transparent" />

        {/* floating week badge */}
        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]/80 px-3 py-1 backdrop-blur-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
            {phase.week}
          </span>
        </div>

        {/* big step number — subtle watermark */}
        <div
          className="pointer-events-none absolute right-5 top-3 font-mono text-[72px] font-light leading-none text-[var(--color-text-primary)] opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.07]"
          aria-hidden
        >
          {phase.n}
        </div>
      </div>

      {/* body */}
      <div className="p-8">
        <h3 className="mb-6 text-[1.4rem] font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
          {phase.label}
        </h3>

        {phase.you && phase.deliver ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                You share
              </div>
              <ul className="space-y-2">
                {phase.you.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14px] leading-[1.65] text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-tertiary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                I deliver
              </div>
              <ul className="space-y-2">
                {phase.deliver.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14px] leading-[1.65] text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-warm)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <ul className="space-y-3">
            {phase.bullets?.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-[1.65] text-[var(--color-text-secondary)]"
              >
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-warm)]" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

/* ─── main section ──────────────────────────────────────────────────────── */

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[var(--color-border-subtle)] py-32 md:py-40"
    >
      {/* Parallax ambient glow */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,169,97,0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">

        {/* ── Header ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-2xl"
        >
          <div className="mono-label">How This Works</div>
          <h2 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.025em]">
            <span className="block">How 30 Variations</span>
            <span className="block font-display font-light italic text-[var(--color-accent-warm)]">
              Gets Made.
            </span>
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
            Most agencies hide the production process. Here's exactly what
            happens — brief to delivered asset — week by week.
          </p>
        </motion.div>

        {/* ── Phase cards ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.n} phase={phase} index={i} />
          ))}
        </div>

        {/* ── "What you get" deliverables ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-6 overflow-hidden rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]"
        >
          {/* HQ image strip */}
          <div className="relative h-[200px] w-full overflow-hidden bg-[var(--color-bg-tertiary)] md:h-[240px]">
            <Image
              src="/process-delivery-tracker.png"
              alt="Performance tracker, Google Drive folder, and revision chat dashboard"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-[var(--color-bg-secondary)]/5 to-transparent" />
            {/* label pill */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-primary)]/80 px-3 py-1 backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                What you get
              </span>
            </div>
          </div>

          {/* three deliverable columns */}
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-subtle)] sm:grid-cols-3">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.25 + i * 0.08,
                }}
                className="group flex flex-col gap-3 bg-[var(--color-bg-secondary)] p-7 transition-colors duration-500 hover:bg-[var(--color-bg-tertiary)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--color-border-default)] text-[var(--color-accent-gold)] transition-colors duration-300 group-hover:border-[var(--color-accent-gold)]/40 group-hover:bg-[var(--color-accent-gold)]/5">
                  {d.icon}
                </div>
                <div className="text-[15px] font-medium text-[var(--color-text-primary)]">
                  {d.title}
                </div>
                <div className="text-[13px] leading-[1.65] text-[var(--color-text-secondary)]">
                  {d.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom accent line ───────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ transformOrigin: "left" }}
          className="mt-16 h-px bg-gradient-to-r from-[var(--color-accent-gold)]/40 via-[var(--color-accent-warm)]/20 to-transparent"
        />
      </div>
    </section>
  );
}
