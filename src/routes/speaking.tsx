import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsletterSection } from "@/components/NewsletterSection";

const topics = [
  {
    title: "Reinvention, in public",
    note: "What it actually takes to change direction mid-career — and why most advice about it is written by people who never had to.",
  },
  {
    title: "The psychology of money",
    note: "Fifteen years inside investing, translated for people who would rather talk about their lives than their portfolios.",
  },
  {
    title: "Building through uncertainty",
    note: "For founders and teams in the unglamorous middle: how to keep making decisions when nothing has resolved yet.",
  },
  {
    title: "What mountains teach",
    note: "Endurance, pacing, and the discipline of moving at the speed of the slowest person in the group.",
  },
];

const formats = [
  { label: "Keynote", note: "30–45 minutes, written for the room rather than reused." },
  { label: "Fireside", note: "A conversation with someone who has read the same books." },
  { label: "Moderation", note: "Panels that go somewhere, because someone prepared." },
  { label: "Rapporteur", note: "Listening to a full programme and writing down what mattered." },
];

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking — Between the Climbs" },
      {
        name: "description",
        content:
          "Joy D'Souza speaks on reinvention, the psychology of money, building through uncertainty, and what mountains teach about endurance.",
      },
      { property: "og:title", content: "Speaking — Between the Climbs" },
      {
        property: "og:description",
        content: "Keynotes, firesides, moderation and rapporteur work with Joy D'Souza.",
      },
      { property: "og:url", content: "/speaking" },
    ],
    links: [{ rel: "canonical", href: "/speaking" }],
  }),
  component: Speaking,
});

function Speaking() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking"
        title="The same ideas, out loud, in a room."
        intro="Not a service offering. An extension of the writing — for the moments when an essay needs a conversation instead of a page."
      />

      <section aria-labelledby="topics-heading" className="mx-auto max-w-[84rem] px-6 pb-24 md:px-10">
        <h2 id="topics-heading" className="eyebrow">
          Topics
        </h2>
        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <article className="h-full bg-background p-8 md:p-12">
                <h3 className="font-serif text-2xl leading-tight md:text-3xl">{t.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="formats-heading" className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-[84rem] px-6 py-20 md:px-10 md:py-28">
          <h2 id="formats-heading" className="font-serif text-3xl md:text-4xl">
            Formats
          </h2>
          <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {formats.map((f) => (
              <div key={f.label}>
                <dt className="font-serif text-xl">{f.label}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Book Joy to Speak</h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell me about the room — who is in it, what they are wrestling with, and what you hope
            they leave thinking. I reply to everything personally.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[0.72rem] tracking-[0.2em] text-primary-foreground uppercase"
            >
              Book Joy to Speak
            </Link>
            <Link
              to="/stories"
              className="inline-flex min-h-12 items-center justify-center border border-input px-8 text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:bg-muted"
            >
              Read the ideas first
            </Link>
          </div>
        </Reveal>
      </section>

      <NewsletterSection variant="compact" />
    </>
  );
}
