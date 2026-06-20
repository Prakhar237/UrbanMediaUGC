import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AI UGC Video Ads for D2C Brands | UrbanMediaUGC",
  description:
    "AI avatar UGC ads for D2C brands — 20–30 variations/month, 48-hour turnaround. No creators, no delays. Built for Meta and TikTok performance.",
  openGraph: {
    title: "AI UGC Ads Built to Convert | UrbanMediaUGC",
    description: "30 variations/month. 48-hour turnaround. No UGC creators needed.",
    url: "https://urbanmedia.co/",
    siteName: "UrbanMediaUGC",
    images: [
      {
        url: "https://urbanmedia.co/og-preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://urbanmedia.co/",
  },
};

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${fraunces.variable} ${montserrat.variable} ${poppins.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "UrbanMediaUGC",
              "description":
                "AI avatar UGC video ad production for D2C brands and performance marketers",
              "url": "https://urbanmedia.co",
              "email": "hello@urbanmedia.co",
              "areaServed": "Worldwide",
              "priceRange": "$1500–$3000/month",
              "serviceType": "AI UGC Video Ad Production",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Will AI avatars look fake to my audience?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Used poorly, yes. Used well, no. The avatars we ship are vetted on three vectors: micro-expression realism, lip-sync precision, and culturally native delivery. Every variation is QC'd against the same bar: would a paid social user scrolling at 2am stop on this? If the answer is no, it doesn't ship.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How does this compare to hiring real UGC creators?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Real creators are great when you have a brief that won't change for six weeks. Performance marketing isn't that. Industry rates land near $198/video before you stack 30–50% for usage rights and another 30%/month for whitelisting (JoinBrands 2025, Superscale 2026). At that rate you ship 4–8 variants a month. The same budget here ships 20–30+.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Can you match our brand voice and ad style?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We start by reverse-engineering your top 10 winning ads — hook structure, pacing, CTA framing, even shot composition. Every variation is generated against that voice spec, not a generic template.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "What platforms do these work on?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Meta (Facebook + Instagram), TikTok, YouTube Shorts, and Snap. Native vertical 9:16 by default, with 1:1 and 16:9 cuts on request. We don't ship a single asset across platforms — pacing and hook structure are tuned per channel.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How fast can you turn around revisions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minor revisions (copy, CTA, pacing tweaks) within 24 hours. New angles or hooks within 48. If a variant performs, you get 5 more cuts of it within 24 hours so you can scale before the hook fatigues.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "What if a variation doesn't perform?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "That's the whole point — most won't. The math of paid social is that the majority of variants underperform; you only need a small share to win to lift account-level results. Kill losers on day 3, double down on winners. Volume is the strategy, not the symptom.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Do I own the content and usage rights?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Full commercial usage rights for paid media across all platforms, in perpetuity. No model release issues, no creator licensing renewals, no surprise takedown requests.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Can I see real performance numbers from your work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Honest answer: I'm early. I won't put fake metrics on a landing page. On the discovery call I'll walk you through what I've shipped (including BiblePeaceFinder), the creative process, the hook frameworks, and any live performance data that exists — including what hasn't worked.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary min-h-screen relative">
        <div className="fixed inset-0 z-[-1] pointer-events-none mix-blend-screen">
          <Image
            src="/images/global_bg.png"
            alt="Background pattern"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.15]"
            priority
          />
        </div>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
