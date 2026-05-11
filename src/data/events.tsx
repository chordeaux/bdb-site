import React from 'react';

export interface Event {
  slug: string
  title: string
  date: string
  location: string
  description: string
  body: React.ReactNode
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
    location: "Campus",
    description:
      "Personalized rose delivery. Is there someone you want to receive flowers? A friend, special someone, or professor? We got you covered.",
    body: "On Valentine's day, we give you the opportunity to send however many roses you like to anyone you want, along with a special message if you'd like, and we'll deliver it for you!",
  },
  {
    slug: "bachelor-assassin",
    title: "Bachelor Assassin",
    date: "May 2026",
    location: "Campus",
    description:
      "Every player gets assigned a secret target. You hunt them down and eliminate them with a water gun (which we provide). Once you do, you inherit their target. ",
    body: (
      <>
        {`
        May is coming. The year is ending. And we’re not letting it go out quietly 🤫

‼️ We’re launching a full-scale Senior Assassin for all bachelor students ‼️ 

Every player gets assigned a secret target. You hunt them down and eliminate them with a water gun (which we provide). Once you do, you inherit their target. 

And so on — until one bachelor is left standing.

No safe zones. No allies.  Trust no one.

2A → this is your last ride on campus. Leave in absolute glory 👑

1A → this is your chance to show the 2A who runs Gif now 🐐

The game kicks off early May, full rules and official start date coming very soon…

In the meantime, there’s only one thing to do :

🏆 On top of becoming a legend, the last one standing wins gift cards worth 40€ and 20€`
      .split("\n")
      .map((line, i) => <p key ={i}>{line}</p>)}
      </>
    )
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
]
