import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsletterSection } from "@/components/NewsletterSection";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Between the Climbs" },
      {
        name: "description",
        content:
          "Editor's notes on what is being built at Between the Climbs: the weekly letter, an entrepreneurship series, children's financial literacy, rapporteur work and a book.",
      },
      { property: "og:title", content: "Projects — Between the Climbs" },
      {
        property: "og:description",
        content: "What is in progress at Between the Climbs, and why each one matters.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="From the editor's desk"
        title="Current & Upcoming Projects"
        intro="A publication is never finished. These are the things being written, tested and argued with right now — described honestly rather than announced."
      />

      <section className="mx-auto max-w-[84rem] px-6 pb-24 md:px-10 md:pb-32">
        <ol className="border-t border-border">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} as="li">
              <div className="grid gap-6 border-b border-border py-12 md:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] md:gap-16 md:py-16">
                <div>
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <p className="eyebrow mt-3 text-terracotta">{p.status}</p>
                </div>
                <div>
                  <h2 className="font-serif text-3xl leading-tight md:text-4xl">{p.title}</h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {p.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap gap-8">
          <Link to="/stories" className="eyebrow link-underline text-foreground">
            Read the stories
          </Link>
          <Link to="/contact" className="eyebrow link-underline text-foreground">
            Collaborate on one of these
          </Link>
        </div>
      </section>

      <NewsletterSection variant="compact" />
    </>
  );
}
