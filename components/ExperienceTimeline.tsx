"use client";

import { motion } from "motion/react";
import { IconArrowUpRight, IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { TypingHeading } from "@/components/TypingHeading";
import { LinkPreview } from "@/components/ui/link-preview";
import { Timeline } from "@/components/ui/timeline";

type TimelineItem = {
  phase: string;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  summary: string;
  projects: { name: string; target?: string; text: string }[];
  skills: string[];
};

const experiences: TimelineItem[] = [
  {
    phase: "01. Frontend Foundations",
    role: "Frontend Developer",
    company: "Early client projects",
    type: "Client work",
    period: "2023 - May 2024",
    duration: "early client phase",
    location: "Remote",
    summary: "Started with real client websites instead of tutorial clones: education pages, creator portfolios, and nursery/storefront experiences with responsive UI and client-ready delivery.",
    projects: [
      { name: "The Intellect", text: "Coaching/education website with institutional content and clean responsive flow." },
      { name: "Ayush Prakash Portfolio", text: "Cinematographer portfolio with media/project presentation and contact flow." },
      { name: "RealViewGarden E-Commerce", text: "Online nursery/storefront with product browsing and management direction." },
    ],
    skills: ["Responsive UI", "Client delivery", "Portfolio UX"],
  },
  {
    phase: "02. Frontend Internship",
    role: "Frontend Developer Intern",
    company: "Dragstr Marketing",
    type: "Internship",
    period: "May 2024 - Aug 2024",
    duration: "4 months",
    location: "Kalyan, Maharashtra - Remote",
    summary: "Moved into a structured internship role, building and maintaining frontend marketing work with responsive layouts, interactive sections, blogs/client updates, SEO/social presence, and clean delivery flow.",
    projects: [
      { name: "Dragstr", text: "Digital marketing agency website with services, case-study sections, and content updates." },
      { name: "Prestine Nature", text: "Organic product landing page with small-business branding and motion polish." },
    ],
    skills: ["React", "Tailwind", "SEO/content", "Client updates"],
  },
  {
    phase: "03. Full-Stack Product Engineering",
    role: "Full-Stack Product Developer & DevOps",
    company: "Xenvolt AI",
    type: "Full-time",
    period: "Aug 2024 - Nov 2025",
    duration: "1 yr 4 mos",
    location: "Xenvolt AI - Kalyan, Maharashtra, India - Remote",
    summary: "Progressed from frontend into full-stack company product work: dashboards, backend-connected flows, internal tools, website/admin systems, and deployment support.",
    projects: [
      { name: "XENVOLT Site", text: "Company website with product pages, blogs, leads, white papers, and deployment workflow." },
      { name: "XENVOLT Admin", text: "Internal CMS/admin dashboard for blogs, leads, rich text, images, and website updates." },
      { name: "SAMVIT / SCADA Platform", text: "Solar PV monitoring dashboards with alarms, reports, notifications, and analytics." },
      { name: "CHAKRA OEE", text: "Manufacturing/OEE POC." },
      { name: "SAMVIT Pro / Xenvolt EPC Track", text: "Separate solar EPC tracking product with tickets, alerts, maps, reports, and metrics." },
      { name: "Randomizer / BA Test", text: "Airport staff testing/random-selection workflow with CSV, roles, reports, and MongoDB." },
    ],
    skills: ["Next.js", "Node APIs", "MongoDB", "Linux", "PM2", "Nginx"],
  },
  {
    phase: "04. Frontend Client Delivery",
    role: "Frontend Developer",
    company: "Psych Learn",
    type: "Client work",
    period: "Short delivery",
    duration: "client project",
    location: "Remote",
    summary: "Client ed-tech platform work focused on clean presentation, course/material structure, and responsive UI.",
    projects: [{ name: "Psych Learn", text: "Psychology ed-tech landing platform." }],
    skills: ["Next.js", "Landing UI", "EdTech", "Illustration-led UI"],
  },
  {
    phase: "05. Systems & DevOps Engineering",
    role: "Software Engineering - Systems & DevOps",
    company: "With Vineet Oli",
    type: "Senior Engineer guidance",
    period: "Nov 2025 - Present",
    duration: "approx 10 months",
    location: "With Vineet Oli - Remote",
    summary: "Job work under senior engineer guidance: developer tools, multiplayer/server systems, deployment workflows, Linux operations, and production debugging.",
    projects: [
      { name: "V-Server", target: "V-Dashboard + V-Server", text: "Backend multiplayer/game operations services with Redis, MongoDB, and AWS EC2 flows." },
      { name: "V-Dashboard", target: "V-Dashboard + V-Server", text: "Next.js admin control plane for game sessions, builds, and developer workflows." },
      { name: "Version Control Manager", text: "GitHub-like Electron/Next/Node developer tool with repo, branch, diff, CLI, and ELK direction." },
      { name: "AnarchyV2", text: "Large real-time multiplayer stack with C++ engine direction, Fastify APIs, Redis, PM2/Nginx, and runbooks." },
    ],
    skills: ["Linux", "SSH", "Docker", "AWS", "Kubernetes", "Redis", "ELK"],
  },
  {
    phase: "06. AI Product Engineering",
    role: "Full-Stack AI Product Developer",
    company: "Auryvedic",
    type: "Client work",
    period: "Recent",
    duration: "2-3 weeks",
    location: "Remote",
    summary: "Applied the full-stack/product skillset to a client AI platform with WhatsApp automation, appointment workflows, knowledge engine, and admin dashboard.",
    projects: [{ name: "Auryvedic", text: "Clinic AI assistant platform." }],
    skills: ["Fastify", "MongoDB", "OpenAI flows", "WhatsApp", "Admin dashboard"],
  },
];

export function ExperienceTimeline() {
  const data = experiences.map((item, index) => ({
    title: `${String(index + 1).padStart(2, "0")}. ${item.role}`,
    content: <ExperienceCard item={item} index={index} />,
  }));

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto w-[96vw] max-w-none sm:w-[88vw] lg:w-[70vw]">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.86fr] lg:gap-10">
          <div>
          <p className="hero-mono text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
            Experience Timeline
          </p>
            <TypingHeading
              text="Work progression, not project dumping."
              className="hero-display mt-4 text-3xl font-bold text-white md:text-5xl"
            />
            <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-300 md:text-base">
              Frontend client work to company products, systems/devops work, and AI product delivery. Click any project to open its proof.
            </p>
          </div>
          <div>
              <p className="flex max-w-3xl items-start gap-3 rounded-md border border-cyan-300/35 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50 shadow-[0_0_28px_rgba(34,211,238,0.08)] lg:mt-5">
                <span className="hero-mono rounded bg-cyan-300 px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-black">
                  Notice
                </span>
                <span>
                  Demos use recreated or demo-safe data where needed. Source code may be private because some work is client, company, or collaborator owned.
                </span>
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
            <LinkPreview
              href="https://www.linkedin.com/company/xenvolt/"
              label="Xenvolt company LinkedIn"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-neutral-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              Xenvolt <IconArrowUpRight className="h-3 w-3" />
            </LinkPreview>
            <LinkPreview
              href="https://www.linkedin.com/in/vineet-oli/"
              label="Vineet Oli LinkedIn"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-neutral-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              Vineet Oli <IconArrowUpRight className="h-3 w-3" />
            </LinkPreview>
              </div>
          </div>
        </div>
        <Timeline data={data} className="mt-10 w-full font-sans" />
      </div>
    </section>
  );
}

function ExperienceCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 42 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.68, delay: (index % 2) * 0.24, ease: "easeOut" }}
      className="rounded-md border border-white/10 bg-white/[0.04] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:p-6 md:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <span className="hero-mono text-xs font-semibold text-white sm:text-sm">{item.phase}</span>
          <span className="rounded border border-cyan-300/30 bg-cyan-300/10 px-2.5 py-1.5 text-xs font-semibold text-cyan-100">
            {item.type}
          </span>
        </div>
        <span className="hero-mono text-xs leading-5 text-neutral-400 sm:text-sm sm:leading-6">
          {item.period} / {item.duration}
        </span>
      </div>
      <h3 className="mt-5 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-lg font-semibold leading-7 text-white sm:text-xl sm:leading-8">
        <IconBriefcase className="h-5 w-5 shrink-0 text-cyan-200" />
        <span>{item.role}</span>
        <span className="text-neutral-500">/</span>
        <span className="text-cyan-100">{item.company}</span>
      </h3>
      <div className="mt-3 grid gap-2 text-[15px] leading-6 text-neutral-400">
        <p className="inline-flex items-center gap-2">
          <IconMapPin className="h-4 w-4 text-cyan-200" />
          {item.location}
        </p>
      </div>
      <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">{item.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.projects.map((project, projectIndex) => (
          <motion.button
            key={`${item.phase}-${project.name}`}
            type="button"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.42, delay: projectIndex * 0.24, ease: "easeOut" }}
            onClick={() => openProjectFromTimeline(project.target ?? project.name)}
            className="group inline-flex items-center gap-1 rounded border border-white/10 bg-black/20 px-3 py-2 text-xs text-neutral-300 transition hover:border-cyan-300/40 hover:text-cyan-100 sm:px-3.5 sm:py-2.5 sm:text-sm"
            title={project.text}
          >
            {project.name}
            <IconArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.skills.slice(0, 5).map((skill, skillIndex) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.4,
              delay: item.projects.length * 0.24 + skillIndex * 0.18,
              ease: "easeOut",
            }}
            className="rounded bg-white/[0.04] px-3 py-1.5 text-[13px] text-neutral-400"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.article>
  );
}

function openProjectFromTimeline(projectName: string) {
  window.dispatchEvent(new CustomEvent("portfolio-project-select", { detail: { projectName } }));
}
