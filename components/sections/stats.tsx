const stats = [
  {
    label: "total views across our content this year.",
    value: "2,500,000+",
  },
  {
    label: "average engagement rate across campaigns.",
    value: "8.2%",
  },
  {
    label: "brands we've partnered with and counting.",
    value: "30+",
  },
] as const;

export function Stats() {
  return (
    <section className="bg-bg-primary" style={{ paddingBlock: "clamp(3rem, 2rem + 4.23vw, 5rem)" }}>
      <div className="grid grid-cols-4 gap-x-4 px-4 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
        <div className="col-span-4 sm:col-span-8 lg:col-span-12">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="grid grid-cols-4 items-end gap-x-4 border-t border-border-default py-8 sm:grid-cols-8 sm:gap-x-6 sm:py-12 lg:grid-cols-12 lg:gap-x-6 lg:py-16"
            >
              <p className="col-span-2 self-start font-sans text-[0.875rem] leading-[1.5] text-text-tertiary sm:col-span-3 lg:col-span-3">
                {stat.label}
              </p>
              <p className="col-span-2 text-right font-display text-[clamp(3rem,1.5rem+6.57vw,6rem)] font-[800] leading-[0.85] tracking-[-0.02em] text-text-primary sm:col-span-5 lg:col-span-9">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
