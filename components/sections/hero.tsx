import { StatBanner } from "@/components/sections/stat-banner";
import { ProjectMarquee } from "@/components/sections/project-marquee";

const BOOKING_URL = "https://cal.com/hello-akal/30min";
const CONTACT_EMAIL = "hello@akal.space";

/* Shared Brockmann grid — 4 / 8 / 12 columns. */
const GRID =
  "grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12";

export function Hero() {
  return (
    /* The hero is exactly one viewport — never taller. Everything below is
       fixed-height except the marquee, which absorbs whatever is left over,
       so the composition fits at any screen size instead of overflowing. */
    <main className="flex min-h-svh flex-col overflow-x-hidden sm:h-svh sm:max-h-svh sm:overflow-hidden">
      <StatBanner />

      <section className="flex min-h-0 flex-1 flex-col gap-y-4 py-4 sm:gap-y-6 sm:py-6">
        {/* ─── Book a call ─── */}
        <div className={GRID}>
          <div className="col-span-4 flex justify-end sm:col-span-8 lg:col-span-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-rise rise-0 rounded-full border border-border-default px-5 py-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-text-primary transition-colors duration-150 ease-in-out hover:border-border-emphasis hover:bg-bg-tertiary active:bg-bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
            >
              book a call
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        {/* ─── Wordmark — the one element that breaks the grid ─── */}
        <h1 className="animate-rise rise-0 shrink-0 text-center font-wordmark text-[33vw] font-[900] leading-[0.85] tracking-[-0.05em] text-text-wordmark sm:whitespace-nowrap sm:text-[17.5vw]">
          AKAL SPACE
        </h1>

        {/* ─── Positioning ─── */}
        <div className={GRID}>
          <p className="animate-rise rise-1 col-span-4 mx-auto max-w-[46ch] text-balance text-center font-mono text-[0.75rem] leading-[1.6] text-text-secondary sm:col-span-6 sm:col-start-2 sm:text-[0.8125rem] lg:col-span-6 lg:col-start-4">
            a content studio creating short-form video for gen-z audiences —
            content they stop for, share, and show up for.
          </p>
        </div>

        {/* ─── The work — absorbs all remaining height ─── */}
        <div className="animate-rise rise-2 min-h-0 sm:flex-1">
          <h2 className="sr-only">Selected work</h2>
          <ProjectMarquee />
        </div>

        {/* ─── Sign-off ─── */}
        <div className={GRID}>
          <p className="animate-rise rise-3 col-span-4 text-center font-mono text-[0.75rem] text-text-secondary sm:col-span-8 sm:text-[0.8125rem] lg:col-span-12">
            let&rsquo;s work together:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-text-primary underline-offset-4 transition-colors duration-150 ease-in-out hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
