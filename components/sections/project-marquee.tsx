import { caseStudies } from "@/lib/case-studies";
import {
  ProjectCard,
  type CardShift,
  type CardSize,
} from "@/components/sections/project-card";

/* A fixed 6-step rhythm gives the row its organic, un-gridded feel while
   staying deterministic — random offsets would desync server and client
   render. 12 projects = two clean cycles. */
const RHYTHM: readonly { size: CardSize; shift: CardShift }[] = [
  { size: "lg", shift: "down" },
  { size: "md", shift: "up" },
  { size: "sm", shift: "center" },
  { size: "md", shift: "down" },
  { size: "lg", shift: "up" },
  { size: "sm", shift: "center" },
] as const;

function Track({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3 sm:h-full sm:gap-6 sm:pr-6">
      {caseStudies.map((study, i) => (
        <ProjectCard
          key={study.id}
          study={study}
          size={RHYTHM[i % RHYTHM.length].size}
          shift={RHYTHM[i % RHYTHM.length].shift}
          priority={!decorative && i < 3}
          decorative={decorative}
        />
      ))}
    </div>
  );
}

export function ProjectMarquee() {
  return (
    <div className="marquee-viewport group overflow-hidden sm:h-full">
      <div className="flex sm:h-full">
        <Track />
        {/* Duplicate track completes the loop. Fully clickable, but hidden
            from assistive tech so each project is announced and tabbed once. */}
        <Track decorative />
      </div>
    </div>
  );
}
