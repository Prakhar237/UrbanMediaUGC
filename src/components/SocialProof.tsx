"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const signals = [
  {
    stat: "70–80%",
    label: "of paid social performance is driven by creative",
    source: "Koro et al., 2025–26",
    bgImage: "/images/sp_1.png",
  },
  {
    stat: "40%",
    label: "lower CAC when creative refreshes every 7 days vs. monthly",
    source: "DEV / Koro, 2025",
    bgImage: "/images/sp_2.png",
  },
  {
    stat: "85.7%",
    label: "of D2C advertisers planning to increase AI for creative",
    source: "Motion Creative Trends, 2025 (n=500+)",
    bgImage: "/images/sp_3.png",
  },
  {
    stat: "20–25",
    label: "video creatives per month required for scalable Meta growth",
    source: "ViralGroww benchmark, 2026",
    bgImage: "/images/sp_4.png",
  },
];

export default function SocialProof() {
  return (
    <section className="border-y border-[var(--color-border-subtle)] py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mono-label text-center">
          The bet — backed by industry data, not by hype
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[var(--color-border-subtle)] bg-[var(--color-border-subtle)] sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s, i) => (
            <motion.div
              key={s.stat + i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex min-h-[220px] flex-col gap-3 bg-[var(--color-bg-primary)] p-7 overflow-hidden"
            >
              {/* Background Graphic */}
              <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-700 group-hover:opacity-70">
                <Image
                  src={s.bgImage}
                  alt={s.stat}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col gap-3">
                <div
                  style={{ fontFamily: "var(--font-data)" }}
                  className="text-[30px] font-light leading-none tracking-[-0.02em] text-[var(--color-text-primary)]"
                >
                  {s.stat}
                </div>
                <div
                  style={{ fontFamily: "var(--font-data)" }}
                  className="text-[13px] font-light leading-[1.55] text-[var(--color-text-secondary)]"
                >
                  {s.label}
                </div>
                <div className="mt-auto pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                  {s.source}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
