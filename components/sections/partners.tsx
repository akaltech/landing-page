"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/* ─── Easing ─── */
const easeOut = [0.25, 0.1, 0.25, 1] as const;

/* ─── Partner data ─── */
const partners = [
  { name: "Shake Shack", logo: "/partners/Shake-Shack-Logo.png" },
  { name: "MB Chicken", logo: "/partners/MBC-Logo.svg" },
  { name: "Meaa", logo: "/partners/Meaa-Logo-Red.png" },
  { name: "GBK", logo: "/partners/gbk.avif" },
  { name: "LinkedIn", logo: "/partners/logo_linkedin.webp" },
  { name: "Smoke & Pepper", logo: "/partners/smoke-and-pepper-768x445.png" },
  { name: "Chophouse", logo: "/partners/chophouse_logo.png" },
  { name: "Mr T's", logo: "/partners/mr ts.png" },
] as const;

function PartnerLogo({ partner }: { partner: (typeof partners)[number] }) {
  return (
    <div
      className="group/logo relative flex aspect-[5/2] w-44 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border-default bg-bg-secondary p-4 sm:w-48 lg:w-52"
      aria-label={partner.name}
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={200}
        height={80}
        className="h-auto max-h-[70%] w-auto max-w-[85%] object-contain opacity-80 saturate-0 transition-all duration-150 ease-in-out group-hover/logo:opacity-100 group-hover/logo:saturate-100"
      />
    </div>
  );
}

function SectionLabel() {
  return (
    <p className="px-4 pb-6 font-mono text-xs uppercase tracking-widest text-text-tertiary sm:px-6 lg:px-12">
      we&apos;ve worked with...
    </p>
  );
}

export function Partners() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <PartnersStatic />;
  }

  return (
    <section
      id="partners"
      className="overflow-hidden bg-bg-hero"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4.23vw, 5rem)" }}
    >
      <SectionLabel />

      {/* Logo marquee — full-bleed, outside the grid */}
      <div>
        <motion.div
          className="group flex"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          <div
            className="animate-marquee flex shrink-0 gap-4 pr-4"
            aria-hidden="true"
          >
            {partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div
            className="animate-marquee flex shrink-0 gap-4 pr-4"
            aria-hidden="true"
          >
            {partners.map((partner) => (
              <PartnerLogo key={`${partner.name}-dup`} partner={partner} />
            ))}
          </div>
        </motion.div>

        {/* Screen reader accessible list */}
        <ul className="sr-only">
          {partners.map((partner) => (
            <li key={partner.name}>{partner.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PartnersStatic() {
  return (
    <section
      id="partners"
      className="overflow-hidden bg-bg-hero"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4.23vw, 5rem)" }}
    >
      <SectionLabel />

      {/* Static logo row for reduced motion */}
      <div>
        <div className="flex gap-4 overflow-hidden px-4 sm:px-6 lg:px-12">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </div>

        <ul className="sr-only">
          {partners.map((partner) => (
            <li key={partner.name}>{partner.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
