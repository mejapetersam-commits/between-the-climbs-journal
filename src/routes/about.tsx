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
        title="Joy D'Souza"
        intro="Writer, entrepreneur, investment professional, and recovering perfectionist."
      />

      <section className="mx-auto max-w-[84rem] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid gap-14 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20">
          <Reveal>
            <div className="image-reveal md:sticky md:top-32">
              <img
                src={joyPortrait}
                alt="Portrait of Joy D'Souza by a window"
                loading="lazy"
                width={1200}
                height={1504}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="prose-editorial max-w-xl">
              <p>
                I have spent my working life in two rooms that rarely speak to each other: the one
                where capital is allocated, and the one where stories are told. It took me
                embarrassingly long to notice they are the same room. Both are about what people
                believe, and what they are willing to risk on it.
              </p>
              <p>
                I have worked in investment, built companies, and been the person in the corner of
                the conference writing down what everyone actually meant. Somewhere in the middle of
                that I became a mother, moved my life more than once, and discovered mountains &mdash;
                which have since become the most reliable teacher I have.
              </p>
              <p>
                The perfectionism is a longer story. It made me good at my job and slow at my life.
                I am recovering, which is to say I now publish essays I would still like to edit.
              </p>
              <p>
                Between the Climbs is the publication I wanted to read when I was thirty-two,
                competent, exhausted, and quietly unsure whether the thing I was climbing was mine.
              </p>
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
