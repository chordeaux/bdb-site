import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Contacts } from "@/data/contact";


export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      <Navbar />

      {/* Page header */}
      <section className="header-gradient">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Who we are
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            About the BDB
          </h1>
        </div>
      </section>

      {/* Mission statement */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Our Role
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The Bureau des Bachelors (BDB) is the association in charge of all
            activities and student life for bachelors at CentraleSupélec. We
            organise events, foster community, and generally try to make life
            at Gif-sur-Yvette more fun and enjoyable for every bachelor student.
            Furthermore, we ensure that bachelor students are always
            well-represented within the school and are respected.
          </p>
        </div>
      </section>

      {/* Events + Clubs cards */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Our Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">

            {/* Events card */}
            <div className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                What we do
              </p>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Events
              </h2>
              <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                One of our main domains as an association is setting up events to
                liven up your student life as a bachelor. Whether it&apos;s
                social events, integration programmes, or trips away, there&apos;s
                something for everyone!
              </p>
              <div className="mt-8">
                <Link
                  href="/events"
                  className="inline-block rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  See our events
                </Link>
              </div>
            </div>

            {/* Clubs card */}
            <div className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                Community
              </p>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Clubs
              </h2>
              <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                We currently have 1 club operating under us, and we are always
                seeking to increase our reach and establish a stronger presence.
                Feel free to{" "}
                <Link
                  href="/contact"
                  className="underline text-brand-blue hover:opacity-80"
                >
                  contact us
                </Link>{" "}
                if you wish to create a club with the BDB.
              </p>
              <div className="mt-8">
                <Link
                  href="/clubs"
                  className="inline-block rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  See our clubs
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Our Team
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Contacts.map((member) => (
              <div
                key={member.email as string}
                className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 h-16 w-16 rounded-full bg-brand-blue/10 overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo as string}
                      alt={member.name as string}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xl font-bold text-brand-blue">
                      {(member.name as string).charAt(0)}
                    </div>
                  )}
                </div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                  {member.name as string}
                </p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-brand-orange">
                  {member.title as string}
                </p>
                <a
                  href={`mailto:${member.email as string}`}
                  className="mt-3 text-xs text-zinc-500 hover:text-brand-blue dark:text-zinc-400 truncate"
                >
                  {member.email as string}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
