import { Metadata } from "next";
import { FooterContent } from "@/components/layout/footer";
import {
  NumberedList,
  WHY_AKAL_ITEMS,
  HOW_IT_WORKS_ITEMS,
} from "@/components/shared/numbered-list";

export const metadata: Metadata = {
  title: "Contact — akal",
  description:
    "start an always-on creator programme for your product. we're taking on a small number of founding partners at launch.",
};

const proofStats = [
  { value: "6", label: "weeks" },
  { value: "10", label: "creators" },
  { value: "1,200", label: "videos" },
] as const;

export default function ContactPage() {
  return (
    <main
      style={
        {
          backgroundColor: "#C45A3C",
          "--header-text": "rgba(255,255,255,0.8)",
          "--header-hover": "#ffffff",
          "--list-divider": "rgba(255,255,255,0.2)",
          "--list-number": "rgba(255,255,255,0.4)",
          "--list-title": "#ffffff",
          "--list-body": "rgba(255,255,255,0.7)",
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
          TELL US ABOUT YOUR PRODUCT. WE&apos;LL TELL YOU HONESTLY IF WE CAN
          MOVE IT.
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

        <div className="col-span-4 mt-6 sm:col-span-6 sm:col-start-3 sm:mt-0 lg:col-span-9 lg:col-start-4">
          <p className="font-display text-[clamp(1.5rem,1.25rem+1.06vw,2.25rem)] font-[800] leading-[1.2] tracking-[-0.02em] text-white">
            always on
          </p>
          <p className="mt-2 max-w-[50ch] font-sans text-[1rem] leading-[1.5] text-white/70">
            a permanent creator programme for consumer apps.
          </p>
          <p className="mt-6 max-w-[65ch] font-sans text-[1rem] leading-[1.6] text-white/80">
            most brands run content in bursts — three videos, a launch, then a
            gap. always on is the opposite. a cast of trained creators run
            dedicated accounts for your product and post every day,
            indefinitely. two hundred videos a week, organic, every one
            reviewed by us before it goes live.
          </p>
          <p className="mt-4 max-w-[65ch] font-sans text-[1rem] leading-[1.6] text-white/80">
            volume is the point. you don&apos;t find the hook that works by
            arguing over three scripts in a doc — you find it by shipping
            two hundred a week and reading what the platform tells you. the winners
            then go behind paid spend, where you already know they land.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6 sm:max-w-[36rem]">
            {proofStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[clamp(2rem,1.5rem+2.11vw,3.5rem)] font-black leading-[1] tracking-[-0.03em] text-white">
                  {stat.value}
                </p>
                <p className="mt-1 font-sans text-[0.75rem] font-medium uppercase tracking-[0.05em] text-white/50 sm:text-[0.875rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Akal ─── */}
      <section
        className="grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        style={{
          paddingTop: "clamp(3rem, 2rem + 4.23vw, 5rem)",
          paddingBottom: "clamp(3rem, 2rem + 4.23vw, 5rem)",
        }}
        aria-label="Why akal"
      >
        <p className="col-span-4 font-sans text-[0.75rem] font-medium uppercase text-white/50 sm:col-span-2 lg:col-span-3">
          WHY AKAL
        </p>
        <div className="col-span-4 mt-6 sm:col-span-6 sm:col-start-3 sm:mt-0 lg:col-span-9 lg:col-start-4">
          <NumberedList items={WHY_AKAL_ITEMS} />
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section
        className="grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        style={{
          paddingTop: "clamp(3rem, 2rem + 4.23vw, 5rem)",
          paddingBottom: "clamp(3rem, 2rem + 4.23vw, 5rem)",
        }}
        aria-label="How it works"
      >
        <p className="col-span-4 font-sans text-[0.75rem] font-medium uppercase text-white/50 sm:col-span-2 lg:col-span-3">
          HOW IT WORKS
        </p>
        <div className="col-span-4 mt-6 sm:col-span-6 sm:col-start-3 sm:mt-0 lg:col-span-9 lg:col-start-4">
          <NumberedList items={HOW_IT_WORKS_ITEMS} />
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
            taking on a small number of founding partners.
          </p>
          <a
            href="https://cal.com/hello-akal/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-display text-[clamp(1.5rem,3vw,2.5rem)] font-[800] leading-[1.2] text-white transition-opacity duration-150 ease-in-out hover:opacity-70"
          >
            book a call →
          </a>
          <a
            href="mailto:hello@akal.space"
            className="mt-4 block font-sans text-[1rem] font-medium text-white/70 transition-colors duration-150 ease-in-out hover:text-white"
          >
            or email hello@akal.space
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
