import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Events } from "@/data/events";

export function generateStaticParams() {
  return Events.map((e) => ({ slug: e.slug }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = Events.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      <Navbar />

      {/* Header */}
      <section className="header-gradient">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link
            href="/events"
            className="mb-6 inline-block text-xs font-semibold uppercase tracking-widest text-brand-blue hover:opacity-80"
          >
            ← All events
          </Link>
          <p className="mb-2 text-sm font-medium text-brand-orange">
            {event.date} · {event.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {event.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {event.description}
          </p>
          <div className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
            {event.body}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
