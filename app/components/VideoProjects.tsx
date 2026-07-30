"use client";

import { useState } from "react";
import {
  IconArrowUpRight,
  IconListDetails,
  IconMovie,
  IconTerminal2,
  IconX,
} from "@tabler/icons-react";

type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  outcome: string;
  stack: string[];
  video: string;
  videoId: string;
  repo?: string;
  workType: string;
  duration?: string;
  context: string;
  about: string;
  myRole: string;
  features: string[];
  proof: string[];
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
    repo: "https://github.com/san2722soni/SAMVIT",
    workType: "Job work at XENVOLT",
    duration: "1 month",
    context: "Built while working at XENVOLT as a full-stack developer.",
    about:
      "A SCADA-style solar monitoring platform for plant operations. It turns energy production, alarms, reports, and site health into dashboards that operators can scan quickly.",
    myRole:
      "I worked on the dashboard experience, backend/API connection points, demo data flow, and local run fixes so the system could be recorded end-to-end.",
    features: ["Plant overview dashboard", "Energy analytics and reports", "Alarm and alert views", "Notification-focused operator screens"],
    proof: ["Industrial domain UX", "Chart-heavy dashboard work", "Backend-driven pages", "Monitoring/debugging mindset"],
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
    repo: "https://github.com/san2722soni/Version-Control-Manager",
    workType: "Partner-guided job work",
    duration: "3 months",
    context: "Worked after V-Dashboard/V-Server with senior guidance from Vineet Oli; I coded and implemented core parts.",
    about:
      "A developer tool for Git workflows: repository views, branch context, workflow screens, and backend-backed operations for managing version-control tasks.",
    myRole:
      "I handled the portfolio-ready frontend/backend setup, local auth flow, backend dependency mapping, and demo run path.",
    features: ["Repository and branch screens", "Developer workflow UI", "Backend OTP/auth support", "CLI/Git-oriented product direction"],
    proof: ["Git and terminal relevance", "Debugging-heavy workflow", "Tooling product sense", "Frontend plus backend integration"],
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
    repo: "https://github.com/san2722soni/XENVOLT-Site",
    workType: "Job work at XENVOLT",
    duration: "Built in 1 month, maintained during employment",
    context: "Company website work: 16 pages, updates, content tweaks, Vercel/devops, and CI/CD-style maintenance.",
    about:
      "A business website and admin ecosystem for an industrial AI company. It covers public pages, case studies, blogs, careers, leads, and admin-side content workflows.",
    myRole:
      "I fixed local dev issues, removed fragile Google font loading paths, cleaned UI/font behavior, and prepared both site/admin as showcase material.",
    features: ["Public company website", "Case-study and blog pages", "Admin CMS workflows", "Lead/content management"],
    proof: ["Client-ready UI", "Admin product thinking", "Next.js app structure", "Network/font debugging"],
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
    repo: "https://github.com/san2722soni/Randomizer-BA-Test",
    workType: "Job work at XENVOLT",
    duration: "2 months",
    context: "Product built at XENVOLT for airport/staff testing workflows.",
    about:
      "An airport staff testing platform where admins upload staff data, station managers run random selections, doctors record results, and reports summarize testing history.",
    myRole:
      "I debugged the frontend/backend run path, seeded demo-friendly data, generated a valid CSV sample, and prepared role-based demo credentials.",
    features: ["CSV staff import", "Random test selection", "Doctor result workflow", "Admin/station manager reports"],
    proof: ["Role-based app flow", "CSV/data handling", "Business reporting screens", "MongoDB-backed workflow"],
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
    repo: "https://github.com/san2722soni/V-Dashboard",
    workType: "Partner-guided job work",
    duration: "Part of 4-5 months with V-Server",
    context: "Worked with Vineet Oli after XENVOLT on a multiplayer game server ecosystem.",
    about:
      "A control-plane style dashboard for game operations: builds, sessions, developer management, backend docs, and production-like runtime controls.",
    myRole:
      "I connected it with the V-Server run path, removed production-only UI blocks for demos, and documented how frontend/backend run together.",
    features: ["Build management", "Developer/admin panels", "Session/runtime views", "Backend API documentation surfaces"],
    proof: ["Admin dashboard UX", "Backend control workflows", "MongoDB/Redis ecosystem", "Internal tooling style"],
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
    repo: "https://github.com/san2722soni/SAMVIT",
    workType: "Job work at XENVOLT",
    context: "Notification/alert workflow from the SAMVIT monitoring product ecosystem.",
    about:
      "A focused notification and alert workflow for SAMVIT, designed around quick operational scanning and action clarity.",
    myRole:
      "I treated it as a focused sub-demo showing how monitoring systems communicate issues to operators.",
    features: ["Notification list", "Alert priority views", "Operator-friendly scanning", "SCADA support workflow"],
    proof: ["Monitoring UX", "Alert design", "Operational dashboard thinking", "Energy software context"],
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
    about:
      "An interaction-heavy grid prototype focused on motion, layout behavior, and visual experimentation.",
    workType: "Job work + personal/creative exploration",
    context: "Compact UI/UX experiment for showing multiple graphs, dates, dependencies, and information cleanly.",
    myRole:
      "I built it as supporting frontend proof: visual systems, transitions, and prototype thinking.",
    features: ["Grid-based UI", "Motion-focused interactions", "Responsive layout experiments", "Prototype presentation"],
    proof: ["Frontend polish", "Interaction design", "Animation practice", "UI experimentation"],
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
    repo: "https://github.com/san2722soni/CHAKRA-OEE",
    workType: "Job work at XENVOLT",
    context: "Proof-of-concept dashboard built at XENVOLT for a client pitch.",
    about:
      "An OEE/manufacturing operations dashboard with digital twin, predictive, maintenance, and equipment-focused screens.",
    myRole:
      "I analyzed and prepared it as a portfolio project showing industrial dashboard depth separate from SCADA/SAMVIT.",
    features: ["OEE dashboard", "Digital twin screen", "Predictive insights", "Maintenance/equipment views"],
    proof: ["Industrial software UI", "Dashboard architecture", "Manufacturing domain", "Data visualization screens"],
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
    repo: "https://github.com/san2722soni/Eduford",
    workType: "Client work",
    context: "Education website project built for a client.",
    about:
      "An education landing website from my earlier frontend phase, focused on sections, responsiveness, and content presentation.",
    myRole:
      "I keep it as archive proof to show the progression from static frontend work to full-stack systems.",
    features: ["Education landing pages", "Responsive sections", "Contact/content layout", "Static frontend structure"],
    proof: ["Frontend fundamentals", "Responsive design", "Archive progression", "Clean page composition"],
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
    repo: "https://github.com/san2722soni/RealViewGarden-store",
    workType: "Client work",
    context: "Nursery/business storefront and management-focused ecommerce project.",
    about:
      "A storefront-style frontend for product browsing and ecommerce presentation, useful as older commerce UI proof.",
    myRole:
      "I use it as an archive/supporting project while the main portfolio now leads with newer systems work.",
    features: ["Product browsing UI", "Storefront sections", "Commerce-style layout", "Responsive presentation"],
    proof: ["Ecommerce patterns", "Frontend layout", "Customer-facing UI", "Archive project breadth"],
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
    repo: "https://github.com/san2722soni/The-Intellect",
    workType: "Client work",
    context: "Coaching/education website frontend built for a client.",
    about:
      "A coaching/education frontend showcase with institutional content, responsive sections, and visual hierarchy.",
    myRole:
      "I keep it as an older project to show frontend fundamentals before the newer dashboard/backend projects.",
    features: ["Education content pages", "Responsive sections", "Visual hierarchy", "Static frontend flow"],
    proof: ["Frontend fundamentals", "Content layout", "Responsive UI", "Progression over time"],
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
    repo: "https://github.com/san2722soni/Director-s-Chair",
    workType: "Personal project + client/friend use case",
    context: "Built from a real use case for cinematographer Ayush Prakash, not from a tutorial.",
    about:
      "A media workflow interface around clapperboard/director-style recording and production management flows.",
    myRole:
      "I included it as a creative product UI project that adds variety beyond dashboards and business websites.",
    features: ["Media workflow screens", "Production-style UI", "Creative interface direction", "Motion-led presentation"],
    proof: ["Creative UX", "Frontend breadth", "Workflow design", "Portfolio variety"],
  },
];

const stats = [
  ["12+", "recorded demos"],
  ["6", "systems/admin tools"],
  ["Full-stack", "UI to runtime"],
  ["CLI", "Git/Linux/debugging"],
];

export function VideoProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer overflow-hidden rounded-md border border-cyan-300/20 bg-white/[0.045] shadow-2xl shadow-black/30 transition hover:border-cyan-200/60 hover:bg-white/[0.07]"
            >
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
                <ProjectFooter project={project} onOpen={() => setSelectedProject(project)} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {more.map((project) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-md border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/35 hover:bg-white/[0.06]"
            >
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
              <ProjectFooter project={project} compact onOpen={() => setSelectedProject(project)} />
            </article>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectFooter({
  project,
  compact = false,
  onOpen,
}: {
  project: Project;
  compact?: boolean;
  onOpen: () => void;
}) {
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
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onOpen();
          }}
          className="inline-flex items-center gap-2 rounded-md border border-cyan-300/35 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
        >
          Details <IconListDetails className="h-4 w-4" />
        </button>
        <a href={project.video} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-cyan-200">
          Watch demo <IconArrowUpRight className="h-4 w-4" />
        </a>
        {!compact && (
          <a href="#contact" onClick={(event) => event.stopPropagation()} className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
            Discuss build <IconTerminal2 className="h-4 w-4" />
          </a>
        )}
      </div>
    </>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="mx-auto my-8 max-w-5xl overflow-hidden rounded-md border border-white/10 bg-neutral-950 shadow-2xl shadow-black"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-black">
            <iframe
              className="aspect-video h-full min-h-64 w-full"
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={`${project.title} case study video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  {project.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-white/10 p-2 text-neutral-300 transition hover:border-cyan-300 hover:text-white"
                aria-label="Close project details"
              >
                <IconX className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-5 space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                <InfoPill label="Type" value={project.workType} />
                {project.duration && <InfoPill label="Duration" value={project.duration} />}
                <InfoPill label="Context" value={project.context} />
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Project About
                </h4>
                <p className="mt-3 text-sm leading-7 text-neutral-300">
                  {project.about}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  What I Did
                </h4>
                <p className="mt-3 border-l border-cyan-300/40 pl-4 text-sm leading-7 text-cyan-50/90">
                  {project.myRole}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 p-6">
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Project Breakdown
            </h4>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-300">
              This section is written for reviewers: what the software does,
              which parts are visible in the demo, and what engineering skill
              the project is meant to prove.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <DetailList title="What It Does" items={project.features} />
            <DetailList title="What It Proves" items={project.proof} />
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Stack
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={project.video} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-cyan-200">
                Watch demo <IconArrowUpRight className="h-4 w-4" />
              </a>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
                  GitHub <IconArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
        {label}
      </p>
      <p className="mt-2 text-xs leading-5 text-neutral-200">{value}</p>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="rounded border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-neutral-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
