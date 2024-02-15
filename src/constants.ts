export type Base = { title: string };
export type Link = Base & { href: string };

export const SITE_LINKS = {
  HOME: { title: "home", href: "/" },
  BRIEF: { title: "in-brief", href: "/brief" },
  DISCUSSIONS: { title: "panel-discussions", href: "/discussions" },
  MEETINGS: { title: "past-meetings", href: "/meetings" },
  DOCUMENTS: { title: "documentation", href: "/documents" },
  NEWS: { title: "newsroom", href: "/news" },
  ABOUT: { title: "who-we-are", href: "/about" },
  BACKGROUND: { title: "background", href: "/background" },
  NETWORK: { title: "network", href: "/network" },
  CONTACT: { title: "contact", href: "/contact" },
  FLAGSHIP: { title: "flagship-initiatives", href: "/flagship-initiatives" },
} as const;
