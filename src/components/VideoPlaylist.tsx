"use client";

import { useEffect, useRef, useState } from "react";
import type { PortfolioVideo } from "@/lib/portfolio";

function PlaylistFilm({
  video,
  onEnded,
  muted,
  onMutedChange,
}: {
  video: PortfolioVideo;
  onEnded: () => void;
  muted: boolean;
  onMutedChange: (muted: boolean) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    let suspended = true;
    let wantsPlayback = !reducedMotion.matches;

    const syncPlayback = () => {
      suspended = !inView || document.hidden;
      if (suspended) element.pause();
      else if (wantsPlayback) void element.play().catch(() => {});
    };
    const onPause = () => {
      if (!suspended && !element.ended) wantsPlayback = false;
    };
    const onPlay = () => { wantsPlayback = true; };
    const onMotionChange = () => {
      wantsPlayback = !reducedMotion.matches;
      if (!wantsPlayback) element.pause();
      else syncPlayback();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.2 });

    observer.observe(element);
    element.addEventListener("pause", onPause);
    element.addEventListener("play", onPlay);
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      element.removeEventListener("pause", onPause);
      element.removeEventListener("play", onPlay);
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", onMotionChange);
      element.pause();
    };
  }, []);

  return (
    <>
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        aria-label={video.title}
        controls
        muted={muted}
        playsInline
        preload="none"
        onEnded={onEnded}
        onVolumeChange={(event) => onMutedChange(event.currentTarget.muted)}
        onError={() => setFailed(true)}
        className="reel-player__video"
      >
        Your browser does not support video. <a href={video.src}>Open {video.title}</a>.
      </video>
      {failed ? (
        <div className="reel-player__error">
          <p>This film couldn’t load.</p>
          <a href={video.src} target="_blank" rel="noreferrer">Open the video ↗</a>
        </div>
      ) : null}
    </>
  );
}

export default function VideoPlaylist({
  videos,
  variant,
  label,
}: {
  videos: PortfolioVideo[];
  variant: "portrait" | "landscape";
  label: string;
}) {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const current = videos[active];

  return (
    <div className={`reel-player reel-player--${variant}`} aria-label={label}>
      <div className="reel-player__screen">
        <PlaylistFilm
          key={current.src}
          video={current}
          muted={muted}
          onMutedChange={setMuted}
          onEnded={() => setActive((index) => (index + 1) % videos.length)}
        />
        <div className="reel-player__badge"><span />AI Generated</div>
      </div>
      <div className="reel-player__caption">
        <div>
          <span className="reel-player__eyebrow">{current.category}</span>
          <p>{current.title}</p>
        </div>
        <span className="reel-player__count">{String(active + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}</span>
      </div>
      <div className="reel-player__playlist" aria-label={`${label} video selection`}>
        {videos.map((video, index) => (
          <button
            key={video.src}
            type="button"
            aria-label={`Play ${video.title}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
            className={index === active ? "is-active" : ""}
          >
            <span className="reel-player__track" />
            <span className="reel-player__track-label">{video.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
