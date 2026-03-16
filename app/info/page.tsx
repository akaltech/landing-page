import { Metadata } from "next";
import Image from "next/image";
import { FooterContent } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Info — Akal",
  description:
    "We create content that moves young British Muslims — because we are that audience. Meet the team behind AKal.",
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
          WE CREATE FOR AN AUDIENCE WE KNOW — BECAUSE WE ARE THAT AUDIENCE.
        </h1>

        <div className="relative col-span-4 row-start-1 self-end overflow-hidden aspect-[3/4] max-h-[60vh] sm:col-span-3 sm:col-start-6 sm:row-start-2 lg:col-span-4 lg:col-start-9">
          <Image
            src="/team/team.jpeg"
            alt="AKal Eats team photo — abdullah, alfie, and sav with a spread of burgers and loaded fries"
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
            young british muslims are one of the most engaged audiences on
            social — but most brands have no idea how to reach them. the content
            feels forced, the cultural references are off, and the audience can
            tell in half a second.
          </p>
          <p className="mt-6 max-w-[65ch] font-sans text-[1.125rem] leading-[1.6] text-[#141211]/70">
            we started akal because we saw the gap. three friends from the
            community, building a content engine that actually resonates — not
            because we studied the audience, but because we are the audience. we
            know what gets shared, what gets saved, and what gets ignored.
          </p>
          <p className="mt-6 max-w-[65ch] font-sans text-[1.125rem] leading-[1.6] text-[#141211]/70">
            brands work with us because our content performs. 9.3% engagement,
            35K shares, 1.3M views this year — numbers built on trust, not
            tricks. if your brand wants in, we&apos;re how you get there.
          </p>
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
