import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/stories", label: "Stories" },
  { to: "/about", label: "About Joy" },
  { to: "/speaking", label: "Speaking" },
  { to: "/projects", label: "Projects" },
  { to: "/newsletter", label: "Newsletter" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-700 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid max-w-[84rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:px-10">
        <Link to="/" className="min-w-0 leading-none">
          <span className="block font-serif text-xl tracking-tight md:text-[1.4rem]">
            Between the Climbs
          </span>
          <span className="eyebrow mt-1.5 block">A publication by Joy D&rsquo;Souza</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[0.8rem] tracking-wide text-foreground/80 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-2xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
