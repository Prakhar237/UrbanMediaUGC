"use client";

import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({
  to,
  decimals = 0,
  suffix = "",
  prefix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => prefix + v.toFixed(decimals) + suffix);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => ctrl.stop();
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  {
    value: 75,
    suffix: "%",
    label: "Creative's share of paid social performance",
    sub: "More than copy, targeting, or bidding combined.",
    source: "Industry consensus, Koro et al. 2025–26",
    img: "/stat_graph_1.png",
  },
  {
    value: 40,
    suffix: "%",
    label: "Lower CAC at 7-day creative refresh",
    sub: "Versus brands refreshing on monthly cycles.",
    source: "DEV / Koro, 2025",
    img: "/stat_graph_2.png",
  },
  {
    value: 35,
    suffix: "%",
    label: "Lower production cost with AI-led creative",
    sub: "On average vs. traditional studio production.",
    source: "TrueFan / Mesha, 2025",
    img: "/stat_graph_3.png",
  },
];

export default function Stats() {
  return (
    <section className="relative border-b border-[var(--color-border-subtle)] py-32 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <div className="mono-label">What the data says</div>
          <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.025em]">
            <span className="block">Three numbers that explain</span>
            <span className="block font-display font-light italic text-[var(--color-text-tertiary)]">
              why this approach works.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-[14px] leading-[1.6] text-[var(--color-text-tertiary)]">
            These are industry findings, not my client results. I don't have
            decade-old case studies — I have a thesis, a process, and the
            volume to test it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[var(--color-border-subtle)] bg-[var(--color-border-subtle)] md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative flex min-h-[380px] flex-col items-start justify-between gap-6 overflow-hidden bg-[var(--color-bg-primary)] p-10 md:p-14"
            >
              {/* Background Graph Image */}
              <div className="pointer-events-none absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-40">
                <Image
                  src={s.img}
                  alt="Data visualization"
                  fill
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/70 to-transparent" />
              </div>

              <div className="relative z-10 w-full">
                <div
                  style={{ fontFamily: "var(--font-data)" }}
                  className="text-[clamp(3.5rem,7vw,6rem)] font-light leading-[0.95] tracking-[-0.04em] text-[var(--color-text-primary)]"
                >
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
              </div>

              <div className="relative z-10 w-full">
                <div className="mb-5 h-px w-12 bg-[var(--color-accent-warm)]/40 transition-all duration-500 group-hover:w-16 group-hover:bg-[var(--color-accent-warm)]" />
                <div
                  className="font-sans text-[15px] font-semibold leading-[1.35] tracking-[0.005em] text-[var(--color-text-primary)]"
                >
                  {s.label}
                </div>
                <div
                  className="mt-2 font-sans text-[13px] leading-[1.55] text-[var(--color-text-secondary)]"
                >
                  {s.sub}
                </div>
                <div className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
                  Source · {s.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
