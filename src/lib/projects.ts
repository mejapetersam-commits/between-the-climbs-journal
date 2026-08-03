export type Project = {
  title: string;
  status: string;
  note: string;
};

export const projects: Project[] = [
  {
    title: "The Weekly Letter",
    status: "In circulation",
    note: "The one thing that already runs on time. A Sunday note that has slowly become the place where most essays begin — half-finished, argued with by readers, and better for it.",
  },
  {
    title: "The Entrepreneurship Series",
    status: "In the writing",
    note: "A long-form sequence on building without the mythology: the boring months, the funding conversations nobody reports honestly, and what founders actually talk about after the second drink.",
  },
  {
    title: "Children's Financial Literacy",
    status: "In development",
    note: "A set of stories for children about money — written because my daughter asked a question I answered badly, and because the way we explain money at seven decides how we feel about it at forty.",
  },
  {
    title: "Rapporteur Work",
    status: "Ongoing",
    note: "Joy is regularly asked to listen to rooms full of clever people and write down what actually happened. This is the discipline behind everything else here: attention first, opinion second.",
  },
  {
    title: "The Book",
    status: "In the drafting",
    note: "A book-length version of the central idea — that a life is made in the stretches between its milestones. It has been rewritten twice, which is roughly what it deserves.",
  },
];
