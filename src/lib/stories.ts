import heroDawn from "@/assets/hero-dawn.jpg";
import storyJournal from "@/assets/story-journal.jpg";
import storyTrail from "@/assets/story-trail.jpg";
import joyPortrait from "@/assets/joy-portrait.jpg";

export type Story = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readingTime: string;
  date: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "the-year-i-stopped-climbing",
    title: "The Year I Stopped Climbing",
    dek: "I had spent a decade measuring my life in summits. Then I sat down on the ridge, and the view rearranged itself.",
    category: "Reinvention",
    readingTime: "9 min read",
    date: "March 2026",
    image: heroDawn,
    imageAlt: "Layered mountain ridges under a soft dawn sky",
    body: [
      "There is a particular silence that arrives after achievement. Not peace, exactly. Something closer to the hum a room makes once the guests have gone home and you are left with the glasses.",
      "For ten years I had organised my life around ascents: the next round, the next title, the next proof that I was moving. Movement felt like meaning. It is a convincing substitute, and it lasts longer than it should.",
      "What ended it was not a crisis. It was a Tuesday. I was standing in a kitchen at six in the morning, watching light come up over the neighbours' roofline, and I realised I could not remember the last thing I had done slowly on purpose.",
      "The mountains had already taught me this, if I had been listening. Nobody remembers the summit photograph for long. What stays is the middle of the second day — the wet socks, the argument that dissolved into laughter, the unremarkable stretch of trail where somebody said something true because there was nothing else to do.",
      "So I stopped. Not permanently, and not dramatically. I simply stopped treating the gaps between climbs as dead time to be endured until the next real thing began. That, it turns out, is where the life was the whole time.",
      "I am still ambitious. I have not traded my spreadsheets for a hammock. But I have started to suspect that a good life is not a sequence of peaks with inconvenient valleys in between. It is one long walk, and the walking is the point.",
    ],
  },
  {
    slug: "money-is-a-story-we-tell",
    title: "Money Is a Story We Tell Ourselves",
    dek: "After fifteen years in investing, the most important variable I have found is not on any balance sheet.",
    category: "Money",
    readingTime: "7 min read",
    date: "February 2026",
    image: storyJournal,
    imageAlt: "A leather journal, fountain pen and black coffee on a wooden table by a window",
    body: [
      "Ask anyone what money means and they will answer with a childhood. The particular tightness in a parent's voice. A holiday cancelled. A gift that arrived anyway.",
      "We inherit these narratives long before we inherit anything else, and we spend the rest of our lives building portfolios that argue with them.",
      "The professional literature is quiet about this. It speaks of risk tolerance as though it were a fixed constant, like the boiling point of water, rather than a story with a plot and a cast.",
      "The most useful financial question I know is not what should I buy. It is: what am I trying to prove, and to whom?",
      "Answer that honestly and the allocation tends to sort itself out. Avoid it, and no return is ever quite enough.",
    ],
  },
  {
    slug: "on-being-a-recovering-perfectionist",
    title: "On Being a Recovering Perfectionist",
    dek: "Perfectionism dressed itself up as high standards for years. It was mostly fear wearing a good coat.",
    category: "Work",
    readingTime: "6 min read",
    date: "February 2026",
    image: storyTrail,
    imageAlt: "A hiker walking a narrow trail through tall misty pines",
    body: [
      "The trouble with perfectionism is that it has excellent references. It is punctual. It proofreads. It has never once let anyone down in public.",
      "It is also expensive, and it charges in a currency you cannot see leaving your account: unwritten drafts, unmade calls, ideas that stayed theoretical because theory cannot be criticised.",
      "Recovery, for me, has looked like publishing things I would still like to edit. This essay included.",
      "What I have found on the other side is not sloppiness. It is a strange, unfamiliar generosity — with my work, and eventually with other people's.",
    ],
  },
  {
    slug: "what-the-mountains-taught-me-about-motherhood",
    title: "What the Mountains Taught Me About Motherhood",
    dek: "Both require you to move at the pace of the slowest person, and to call that pace the right one.",
    category: "Motherhood",
    readingTime: "8 min read",
    date: "January 2026",
    image: joyPortrait,
    imageAlt: "A hiker pausing on a mountain trail, ridge and alpine plants behind her",
    body: [
      "On a long walk, the group moves at the speed of whoever is struggling. There is no negotiating with this. You can resent it for an hour or you can accept it and start noticing things.",
      "Motherhood arrived with the same arithmetic and considerably less warning.",
      "I have found the same consolations in both: weather you cannot control, a pack you learn to lighten, and the specific joy of arriving somewhere together rather than first.",
    ],
  },
  {
    slug: "the-case-for-unfinished-things",
    title: "The Case for Unfinished Things",
    dek: "A half-built project is not a failure of discipline. Sometimes it is a form of thinking out loud.",
    category: "Ideas",
    readingTime: "5 min read",
    date: "January 2026",
    image: storyJournal,
    imageAlt: "An open journal and pen resting in morning light",
    body: [
      "I keep a folder of things I have not finished. For a long time I found it embarrassing. Now I think it may be the most honest record of my mind that exists.",
      "Finished work is a performance. Unfinished work is a conversation you are still having with yourself.",
      "The trick is knowing which drafts are resting and which are quietly asking to be let go. I am still learning to tell them apart.",
    ],
  },
];

export const featuredStory = stories[0]!;
export const latestStories = stories.slice(1);

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export function relatedStories(slug: string, count = 3) {
  return stories.filter((s) => s.slug !== slug).slice(0, count);
}
