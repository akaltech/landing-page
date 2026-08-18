const stats = [
  { value: "22K+", label: "avg views per video" },
  { value: "9.3%", label: "engagement rate" },
  { value: "1.6M+", label: "total views this year" },
  { value: "35K+", label: "shares" },
] as const;

export function StatBanner() {
  return (
    <div className="border-b border-border-subtle">
      <ul className="flex flex-col gap-y-0.5 px-4 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-text-secondary sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-1 sm:px-6 sm:text-[0.75rem] lg:px-12">
        {stats.map((stat) => (
          <li key={stat.label}>
            <span className="text-text-primary">{stat.value}</span> {stat.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
