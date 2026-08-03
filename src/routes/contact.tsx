import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Between the Climbs" },
      {
        name: "description",
        content:
          "Write to Joy D'Souza about speaking, collaborations, rapporteur work, or a story you'd like to see written.",
      },
      { property: "og:title", content: "Contact — Between the Climbs" },
      {
        property: "og:description",
        content: "Write to Joy about speaking, collaborations, or a story worth telling.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
    toast("Your note is on its way.", {
      description: "Joy reads everything and replies personally, usually within a week.",
    });
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say something honest."
        intro="Speaking invitations, collaborations, rapporteur work, or a story you think should exist. Joy reads everything and replies personally."
      />

      <section className="mx-auto max-w-[84rem] px-6 pb-28 md:px-10 md:pb-40">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-20">
          <form onSubmit={onSubmit} className="max-w-xl">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-3 min-h-11 w-full border-b border-input bg-transparent py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-3 min-h-11 w-full border-b border-input bg-transparent py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-8">
              <label htmlFor="subject" className="eyebrow block">
                What is this about
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-3 min-h-11 w-full border-b border-input bg-transparent py-2 text-sm focus:border-primary focus:outline-none"
              >
                <option>Speaking invitation</option>
                <option>Collaboration</option>
                <option>Rapporteur work</option>
                <option>A note about a story</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="mt-8">
              <label htmlFor="message" className="eyebrow block">
                Your note
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-3 w-full border-b border-input bg-transparent py-2 text-sm leading-relaxed focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-10 min-h-12 bg-primary px-8 text-[0.72rem] tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Send the note
            </button>
            {sent && (
              <p role="status" className="mt-5 text-sm text-muted-foreground">
                Thank you — your note has been received.
              </p>
            )}
          </form>

          <aside className="text-sm leading-relaxed text-muted-foreground">
            <p className="eyebrow">While you wait</p>
            <p className="mt-5">
              Most questions are answered somewhere in the writing. If you are new here, these are
              the doors most people come through.
            </p>
            <ul className="mt-8 space-y-3">
              <li>
                <Link to="/stories" className="link-underline text-foreground">
                  The stories
                </Link>
              </li>
              <li>
                <Link to="/speaking" className="link-underline text-foreground">
                  Speaking topics &amp; formats
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="link-underline text-foreground">
                  The Sunday letter
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
