"use client";

import {
  IconBrandGithub,
  IconBrandNodejs,
  IconBrandReact,
  IconCloud,
  IconDatabase,
  IconServerCog,
  IconTerminal2,
  IconTool,
} from "@tabler/icons-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: IconBrandReact,
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/Radix UI", "Framer Motion", "Pixi.js"],
  },
  {
    title: "Backend",
    icon: IconBrandNodejs,
    skills: ["Node.js", "Fastify", "Express", "REST APIs", "WebSockets", "JWT", "FlatBuffers"],
  },
  {
    title: "Systems & CLI",
    icon: IconTerminal2,
    skills: ["C++", "Git workflows", "CLI debugging", "Shell scripts", "Smoke tests", "Load tests"],
  },
  {
    title: "DevOps / Cloud",
    icon: IconServerCog,
    skills: ["Linux", "SSH", "PM2", "Nginx", "Docker", "Kubernetes", "AWS", "Cloudflare"],
  },
  {
    title: "Databases",
    icon: IconDatabase,
    skills: ["MongoDB", "Redis", "PostgreSQL", "MySQL", "Prisma", "Supabase"],
  },
  {
    title: "Observability",
    icon: IconTool,
    skills: ["Elasticsearch", "Kibana", "Filebeat", "Structured logs", "Production metrics"],
  },
];

const proofItems = [
  {
    label: "Terminal-first work",
    text: "Build, debug, smoke-test, and document systems from the command line.",
    icon: IconTerminal2,
  },
  {
    label: "Production workflows",
    text: "PM2, Nginx, Linux, Cloudflare, runtime backup notes, and deployment checks.",
    icon: IconCloud,
  },
  {
    label: "Developer tooling",
    text: "Git/CLI workflows, Electron tooling, diff/merge UX, and repo operations.",
    icon: IconBrandGithub,
  },
];

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
          Skills & Operating Range
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          I work across product UI, backend services, and production systems.
        </h2>
        <p className="mt-5 text-base leading-8 text-neutral-300">
          This replaces vague percentage meters with concrete capabilities that
          match the projects: engine work, APIs, dashboards, terminal workflows,
          and deployment/debugging practice.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article
              key={group.title}
              className="rounded-md border border-white/10 bg-white/[0.035] p-5"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {proofItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-md border border-white/10 bg-black/30 p-5">
              <Icon className="h-6 w-6 text-cyan-200" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-300">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
