const brands = [
  "SHAKE SHACK",
  "MB CHICKEN",
  "MEAA",
  "GBK",
  "SMACKS HAMBURGERS",
  "SMOKE & PEPPER",
  "MR WHITES CHOPHOUSE",
  "MR T'S",
  "SUYA ACADEMY",
  "WALFATHOU KITCHEN",
  "BALI BALI",
  "HEI HEI",
  "BELT NOODLES",
  "HS&CO",
] as const;

function BrandList() {
  return (
    <>
      {brands.map((brand) => (
        <span key={brand} className="flex shrink-0 items-center gap-6">
          <span>{brand}</span>
          <span className="text-text-tertiary" aria-hidden="true">
            &middot;
          </span>
        </span>
      ))}
    </>
  );
}

export function BrandTicker() {
  return (
    <section
      id="our-work"
      className="overflow-hidden border-y border-border-subtle bg-bg-primary py-4"
    >
      <div className="group flex">
        <div
          className="animate-marquee flex shrink-0 gap-6 pr-6 font-sans text-[0.875rem] font-medium uppercase text-text-secondary"
          aria-hidden="true"
        >
          <BrandList />
        </div>
        <div
          className="animate-marquee flex shrink-0 gap-6 pr-6 font-sans text-[0.875rem] font-medium uppercase text-text-secondary"
          aria-hidden="true"
        >
          <BrandList />
        </div>
      </div>

      <ul className="sr-only">
        {brands.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>
    </section>
  );
}
