"use client";

import Image from "next/image";
import { useState } from "react";

type DropdownItem = {
  label: string;
  href: string;
  external?: boolean;
};

function NavDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-brand-blue dark:text-zinc-400 dark:hover:text-brand-blue">
        {label}
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-20 w-52 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="rounded-xl border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const bdbItems: DropdownItem[] = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Clubs", href: "/clubs" },
  { label: "Member Portal", href: "https://my.bdbcs.fr/login/", external: true },
];

const csItems: DropdownItem[] = [
  { label: "The Centrale Bachelor Program", href: "/program" },
  { label: "Useful Links", href: "/links" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">
        <a href="/">
          <Image src="/logo.png" alt="BDB logo" width={60} height={60} />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="animate-in fade-in slide-in-from-top-2 fill-mode-both duration-500 delay-100 text-sm font-medium text-zinc-600 hover:text-brand-blue dark:text-zinc-400 dark:hover:text-brand-blue"
          >
            Home
          </a>

          <div className="animate-in fade-in slide-in-from-top-2 fill-mode-both duration-500 delay-200">
            <NavDropdown label="The BDB" items={bdbItems} />
          </div>

          <div className="animate-in fade-in slide-in-from-top-2 fill-mode-both duration-500 delay-300">
            <NavDropdown label="CentraleSupélec" items={csItems} />
          </div>

          <a
            href="/contact"
            className="animate-in fade-in slide-in-from-top-2 fill-mode-both duration-500 delay-500 text-sm font-medium text-zinc-600 hover:text-brand-blue dark:text-zinc-400 dark:hover:text-brand-blue"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-brand-blue dark:hover:text-brand-blue"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-6 py-4 flex flex-col">
            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-brand-blue"
            >
              Home
            </a>

            <p className="pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
              The BDB
            </p>
            {bdbItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className="py-2 pl-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-brand-blue"
              >
                {item.label}
              </a>
            ))}

            <p className="pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
              CentraleSupélec
            </p>
            {csItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 pl-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-brand-blue"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-brand-blue"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
