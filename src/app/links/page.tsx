import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LinkItem = {
  label: string;
  url: string;
  description: React.ReactNode;
};

type LinkCategory = {
  title: string;
  links: LinkItem[];
};

const categories: LinkCategory[] = [
  {
    title: "CentraleSupélec",
    links: [
      {
        label: "MyWay",
        url: "https://myway.centralesupelec.fr/",
        description: "MyWay is one of the most important websites for your academics. Here you can see your grades, schedule, and justify absences, as well as other features.",
      },
      {
        label: "Edunao",
        url: "https://centralesupelec.edunao.com/",
        description: "The hub for all course materials and assignment submissions. Here you can find your courses, lecetures, and submit assignments",
      },
      {
        label: "PaperCut",
        url: "https://imprimer-bu.dsi.universite-paris-saclay.fr/user",
        description: 
        <>
          Upload documents to print. Follow instructions{" "}
          <a href="https://mycs.centralesupelec.fr/fr/impression/eleves" className="underline text-brand-blue" target="_blank" rel="noopener noreferrer">here</a>.
        </>
      },
    ],
  },
  {
    title: "BDB Resources",
    links: [
      {
        label: "Member Portal",
        url: "https://my.bdbcs.fr/login/",
        description: "BDB member portal — will soon be updated!",
      },
    ],
  },
  {
    title: "Student Life",
    links: [
      {
        label: "ViaRezo",
        url: "https://viarezo.fr",
        description: "Student network association responsible for providing cheap internet services for the residences.",
      },
    ],
  },
];

function LinkCard({ link }: { link: LinkItem }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-md transition-shadow hover:border-zinc-300 dark:hover:border-zinc-700">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base font-semibold text-brand-blue hover:underline"
      >
        {link.label} →
      </a>
      <span className="text-sm text-zinc-500 dark:text-zinc-400">{link.description}</span>
    </div>
  );
}

export default function Links() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />

      <div className="header-gradient">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Resources
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Useful Links
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-14">
        {categories.map((cat) => (
          <section key={cat.title}>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">{cat.title}</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {cat.links.map((link) => (
                <LinkCard key={link.url} link={link} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
}
