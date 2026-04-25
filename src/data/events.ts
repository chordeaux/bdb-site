export interface Event {
  slug: string
  title: string
  date: string
  location: string
  description: string
  body: string
}

export const Events: Event[] = [
  {
    slug: "welcome-week",
    title: "Welcome Week",
    date: "",
    location: "",
    description:
      "Our annual integration week for new bachelor students — meet your cohort, explore the campus, and kick off the year right.",
    body: "Welcome Week is the BDB's flagship integration event. Over the course of a week, new bachelor students get to meet their cohort, discover the campus, and participate in activities designed to make them feel at home from day one. Past editions have included team challenges, city tours, and social evenings.",
  },
  {
    slug: "bdb-gala",
    title: "BDB Gala",
    date: "June 2026",
    location: "TBD",
    description:
      "The highlight of the year. A formal evening with dinner, music, and surprises for all bachelor students.",
    body: "The BDB Gala is the most anticipated event of the year. Dress up and join your fellow bachelor students for a formal evening of dinner, music, and surprises. Tickets are made available to all bachelor students in the weeks leading up to the event.",
  },
  {
    slug: "valentines",
    title: "Valentine's Roses",
    date: "February 2026",
    location: "TBD",
    description:
      "",
    body: "",
  },
]
