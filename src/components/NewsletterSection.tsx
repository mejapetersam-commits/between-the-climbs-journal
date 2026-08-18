export const SUBSTACK_URL = "https://betweentheclimbs.substack.com";

export function NewsletterSection({
  variant = "section",
}: {
  variant?: "section" | "compact";
}) {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className={`section-bold border-y border-border ${
        variant === "compact" ? "py-20" : "py-28 md:py-40"
      }`}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow">The Newsletter</p>
        <h2
          id="newsletter-heading"
          className="mt-6 font-serif text-4xl leading-[1.1] md:text-6xl"
        >
          Walk the Next Stretch Together
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/85">
          One letter, most Sundays. A story, something I&rsquo;m thinking through, and the
          occasional thing I got wrong. No launches, no funnels &mdash; just the ongoing
          conversation, continued.
        </p>

        <p className="mt-9 text-xs text-primary-foreground/85">
          Read by quiet, ambitious people in 28 countries. Leave whenever you like.
        </p>
        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-solid mt-6 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Subscribe on Substack
        </a>
      </div>
    </section>
  );
}
