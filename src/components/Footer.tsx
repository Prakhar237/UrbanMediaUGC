"use client";

import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[var(--color-bg-primary)] py-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-[var(--color-border-subtle)] pb-16 md:grid-cols-3 md:gap-16">
          <div>
            <Image
              src="/brand/logo.png"
              alt="urbanMediaUGC"
              width={1024}
              height={1024}
              className="h-44 w-auto md:h-52"
            />

            <p className="mt-6 max-w-xs text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
              AI avatar UGC built for performance marketers who measure
              creative in tests, not in views.
            </p>

            <div className="mt-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
              <a
                href="#"
                className="transition-colors hover:text-[var(--color-text-primary)]"
              >
                LinkedIn
              </a>
              <span className="text-[var(--color-border-default)]">·</span>
              <a
                href="#"
                className="transition-colors hover:text-[var(--color-text-primary)]"
              >
                X
              </a>
              <span className="text-[var(--color-border-default)]">·</span>
              <a
                href="#"
                className="transition-colors hover:text-[var(--color-text-primary)]"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              Sitemap
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-[var(--color-text-secondary)]">
              {[
                ["Services", "#services"],
                ["Process", "#process"],
                ["Work", "#work"],
                ["Pricing", "#pricing"],
                ["About", "#about"],
                ["Book a Call", "#book"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="transition-colors hover:text-[var(--color-text-primary)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
              Newsletter
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
              Performance creative insights, weekly. No fluff.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
              className="mt-5 flex items-center gap-2 border-b border-[var(--color-border-default)] pb-2 transition-colors focus-within:border-[var(--color-accent-warm)]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-transparent text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex h-6 w-6 shrink-0 items-center justify-center text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-warm)]"
                aria-label="Subscribe"
              >
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)] md:flex-row md:items-center md:justify-between">
          <div>© 2026 Urban Media — Built in India, shipping worldwide</div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors hover:text-[var(--color-text-primary)]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="transition-colors hover:text-[var(--color-text-primary)]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
