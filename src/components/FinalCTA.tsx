"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden border-b border-[var(--color-border-subtle)] py-40 md:py-56"
    >
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0">
        <Image
          src="/cta-bg-cinematic.png"
          alt="Cinematic background for booking call to action"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        {/* darkening overlay so text stays legible */}
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]/60" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_30%,var(--color-bg-primary)_80%)]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mono-label"
          >
            The next move
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.0] tracking-[-0.03em]"
          >
            <span className="block">Ready to test at the velocity</span>
            <span className="block font-display font-light italic text-[var(--color-accent-warm)]">
              your ad account deserves?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.6] text-[var(--color-text-secondary)]"
          >
            30-minute call. We'll audit your current creative output and ship a
            free sample variation of one of your active ads. No deck. No fluff.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-center gap-6"
          >
            <a
              href="https://calendly.com/prakharpundir/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-text-primary)] px-8 py-5 text-[15px] font-medium text-[var(--color-bg-primary)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(232,220,196,0.3)]"
            >
              <span>Book a Call</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>

            <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              <a
                href="mailto:hello@urbanmedia.co"
                className="transition-colors hover:text-[var(--color-text-primary)]"
              >
                hello@urbanmedia.co
              </a>
              <span className="text-[var(--color-border-default)]">·</span>
              <a
                href="#"
                className="transition-colors hover:text-[var(--color-text-primary)]"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
