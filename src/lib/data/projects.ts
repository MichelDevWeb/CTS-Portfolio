export type ProjectType = "website" | "mobile" | "extension" | "game";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  type: ProjectType;
  shortDescription: string;
  longDescription: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
  year?: number;
  featured?: boolean;
}

export const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: "website", label: "Websites" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "extension", label: "Chrome Extensions" },
  { value: "game", label: "Games" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "HDG Design & Engineering Consultancy",
    slug: "hdg-consultancy",
    type: "website",
    shortDescription:
      "A modern, trilingual website for HDG Construction Design Consulting JSC — Vietnamese, English, and Chinese.",
    longDescription:
      "A professional construction and engineering consultancy website built with Next.js 14, Supabase, and Tailwind CSS. Features trilingual support (Vietnamese, English, Chinese Simplified), admin dashboard for projects, posts, team, and inquiries, SEO-optimized with dynamic sitemaps and OpenGraph images, and a mobile-first responsive design.",
    image: "/images/webs/web-hdgcons.png",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "next-intl"],
    links: [
      { label: "Live site", url: "https://hdgcons.com.vn" },
      // { label: "GitHub", url: "https://github.com/MichelDevWeb/cts-hdg" },
    ],
    year: 2026,
    featured: true,
  },
  {
    id: "2",
    title: "Sample Mobile App",
    slug: "sample-mobile-app",
    type: "mobile",
    shortDescription: "Cross-platform mobile app for productivity.",
    longDescription:
      "A cross-platform mobile application built with React Native, offering offline support and a native feel on both iOS and Android.",
    image: "/placeholder-project.svg",
    tags: ["React Native", "TypeScript"],
    links: [
      { label: "App Store", url: "https://apps.apple.com" },
      { label: "Play Store", url: "https://play.google.com" },
    ],
    year: 2024,
    featured: true,
  },
  {
    id: "3",
    title: "Sample Chrome Extension",
    slug: "sample-chrome-extension",
    type: "extension",
    shortDescription: "Browser extension that enhances your workflow.",
    longDescription:
      "A Chrome extension that adds useful shortcuts and overlays to improve daily browsing and productivity.",
    image: "/placeholder-project.svg",
    tags: ["Chrome API", "JavaScript"],
    links: [{ label: "Chrome Web Store", url: "https://chrome.google.com/webstore" }],
    year: 2023,
  },
  {
    id: "4",
    title: "Sample Game",
    slug: "sample-game",
    type: "game",
    shortDescription: "A casual 2D game with smooth gameplay.",
    longDescription:
      "A browser-based 2D game built with a modern game framework, featuring responsive controls and engaging mechanics.",
    image: "/placeholder-project.svg",
    tags: ["HTML5", "Canvas", "JavaScript"],
    links: [
      { label: "Play", url: "https://example.com/game" },
      { label: "Source", url: "https://github.com" },
    ],
    year: 2023,
    featured: true,
  },
  {
    id: "5",
    title: "Portfolio Template",
    slug: "portfolio-template",
    type: "website",
    shortDescription: "A minimal portfolio template for creators.",
    longDescription:
      "An open-source portfolio template with dark mode, smooth scroll, and project filtering — easy to customize and deploy.",
    image: "/placeholder-project.svg",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    links: [
      { label: "Demo", url: "https://cheotechstudio.com" },
      { label: "GitHub", url: "https://github.com" },
    ],
    year: 2025,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByType(type: ProjectType | "all"): Project[] {
  if (type === "all") return projects;
  return projects.filter((p) => p.type === type);
}
