import VideoPlaylist from "@/components/VideoPlaylist";
import { featuredVideos } from "@/lib/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="featured-films">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="featured-films__heading">
          <div>
            <div className="mono-label">Featured films / 01—02</div>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.03em]">
              Small details.<br />
              <span className="font-display font-light italic text-[var(--color-accent-warm)]">Big-screen energy.</span>
            </h2>
          </div>
          <p className="max-w-[340px] text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            From a burst of energy to a moment of beauty. Two product stories, made to fill the frame.
          </p>
        </div>
        <VideoPlaylist videos={featuredVideos} variant="landscape" label="Featured films" />
        <div className="featured-films__footer">
          <span>Product storytelling, in widescreen.</span>
          <a href="#work">Explore all work <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
