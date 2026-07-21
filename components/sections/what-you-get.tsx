import {
  NumberedList,
  WHAT_YOU_GET_ITEMS,
} from "@/components/shared/numbered-list";

export function WhatYouGet() {
  return (
    <section
      className="bg-bg-primary"
      style={{
        paddingTop: "clamp(4rem, 2rem + 8.45vw, 8rem)",
        paddingBottom: "clamp(4rem, 2rem + 8.45vw, 8rem)",
      }}
      aria-label="What you get"
    >
      <div className="grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
        <div className="col-span-4 sm:col-span-2 lg:col-span-3">
          <p className="font-mono text-[0.75rem] uppercase leading-[1.5] tracking-[0.1em] text-accent-text">
            OUR EXPERTISE
          </p>
          <p className="mt-4 font-display text-[clamp(2rem,1.5rem+2.11vw,3rem)] font-[800] leading-[1.1] tracking-[-0.02em] text-text-primary">
            what you&apos;ll get:
          </p>
        </div>

        <div className="col-span-4 mt-8 sm:col-span-6 sm:col-start-3 sm:mt-0 lg:col-span-9 lg:col-start-4">
          <NumberedList items={WHAT_YOU_GET_ITEMS} variant="stacked" />

          <div className="mt-10 flex justify-end">
            <a
              href="https://cal.com/hello-akal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-[clamp(1.25rem,1rem+1.06vw,2rem)] font-[800] leading-[1.2] tracking-[-0.02em] text-text-primary transition-opacity duration-150 ease-in-out hover:opacity-70"
            >
              book a call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
