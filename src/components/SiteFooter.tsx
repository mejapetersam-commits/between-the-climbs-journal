import { Link } from "@tanstack/react-router";
import { SUBSTACK_URL } from "@/components/NewsletterSection";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[image:var(--gradient-mist)]">
      <div className="mx-auto max-w-[84rem] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="max-w-sm">
            <p className="font-serif text-2xl">Between the Climbs</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A quiet publication about reinvention, work, money, motherhood, mountains, and the
              stories we tell ourselves while figuring life out.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              Read by quiet, ambitious people in 28 countries.
            </p>
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex min-h-11 items-center justify-center bg-primary px-7 text-[0.72rem] tracking-[0.18em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Subscribe on Substack
            </a>
          </div>


          <nav aria-label="Footer">
            <p className="eyebrow">Read</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/stories" className="link-underline">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-underline">
                  About Joy
                </Link>
              </li>
              <li>
                <Link to="/projects" className="link-underline">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer secondary">
            <p className="eyebrow">Connect</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/newsletter" className="link-underline">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to="/speaking" className="link-underline">
                  Speaking
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-underline">
                  Contact
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
            </ul>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="font-serif text-xl italic">Until the next climb.</p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Joy D&rsquo;Souza
          </p>
        </div>
      </div>
    </footer>
  );
}
