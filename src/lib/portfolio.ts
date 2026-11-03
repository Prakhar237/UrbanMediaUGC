export type PortfolioVideo = {
  src: string;
  poster: string;
  title: string;
  category: string;
  description: string;
};

function video(slug: string, title: string, category: string, description: string): PortfolioVideo {
  return {
    src: `/videos/portfolio/${slug}.mp4`,
    poster: `/images/portfolio/${slug}.jpg`,
    title,
    category,
    description,
  };
}

export const heroVideos: PortfolioVideo[] = [
  {
    src: "/videos/hero-reel.mp4",
    poster: "/images/portfolio/hero-reel.jpg",
    title: "The original reel",
    category: "AI UGC",
    description: "Creator-led storytelling.",
  },
  video("mixer", "Mixer", "Product demo", "Everyday essentials, brought to life."),
  video("bohobag", "Boho Bag", "Fashion & lifestyle", "A little personality. A statement piece."),
];

export const featuredVideos = [
  video("redbull-hero", "Red Bull", "Energy in motion", "A bold product film with a different kind of energy."),
  video("beautyhero", "Beauty Care", "Beauty in focus", "A closer look at beauty, texture, and detail."),
];

export const workVideos = [
  video("earbuds", "Earbuds", "Tech & audio", "Sound, style, and everyday essentials."),
  video("watch", "Watch", "Accessories", "A closer look at the details."),
  video("sportshoes", "Sport Shoes", "Sport & lifestyle", "Made for movement."),
  video("candy", "Candy", "Food & beverage", "A little sweetness on screen."),
  video("ootd", "Outfit of the Day", "Fashion", "Personal style, in motion."),
  video("sp1", "Boho Details", "Fashion & accessories", "Texture, colour, and the smallest details."),
  video("sp2", "The Boho Edit", "Fashion & accessories", "A statement piece from a new perspective."),
  video("ugc1", "The Serum Story", "Skincare", "A beauty essential, up close."),
  video("ugc2", "The Beauty Ritual", "Beauty UGC", "Skincare in an everyday routine."),
];
