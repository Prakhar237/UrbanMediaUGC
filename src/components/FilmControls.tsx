"use client";

import { useEffect, useState, type RefObject } from "react";

export default function FilmControls({ videoRef, title }: {
  videoRef: RefObject<HTMLVideoElement | null>;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const sync = () => {
      setPlaying(!video.paused && !video.ended);
      setMuted(video.muted);
    };
    sync();
    const events = ["play", "pause", "ended", "volumechange"];
    events.forEach((event) => video.addEventListener(event, sync));
    return () => events.forEach((event) => video.removeEventListener(event, sync));
  }, [videoRef]);

  return (
    <div className={`film-controls ${playing ? "is-playing" : ""}`}>
      <button
        type="button"
        aria-label={`${playing ? "Pause" : "Play"} ${title} video`}
        onClick={() => {
          const video = videoRef.current;
          if (!video) return;
          if (video.paused) void video.play().catch(() => {});
          else video.pause();
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {playing ? <path d="M7 5h4v14H7zm6 0h4v14h-4z" /> : <path d="m8 5 11 7-11 7z" />}
        </svg>
      </button>
      <button
        type="button"
        aria-label={`${muted ? "Unmute" : "Mute"} ${title} video`}
        onClick={() => {
          const video = videoRef.current;
          if (video) video.muted = !video.muted;
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 5 6 9H3v6h3l5 4z" />
          {muted ? <path d="m16 9 5 6m0-6-5 6" /> : <><path d="M15 8a6 6 0 0 1 0 8" /><path d="M18 5a10 10 0 0 1 0 14" /></>}
        </svg>
      </button>
    </div>
  );
}
