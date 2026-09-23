"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/navigation";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="text-lg font-medium uppercase tracking-wide text-white sm:text-xl"
    >
      Lex Habitae
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Transparent over the hero, solid once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-brand" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />
  
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium uppercase text-white transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
  
          <Link
            href="/contact"
            className="hidden bg-white px-5 py-2.5 text-sm font-medium uppercase text-brand transition-colors hover:bg-accent hover:text-white lg:inline-block"
          >
            Let&apos;s Talk
          </Link>
  
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 p-2 text-white lg:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu: slides down from the top. Kept outside the header, because
          the header's backdrop blur would shrink a fixed child to the header's size. */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`fixed inset-0 z-[60] flex flex-col bg-brand px-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8 lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between">
          <Logo onClick={close} />
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="-mr-2 p-2 text-white"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <ul className="mt-8 flex flex-col gap-3">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: open ? `${200 + i * 60}ms` : "0ms" }}
              className={`transition-all duration-500 ease-out ${
                open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
            >
              <Link
                href={link.href}
                onClick={close}
                className="font-heading text-4xl font-medium tracking-[-0.03em] text-white transition-colors hover:text-accent sm:text-5xl"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          onClick={close}
          style={{ transitionDelay: open ? `${200 + navLinks.length * 60}ms` : "0ms" }}
          className={`mt-10 flex items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-medium uppercase text-brand transition-all duration-500 ease-out ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          Book a Consultation
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </>
  );
}
