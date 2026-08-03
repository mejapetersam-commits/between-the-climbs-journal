import { createFileRoute } from "@tanstack/react-router";
import { stories, featuredStory, latestStories } from "@/lib/stories";
import { StoryCard } from "@/components/StoryCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsletterSection } from "@/components/NewsletterSection";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Stories — Between the Climbs" },
      {
        name: "description",
        content:
          "Long-form essays on reinvention, work, money, motherhood and mountains, written by Joy D'Souza.",
      },
      { property: "og:title", content: "Stories — Between the Climbs" },
      {
        property: "og:description",
        content: "Long-form essays on reinvention, work, money, motherhood and mountains.",
      },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: Stories,
});

function Stories() {
  return (
    <>
      <PageHeader
        eyebrow={`The Collection · ${stories.length} essays`}
        title="Stories"
        intro="Written slowly, published when they are ready. Read in any order — most of them are having the same argument from different sides."
      />

      <section className="mx-auto max-w-[84rem] px-6 pb-24 md:px-10 md:pb-32">
        <Reveal>
          <StoryCard story={featuredStory} large />
        </Reveal>
        <div className="mt-24 grid gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {latestStories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 80}>
              <StoryCard story={story} />
            </Reveal>
          ))}
        </div>
      </section>

      <NewsletterSection variant="compact" />
    </>
  );
}
