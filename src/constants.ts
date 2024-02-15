export type Link = { title: string; href: string };
export type Dropdown = { name: string; links: Link[] };

export const SITE_LINKS: Array<Link | Dropdown> = [
  { title: "home", href: "/" },
  {
    name: "what-we-do",
    links: [
      { title: "in-brief", href: "/brief" },
      { title: "panel-discussions", href: "/discussions" },
      { title: "past-meetings", href: "/meetings" },
      { title: "documentation", href: "/documents" },
    ],
  },
  { title: "newsroom", href: "/news" },
  {
    name: "about-HELP",
    links: [
      { title: "who-we-are", href: "/about" },
      { title: "background", href: "/background" },
      { title: "network", href: "/network" },
      { title: "contact", href: "/contact" },
    ],
  },
  { title: "flagship-initiatives", href: "/flagship-initiatives" },
] as const;
