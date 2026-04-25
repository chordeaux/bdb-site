import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Clubs as clubs } from "@/data/clubs";

export default function Clubs() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      <Navbar />

      {/* Page header */}
      <section className="header-gradient">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <FadeIn direction="none" duration={500}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Community
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Clubs
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Clubs grid */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club, i) => (
              <FadeIn key={club.name} delay={i * 80} duration={600}>
                <div className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900 h-full">
                  <span className="mb-1 text-xs font-medium uppercase tracking-widest text-brand-orange">
                    {club.category}
                  </span>
                  <h3 className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                    {club.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {club.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Start a club CTA */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <FadeIn duration={600}>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Want to start a club?
            </h2>
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              We&apos;re always looking to grow our community. If you have an idea for a
              club, reach out and we&apos;ll help you get it off the ground. To start, you only need a president
              and a treasurer!
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Contact us
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
