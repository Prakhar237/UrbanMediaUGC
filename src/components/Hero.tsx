"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiMeta, SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";

const KICKER = "+ AI AVATAR UGC FOR PERFORMANCE MARKETERS";

const headline = [
  { text: "AI UGC video ads,", italic: false, color: "primary" },
  { text: "made fast", italic: true, color: "warm" },
  { text: "and built to convert.", italic: true, color: "primary" },
];

function useTypewriter(text: string, speed = 60, startDelay = 200) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setOut(text.slice(0, i));
        if (i < text.length) setTimeout(tick, speed);
      };
      tick();
    }, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [text, speed, startDelay]);
  return out;
}

export default function Hero() {
  const kicker = useTypewriter(KICKER, 28, 300);

  return (
    <section className="relative overflow-hidden pt-40 pb-32 md:pt-48 md:pb-40">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/hero-bg-glow.png"
          alt="Ambient glowing background pattern for hero section"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              <span>{kicker}</span>
              <span className="ml-0.5 inline-block h-3 w-[1px] translate-y-[2px] animate-pulse bg-[var(--color-accent-warm)]" />
            </div>

            <h1 className="mt-8 text-[clamp(2.75rem,7vw,6rem)] font-medium leading-[0.98] tracking-[-0.03em] text-[var(--color-text-primary)]">
              {headline.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${line.italic ? "font-display italic font-light" : ""} ${
                    line.color === "warm" ? "text-[var(--color-accent-warm)]" : ""
                  }`}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[480px] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]"
            >
              For D2C brands, SaaS, and app founders who need testable ad
              creative without slow creators or expensive production. 15–30
              variations a month, optimised for:
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 flex items-center gap-6 text-[var(--color-text-tertiary)]"
            >
              <SiMeta className="h-6 w-6 transition-colors hover:text-[#0668E1]" />
              <SiTiktok className="h-5 w-5 transition-colors hover:text-white" />
              <SiInstagram className="h-5 w-5 transition-colors hover:text-[#E1306C]" />
              <SiYoutube className="h-6 w-6 transition-colors hover:text-[#FF0000]" />
            </motion.div>

            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href="https://calendly.com/prakharpundir/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-text-primary)] px-6 py-3.5 text-[14px] font-medium text-[var(--color-bg-primary)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(232,220,196,0.25)]"
              >
                <span>Book a Call</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#samples"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border-default)] px-6 py-3.5 text-[14px] font-medium text-[var(--color-text-primary)] transition-colors duration-300 hover:border-[var(--color-accent-warm)] hover:text-[var(--color-accent-warm)]"
              >
                <span>See Sample Output</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)]"
            >
              <video
                src="/videos/hero-reel.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_30%,rgba(232,220,196,0.06),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--color-bg-primary)]/40 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-bg-primary)]/40 to-transparent" />

              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-[var(--color-border-default)] bg-[rgba(10,10,10,0.7)] px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-warm)] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent-warm)]" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                  AI Generated
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--color-text-tertiary)]">
                    Sample / 003
                  </div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.15em] text-[var(--color-text-secondary)]">
                    HOOK_VARIANT_07
                  </div>
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] text-[var(--color-text-tertiary)]">
                  00:08
                </div>
              </div>
            </motion.div>

            <div className="pointer-events-none absolute -inset-x-8 -inset-y-8 -z-10 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(232,220,196,0.06),transparent_70%)]" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-subtle)] to-transparent" />
    </section>
  );
}
