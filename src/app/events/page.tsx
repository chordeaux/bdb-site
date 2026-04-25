"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitText from "@/components/SplitText";
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import { Events as events, Event } from "@/data/events";

function isPast(dateStr: string): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  return !isNaN(d.getTime()) && d < new Date();
}

const upcoming = events.filter((e) => !isPast(e.date));
const past = events.filter((e) => isPast(e.date));

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <AnimatedContent delay={index * 0.08} className="h-full">
      <Link
        href={`/events/${event.slug}`}
        className="group flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 h-full"
      >
        <span className="mb-1 text-xs font-medium text-zinc-400 dark:text-zinc-500">
          {event.date}
        </span>
        <h3 className="mb-2 text-base font-semibold text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
          {event.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {event.description}
        </p>
        <span className="mt-4 text-xs font-medium text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
          Learn more →
        </span>
      </Link>
    </AnimatedContent>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      <Navbar />

      {/* Page header */}
      <section className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <FadeContent duration={400}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              What we do
            </p>
          </FadeContent>
          <SplitText
            text="Events"
            tag="h1"
            textAlign="left"
            className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            duration={0.8}
            delay={30}
          />
          <FadeContent duration={600} delay={200}>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
              From integration week to the annual gala, we run the events that define your bachelor years at CentraleSupélec. Whether it&apos;s a chance to meet your cohort, celebrate the end of a year, or just take a break from the grind, there&apos;s something for everyone, and we&apos;re always working on what comes next.
            </p>
          </FadeContent>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SplitText
            text="Upcoming"
            tag="h2"
            textAlign="left"
            className="mb-8 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
            duration={0.7}
            delay={25}
          />
          {upcoming.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event, i) => (
                <EventCard key={event.slug} event={event} index={i} />
              ))}
            </div>
          ) : (
            <FadeContent>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">No upcoming events at the moment.</p>
            </FadeContent>
          )}
        </div>
      </section>

      {/* Past events */}
      {past.length > 0 && (
        <section className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SplitText
              text="Past Events"
              tag="h2"
              textAlign="left"
              className="mb-8 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
              duration={0.7}
              delay={25}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 opacity-70">
              {past.map((event, i) => (
                <EventCard key={event.slug} event={event} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
