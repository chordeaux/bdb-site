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
      <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
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
        <div className="absolute left-0 top-full z-20 w-52 pt-2">
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

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">
        <a href="/">
          <Image src="/logo.png" alt="BDB logo" width={60} height={60} />
        </a>

        <div className="flex items-center gap-8">
          <a
            href="/"
            className="animate-in fade-in slide-in-from-top-2 fill-mode-both duration-500 delay-100 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Home
          </a>

          <div className="animate-in fade-in slide-in-from-top-2 fill-mode-both duration-500 delay-200">
            <NavDropdown
              label="The BDB"
              items={[
                { label: "About", href: "/about" },
                { label: "Events", href: "/events" },
                { label: "Clubs", href: "/clubs" },
                { label: "Member Portal", href: "https://my.bdbcs.fr/login/", external: true },
              ]}
            />
          </div>

          <div className="animate-in fade-in slide-in-from-top-2 fill-mode-both duration-500 delay-300">
            <NavDropdown
              label="CentraleSupélec"
              items={[
                { label: "The Centrale Bachelor Program", href: "/program" },
                { label: "Useful Links", href: "/links" },
              ]}
            />
          </div>

          <a
            href="/contact"
            className="animate-in fade-in slide-in-from-top-2 fill-mode-both duration-500 delay-500 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
