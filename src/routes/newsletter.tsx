import { createFileRoute, Link } from "@tanstack/react-router";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "The Newsletter — Between the Climbs" },
      {
        name: "description",
        content:
          "Walk the next stretch together: one letter, most Sundays, from Joy D'Souza — a story, an idea in progress, and the occasional thing she got wrong.",
      },
      { property: "og:title", content: "The Newsletter — Between the Climbs" },
      {
        property: "og:description",
        content: "One letter, most Sundays. Join the ongoing conversation.",
      },
      { property: "og:url", content: "/newsletter" },
    ],
    links: [{ rel: "canonical", href: "/newsletter" }],
  }),
  component: Newsletter,
});

function Newsletter() {
  return (
    <>
      <NewsletterSection />

      <section className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-3 md:gap-20">
          <Reveal>
            <h2 className="font-serif text-2xl">What arrives</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              One essay or one honest fragment. Sometimes a question I cannot answer yet, sent in
              the hope that someone reading can.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="font-serif text-2xl">What never arrives</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Launch sequences, urgency, five-part funnels, or anything written by a person who has
              not read the last thing you wrote back.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="font-serif text-2xl">Why it exists</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Because the best conversations about this publication have happened in replies, not
              comments. The letter is where the thinking is still in motion.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-wrap gap-8 border-t border-border pt-10">
          <Link to="/stories" className="eyebrow link-underline text-foreground">
            Start with the stories
          </Link>
          <Link to="/about" className="eyebrow link-underline text-foreground">
            Who is writing
          </Link>
        </div>
      </section>
    </>
  );
}
