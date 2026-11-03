"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { workVideos, type PortfolioVideo } from "@/lib/portfolio";

function FilmDialog({ video, onClose }: { video: PortfolioVideo; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const player = videoRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.querySelectorAll("video").forEach((element) => {
      if (element !== player) element.pause();
    });
    dialog?.showModal();
    void player?.play().catch(() => {});

    return () => {
      player?.pause();
      dialog?.close();
      document.body.style.overflow = overflow;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="film-dialog"
      aria-labelledby="film-dialog-title"
      onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      data-lenis-prevent
    >
      <div className="film-dialog__content">
        <div className="film-dialog__heading">
          <div><span className="reel-player__eyebrow">{video.category}</span><h3 id="film-dialog-title">{video.title}</h3></div>
          <button type="button" autoFocus onClick={onClose} aria-label="Close video">✕</button>
        </div>
        <video ref={videoRef} src={video.src} poster={video.poster} controls playsInline preload="metadata" aria-label={video.title}>
          Your browser does not support video. <a href={video.src}>Open the video</a>.
        </video>
        <a className="film-dialog__fallback" href={video.src} target="_blank" rel="noreferrer">Open video in a new tab ↗</a>
      </div>
    </dialog>
  );
}

export default function Work() {
  const [selected, setSelected] = useState<PortfolioVideo | null>(null);

  return (
    <section id="work" className="relative border-b border-[var(--color-border-subtle)] py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mono-label">Selected work</div>
            <h2 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.025em]">
              <span className="block">Different products.</span>
              <span className="block font-display font-light italic text-[var(--color-accent-warm)]">A story in every frame.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
              Product films, everyday style, and creator-led stories. Explore the collection and press play to watch each piece with sound.
            </p>
          </div>
          <div className="mono-label">The collection / {String(workVideos.length).padStart(2, "0")}</div>
        </div>

        <div className="work-grid">
          {workVideos.map((video, index) => (
            <button key={video.src} type="button" className="work-card" onClick={() => setSelected(video)} aria-label={`Watch ${video.title}`} aria-haspopup="dialog">
              <div className="work-card__visual">
                <Image src={video.poster} alt={`${video.title} film still`} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className="work-card__image" />
                <div className="work-card__shade" />
                <span className="work-card__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="work-card__play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m9 5 11 7-11 7z" /></svg></span>
                <span className="work-card__watch">Watch film <span aria-hidden="true">↗</span></span>
              </div>
              <div className="work-card__body">
                <span className="reel-player__eyebrow">{video.category}</span>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selected ? <FilmDialog video={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}
