"use client";

import {
  IconArrowUpRight,
  IconMovie,
  IconTerminal2,
} from "@tabler/icons-react";

type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  outcome: string;
  stack: string[];
  video: string;
  videoId: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "SAMVIT / SCADA Platform",
    eyebrow: "Energy Monitoring + Backend APIs",
    summary:
      "Solar monitoring dashboards with plant analytics, alarms, reports, notifications, and backend-driven operational views.",
    outcome: "Best proof of dashboard thinking, data-heavy UX, and real-world industrial domain work.",
    stack: ["Next.js", "Express", "MongoDB", "Charts", "SCADA", "Analytics"],
    video: "https://youtu.be/xJVRv9B4Hmk",
    videoId: "xJVRv9B4Hmk",
    featured: true,
  },
  {
    title: "Version Control Manager",
    eyebrow: "Developer Tooling",
    summary:
      "Git workflow manager with repository views, branch operations, developer-focused UX, and backend integration.",
    outcome: "Strong match for terminal, Git, debugging, and tooling-heavy roles.",
    stack: ["React", "Node.js", "Git", "CLI", "Desktop UX"],
    video: "https://youtu.be/V_F9goWYqc4",
    videoId: "V_F9goWYqc4",
    featured: true,
  },
  {
    title: "XENVOLT Site + Admin",
    eyebrow: "Business Website + CMS",
    summary:
      "Industrial AI website with admin flows for content, leads, products, and case-study style business pages.",
    outcome: "Shows client-ready UI polish plus admin-side product thinking.",
    stack: ["Next.js", "Tailwind", "Admin CMS", "Cloudinary", "Auth"],
    video: "https://youtu.be/GJjCe7zWu9Q",
    videoId: "GJjCe7zWu9Q",
    featured: true,
  },
  {
    title: "Randomizer / BA Test",
    eyebrow: "Airport Staff Testing System",
    summary:
      "Role-based staff testing workflow with CSV upload, random selection, doctor panel, station manager views, and reporting.",
    outcome: "Full workflow product: auth, upload, selection, reports, and role routing.",
    stack: ["Next.js", "Express", "MongoDB", "CSV", "JWT", "Reports"],
    video: "https://youtu.be/bHUvejhSDjo",
    videoId: "bHUvejhSDjo",
    featured: true,
  },
  {
    title: "V-Dashboard",
    eyebrow: "Game Ops Control Plane",
    summary:
      "Admin dashboard for developers, builds, feature flags, game sessions, backend docs, and operational control.",
    outcome: "Backend admin workflows, API surfaces, Redis/Mongo usage, and production-style tools.",
    stack: ["Next.js", "Fastify", "MongoDB", "Redis", "AWS"],
    video: "https://youtu.be/Sn7XAAzTvuM",
    videoId: "Sn7XAAzTvuM",
  },
  {
    title: "SAMVIT Notifications",
    eyebrow: "Operational Alerting",
    summary:
      "Notification and alert-management flow for energy operations, built around fast scanning and action clarity.",
    outcome: "Useful proof for monitoring, alerts, and operator-facing interfaces.",
    stack: ["Next.js", "Alerts", "Notifications", "Dashboard UX"],
    video: "https://youtu.be/XdtZ9UeJzdM",
    videoId: "XdtZ9UeJzdM",
  },
  {
    title: "Grid Prototype",
    eyebrow: "Interactive UI Prototype",
    summary:
      "Visual prototype focused on grid-based interactions and polished motion-heavy interface behavior.",
    outcome: "Supporting proof for frontend interaction design.",
    stack: ["React", "Animation", "Prototype", "UI"],
    video: "https://youtu.be/2ZT8AiIlpc0",
    videoId: "2ZT8AiIlpc0",
  },
  {
    title: "Chakra",
    eyebrow: "Product UI",
    summary:
      "Polished application interface with structured screens and clean flows for portfolio demonstration.",
    outcome: "Compact visual proof of frontend UI implementation.",
    stack: ["React", "Next.js", "Tailwind", "UI"],
    video: "https://youtu.be/mDH5zXn7inI",
    videoId: "mDH5zXn7inI",
  },
  {
    title: "Eduford",
    eyebrow: "Education Landing Experience",
    summary:
      "Education-focused frontend showcase with responsive sections and classic marketing layout.",
    outcome: "Archive project showing earlier frontend fundamentals.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    video: "https://youtu.be/N8Q_hrBwZ6I",
    videoId: "N8Q_hrBwZ6I",
  },
  {
    title: "E-Commerce Site",
    eyebrow: "Frontend Commerce",
    summary:
      "E-commerce storefront demonstration with product browsing, visual sections, and shopping-style UI patterns.",
    outcome: "Archive proof for frontend layout and commerce pages.",
    stack: ["React", "Frontend", "E-Commerce", "UI"],
    video: "https://youtu.be/2vWkRkh1WXE",
    videoId: "2vWkRkh1WXE",
  },
  {
    title: "The Intellect",
    eyebrow: "Frontend Showcase",
    summary:
      "Editorial-style frontend project with page transitions, visual hierarchy, and content presentation.",
    outcome: "Early frontend polish and animation practice.",
    stack: ["React", "Frontend", "Animation", "Responsive UI"],
    video: "https://youtu.be/VfKphuHxXYE",
    videoId: "VfKphuHxXYE",
  },
  {
    title: "Directors Chair",
    eyebrow: "Creative Interface",
    summary:
      "Media-themed interface demo focused on visual feel and motion-led presentation.",
    outcome: "Archive-quality visual project for breadth.",
    stack: ["React", "UI", "Motion", "Frontend"],
    video: "https://youtu.be/CaNlNzLP8X4",
    videoId: "CaNlNzLP8X4",
  },
];

const stats = [
  ["12+", "recorded demos"],
  ["6", "systems/admin tools"],
  ["Full-stack", "UI to runtime"],
  ["CLI", "Git/Linux/debugging"],
];

export function VideoProjects() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Video Project Showcase
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              Recent work, recorded as real product walkthroughs.
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-neutral-300">
              The portfolio now leads with proof: dashboards, backend systems,
              admin tools, staff-testing workflows, energy monitoring, and Git
              tooling. Every project opens with a demo video.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-lg font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs text-neutral-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-md border border-cyan-300/20 bg-white/[0.045] shadow-2xl shadow-black/30">
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${project.videoId}`}
                  title={`${project.title} demo video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    Featured {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-neutral-300">
                    {project.eyebrow}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{project.summary}</p>
                <p className="mt-3 border-l border-cyan-300/40 pl-3 text-sm leading-6 text-cyan-50/90">
                  {project.outcome}
                </p>
                <ProjectFooter project={project} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {more.map((project) => (
            <article key={project.title} className="group rounded-md border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/35 hover:bg-white/[0.06]">
              <div className="relative overflow-hidden rounded bg-black">
                <img
                  src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                  alt={`${project.title} video thumbnail`}
                  className="aspect-video w-full object-cover opacity-80 transition group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <span className="rounded-full border border-white/30 bg-black/60 p-3 text-white">
                    <IconMovie className="h-5 w-5" />
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                {project.eyebrow}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{project.summary}</p>
              <ProjectFooter project={project} compact />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFooter({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <>
      <div className={`flex flex-wrap gap-2 ${compact ? "mt-4" : "mt-5"}`}>
        {project.stack.map((tech) => (
          <span key={tech} className="rounded border border-white/10 bg-black/30 px-2 py-1 text-xs text-neutral-300">
            {tech}
          </span>
        ))}
      </div>
      <div className={`flex flex-wrap gap-3 ${compact ? "mt-4" : "mt-6"}`}>
        <a href={project.video} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-cyan-200">
          Watch demo <IconArrowUpRight className="h-4 w-4" />
        </a>
        {!compact && (
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
            Discuss build <IconTerminal2 className="h-4 w-4" />
          </a>
        )}
      </div>
    </>
  );
}
