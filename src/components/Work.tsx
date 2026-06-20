"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiMeta, SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const samples = [
  {
    angle: "Pain-point hook",
    platform: "Meta · 9:16",
    icon: SiMeta,
    description: "Fast-cut opener naming the audience's specific frustration in the first 1.2s.",
    note: "Spec / Skincare D2C",
    img: "/work-01-skincare.png",
  },
  {
    angle: "Founder-direct testimonial",
    platform: "LinkedIn + Meta",
    icon: FaLinkedin,
    description: "Avatar styled as operator-turned-customer. Calm delivery, concrete numbers.",
    note: "Spec / B2B SaaS",
    img: "/work-02-saas.png",
  },
  {
    angle: "Native creator hook",
    platform: "TikTok · 9:16",
    icon: SiTiktok,
    description: "Phone-style framing, jump cuts, no production polish. Built to feel native to FYP.",
    note: "Spec / Supplements",
    img: "/work-03-supplements.png",
  },
  {
    angle: "3-second contrarian",
    platform: "Meta · 9:16",
    icon: SiMeta,
    description: "Opens with a claim that contradicts category convention. Used to break ad blindness.",
    note: "Spec / Apparel",
    img: "/work-04-apparel.png",
  },
  {
    angle: "Problem → product reveal",
    platform: "TikTok",
    icon: SiTiktok,
    description: "Holds product reveal until the 4–6s mark. Built around install-intent users.",
    note: "Spec / Mobile App",
    img: "/work-05-app.png",
  },
  {
    angle: "Trust-led narrative",
    platform: "Meta · 9:16",
    icon: SiMeta,
    description: "Quiet pacing, single avatar, shipped during BiblePeaceFinder's launch window.",
    note: "BiblePeaceFinder · Live",
    img: "/work-06-bible.png",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative border-b border-[var(--color-border-subtle)] py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mono-label">Selected work</div>
            <h2 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.025em]">
              <span className="block">Hooks, angles, formats —</span>
              <span className="block font-display font-light italic text-[var(--color-accent-warm)]">
                shipped, not pitched.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
              Early-stage portfolio. A mix of live work and spec pieces built
              to category briefs. Performance numbers — the ones that exist —
              get shared on the call, under NDA.
            </p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
            Samples / 06
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.angle + i}
                href="#"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative block overflow-hidden rounded-[16px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--color-accent-gold)] hover:shadow-[0_8px_40px_rgba(201,169,97,0.08)]"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[9/12] overflow-hidden bg-[var(--color-bg-tertiary)]">
                  <Image
                    src={c.img}
                    alt={`AI avatar UGC ad example — ${c.note} ${c.angle}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-[var(--color-bg-secondary)]/30 to-transparent" />

                  {/* platform badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-[var(--color-border-default)] bg-[rgba(10,10,10,0.75)] px-2.5 py-1.5 font-sans text-[10px] font-medium tracking-wide text-[var(--color-text-secondary)] backdrop-blur-sm">
                    <Icon className="h-3 w-3" />
                    <span>{c.platform}</span>
                  </div>

                  {/* arrow icon on hover */}
                  <svg
                    className="absolute right-4 top-4 h-3 w-3 text-[var(--color-accent-warm)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <path d="M3 9l6-6M4 3h5v5" />
                  </svg>
                </div>

                {/* Card body */}
                <div className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)] p-6">
                  <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent-warm)]">
                    {c.note}
                  </div>
                  <div className="mt-3 text-[20px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent-warm)]">
                    {c.angle}
                  </div>
                  <div className="mt-2 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
                    {c.description}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
