/// <reference types="vite/client" />
import { useEffect, type ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { SoundProvider } from "~/components/sound-provider";
import { CrtIntro } from "~/components/crt-intro";
import appCss from "~/styles/app.css?url";

const MAIN_ROUTE = "/";
const INSPO_ROUTE = "/designs/12";

function useInspoToggle() {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "i") return;
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      if (window.location.pathname === INSPO_ROUTE) {
        router.navigate({ to: MAIN_ROUTE as "/" });
      } else {
        router.navigate({ to: INSPO_ROUTE as "/" });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);
}

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

function RootComponent() {
  useInspoToggle();

  return (
    <RootDocument>
      <CrtIntro />
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
      <body className="min-h-screen">
        <SoundProvider>
          {children}
        </SoundProvider>
        <Scripts />
      </body>
    </html>
  );
}
