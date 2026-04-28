import icon from "./assets/jose-profile.jpg";

export interface Project {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  url: string | null;
  status: "live" | "in-progress";
  gradient: string;
  cta?: string;
}

export interface Skill {
  name: string;
  icon: string;
  detail: string;
}

export const Config = {
  me: {
    name: "Jose Fernandez",
    handle: "JFC.DEV",
    title: "Software Engineer",
    location: "Buenos Aires, Argentina",
    tagline:
      "Software Engineer building React & Python apps with SOLID architecture.",
    yearsOfExperience: 6,
  },
  socials: {
    github: "https://github.com/gregfc95",
    linkedin: "https://linkedin.com/in/gjfc",
    email: "mailto:josegfc95@gmail.com",
  },
  resumeUrl: "https://linkedin.com/in/gjfc",
  projects: [
    {
      name: "Images Gallery",
      slug: "images-gallery",
      description:
        "Image gallery with Docker auto-reload and a Postman-validated REST integration to an external image provider.",
      tags: ["Python", "React", "MongoDB", "Docker"],
      url: "https://github.com/gregfc95/images-gallery",
      status: "live",
      gradient:
        "from-primary-container/30 via-tertiary/20 to-surface-container",
    },
    {
      name: "Rust Marketplace",
      slug: "rust-marketplace",
      description:
        "Decentralized marketplace built on Rust with smart-contract-based listings and settlement.",
      tags: ["Rust", "Blockchain"],
      url: "https://github.com/nicolascarrica/marketplace_rust",
      status: "live",
      gradient:
        "from-secondary-container/30 via-primary-container/20 to-surface-container",
      cta: "View Contribution",
    },
    {
      name: "Client & Payments App",
      slug: "client-payments",
      description:
        "Sport center management app with client tracking and integrated MercadoPago payment processing.",
      tags: ["React", "Node.js", "MercadoPago"],
      url: "https://github.com/gregfc95/sportcenter-app",
      status: "live",
      gradient:
        "from-tertiary-container/40 via-error/20 to-surface-container",
    },
  ] as Project[],
  skills: [
    { name: "Frontend", icon: "web", detail: "React, TypeScript, Astro" },
    { name: "Backend", icon: "dns", detail: "Node.js, Python, REST APIs" },
    { name: "Database", icon: "database", detail: "MongoDB, SQL" },
    { name: "Infrastructure", icon: "cloud", detail: "Docker, CI/CD, Git" },
  ] as Skill[],
  og: {
    image: icon.src,
  },
};
