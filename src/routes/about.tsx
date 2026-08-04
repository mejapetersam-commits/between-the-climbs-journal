import { createFileRoute, Link } from "@tanstack/react-router";
import joyPortrait from "@/assets/joy-portrait.jpg";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { NewsletterSection } from "@/components/NewsletterSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Joy D'Souza — Between the Climbs" },
      {
        name: "description",
        content:
          "Joy D'Souza is a writer, entrepreneur, investment professional and recovering perfectionist, and the editor of Between the Climbs.",
      },
      { property: "og:title", content: "About Joy D'Souza — Between the Climbs" },
      {
        property: "og:description",
        content: "Writer, entrepreneur, investment professional and recovering perfectionist.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="The Editor"
        title="Welcome to Between the Climbs"
        intro="Most stories celebrate the summit. I'm more interested in everything that happens in between."
      />

      <section className="mx-auto max-w-[84rem] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20">
          <Reveal>
            <div className="image-reveal md:sticky md:top-32">
              <img
                src={joyPortrait}
                alt="Joy D'Souza smiling on a mountain trail, hiking pole in hand, with a ridge rising behind her"
                loading="lazy"
                width={712}
                height={890}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="prose-editorial max-w-xl">
              <p>
                Most stories celebrate the summit. The promotion. The successful business. The
                finish line. The mountain peak.
              </p>
              <p>
                But I&rsquo;ve become increasingly interested in everything that happens between
                those moments. The uncertainty. The reinvention. The false starts. The lessons
                learned while building, climbing, failing, beginning again, and figuring things out
                as we go.
              </p>
              <p>
                I write as someone who has built businesses, spent years in investment before
                leaving it, become a mother, and slowly made peace with being a recovering
                perfectionist &mdash; which is to say I now publish essays I would still like to
                edit.
              </p>
              <p>
                Between the Climbs is a space for reflections on work, money, entrepreneurship,
                motherhood, mountains, and the stories we tell ourselves while navigating life.
              </p>
              <p>
                Some posts will be personal. Some practical. Some may begin on a mountain trail and
                end somewhere entirely unexpected.
              </p>
              <p>
                If you&rsquo;ve ever found yourself between where you&rsquo;ve been and where
                you&rsquo;re going, I hope you&rsquo;ll feel at home here.
              </p>
              <p>Thank you for being here.</p>
              <p className="font-serif text-2xl italic">&mdash; Joy</p>
            </div>

            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              <div>
                <p className="eyebrow">Writes about</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Reinvention, work, money, motherhood, mountains, and the stories we tell ourselves
                  while figuring life out.
                </p>
              </div>
              <div>
                <p className="eyebrow">Elsewhere</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <Link to="/speaking" className="link-underline">
                      Speaking &amp; moderation
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://lilmissbelle.wordpress.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-underline"
                    >
                      LilMissBelle Archive
                    </a>
                  </li>
                  <li>
                    <Link to="/contact" className="link-underline">
                      Get in touch
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-4">
              <Link
                to="/stories"
                className="inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[0.72rem] tracking-[0.2em] text-primary-foreground uppercase"
              >
                Read the Stories
              </Link>
              <Link
                to="/projects"
                className="inline-flex min-h-12 items-center justify-center border border-input px-8 text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:bg-muted"
              >
                What&rsquo;s in progress
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterSection variant="compact" />
    </>
  );
}
