"use client";

import {
  motion,
  useReducedMotion,
  useInView,
  type Variants,
} from "framer-motion";
import { Eye, Utensils, Users } from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";

/* ─── Easing ─── */
const easeOut = [0.25, 0.1, 0.25, 1] as const;

/* ─── Animation variants ─── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0 },
  },
};

const cardSlideVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

/* ─── Animated counter ─── */
interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}

function AnimatedCounter({
  target,
  suffix = "",
  duration = 700,
  inView,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

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
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  const formatNumber = useCallback(
    (n: number) => {
      if (target >= 1_000_000) {
        const millions = n / 1_000_000;
        return millions >= 1
          ? `${Math.floor(millions)}M`
          : `${Math.floor(n / 1_000)}K`;
      }
      if (target >= 1_000) {
        return `${Math.floor(n / 1_000)}K`;
      }
      return n.toString();
    },
    [target]
  );

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export function Numbers() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  if (shouldReduceMotion) {
    return <NumbersStatic />;
  }

  return (
    <section
      ref={sectionRef}
      id="numbers"
      aria-label="Key statistics"
      className="bg-bg-hero"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4.23vw, 5rem)" }}
    >
      <motion.div
        className="grid grid-cols-4 items-stretch gap-x-4 gap-y-3 px-4 sm:grid-cols-8 sm:gap-x-6 sm:gap-y-4 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Card 1 — Hero stat (dark green, wide) */}
        <motion.div
          variants={cardSlideVariants}
          className="relative col-span-4 flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/[0.06] bg-bg-hero p-5 transition-transform duration-150 ease-out hover:-translate-y-1 sm:col-span-8 sm:p-6 lg:col-span-6 lg:p-8"
        >
          {/* Grid overlay pattern */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Icon */}
          <Eye size={24} className="relative text-text-wordmark" />

          {/* Stat + description */}
          <div className="relative mt-auto">
            <p className="font-display text-[clamp(3rem,2.5rem+3.17vw,5.5rem)] font-[800] leading-[1.0] tracking-[-0.02em] text-text-wordmark">
              <AnimatedCounter target={2_000_000} suffix="+" duration={700} inView={isInView} />
            </p>
            <p className="mt-3 max-w-[20ch] text-[1rem] leading-[1.6] text-text-secondary">
              Total content views across platforms
            </p>
          </div>
        </motion.div>

        {/* Card 2 — Restaurants (cream) */}
        <motion.div
          variants={cardSlideVariants}
          className="col-span-4 flex min-h-[28rem] flex-col justify-between rounded-[2rem] bg-bg-inverse p-5 transition-transform duration-150 ease-out hover:-translate-y-1 sm:col-span-4 sm:p-6 lg:col-span-3"
        >
          <Utensils size={24} className="text-text-inverse" />

          <div className="mt-auto">
            <p className="font-display text-[clamp(3rem,2.5rem+3.17vw,5.5rem)] font-[800] leading-[1.0] tracking-[-0.02em] text-text-inverse">
              <AnimatedCounter target={50} suffix="+" duration={700} inView={isInView} />
            </p>
            <p className="mt-3 text-[1rem] leading-[1.6] text-text-inverse/70">
              Restaurant partners featured
            </p>
          </div>
        </motion.div>

        {/* Card 3 — Community (cream) */}
        <motion.div
          variants={cardSlideVariants}
          className="col-span-4 flex min-h-[28rem] flex-col justify-between rounded-[2rem] bg-bg-inverse p-5 transition-transform duration-150 ease-out hover:-translate-y-1 sm:col-span-4 sm:p-6 lg:col-span-3"
        >
          <Users size={24} className="text-text-inverse" />

          <div className="mt-auto">
            <p className="font-display text-[clamp(3rem,2.5rem+3.17vw,5.5rem)] font-[800] leading-[1.0] tracking-[-0.02em] text-text-inverse">
              <AnimatedCounter target={300_000} suffix="+" duration={700} inView={isInView} />
            </p>
            <p className="mt-3 text-[1rem] leading-[1.6] text-text-inverse/70">
              Community members and growing
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Static fallback for reduced motion ─── */

function NumbersStatic() {
  return (
    <section
      id="numbers"
      aria-label="Key statistics"
      className="bg-bg-hero"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4.23vw, 5rem)" }}
    >
      <div className="grid grid-cols-4 items-stretch gap-x-4 gap-y-3 px-4 sm:grid-cols-8 sm:gap-x-6 sm:gap-y-4 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
        {/* Card 1 — Hero stat */}
        <div className="relative col-span-4 flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/[0.06] bg-bg-hero p-5 sm:col-span-8 sm:p-6 lg:col-span-6 lg:p-8">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <Eye size={24} className="relative text-text-wordmark" />
          <div className="relative mt-auto">
            <p className="font-display text-[clamp(3rem,2.5rem+3.17vw,5.5rem)] font-[800] leading-[1.0] tracking-[-0.02em] text-text-wordmark">
              2M+
            </p>
            <p className="mt-3 max-w-[20ch] text-[1rem] leading-[1.6] text-text-secondary">
              Total content views across platforms
            </p>
          </div>
        </div>

        {/* Card 2 — Restaurants */}
        <div className="col-span-4 flex min-h-[28rem] flex-col justify-between rounded-[2rem] bg-bg-inverse p-5 sm:col-span-4 sm:p-6 lg:col-span-3">
          <Utensils size={24} className="text-text-inverse" />
          <div className="mt-auto">
            <p className="font-display text-[clamp(3rem,2.5rem+3.17vw,5.5rem)] font-[800] leading-[1.0] tracking-[-0.02em] text-text-inverse">
              50+
            </p>
            <p className="mt-3 text-[1rem] leading-[1.6] text-text-inverse/70">
              Restaurant partners featured
            </p>
          </div>
        </div>

        {/* Card 3 — Community */}
        <div className="col-span-4 flex min-h-[28rem] flex-col justify-between rounded-[2rem] bg-bg-inverse p-5 sm:col-span-4 sm:p-6 lg:col-span-3">
          <Users size={24} className="text-text-inverse" />
          <div className="mt-auto">
            <p className="font-display text-[clamp(3rem,2.5rem+3.17vw,5.5rem)] font-[800] leading-[1.0] tracking-[-0.02em] text-text-inverse">
              300K+
            </p>
            <p className="mt-3 text-[1rem] leading-[1.6] text-text-inverse/70">
              Community members and growing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
