"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/* ─── Easing ─── */
const easeOut = [0.25, 0.1, 0.25, 1] as const;

/* ─── Variants ─── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export function CTA() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <CTAStatic />;
  }

  return (
    <section
      className="bg-bg-primary"
      style={{
        paddingTop: "clamp(5rem, 2.5rem + 10.56vw, 10rem)",
        paddingBottom: "clamp(5rem, 2.5rem + 10.56vw, 10rem)",
      }}
      aria-label="Get in touch"
    >
      <motion.div
        className="grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Overline */}
        <motion.p
          className="col-span-4 mb-6 font-mono text-[0.75rem] uppercase leading-[1.5] tracking-[0.1em] text-accent-text sm:col-span-8 lg:col-span-9"
          variants={itemVariants}
        >
          GET IN TOUCH
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="col-span-4 font-display text-[clamp(2.5rem,1.5rem+4.23vw,4.5rem)] font-[800] leading-[1.05] tracking-[-0.05em] text-text-primary sm:col-span-7 lg:col-span-9"
          style={{ textWrap: "balance" }}
          variants={headlineVariants}
        >
          your audience is already out there. we&apos;ll build the engine that
          reaches them.
        </motion.h2>

        {/* Email */}
        <motion.a
          href="mailto:hello@akal.space"
          className="col-span-4 mt-6 font-display text-[clamp(1.25rem,1rem+1.06vw,2.25rem)] font-[800] leading-[1.2] tracking-[-0.05em] text-text-secondary transition-colors duration-150 ease-in-out hover:text-text-primary sm:col-span-7 lg:col-span-9"
          variants={itemVariants}
        >
          hello@akal.space
        </motion.a>
      </motion.div>
    </section>
  );
}

function CTAStatic() {
  return (
    <section
      className="bg-bg-primary"
      style={{
        paddingTop: "clamp(5rem, 2.5rem + 10.56vw, 10rem)",
        paddingBottom: "clamp(5rem, 2.5rem + 10.56vw, 10rem)",
      }}
      aria-label="Get in touch"
    >
      <div className="grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
        {/* Overline */}
        <p className="col-span-4 mb-6 font-mono text-[0.75rem] uppercase leading-[1.5] tracking-[0.1em] text-accent-text sm:col-span-8 lg:col-span-9">
          GET IN TOUCH
        </p>

        {/* Headline */}
        <h2
          className="col-span-4 font-display text-[clamp(2.5rem,1.5rem+4.23vw,4.5rem)] font-[800] leading-[1.05] tracking-[-0.05em] text-text-primary sm:col-span-7 lg:col-span-9"
          style={{ textWrap: "balance" }}
        >
          your audience is already out there. we&apos;ll build the engine that
          reaches them.
        </h2>

        {/* Email */}
        <a
          href="mailto:hello@akal.space"
          className="col-span-4 mt-6 font-display text-[clamp(1.25rem,1rem+1.06vw,2.25rem)] font-[800] leading-[1.2] tracking-[-0.05em] text-text-secondary transition-colors duration-150 ease-in-out hover:text-text-primary sm:col-span-7 lg:col-span-9"
        >
          hello@akal.space
        </a>
      </div>
    </section>
  );
}
