"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";

/* ─── Easing ─── */
const easeOut = [0.25, 0.1, 0.25, 1] as const;

/* ─── Case study data ─── */
interface CaseStudy {
  id: string;
  brand: string;
  description: string;
  brief: string;
  stats: { views: string; likes: string };
  color: string;
  video?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "shake-shack",
    brand: "SHAKE SHACK",
    description: "When a New York icon goes fully halal",
    brief:
      "Broke the news that all UK beef and chicken is now halal-certified. The community had been waiting — we made sure they heard it first.",
    stats: { views: "251K", likes: "12.3K" },
    color: "#2D1F2D",
    video: "/videos/v24044gl0000d4ct26nog65sqi3br5fg.MP4",
  },
  {
    id: "mr-whites-chophouse",
    brand: "MR WHITES CHOPHOUSE",
    description: "Marco Pierre White does iftar. Seriously.",
    brief:
      "Captured the full iftar sharing platter experience — sirloin, rack of lamb, sticky toffee — to drive Ramadan bookings from our community.",
    stats: { views: "87.8K", likes: "4.6K" },
    color: "#3D2B1F",
    video: "/videos/v24044gl0000cv8r4bnog65kc6l90q10.MP4",
  },
  {
    id: "lorenzo-kusina",
    brand: "LORENZO KUSINI",
    description: "Filipino soul food, born in lockdown",
    brief:
      "Told the origin story of three brothers who turned a pandemic kitchen into London's halal Filipino movement. Adobo beef, jerk-glazed inasal, no pork ever.",
    stats: { views: "100.5K", likes: "9.6K" },
    color: "#3D1F1F",
    video: "/videos/v24044gl0000d1vpobfog65iv3canr10.MP4",
  },
  {
    id: "meaa",
    brand: "MEAA",
    description: "Where brunch meets the Mediterranean",
    brief:
      "Highlighted the interiors and the menu — Southern European and North African flavours colliding in a space our audience needed to see.",
    stats: { views: "60.2K", likes: "1.8K" },
    color: "#1F2D3D",
    video: "/videos/v24044gl0000d346bn7og65msp5ha51g.MP4",
  },
  {
    id: "urumchi",
    brand: "URUMCHI",
    description: "The Uyghur kitchen London's been sleeping on",
    brief:
      "We spotlighted their hand-pulled noodles and crispy lamb ribs to introduce Uyghur cuisine to an audience that had never heard of it.",
    stats: { views: "46K", likes: "4.7K" },
    color: "#8B4513",
    video: "/videos/v0f044gc0000cu58cu7og65qqb7dn8ng.MP4",
  },
  {
    id: "cafe-east-pho",
    brand: "CAFE EAST PHO",
    description: "A 27-year pho legacy, still simmering",
    brief:
      "Told the story of a family recipe and a 10-hour broth — showing our audience that halal Vietnamese goes far beyond the usual spots.",
    stats: { views: "41.6K", likes: "1.8K" },
    color: "#2D4A3E",
    video: "/videos/v0f044gc0000culp5inog65tro2v6l00.MP4",
  },
  {
    id: "thai-cup",
    brand: "THAI CUP",
    description: "Halal Thai street food that doesn't compromise",
    brief:
      "Built hype around their signature Thai milk teas and street food classics — positioning them as the go-to halal Thai in central London.",
    stats: { views: "14.9K", likes: "1K" },
    color: "#4A2D2D",
    video: "/videos/v24044gl0000cv2tuenog65i3plcus3g.MP4",
  },
  {
    id: "smoke-and-pepper",
    brand: "SMOKE & PEPPER",
    description: "12-hour brisket, zero compromise",
    brief:
      "Showcased the low-and-slow process behind their smoked brisket and smashed burgers — letting the craft speak for itself.",
    stats: { views: "10.6K", likes: "500" },
    color: "#1A3A2A",
    video: "/videos/v24044gl0000d02iqbvog65oahpp4ttg.MP4",
  },
  {
    id: "huong-viet",
    brand: "HUONG VIET",
    description: "Shoreditch's late-night banh mi window",
    brief:
      "Captured the energy of the midnight serving hatch and a 20-year master chef's pho — turning a local secret into a must-visit.",
    stats: { views: "21.5K", likes: "1.4K" },
    color: "#2A1F3D",
    video: "/videos/v24044gl0000d0d2kevog65qsing9lo0.MP4",
  },
  {
    id: "hei-hei",
    brand: "HEI HEI",
    description: "Halal Cantonese in the heart of Whitechapel",
    brief:
      "Put the spotlight on proper Cantonese cooking done halal — a Whitechapel gem our community needed on their radar.",
    stats: { views: "17.2K", likes: "1.4K" },
    color: "#3D3D1F",
    video: "/videos/v24044gl0000d3b8817og65iavtpo4e0.MP4",
  },
  {
    id: "top-five-indonesian",
    brand: "TOP FIVE INDONESIAN",
    description: "The nasi goreng worth knowing about",
    brief:
      "Put a spotlight on a cuisine that's massively underrepresented in London's halal scene — bold spices, generous plates, no shortcuts.",
    stats: { views: "21K", likes: "1.6K" },
    color: "#1F3D2D",
    video: "/videos/v24044gl0000d5dt9jfog65m5m90vqeg.MP4",
  },
  {
    id: "bali-bali",
    brand: "BALI BALI",
    description: "38 years of rijsttafel on Shaftesbury Avenue",
    brief:
      "Celebrated a family-run institution serving the West End since 1986 — the rijsttafel platter alone is an Indonesian education on one table.",
    stats: { views: "17.4K", likes: "1.2K" },
    color: "#3D2D1F",
    video: "/videos/v24044gl0000d65j447og65ld8vreht0.MP4",
  },
];

const TOTAL = caseStudies.length;
const SIGMA = 0.09;

export function CaseStudies() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <CaseStudiesStatic />;
  }

  return <CaseStudiesAnimated />;
}

function CaseStudiesAnimated() {
  const outerRef = useRef<HTMLDivElement>(null);

  /* Hover state: motion value for animation, React state for info panel */
  const hoveredMV = useMotionValue(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  /* Smooth the raw scroll for buttery animation */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });

  const hoveredStudy = hoveredIndex !== null ? caseStudies[hoveredIndex] : null;

  const handleHover = useCallback(
    (i: number) => {
      hoveredMV.set(i);
      setHoveredIndex(i);
    },
    [hoveredMV],
  );

  const handleHoverEnd = useCallback(() => {
    hoveredMV.set(-1);
    setHoveredIndex(null);
  }, [hoveredMV]);

  return (
    <div ref={outerRef} className="h-[500vh]">
      <section
        id="case-studies"
        className="sticky top-0 flex h-svh flex-col overflow-hidden bg-bg-hero"
        style={{ paddingBlock: "clamp(2rem, 1.5rem + 2.11vw, 3rem)" }}
      >
        {/* Content area — centered rolodex, info panel absolute */}
        <div
          className="relative flex min-h-0 flex-1 items-center justify-center"
          onMouseLeave={handleHoverEnd}
        >
          {/* Rolodex — always centered */}
          <div
            className="flex max-h-[85vh] w-full max-w-[clamp(280px,30vw,400px)] self-stretch flex-col gap-2 py-4 sm:py-6"
            onMouseLeave={handleHoverEnd}
          >
            {caseStudies.map((study, i) => (
              <RolodexCard
                key={study.id}
                study={study}
                index={i}
                isHovered={hoveredIndex === i}
                progress={smoothProgress}
                hoveredMV={hoveredMV}
                onHover={() => handleHover(i)}
              />
            ))}
          </div>

          {/* Info panel — absolutely positioned to the right of center, lg+ only */}
          <div className="pointer-events-none absolute inset-0 hidden items-center lg:flex">
            <div className="ml-[calc(50%+clamp(160px,19vw,260px)+3rem)] w-[25%]">
              <AnimatePresence mode="wait">
                {hoveredStudy && (
                  <motion.div
                    key={hoveredStudy.id}
                    className="flex flex-col gap-8"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={{ duration: 0.25, ease: easeOut }}
                  >
                    <p className="max-w-[28ch] font-display text-[clamp(1.5rem,1.25rem+1.06vw,2.25rem)] font-bold leading-[1.2] text-text-primary">
                      {hoveredStudy.description}
                    </p>

                    <p className="mt-3 max-w-[32ch] font-sans text-[0.875rem] leading-[1.6] text-text-secondary">
                      {hoveredStudy.brief}
                    </p>

                    <div>
                      <p className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-text-tertiary">
                        {hoveredStudy.brand}
                      </p>
                      <p
                        className="mt-2 font-mono text-[0.875rem] uppercase tracking-[0.05em] text-text-tertiary"
                        aria-label={`${hoveredStudy.stats.views.replace("K", " thousand")} views, ${hoveredStudy.stats.likes.replace("K", " thousand")} likes`}
                      >
                        <span className="text-text-primary">
                          {hoveredStudy.stats.views}
                        </span>{" "}
                        views <span className="mx-1">&middot;</span>{" "}
                        <span className="text-text-primary">
                          {hoveredStudy.stats.likes}
                        </span>{" "}
                        likes
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Individual rolodex card ─── */

interface RolodexCardProps {
  study: CaseStudy;
  index: number;
  isHovered: boolean;
  progress: MotionValue<number>;
  hoveredMV: MotionValue<number>;
  onHover: () => void;
}

function RolodexCard({
  study,
  index,
  isHovered,
  progress,
  hoveredMV,
  onHover,
}: RolodexCardProps) {
  const cardCenter = index / (TOTAL - 1);

  const rawFlex = useTransform(() => {
    const scrollP = progress.get();
    const hovered = hoveredMV.get();

    /* Gaussian distribution — cards near scroll position are prominent */
    const scrollDist = Math.abs(scrollP - cardCenter);
    const gaussian = Math.exp(-Math.pow(scrollDist / SIGMA, 2));
    const baseFlex = 8 * gaussian + 0.15;

    /* Hover override */
    if (hovered >= 0) {
      return hovered === index ? 10 : 0.2;
    }

    return baseFlex;
  });

  const rawOpacity = useTransform(() => {
    const scrollP = progress.get();
    const hovered = hoveredMV.get();

    const scrollDist = Math.abs(scrollP - cardCenter);
    const baseOpacity = Math.max(0.25, 1 - scrollDist / (SIGMA * 3));

    /* Hover override */
    if (hovered >= 0) {
      return hovered === index ? 1 : 0.35;
    }

    return baseOpacity;
  });

  const flex = useSpring(rawFlex, { stiffness: 400, damping: 30 });
  const opacity = useSpring(rawOpacity, { stiffness: 400, damping: 30 });

  /* Label fades out when card is very compressed */
  const labelOpacity = useTransform(flex, [0, 0.8, 1.5], [0, 0, 1]);

  /* Unmute on hover and ensure playback continues */
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isHovered;
    if (isHovered) {
      video.play().catch(() => {});
    }
  }, [isHovered]);

  return (
    <motion.div
      style={{ flex, opacity, borderRadius: 32 }}
      className="min-h-0 cursor-pointer overflow-hidden transition-shadow duration-100 ease-linear hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex={0}
      role="article"
      aria-label={`${study.brand} case study`}
    >
      <div
        className="relative h-full w-full"
        style={{ backgroundColor: study.color }}
      >
        {study.video && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src={study.video}
          />
        )}
        <div className="relative flex h-full items-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 sm:p-6">
          <motion.p
            style={{ opacity: labelOpacity }}
            className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-white/90 sm:text-[0.875rem]"
          >
            {study.brand}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Static fallback for reduced motion ─── */

function CaseStudiesStatic() {
  return (
    <section
      id="case-studies"
      className="bg-bg-hero"
      style={{ paddingBlock: "clamp(5rem, 2.5rem + 10.56vw, 10rem)" }}
    >
      <div className="grid grid-cols-4 gap-x-4 px-4 sm:mt-12 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
        <div className="col-span-4 grid grid-cols-2 gap-4 sm:col-span-6 sm:col-start-2 sm:grid-cols-3 lg:col-span-8 lg:col-start-3">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="overflow-hidden rounded-[2rem]"
              aria-label={`${study.brand} case study`}
            >
              <div
                className="relative aspect-[4/3] w-full"
                style={{ backgroundColor: study.color }}
              >
                {study.video && (
                  <video
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                    src={study.video}
                  />
                )}
              </div>
              <div className="p-4">
                <p className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-text-tertiary">
                  {study.brand}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
