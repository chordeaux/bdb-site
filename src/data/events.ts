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
