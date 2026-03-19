export function FooterContent() {
  return (
    <div className="grid grid-cols-4 gap-x-4 px-4 py-6 sm:grid-cols-8 sm:gap-x-6 sm:px-6 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
      {/* Brand */}
      <div className="col-span-2 flex items-center gap-3 sm:col-span-3 lg:col-span-3">
        <span className="font-sans text-[0.75rem] text-text-tertiary">
          &copy;
        </span>
        <span className="font-display text-[clamp(1.25rem,1rem+1.06vw,1.75rem)] font-[800] leading-[1] text-text-secondary">
          AKAL
        </span>
      </div>

      {/* Tagline */}
      <div className="col-span-2 flex flex-col justify-center sm:col-span-3 lg:col-span-5">
        <p className="font-sans text-[0.6875rem] font-medium uppercase text-text-tertiary sm:text-[0.75rem]">
          a cultural content collective in London
        </p>
        <p className="font-sans text-[0.6875rem] font-medium uppercase text-text-tertiary sm:text-[0.75rem]">
          creating with brands who move our community.
        </p>
      </div>

      {/* Email + Socials */}
      <div className="col-span-4 mt-4 flex items-center gap-8 sm:col-span-2 sm:col-start-7 sm:mt-0 sm:justify-end lg:col-span-4 lg:col-start-9">
        <a
          href="mailto:hello@akal.space"
          className="font-sans text-[0.75rem] font-medium uppercase tracking-[0.05em] text-text-secondary transition-colors duration-150 ease-in-out hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        >
          hello@akal.space
        </a>
        <a
          href="https://instagram.com/akal.space"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[0.75rem] font-medium uppercase text-text-secondary transition-colors duration-150 ease-in-out hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        >
          Instagram
        </a>
        <a
          href="https://tiktok.com/@akal.space"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[0.75rem] font-medium uppercase text-text-secondary transition-colors duration-150 ease-in-out hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        >
          TikTok
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-primary">
      <FooterContent />
    </footer>
  );
}
