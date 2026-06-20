"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/cn";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-[var(--color-border-subtle)] bg-[rgba(10,10,10,0.7)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#"
          aria-label="urbanMediaUGC home"
          className="group relative block h-12 w-12 overflow-visible transition-opacity duration-300 hover:opacity-80 md:h-14 md:w-14"
        >
          <Image
            src="/brand/logo.png"
            alt="urbanMediaUGC"
            width={1024}
            height={1024}
            priority
            loading="eager"
            className="absolute left-1/2 top-1/2 h-32 w-32 max-w-none -translate-x-1/2 -translate-y-[42%] md:h-44 md:w-44 md:-translate-y-[40%]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: "var(--font-nav)" }}
              className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://calendly.com/prakharpundir/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text-primary)] px-4 py-2 text-[12px] font-medium text-[var(--color-bg-primary)] transition-transform duration-300 hover:scale-[1.02]"
        >
          <span>Book a Call</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </motion.header>
  );
}
