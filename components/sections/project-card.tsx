"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { cn } from "@/lib/utils";
import { type CaseStudy } from "@/lib/case-studies";

export type CardSize = "sm" | "md" | "lg";
export type CardShift = "up" | "center" | "down";

/* Two sizing modes.

   From `sm` up, cards are sized by HEIGHT (a fraction of the row) with width
   derived from the 9:16 aspect, so the row fits whatever height the hero has
   left over, and the varied sizes give the row its un-gridded rhythm.

   On phones that falls apart: the row is only ~200px tall, so a 9:16 card
   comes out ~110px wide and three of them crowd the screen. There cards are
   sized by WIDTH instead — one fills most of the viewport with the next
   peeking in — and the size and offset variation is dropped, since staggered
   heights read as broken rather than deliberate when only one card shows. */
const MOBILE_WIDTH = "w-[52vw]";

const SIZE_CLASS: Record<CardSize, string> = {
  sm: "sm:h-[70%]",
  md: "sm:h-[84%]",
  lg: "sm:h-[94%]",
};

const SHIFT_CLASS: Record<CardShift, string> = {
  up: "sm:-translate-y-[3%]",
  center: "sm:translate-y-0",
  down: "sm:translate-y-[3%]",
};

interface ProjectCardProps {
  study: CaseStudy;
  size: CardSize;
  shift: CardShift;
  /** Above-the-fold cards load eagerly. */
  priority?: boolean;
  /** Duplicate track: still clickable, but hidden from AT and tab order. */
  decorative?: boolean;
}

export function ProjectCard({
  study,
  size,
  shift,
  priority = false,
  decorative = false,
}: ProjectCardProps) {
  const [hovering, setHovering] = useState(false);
  /* Latches on first hover so the video is fetched once, not on every pass. */
  const [videoMounted, setVideoMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (hovering) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [hovering]);

  function activate() {
    setVideoMounted(true);
    setHovering(true);
  }

  const className = cn(
    "relative block aspect-[9/16] shrink-0 self-center overflow-hidden rounded-[2rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary",
    MOBILE_WIDTH,
    "sm:w-auto",
    SIZE_CLASS[size],
    SHIFT_CLASS[shift],
  );

  const media = (
    <>
      <Image
        src={study.poster}
        alt=""
        fill
        sizes="(max-width: 640px) 52vw, (max-width: 1024px) 30vw, 22vw"
        priority={priority}
        /* The hero is one viewport, so every card is above the fold — waiting
           on intersection would flash the fallback colour. */
        loading={priority ? undefined : "eager"}
        className="object-cover"
      />

      {videoMounted && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          src={study.video}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-out",
            hovering ? "opacity-100" : "opacity-0",
          )}
        />
      )}

      <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-3">
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-white/90">
          {study.brand}
        </span>
      </span>
    </>
  );

  /* Without a post to link to, the card is presentational rather than a link
     pointing somewhere misleading. */
  if (!study.tiktokUrl) {
    return (
      <div
        className={className}
        style={{ backgroundColor: study.color }}
        aria-hidden={decorative || undefined}
        role="img"
        aria-label={`${study.brand} — video`}
        onMouseEnter={activate}
        onMouseLeave={() => setHovering(false)}
      >
        {media}
      </div>
    );
  }

  return (
    <a
      href={study.tiktokUrl}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={decorative ? -1 : undefined}
      aria-hidden={decorative || undefined}
      onClick={() =>
        track("case_study_click", { brand: study.brand, id: study.id })
      }
      onMouseEnter={activate}
      onMouseLeave={() => setHovering(false)}
      onFocus={activate}
      onBlur={() => setHovering(false)}
      className={className}
      style={{ backgroundColor: study.color }}
    >
      {media}
      <span className="sr-only">
        {study.brand} — watch on TikTok (opens in a new tab)
      </span>
    </a>
  );
}
