import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  {
    name: "Bachelor of Global Engineering (McGill)",
    description: "A joint broad engineering programme with McGill Univeristy combining science, technology, and international perspective.",
    href: "https://www.centralesupelec.fr/programmes/bachelor-global-engineering",
  },
  {
    name: "Bachelor of Engineering (CityUHK)",
    description: "A joint programme with City University of Hong Kong bridging European and Asian engineering education.",
    href: "https://www.centralesupelec.fr/programmes/bachelor-of-engineering-cityuhk",
  },
  {
    name: "Bachelor Computer Science & AI (BITS Pilani)",
    description: "A joint intensive programme with BITS Pilani covering algorithms, software engineering, machine learning, and AI systems.",
    href: "https://www.centralesupelec.fr/programmes/bachelor-computer-science-and-artificial-intelligence",
  },
  {
    name: "Bachelor AI & Data Management Sciences (ESSEC)",
    description: "A joint program with ESSEC Business School. Focused on data science, analytics, and AI with a strong emphasis on management and business applications.",
    href: "https://www.centralesupelec.fr/programmes/bachelor-ai-data-management-sciences",
  },
  {
    name: "Bachelor HEPTA (ESSEC & Sciences Po)",
    description: "A multidisciplinary programme partnered with ESSEC Business School and Sciences Po integrating engineering sciences with humanities and social sciences.",
    href: "https://www.centralesupelec.fr/programmes/bachelor-hepta",
  },
];

export default function Program() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      <Navbar />

      {/* Page header */}
      <section className="header-gradient">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-orange">
            CentraleSupélec
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            The Centrale Bachelor Programs
          </h1>
        </div>
      </section>

      {/* Intro + programs grid */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-12 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            CentraleSupélec offers five distinct bachelor programmes, each designed
            to provide a rigorous scientific and engineering foundation while
            opening pathways into specialised fields and international careers.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <a
                key={program.name}
                href={program.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="mb-2 text-base font-semibold text-zinc-900 group-hover:text-brand-blue dark:text-zinc-50 dark:group-hover:text-brand-blue">
                  {program.name}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {program.description}
                </p>
                <span className="mt-4 text-xs font-medium text-zinc-400 group-hover:text-brand-blue">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
