import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Off the trail</p>
        <h1 className="mt-6 font-serif text-5xl">This page isn&rsquo;t here</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Every path on this site leads somewhere. This one doesn&rsquo;t yet. The stories are
          waiting where you left them.
        </p>
        <div className="mt-8">
          <Link
            to="/stories"
            className="inline-flex min-h-11 items-center justify-center bg-primary px-7 text-[0.72rem] tracking-[0.18em] text-primary-foreground uppercase"
          >
            Read the Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-4xl">This page didn&rsquo;t load</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something went wrong on our end. Try again, or head back to the stories.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="min-h-11 bg-primary px-7 text-[0.72rem] tracking-[0.18em] text-primary-foreground uppercase"
          >
            Try again
          </button>
          <a
            href="/"
            className="min-h-11 border border-input px-7 text-[0.72rem] leading-[2.75rem] tracking-[0.18em] uppercase"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Between the Climbs — Essays by Joy D'Souza" },
      {
        name: "description",
        content:
          "Life is not defined by its summits. A quiet publication of essays on reinvention, work, money, motherhood and mountains.",
      },
      { name: "author", content: "Joy D'Souza" },
      { property: "og:site_name", content: "Between the Climbs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Between the Climbs — Essays by Joy D'Souza" },
      { name: "twitter:title", content: "Between the Climbs — Essays by Joy D'Souza" },
      { property: "og:description", content: "Life is not defined by its summits. A quiet publication of essays on reinvention, work, money, motherhood and mountains." },
      { name: "twitter:description", content: "Life is not defined by its summits. A quiet publication of essays on reinvention, work, money, motherhood and mountains." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/01aa999e-52f5-4080-a551-22161502460c/id-preview-8b29bae7--ad0f35b4-e3ba-409c-869b-68e94fa5694f.lovable.app-1785795304480.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/01aa999e-52f5-4080-a551-22161502460c/id-preview-8b29bae7--ad0f35b4-e3ba-409c-869b-68e94fa5694f.lovable.app-1785795304480.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Karla:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Between the Climbs",
          description:
            "A publication by Joy D'Souza about reinvention, work, money, motherhood and mountains.",
          author: { "@type": "Person", name: "Joy D'Souza" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ReadingProgress />
      <SiteHeader />
      <main id="main">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </QueryClientProvider>
  );
}
