"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

/* ─── Easing ─── */
const easeOut = [0.25, 0.1, 0.25, 1] as const;

/* ─── Stats ─── */
const stats = [
  {
    label: "average views per video.",
    target: 22,
    suffix: "K+",
    decimals: 0,
  },
  {
    label: "engagement rate — 2× industry avg.",
    target: 9.3,
    suffix: "%",
    decimals: 1,
  },
  {
    label: "total views across our content this year.",
    target: 1.3,
    suffix: "M+",
    decimals: 1,
  },
  {
    label: "shares — audiences spreading our content.",
    target: 35,
    suffix: "K+",
    decimals: 0,
  },
] as const;

/* ─── Animated counter ─── */
function Counter({
  target,
  suffix,
  decimals,
  duration = 1200,
}: {
  target: number;
  suffix: string;
  decimals: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const steps = 40;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ─── Wordmark ─── */
const WORDMARK = "AKALSPACE";

/* Auto-fit wordmark to container width.
   Measures text at a base size, then scales font-size so text fills the container. */
function useFitText(overshoot = 1.0) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState("20vw");

  const fit = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    /* Measure at a known base size */
    const baseSizeVw = 20;
    text.style.fontSize = `${baseSizeVw}vw`;
    const containerWidth = container.clientWidth;
    const textWidth = text.scrollWidth;
    const scale = (containerWidth / textWidth) * overshoot;
    const fitted = `${baseSizeVw * scale}vw`;
    setFontSize(fitted);
    text.style.fontSize = fitted;
  }, [overshoot]);

  useEffect(() => {
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [fit]);

  return { containerRef, textRef, fontSize };
}

/* Snappy reveal easing per ANIMATION.md */
const revealEase = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { containerRef, textRef, fontSize } = useFitText();

  /* Scroll progress: 0 at top of hero, 1 when hero fully scrolled out */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Scroll transforms — subtle parallax and fade */
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (shouldReduceMotion) {
    return <HeroStatic />;
  }

  return (
    <section ref={sectionRef} className="min-h-svh bg-bg-hero">
      <div className="grid min-h-svh grid-cols-4 grid-rows-[auto_auto_1fr_auto] gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
        {/* Row 1 — spacer for fixed header */}
        <div className="col-span-4 pt-16 sm:col-span-8 sm:pt-6 lg:col-span-12" />

        {/* Row 2 — wordmark, full-bleed */}
        <motion.div
          ref={containerRef}
          className="col-span-4 -mx-4 overflow-hidden sm:col-span-8 sm:-mx-6 lg:col-span-12 lg:-mx-12"
          style={{ y: wordmarkY, opacity: wordmarkOpacity }}
        >
          <motion.h1
            ref={textRef}
            className="w-full select-none whitespace-nowrap text-center font-[900] leading-[0.85] tracking-[-0.05em] text-text-wordmark"
            style={{ fontFamily: "var(--font-wordmark)", fontSize }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: revealEase,
            }}
          >
            {WORDMARK}
          </motion.h1>
        </motion.div>

        {/* Row 3 (1fr) — description left, stats right, both pinned to bottom */}
        <motion.div
          className="col-span-4 self-end pt-8 sm:col-span-5 sm:pt-12 lg:col-span-5 lg:row-start-3 lg:pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: easeOut }}
          style={{ opacity: contentOpacity }}
        >
          <p className="max-w-[65ch] text-[1.125rem] leading-[1.7] text-text-secondary">
            We create content that moves young British Muslims — an audience
            that doesn&apos;t just scroll, they share, show up, and spend. If
            your brand wants to reach them authentically, we&apos;re how you
            get in the room.
          </p>
        </motion.div>

        <motion.div
          className="col-span-4 flex flex-col gap-2 self-end pt-8 sm:col-span-3 sm:col-start-6 sm:pt-12 lg:col-span-3 lg:col-start-10 lg:row-start-3 lg:pt-16"
          style={{ opacity: contentOpacity }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.suffix}
              className="group/stat relative -mx-3 overflow-hidden border-t border-border-default px-3 pb-3 pt-4 transition-colors duration-150 ease-in-out hover:border-text-wordmark before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-text-wordmark before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.7 + i * 0.12,
                ease: easeOut,
              }}
            >
              <p className="relative z-10 text-right font-display text-[clamp(1.5rem,1rem+1.06vw,2.25rem)] font-[800] leading-[1] tracking-[-0.02em] text-text-primary transition-colors duration-150 ease-in-out group-hover/stat:text-text-inverse">
                <Counter
                  target={stat.target}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="relative z-10 mt-1 text-right font-sans text-[0.75rem] leading-[1.4] text-text-tertiary transition-colors duration-150 ease-in-out group-hover/stat:text-text-inverse/70 sm:text-[0.875rem]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 4 (auto) — scroll prompt, centered */}
        <motion.a
          href="#our-work"
          className="col-span-4 flex items-center justify-center gap-2 pb-6 pt-6 sm:col-span-8 sm:pb-8 lg:col-span-12 lg:row-start-4 lg:pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85, ease: easeOut }}
          style={{ opacity: contentOpacity }}
        >
          <motion.span
            aria-hidden="true"
            className="inline-block -rotate-45"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            🍔
          </motion.span>
          <span className="font-sans text-[0.875rem] font-medium text-text-secondary">
            our work
          </span>
        </motion.a>
      </div>
    </section>
  );
}

function HeroStatic() {
  const { containerRef, textRef, fontSize } = useFitText();

  return (
    <section className="min-h-svh bg-bg-hero">
      <div className="grid min-h-svh grid-cols-4 grid-rows-[auto_auto_1fr_auto] gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
        <div className="col-span-4 pt-6 sm:col-span-8 lg:col-span-12" />

        <div ref={containerRef} className="col-span-4 -mx-4 overflow-hidden sm:col-span-8 sm:-mx-6 lg:col-span-12 lg:-mx-12">
          <h1
            ref={textRef}
            className="w-full select-none whitespace-nowrap text-center font-[900] leading-[0.85] tracking-[-0.05em] text-text-wordmark"
            style={{ fontFamily: "var(--font-wordmark)", fontSize }}
          >
            {WORDMARK}
          </h1>
        </div>

        <div className="col-span-4 self-end pt-8 sm:col-span-5 sm:pt-12 lg:col-span-5 lg:row-start-3 lg:pt-16">
          <p className="max-w-[65ch] text-[1.125rem] leading-[1.7] text-text-secondary">
            a London collective uncovering the hidden gems of Muslim culture,
            one restaurant, one brand, one story at a time. Our community of
            young British Muslims move with intention: they care about
            what&apos;s halal, they care about quality, and they support the
            businesses that get them.
          </p>
        </div>

        <div className="col-span-4 flex flex-col gap-2 self-end pt-8 sm:col-span-3 sm:col-start-6 sm:pt-12 lg:col-span-3 lg:col-start-10 lg:row-start-3 lg:pt-16">
          {stats.map((stat) => (
            <div
              key={stat.suffix}
              className="group/stat relative -mx-3 overflow-hidden border-t border-border-default px-3 pb-3 pt-4 transition-colors duration-150 ease-in-out hover:border-text-wordmark before:absolute before:inset-0 before:origin-right before:scale-x-0 before:bg-text-wordmark before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100"
            >
              <p className="relative z-10 text-right font-display text-[clamp(1.5rem,1rem+1.06vw,2.25rem)] font-[800] leading-[1] tracking-[-0.02em] text-text-primary transition-colors duration-150 ease-in-out group-hover/stat:text-text-inverse">
                {stat.target.toFixed(stat.decimals)}
                {stat.suffix}
              </p>
              <p className="relative z-10 mt-1 text-right font-sans text-[0.75rem] leading-[1.4] text-text-tertiary transition-colors duration-150 ease-in-out group-hover/stat:text-text-inverse/70 sm:text-[0.875rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#our-work"
          className="col-span-4 flex items-center justify-center gap-2 pb-6 pt-6 sm:col-span-8 sm:pb-8 lg:col-span-12 lg:row-start-4 lg:pb-10"
        >
          <span aria-hidden="true" className="inline-block -rotate-45">
            🍔
          </span>
          <span className="font-sans text-[0.875rem] font-medium text-text-secondary">
            our work
          </span>
        </a>
      </div>
    </section>
  );
}
