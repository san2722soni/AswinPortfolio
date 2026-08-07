"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  IconBrandNodejs,
  IconBrandReact,
  IconBrain,
  IconDatabase,
  IconServerCog,
  IconTool,
} from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { TypingHeading } from "@/components/TypingHeading";

const skillGroups = [
  {
    title: "Product UI",
    icon: IconBrandReact,
    proof: "Dashboards, admin panels, landing pages, and client-facing product screens.",
    details: [
      "Turn rough product requirements into usable screens with clear hierarchy.",
      "Build responsive dashboard, admin, and marketing/product surfaces.",
      "Care about motion, loading states, forms, and demo-ready polish.",
    ],
    projects: ["XENVOLT Site", "XENVOLT Admin", "Psych Learn"],
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/Radix UI", "AOS/Framer Motion"],
  },
  {
    title: "Backend Systems",
    icon: IconBrandNodejs,
    proof: "APIs and service layers for dashboards, AI workflows, game/session systems, and role-based apps.",
    details: [
      "Design practical API flows for auth, roles, dashboards, reports, and admin work.",
      "Connect frontend state to backend models without hiding the real workflow.",
      "Debug server paths from terminal logs, requests, data, and runtime behavior.",
    ],
    projects: ["V-Server", "Auryvedic", "Randomizer"],
    skills: ["Node.js", "Fastify", "Express", "REST APIs", "JWT/OTP", "TanStack Query"],
  },
  {
    title: "Data & APIs",
    icon: IconDatabase,
    proof: "Database-backed products with auth, admin data, reports, cache, and search paths.",
    details: [
      "Work with MongoDB and SQL-backed products across admin and dashboard flows.",
      "Shape schemas around actual screens: filters, reports, content, users, and logs.",
      "Use cache/search/service APIs when the product needs faster repeated access.",
    ],
    projects: ["XENVOLT Admin", "V-Dashboard", "V-Server"],
    skills: ["MongoDB/Mongoose", "PostgreSQL", "Prisma", "Redis", "Clerk/JWT", "Search/filter APIs"],
  },
  {
    title: "Deployment & Ops",
    icon: IconServerCog,
    proof: "Production-style server setup, process management, reverse proxy, and deployment checks.",
    details: [
      "Prepare projects for real run paths, not just local demos.",
      "Handle Linux process management, reverse proxy basics, envs, and deployment notes.",
      "Read logs and smoke-test workflows before calling a product ready.",
    ],
    projects: ["AnarchyV2", "V-Server", "XENVOLT Site"],
    skills: ["Linux", "SSH", "AWS EC2/S3", "PM2", "Nginx", "Cloudflare"],
  },
  {
    title: "Developer Tooling",
    icon: IconTool,
    proof: "Terminal-first debugging, desktop tooling, editor workflows, systems docs, and repo operations.",
    details: [
      "Build tools that make developer workflows easier to inspect and operate.",
      "Comfortable around Git workflows, desktop app surfaces, editors, and repo state.",
      "Document runbooks and debugging notes so systems can be operated again later.",
    ],
    projects: ["Version Control Manager", "AnarchyV2", "Randomizer"],
    skills: ["Git/CLI", "Electron", "C++/FlatBuffers", "CodeMirror/Monaco", "Runbooks", "Repo operations"],
  },
  {
    title: "AI Integrations",
    icon: IconBrain,
    proof: "AI assistant workflows, WhatsApp automation, reports, and external service integrations.",
    details: [
      "Connect AI features to real product paths instead of isolated chat demos.",
      "Use assistant flows for knowledge, appointment, report, and automation surfaces.",
      "Keep AI integrations grounded in user actions, data, and admin visibility.",
    ],
    projects: ["Auryvedic", "SAMVIT / SCADA", "ClapperBoard"],
    skills: ["OpenAI SDK", "WhatsApp API", "Python/XGBoost", "Cloudinary", "PDF/QR generation", "Automation flows"],
  },
  {
    title: "Core CS & Systems",
    icon: IconServerCog,
    proof: "Current focus across advanced C++, DSA, system design, backend networking, and low-level reasoning.",
    details: [
      "Sharpening algorithmic problem solving and data-structure fundamentals.",
      "Studying backend networking, scalable services, and system-design tradeoffs.",
      "Using C++ learning to understand memory, runtime behavior, and performance better.",
    ],
    projects: ["AnarchyV2", "V-Server", "Version Control Manager"],
    skills: ["Advanced C++", "DSA", "System Design", "Backend Networking", "Runtime thinking", "Performance debugging"],
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = skillGroups[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section className="mx-auto w-[88vw] max-w-[1100px] py-20 md:py-24">
      <div className="mb-9" data-aos="fade-up">
        <div>
          <p className="hero-mono text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Skills
          </p>
          <TypingHeading
            text="Capabilities backed by projects."
            className="hero-display mt-4 whitespace-normal text-3xl font-bold text-white md:whitespace-nowrap md:text-4xl"
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[290px_minmax(0,1fr)]">
        <div
          role="tablist"
          aria-label="Skill groups"
          className="flex overflow-x-auto border-b border-[#233554] lg:block lg:overflow-visible lg:border-b-0 lg:border-l"
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const selected = activeIndex === index;

            return (
              <button
                key={group.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group min-w-[210px] border-b-2 px-4 py-4 text-left transition lg:min-w-0 lg:w-full lg:border-b-0 lg:border-l-2 lg:px-5",
                  selected
                    ? "border-cyan-300 bg-cyan-300/[0.06]"
                    : "border-transparent hover:bg-white/[0.035]",
                )}
              >
                <span className="flex items-center justify-between gap-4">
                  <span className={cn("hero-mono text-xs font-semibold", selected ? "text-cyan-200" : "text-[#8892b0]")}>
                    {String(index + 1).padStart(2, "0")}. {group.title}
                  </span>
                  <Icon className={cn("h-4 w-4 shrink-0", selected ? "text-cyan-200" : "text-[#8892b0]")} />
                </span>
                <span className="mt-1 block text-sm font-semibold text-[#ccd6f6]">
                  {group.skills.slice(0, 2).join(" / ")}
                </span>
              </button>
            );
          })}
        </div>

        <motion.article
          key={active.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="min-h-[360px]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 flex-wrap items-center gap-3">
              <span className="rounded-md border border-[#233554] bg-[#112240]/70 p-2 text-cyan-200">
                <ActiveIcon className="h-5 w-5" />
              </span>
              <span className="hero-mono text-sm font-bold text-[#ccd6f6]">
                {String(activeIndex + 1).padStart(2, "0")}. Skill Area
              </span>
            </div>
            <span className="rounded border border-cyan-300/35 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-100">
              Project-backed
            </span>
          </div>

          <h3 className="mt-8 text-2xl font-bold leading-8 text-[#ccd6f6] md:text-3xl">
            {active.title}
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#a8b2d1]">
            {active.proof}
          </p>

          <ul className="mt-7 grid gap-3">
            {active.details.map((detail) => (
              <li key={detail} className="grid grid-cols-[18px_1fr] gap-3 text-sm leading-7 text-[#a8b2d1]">
                <span className="mt-2 h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-cyan-300" />
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <p className="hero-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Seen in projects
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {active.projects.map((project) => (
                <span
                  key={project}
                  className="rounded border border-[#233554] bg-[#112240]/70 px-4 py-3 text-sm font-semibold text-[#ccd6f6]"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {active.skills.map((skill) => (
              <span key={skill} className="grid grid-cols-[16px_1fr] gap-3 text-sm leading-6 text-[#a8b2d1]">
                <span className="mt-2 h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-cyan-300" />
                {skill}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
