import { Link } from "@tanstack/react-router";
import type { Story } from "@/lib/stories";
import { CategoryTag } from "@/components/CategoryTag";

export function StoryCard({ story, large = false }: { story: Story; large?: boolean }) {
  return (
    <article className="group">
      <Link
        to="/stories/$slug"
        params={{ slug: story.slug }}
        className="block focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:outline-none"
      >
        <div className="image-reveal aspect-[4/3] bg-muted">
          <img
            src={story.image}
            alt={story.imageAlt}
            loading="lazy"
            width={1400}
            height={1000}
            className="size-full object-cover"
          />
        </div>
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-3">
            <CategoryTag category={story.category} />
            <span className="eyebrow">{story.readingTime}</span>
          </div>
          <h3
            className={`mt-3 font-serif leading-[1.15] ${large ? "text-3xl md:text-4xl" : "text-2xl md:text-[1.75rem]"}`}
          >
            <span className="link-underline">{story.title}</span>
          </h3>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-foreground/85">
            {story.dek}
          </p>
        </div>
      </Link>
    </article>
  );
}
