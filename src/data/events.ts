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
    slug: "desintegration-week",
    title: "Desintegration Week",
    date: "",
    location: "",
    description:
      "An end-of-year trip for bachelor students to celebrate making it through the year together.",
    body: "Desintegration Week is the BDB's end-of-year celebration trip for bachelor students. After a full year of hard work, it's time to let loose and enjoy a well-deserved getaway with your cohort. It's the perfect way to close out the year and make memories with the people you've spent it with.",
  },
  {
    slug: "bdb-gala",
    title: "BDB Gala",
    date: "June 2026",
    location: "TBD",
    description:
      "The highlight of the year. A night at a chateau with fancy food, music, and good company for all bachelor students.",
    body: "The BDB Gala is the most anticipated event of the year. Set in a chateau, it's a night of fancy bites, great music, and unforgettable moments with your fellow bachelor students. Dress up and come ready to celebrate. Tickets are made available to all bachelor students in the weeks leading up to the event.",
  },
  {
    slug: "valentines",
    title: "Valentine's Roses",
    date: "February 2026",
    location: "TBD",
    description:
      "Personalized rose delivery. Is there someone you want to receive flowers? A friend, special someone, or professor? We got you covered.",
    body: "On Valentine's day, we give you the opportunity to send however many roses you like to anyone you want, along with a special message if you'd like, and we'll deliver it for you!",
  },
]
