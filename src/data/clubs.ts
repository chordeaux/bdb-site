export interface Club {
  name: string
  category: string
  description: string
  contact: string
}

export const Clubs: Club[] = [
  {
    name: "Bachelor Finance Club",
    category: "Educational",
    description:
      "A bachelor-level finance club at CentraleSupélec offering workshops, guest speakers, networking, and simulations to fill the gap left by engineering-focused associations.",
    contact: "/contact",
  },
]
