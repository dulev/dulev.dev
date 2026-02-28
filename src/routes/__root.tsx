/// <reference types="vite/client" />
import { type ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { TooltipProvider } from "~/components/ui/tooltip";
import { CrtIntro } from "~/components/crt-intro";
import { Nav } from "~/components/nav";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dimitar Dulev — Fullstack Dev & Tinkerer" },
      {
        name: "description",
        content:
          "Personal site of Dimitar Dulev. Fullstack developer & tinkerer.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Work+Sans:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

const NAV_ROUTES = new Set(["/", "/design-system", "/uses"]);

function RootComponent() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });
  const showNav = NAV_ROUTES.has(pathname);

  return (
    <RootDocument>
      <CrtIntro />
      {showNav && (
        <div className="max-w-[860px] mx-auto px-8 max-sm:px-4.5">
          <Nav />
        </div>
      )}
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-bg neo-grid-bg">
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Scripts />
      </body>
    </html>
  );
}
