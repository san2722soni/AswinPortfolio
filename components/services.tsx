"use client";

import { motion } from "motion/react";
import {
  IconBrandGithub,
  IconBrandNodejs,
  IconBrandReact,
  IconBrain,
  IconCloud,
  IconDatabase,
  IconServerCog,
  IconTerminal2,
  IconTool,
} from "@tabler/icons-react";
import { TypingHeading } from "@/components/TypingHeading";

const skillGroups = [
  {
    title: "Frontend Product UI",
    icon: IconBrandReact,
    proof: "Typed product UI across company sites, admin dashboards, video portfolio, and client landing work.",
    projects: ["XENVOLT Site", "XENVOLT Admin", "Psych Learn"],
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "shadcn/Radix UI", "Framer Motion", "AOS"],
  },
  {
    title: "Backend/API Core",
    icon: IconBrandNodejs,
    proof: "Backend services for dashboards, game/session systems, AI workflows, and role-based business apps.",
    projects: ["V-Server", "Auryvedic", "Randomizer"],
    skills: ["Node.js", "Fastify", "Express", "REST APIs", "WebSockets", "JWT/OTP", "API docs"],
  },
  {
    title: "Data/Auth Layer",
    icon: IconDatabase,
    proof: "Database-backed products with auth, admin data, reports, relational modeling, cache, and search systems.",
    projects: ["XENVOLT Admin", "V-Dashboard", "V-Server"],
    skills: ["MongoDB/Mongoose", "PostgreSQL", "Prisma", "Redis", "Clerk/JWT", "Elasticsearch", "TanStack Table"],
  },
  {
    title: "DevOps & Cloud",
    icon: IconServerCog,
    proof: "Production-style server setup, process management, reverse proxy, cloud workflows, and deployment checks.",
    projects: ["AnarchyV2", "V-Server", "XENVOLT Site"],
    skills: ["Linux", "SSH", "Docker", "AWS EC2/S3", "PM2", "Nginx", "Cloudflare"],
  },
  {
    title: "Systems & Tooling",
    icon: IconTool,
    proof: "Terminal-first debugging, desktop tooling, editor workflows, systems docs, and test-aware delivery.",
    projects: ["Version Control Manager", "AnarchyV2", "Randomizer"],
    skills: ["Git/CLI", "Electron", "C++/FlatBuffers", "CodeMirror/Monaco", "Vitest/Jest/Cypress", "Load tests", "Runbooks"],
  },
  {
    title: "AI & Integrations",
    icon: IconBrain,
    proof: "AI assistant workflows, WhatsApp automation, media/report generation, and operational integrations.",
    projects: ["Auryvedic", "SAMVIT / SCADA", "ClapperBoard"],
    skills: ["OpenAI SDK", "AI SDK", "Python/XGBoost", "WhatsApp API", "Cloudinary", "PDF/QR generation", "Speech recognition"],
  },
  {
    title: "Current Focus & Availability",
    icon: IconTerminal2,
    proof: "Currently open to full-time opportunities and freelance work, while deepening systems, backend, and interview fundamentals.",
    projects: ["Open to work", "Taking freelance work", "Learning track"],
    skills: ["Advanced C++", "LeetCode/DSA", "Advanced JavaScript", "Backend networking", "System design", "Full-stack roles", "Client work"],
    wide: true,
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
    text: "PM2, Nginx, Linux, Cloudflare, AWS, runtime backup notes, and deployment checks.",
    icon: IconCloud,
  },
  {
    label: "Developer tooling",
    text: "Git/CLI workflows, Electron tooling, editor-style diff UX, tests, and repo operations.",
    icon: IconBrandGithub,
  },
];

const skillCardAnimations = ["fade-right", "fade-down", "fade-left", "fade-up", "fade-right", "fade-left"];

function getSkillCardAos(index: number) {
  return skillCardAnimations[index % skillCardAnimations.length];
}

export function Services() {
  return (
    <section className="mx-auto w-[88vw] max-w-none py-28 lg:w-[70vw]">
      <div className="mb-12" data-aos="fade-up">
        <div>
          <p className="hero-mono text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Skills & Operating Range
          </p>
          <TypingHeading
            text="Skills mapped across engineering operations."
            className="hero-display mt-4 whitespace-normal text-3xl font-bold text-white md:whitespace-nowrap md:text-5xl"
          />
          <p className="mt-5 text-base leading-8 text-neutral-300">
            Concrete capabilities from the projects: engine work, APIs,
            dashboards, terminal workflows, and deployment/debugging practice.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              data-aos={getSkillCardAos(index)}
              data-aos-delay={String(320 + index * 260)}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-cyan-300/[0.035] p-5 shadow-xl shadow-black/10 transition hover:border-cyan-300/45 hover:shadow-cyan-950/20 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-cyan-200/70 before:to-transparent ${group.wide ? "lg:col-span-3" : ""}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-black">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>
              </div>
              <p className="mb-4 text-sm leading-6 text-neutral-300">{group.proof}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {group.projects.map((project) => (
                  <span
                    key={project}
                    className="hero-mono rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold text-cyan-100"
                  >
                    {project}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 14, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.18, ease: "easeOut" }}
                    className="rounded border border-white/10 bg-black/40 px-3.5 py-2 text-base font-semibold text-neutral-100 transition group-hover:border-cyan-300/45 group-hover:bg-cyan-300/10 group-hover:text-cyan-50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {proofItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              data-aos={getSkillCardAos(index + skillGroups.length)}
              data-aos-delay={String(340 + index * 260)}
              className="rounded-md border border-white/10 bg-black/30 p-5"
            >
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
