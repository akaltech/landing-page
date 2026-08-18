import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterContent } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Info — akal",
  description:
    "akal is a content studio and creator community. food was the proving ground — 1.4m+ organic views is the receipt. meet the team.",
};

const teamMembers = [
  {
    name: "abdullah",
    role: "technical",
    image: "/team/abdullah.png",
    imageClass: "object-cover",
  },
  {
    name: "alfie",
    role: "creative",
    image: "/team/alfie.png",
    imageClass: "object-cover",
  },
  {
    name: "sav",
    role: "strategy",
    image: "/team/sav.png",
    imageClass: "object-cover",
  },
] as const;

export default function InfoPage() {
  return (
    <main
      style={
        {
          backgroundColor: "#A3B57A",
          "--header-text": "#141211",
          "--header-hover": "#141211cc",
        } as React.CSSProperties
      }
    >
      {/* ─── Hero ─── */}
      <section
        className="grid min-h-[100vh] grid-cols-4 grid-rows-[1fr_auto] gap-x-4 px-4 pb-16 pt-16 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        aria-label="Hero"
      >
        <h1
          className="col-span-4 row-start-2 self-end font-display text-[clamp(1.5rem,3vw,2.75rem)] font-black leading-[1.1] tracking-[-0.06em] text-[#141211] sm:col-span-5 lg:col-span-7"
          style={{ textWrap: "balance", wordSpacing: "0.15em" }}
        >
          WE MADE THE CONTENT BEFORE WE MANAGED IT.
        </h1>

        <div className="relative col-span-4 row-start-1 self-end overflow-hidden aspect-[3/4] max-h-[60vh] sm:col-span-3 sm:col-start-6 sm:row-start-2 lg:col-span-4 lg:col-start-9">
          <Image
            src="/team/team.jpeg"
            alt="Akal team photo — abdullah, alfie, and sav"
            fill
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 37.5vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ─── About ─── */}
      <section
        className="grid grid-cols-4 gap-x-4 px-4 py-16 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        style={{
          paddingTop: "clamp(4rem, 2rem + 8.45vw, 8rem)",
          paddingBottom: "clamp(4rem, 2rem + 8.45vw, 8rem)",
        }}
        aria-label="About us"
      >
        {/* Label */}
        <p className="col-span-4 font-sans text-[0.75rem] font-medium uppercase text-[#141211]/70 sm:col-span-2 lg:col-span-3">
          A LITTLE ABOUT US
        </p>

        {/* Body copy */}
        <div className="col-span-4 mt-6 sm:col-span-5 sm:col-start-4 sm:mt-0 lg:col-span-6 lg:col-start-5">
          <p className="max-w-[65ch] font-sans text-[1.125rem] leading-[1.6] text-[#141211]/70">
            akal started as a food and culture channel. we took it from nothing
            to over 1.4 million organic views without spending a penny on
            distribution — just short-form the algorithm actually carried.
          </p>
          <p className="mt-6 max-w-[65ch] font-sans text-[1.125rem] leading-[1.6] text-[#141211]/70">
            what we learned doing that is the business now: how to make content
            that travels, and how to make a lot of it without the quality
            falling over. we run it as two halves — a community of 30+ trained
            creators we direct, and a studio that decides what good looks like.
          </p>
          <p className="mt-6 max-w-[65ch] font-sans text-[1.125rem] leading-[1.6] text-[#141211]/70">
            now we do it for other people&apos;s products. a cast of creators run
            dedicated accounts for consumer apps and post every day, organic,
            every video reviewed before it goes live. the vertical was always
            incidental. the skill is what travels.
          </p>

          <Link
            href="/contact"
            className="group/offer mt-6 inline-flex items-center gap-1.5 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-[#141211]/70 transition-colors duration-150 ease-in-out hover:text-[#141211] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
          >
            ALWAYS ON — FOR CONSUMER APPS
            <span
              aria-hidden="true"
              className="transition-transform duration-150 ease-in-out group-hover/offer:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* ─── The Team ─── */}
      <section
        className="grid grid-cols-4 gap-x-4 px-4 pb-16 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12"
        style={{
          paddingBottom: "clamp(4rem, 2rem + 8.45vw, 8rem)",
        }}
        aria-label="The team"
      >
        {/* Label */}
        <p className="col-span-4 font-sans text-[0.75rem] font-medium uppercase text-[#141211]/70 sm:col-span-2 lg:col-span-3">
          THE TEAM
        </p>

        {/* Team cards */}
        <div className="col-span-4 mt-8 grid grid-cols-1 gap-8 sm:col-span-6 sm:col-start-3 sm:mt-0 sm:grid-cols-3 lg:col-span-9 lg:col-start-4">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  className={member.imageClass}
                />
              </div>
              <p className="mt-3 font-sans text-[0.875rem] text-[#141211]">
                ({member.name})
              </p>
              <p className="mt-1 font-sans text-[0.75rem] font-medium uppercase text-[#141211]/50">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#141211]/10 [&_a]:text-[#141211]/60 [&_a]:hover:text-[#141211] [&_p]:text-[#141211]/40 [&_span]:text-[#141211]/50">
        <FooterContent />
      </footer>
    </main>
  );
}
