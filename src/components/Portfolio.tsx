"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    src: "/videos/PF1.mp4",
    label: "Product Review",
    hook: "Authentic unboxing",
    platform: "Meta · Reels",
  },
  {
    src: "/videos/PF2.mp4",
    label: "MakeUp Product",
    hook: "Beauty routine hook",
    platform: "TikTok · 9:16",
  },
  {
    src: "/videos/PF3.mp4",
    label: "App Review",
    hook: "Talking head",
    platform: "Meta · Stories",
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[0];
  index: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="portfolio-card group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video container */}
      <div className="portfolio-card__video-wrap">
        <video
          ref={ref}
          src={video.src}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          className={`portfolio-card__video ${isLoaded ? "is-loaded" : ""}`}
        />

        {/* Gradient overlays */}
        <div className="portfolio-card__gradient-top" />
        <div className="portfolio-card__gradient-bottom" />

        {/* Play indicator */}
        <div
          className={`portfolio-card__play-indicator ${isHovered ? "is-active" : ""}`}
        >
          <div className="portfolio-card__play-bars">
            <span />
            <span />
            <span />
          </div>
          <span className="portfolio-card__play-text">Playing</span>
        </div>

        {/* Platform badge */}
        <div className="portfolio-card__badge">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="portfolio-card__badge-icon"
          >
            <path d="M8 0L14.9 4v8L8 16l-6.9-4V4L8 0z" />
          </svg>
          <span>{video.platform}</span>
        </div>

        {/* Hover border glow */}
        <div className="portfolio-card__border-glow" />
      </div>

      {/* Card footer */}
      <div className="portfolio-card__footer">
        <div className="portfolio-card__footer-label">{video.label}</div>
        <div className="portfolio-card__footer-hook">{video.hook}</div>
        <div className="portfolio-card__footer-cta">
          <span>Watch reel</span>
          <svg
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="portfolio-card__footer-arrow"
          >
            <path d="M3 9l6-6M4 3h5v5" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative border-b border-[var(--color-border-subtle)] py-32 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mono-label">Portfolio</div>
            <h2 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.025em]">
              <span className="block">See the work</span>
              <span className="block font-display font-light italic text-[var(--color-accent-warm)]">
                in motion.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
              Real UGC videos — hooks, angles, and storytelling built for
              performance. Hover to preview. These are the kind of assets we
              ship every week.
            </p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
            Reels / 03
          </div>
        </div>

        {/* Video grid */}
        <div className="portfolio-grid">
          {videos.map((v, i) => (
            <VideoCard key={v.src} video={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
