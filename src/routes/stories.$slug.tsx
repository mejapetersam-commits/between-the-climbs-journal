import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getStory, relatedStories } from "@/lib/stories";
import { Reveal } from "@/components/Reveal";
import { StoryCard } from "@/components/StoryCard";
import { NewsletterSection } from "@/components/NewsletterSection";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story unavailable — Between the Climbs" }, { name: "robots", content: "noindex" }],
      };
    }
    const { story } = loaderData;
    return {
      meta: [
        { title: `${story.title} — Between the Climbs` },
        { name: "description", content: story.dek },
        { property: "og:title", content: story.title },
        { property: "og:description", content: story.dek },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/stories/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/stories/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: story.title,
            description: story.dek,
            datePublished: story.date,
            author: { "@type": "Person", name: "Joy D'Souza" },
          }),
        },
      ],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();
  const related = relatedStories(story.slug);

  return (
    <>
      <article>
        <header className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center md:pt-32">
          <p className="eyebrow">
            {story.category} &middot; {story.readingTime} &middot; {story.date}
          </p>
          <h1 className="mt-7 font-serif text-4xl leading-[1.08] md:text-6xl">{story.title}</h1>
          <p className="mt-8 font-serif text-xl leading-relaxed italic text-muted-foreground md:text-2xl">
            {story.dek}
          </p>
        </header>

        <figure className="mx-auto max-w-[76rem] px-6">
          <img
            src={story.image}
            alt={story.imageAlt}
            loading="lazy"
            width={1920}
            height={1280}
            className="aspect-[16/9] w-full object-cover"
          />
        </figure>

        <div className="prose-editorial mx-auto max-w-[38rem] px-6 py-20 md:py-28">
          {story.body.map((para: string, i: number) => (
            <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8]" : undefined}>
              {para}
            </p>
          ))}
          <p className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
            Written by Joy D&rsquo;Souza. If this one landed, the{" "}
            <Link to="/newsletter" className="link-underline text-foreground">
              Sunday letter
            </Link>{" "}
            continues the conversation.
          </p>
        </div>
      </article>

      <section aria-labelledby="related-heading" className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-[84rem] px-6 py-20 md:px-10 md:py-28">
          <h2 id="related-heading" className="font-serif text-3xl md:text-4xl">
            Read next
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <StoryCard story={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap gap-8">
            <Link to="/stories" className="eyebrow link-underline text-foreground">
              All stories
            </Link>
            <Link to="/about" className="eyebrow link-underline text-foreground">
              About Joy
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection variant="compact" />
    </>
  );
}
