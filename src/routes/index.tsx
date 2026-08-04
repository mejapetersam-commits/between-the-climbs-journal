import { createFileRoute, Link } from "@tanstack/react-router";
import heroDawn from "@/assets/hero-dawn.jpg";
import joyPortrait from "@/assets/joy-portrait.jpg";
import { featuredStory, latestStories } from "@/lib/stories";
import { StoryCard } from "@/components/StoryCard";
import { Reveal } from "@/components/Reveal";
import { NewsletterSection } from "@/components/NewsletterSection";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Between the Climbs — Essays by Joy D'Souza" },
      {
        name: "description",
        content:
          "Life is not defined by its summits. A quiet publication of essays on reinvention, work, money, motherhood and mountains.",
      },
      { property: "og:title", content: "Between the Climbs — Essays by Joy D'Souza" },
      {
        property: "og:description",
        content:
          "Life is not defined by its summits. A quiet publication of essays on reinvention, work, money, motherhood and mountains.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroDawn}
          alt="Layered mountain ridges above a valley of low cloud at sunrise"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
          style={{ filter: "brightness(1.16) contrast(1.04) saturate(1.08)" }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-dawn)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-[84rem] px-6 pt-32 pb-20 md:px-10 md:pb-28">
          <Reveal>
            <p className="eyebrow text-secondary/90">Issue No. 01 &middot; Dawn</p>
            <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.02] text-secondary sm:text-6xl md:text-8xl">
              Life is not defined by its summits.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary/85 md:text-lg">
              It is shaped by everything that happens between the climbs &mdash; the long middle,
              the quiet reconsiderations, the ordinary days that turn out to be the whole story.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/stories"
                className="inline-flex min-h-12 items-center justify-center bg-secondary px-8 text-[0.72rem] tracking-[0.2em] text-secondary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Read the Stories
              </Link>
              <Link
                to="/newsletter"
                className="inline-flex min-h-12 items-center justify-center border border-secondary/60 px-8 text-[0.72rem] tracking-[0.2em] text-secondary uppercase transition-colors hover:bg-secondary/10"
              >
                Join the Journey
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. A Note from Joy */}
      <section className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-14 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
          <Reveal>
            <div className="image-reveal">
              <img
                src={joyPortrait}
                alt="Joy D'Souza on a mountain trail at altitude, smiling with a hiking pole in hand"
                loading="lazy"
                width={712}
                height={890}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">A note from Joy</p>
            <h2 className="rule-line mt-6 max-w-xl font-serif text-3xl leading-[1.2] md:text-[2.6rem]">
              I started this because I could not find the writing I wanted to read.
            </h2>
            <div className="prose-editorial mt-10 max-w-xl">
              <p>
                Most of what is written about ambition is written from the summit, in good weather,
                after the fact. It is tidy. It is also, in my experience, not quite true.
              </p>
              <p>
                I have built things and closed things. I have changed careers, changed countries,
                and changed my mind more often than I would like recorded. I have learned that the
                interesting part is almost never the achievement. It is the long stretch before it,
                when nothing is settled and you are deciding who you intend to be.
              </p>
              <p>
                Between the Climbs is where I write that part down &mdash; honestly, slowly, and
                without pretending I have arrived anywhere in particular. If you are somewhere in
                the middle of your own climb, you are in good company here.
              </p>
            </div>
            <p className="mt-8 font-serif text-2xl italic">Joy</p>
          </Reveal>
        </div>
      </section>

      {/* 3. Featured Story */}
      <section aria-labelledby="featured-heading" className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-[84rem] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow">The Feature</p>
            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
              <Link
                to="/stories/$slug"
                params={{ slug: featuredStory.slug }}
                className="image-reveal block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  src={featuredStory.image}
                  alt={featuredStory.imageAlt}
                  loading="lazy"
                  width={1920}
                  height={1280}
                  className="aspect-[16/11] w-full object-cover"
                />
              </Link>
              <div>
                <p className="eyebrow">
                  {featuredStory.category} &middot; {featuredStory.readingTime} &middot;{" "}
                  {featuredStory.date}
                </p>
                <h2 id="featured-heading" className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">
                  <Link to="/stories/$slug" params={{ slug: featuredStory.slug }} className="link-underline">
                    {featuredStory.title}
                  </Link>
                </h2>
                <p className="mt-7 max-w-prose text-base leading-relaxed text-muted-foreground">
                  {featuredStory.dek}
                </p>
                <Link
                  to="/stories/$slug"
                  params={{ slug: featuredStory.slug }}
                  className="eyebrow link-underline mt-9 inline-block text-foreground"
                >
                  Read the essay
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Latest Stories */}
      <section aria-labelledby="latest-heading" className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="latest-heading" className="font-serif text-3xl md:text-4xl">
            Latest Stories
          </h2>
          <Link to="/stories" className="eyebrow link-underline text-foreground">
            All stories
          </Link>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {latestStories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 90} as="div">
              <StoryCard story={story} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. Reflection quote */}
      <section className="border-y border-border bg-[image:var(--gradient-mist)]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-44">
          <Reveal>
            <blockquote className="font-serif text-3xl leading-[1.3] italic md:text-5xl md:leading-[1.25]">
              &ldquo;Nobody remembers the summit for very long. What stays is the middle of the
              second day.&rdquo;
            </blockquote>
            <p className="eyebrow mt-12">From &ldquo;The Year I Stopped Climbing&rdquo;</p>
          </Reveal>
        </div>
      </section>

      {/* 6. Speaking */}
      <section className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-20">
            <div>
              <p className="eyebrow">Speaking</p>
              <h2 className="rule-line mt-6 font-serif text-4xl leading-[1.12] md:text-5xl">
                The same ideas, out loud, in a room.
              </h2>
            </div>
            <div>
              <div className="prose-editorial max-w-xl">
                <p>
                  Speaking is not a separate business here. It is what happens when an essay needs a
                  conversation rather than a page &mdash; a room of founders arguing about
                  reinvention, a conference asking harder questions about money, a group of parents
                  working out what ambition costs.
                </p>
                <p>
                  Joy speaks on reinvention and career change, the psychology of money, building
                  through uncertainty, and what mountains teach about endurance.
                </p>
              </div>
              <Link
                to="/speaking"
                className="mt-8 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[0.72rem] tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Book Joy to Speak
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 7. Projects */}
      <section aria-labelledby="projects-heading" className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 id="projects-heading" className="font-serif text-3xl md:text-4xl">
              Currently Being Built
            </h2>
            <Link to="/projects" className="eyebrow link-underline text-foreground">
              All projects
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Notes from the editor&rsquo;s desk on what is in progress, and why each one matters
            enough to make.
          </p>
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} as="div">
                <article className="flex h-full flex-col bg-background p-8 md:p-10">
                  <p className="eyebrow">{p.status}</p>
                  <h3 className="mt-5 font-serif text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <NewsletterSection />

      {/* 9. LilMissBelle Archive */}
      <section className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-20">
            <div>
              <p className="eyebrow">The Archive</p>
              <h2 className="mt-6 font-serif text-4xl leading-[1.12] md:text-5xl">
                Before this, there was LilMissBelle.
              </h2>
            </div>
            <div>
              <div className="prose-editorial max-w-xl">
                <p>
                  For years Joy wrote under another name, in a smaller room, mostly for herself.
                  Those posts are rougher and younger and, in places, more honest than anything
                  written since.
                </p>
                <p>
                  They are the foundation this publication was built on, and they have been left
                  exactly as they were.
                </p>
              </div>
              <a
                href="https://lilmissbelle.wordpress.com"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex min-h-12 items-center justify-center border border-input px-8 text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:bg-muted"
              >
                Visit the Archive
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
