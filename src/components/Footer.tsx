import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">

          {/* Logo + name */}
          <div className="flex flex-col items-start gap-3">
            <a href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="BDB logo" width={48} height={48} />
              <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                Bureau des Bachelors
              </span>
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
              L&apos;association des étudiants en Bachelor de CentraleSupélec.
            </p>
          </div>

          <div className="flex gap-16">
            {/* Quick links */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Events", href: "/events" },
                  { label: "Contact", href: "/contact" },
                  { label: "Useful Links", href: "/links" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-zinc-600 hover:text-brand-blue dark:text-zinc-400 dark:hover:text-brand-blue"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Follow Us
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "BScGE Instagram", href: "https://www.instagram.com/bsc_ge/" },
                  { label: "BScAIDAMS Instagram", href: "https://www.instagram.com/bsc_aidams/" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-600 hover:text-brand-blue dark:text-zinc-400 dark:hover:text-brand-blue"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-600">
          &copy; {new Date().getFullYear()} Bureau des Bachelors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
