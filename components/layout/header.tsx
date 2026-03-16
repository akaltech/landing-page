"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FooterContent } from "@/components/layout/footer";

/* ─── Easing ─── */
const easeOut = [0.25, 0.1, 0.25, 1] as const;

/* ─── Nav links ─── */
const navLinks = [
  { label: "WORK", href: "/" },
  { label: "INFO", href: "/info" },
  { label: "CONTACT", href: "/contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  /* Lock body scroll when overlay is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, close]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-start justify-between p-4 sm:p-6 lg:px-12 lg:py-6">
      {/* Menu button — left */}
      <button
        onClick={toggle}
        className="font-sans text-[0.875rem] font-medium text-[var(--header-text)] transition-all duration-100 ease-linear hover:text-[var(--header-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        aria-expanded={isOpen}
        aria-controls="nav-overlay"
      >
        menu
      </button>

      {/* Contact us — right */}
      <Link
        href="/contact"
        className="font-sans text-[0.875rem] font-medium text-[var(--header-text)] transition-all duration-100 ease-linear hover:text-[var(--header-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
      >
        contact us
      </Link>

      {/* Full-page overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-50 flex flex-col bg-bg-tertiary"
            style={{ "--header-text": "var(--accent-text)", "--header-hover": "var(--text-primary)" } as React.CSSProperties}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            {/* Close button — top right */}
            <div className="flex justify-end p-4 sm:p-6 lg:p-12">
              <button
                onClick={close}
                className="font-sans text-[0.875rem] font-medium text-[var(--header-text)] transition-all duration-100 ease-linear hover:text-[var(--header-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
              >
                close
              </button>
            </div>

            {/* Nav links — large display text, left-aligned */}
            <nav className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-12">
              <ul className="flex flex-col gap-0">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.06,
                      ease: easeOut,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block font-display text-[clamp(4rem,12vw,12rem)] font-black leading-[0.95] text-text-primary transition-all duration-100 ease-linear hover:text-text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <FooterContent />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
