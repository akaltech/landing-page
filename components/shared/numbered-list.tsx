export const WHY_AKAL_ITEMS = [
  {
    title: "we made the content before we managed it",
    body: "the people directing your programme built a 1.4m-view channel from zero. not account managers.",
  },
  {
    title: "every video is reviewed before it posts",
    body: "nothing goes out unseen.",
  },
  {
    title: "uk creators",
    body: "most agencies running this model only recruit in the us and canada.",
  },
  {
    title: "six-week cycles",
    body: "no annual contract — you commit one six-week cycle at a time.",
  },
] as const;

/**
 * Longer, benefit-led version of WHY_AKAL_ITEMS for the homepage's "what you'll get"
 * section, where there's room for full prose. /contact keeps the terse version above —
 * that page is deliberately scannable in seconds, this one is meant to be read.
 */
export const WHAT_YOU_GET_ITEMS = [
  {
    title: "we made the content before we managed it",
    body: "the people directing your programme aren't career account managers working from a playbook — they built a 1.4 million-view channel from nothing and learned firsthand what the algorithm actually rewards. that means the judgement behind your campaign was earned by doing the work, not borrowed from a slide deck. you're getting operators, not middle management.",
  },
  {
    title: "every video is reviewed before it posts",
    body: "every single video is watched by us before it ever reaches your audience — no auto-posting, no creator left to publish whatever they want, no exceptions. that means your brand never gets blindsided by an off-message joke, a bad take, or a video that just doesn't land, because we caught it before it went live, not after.",
  },
  {
    title: "uk creators",
    body: "most agencies running this model only recruit in the us and canada, which means the accent, the humour, and the cultural references are calibrated for the wrong audience the moment you're selling into the uk. our entire roster is uk-based, so the content actually sounds like it belongs on a uk feed — not like it's been dubbed over for one.",
  },
  {
    title: "six-week cycles",
    body: "there's no annual contract, because there's no reason for one — you commit to one six-week cycle at a time. that's long enough to actually test the model properly, but not so long you're stuck if it isn't working. if it's landing, you renew for another six weeks. if it's not, you walk away with nothing more owed.",
  },
] as const;

export const HOW_IT_WORKS_ITEMS = [
  {
    title: "fit call",
    body: "we'll tell you honestly if we don't think it works for your product.",
  },
  {
    title: "casting and angles",
    body: "we pick the creators and build the angle library with you.",
  },
  {
    title: "launch",
    body: "creators post from their own dedicated accounts, not yours. 1,200 videos over 6 weeks, nothing goes live unreviewed.",
  },
  {
    title: "weekly read",
    body: "what landed, what died, what we're doubling down on next week.",
  },
] as const;

interface NumberedListItemData {
  title: string;
  body: string;
}

interface NumberedListProps {
  items: readonly NumberedListItemData[];
  /**
   * "inline" — compact run-in title + body on one flowing line (used on /contact).
   * "stacked" — larger heading-style title with body below (used for homepage feature lists).
   */
  variant?: "inline" | "stacked";
}

export function NumberedList({ items, variant = "inline" }: NumberedListProps) {
  if (variant === "stacked") {
    return (
      <div>
        {items.map((item, i) => (
          <div
            key={item.title}
            className="flex gap-3 border-t py-8 sm:gap-4 sm:py-10"
            style={{ borderColor: "var(--list-divider, var(--border-default))" }}
          >
            <span
              className="shrink-0 pt-1 font-sans text-[0.875rem] tabular-nums sm:pt-1.5 sm:text-[1rem]"
              style={{ color: "var(--list-number, var(--text-tertiary))" }}
            >
              {String(i + 1).padStart(2, "0")}.
            </span>
            <div>
              <h3
                className="font-display text-[1.375rem] font-[800] leading-[1.2] tracking-[-0.01em] sm:text-[1.75rem]"
                style={{ color: "var(--list-title, var(--text-primary))" }}
              >
                {item.title}
              </h3>
              <p
                className="mt-3 max-w-[60ch] font-sans text-[1rem] leading-[1.6]"
                style={{ color: "var(--list-body, var(--text-secondary))" }}
              >
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.title}
          className="flex gap-4 border-t py-6 sm:gap-6 sm:py-7"
          style={{ borderColor: "var(--list-divider, var(--border-default))" }}
        >
          <span
            className="shrink-0 pt-0.5 font-display text-[0.875rem] font-[800] leading-none tracking-[-0.01em] tabular-nums sm:text-[1rem]"
            style={{ color: "var(--list-number, var(--text-tertiary))" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="max-w-[60ch] font-sans text-[1rem] leading-[1.6]">
            <span
              className="font-bold"
              style={{ color: "var(--list-title, var(--text-primary))" }}
            >
              {item.title}
            </span>
            <span style={{ color: "var(--list-body, var(--text-secondary))" }}>
              {" "}
              — {item.body}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
