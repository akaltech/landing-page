import { Metadata } from "next";
import { FooterContent } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Contact — AKal",
  description: "Get in touch with AKal — let's create something together.",
};

const services = [
  [
    "Short-Form Video Content",
    "Hook & CTA Variations",
    "Content Strategy",
    "Monthly Performance Reviews",
  ],
  [
    "Spark Ads & Whitelisting",
    "Paid Ad Usage Rights",
    "Cross-Platform Repurposing",
    "A/B Creative Testing",
  ],
  [
    "Audience Research",
    "Brand Positioning for Muslim Audiences",
    "Campaign Ideation",
    "Ongoing Retainers",
  ],
] as const;

export default function ContactPage() {
  return (
    <main
      style={
        {
          backgroundColor: "#C45A3C",
          "--header-text": "rgba(255,255,255,0.8)",
          "--header-hover": "#ffffff",
        } as React.CSSProperties
      }
    >
      {/* ─── Hero ─── */}
      <section
        className="grid min-h-screen grid-cols-4 grid-rows-[1fr_auto] gap-x-4 px-4 pb-16 pt-16 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        aria-label="Contact hero"
      >
        <h1
          className="col-span-4 row-start-2 self-end font-display text-[clamp(1.75rem,4.5vw,4.5rem)] font-black leading-[1.05] tracking-[-0.06em] text-white/90 sm:col-span-8 lg:col-span-10"
          style={{ textWrap: "balance", wordSpacing: "0.15em" }}
        >
          IF YOU&apos;RE INTERESTED IN WORKING ON SOMETHING TOGETHER, REACH OUT
          AND WE&apos;LL CONNECT WITH YOU SOON.
        </h1>
      </section>

      {/* ─── What We Do ─── */}
      <section
        className="grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        style={{
          paddingTop: "clamp(3rem, 2rem + 4.23vw, 5rem)",
          paddingBottom: "clamp(3rem, 2rem + 4.23vw, 5rem)",
        }}
        aria-label="What we do"
      >
        <p className="col-span-4 font-sans text-[0.75rem] font-medium uppercase text-white/50 sm:col-span-2 lg:col-span-3">
          WHAT WE DO
        </p>

        <div className="col-span-4 mt-6 grid grid-cols-1 gap-6 sm:col-span-6 sm:col-start-3 sm:mt-0 sm:grid-cols-3 lg:col-span-9 lg:col-start-4">
          {services.map((column, colIndex) => (
            <ul key={colIndex} className="flex flex-col gap-3">
              {column.map((service) => (
                <li
                  key={service}
                  className="font-sans text-[0.9375rem] leading-[1.4] text-white/80"
                >
                  {service}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        style={{
          paddingTop: "clamp(3rem, 2rem + 4.23vw, 5rem)",
          paddingBottom: "clamp(5rem, 2.5rem + 10.56vw, 10rem)",
        }}
        aria-label="Get in touch"
      >
        <div className="col-span-4 sm:col-span-6 lg:col-span-5">
          <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-[800] leading-[1.2] text-white/60">
            have a project? let&apos;s talk.
          </p>
          <a
            href="mailto:hello@akal.space"
            className="mt-2 inline-block font-display text-[clamp(1.5rem,3vw,2.5rem)] font-[800] leading-[1.2] text-white transition-opacity duration-150 ease-in-out hover:opacity-70"
          >
            hello@akal.space
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/10 [&_a]:text-white/60 [&_a]:hover:text-white [&_p]:text-white/40 [&_span]:text-white/50">
        <FooterContent />
      </footer>
    </main>
  );
}
