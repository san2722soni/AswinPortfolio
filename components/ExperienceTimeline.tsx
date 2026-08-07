"use client";

import { useRef, useState } from "react";
import { IconArrowUpRight, IconBriefcase, IconMapPin } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { TypingHeading } from "@/components/TypingHeading";

type Experience = {
  phase: string;
  tab: string;
  year: string;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  summary: string;
  bullets: string[];
  projects: { name: string; target?: string; text: string; action?: "contact" }[];
  skills: string[];
};

const experiences: Experience[] = [
  {
    phase: "01. Frontend Foundations",
    tab: "Early Clients",
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Early client projects",
    type: "Client work",
    period: "2023 - May 2024",
    duration: "early client phase",
    location: "Remote",
    summary: "Real client websites across education, creator portfolios, and storefront-style experiences.",
    bullets: [
      "Delivered responsive static/client websites from real briefs.",
      "Built portfolio, education, and storefront-style layouts.",
      "Learned client-ready structure, content hierarchy, and polish.",
    ],
    projects: [
      { name: "The Intellect", text: "Coaching/education website with institutional content and responsive flow." },
      { name: "Ayush Prakash Portfolio", text: "Cinematographer portfolio with media/project presentation and contact flow." },
      { name: "RealViewGarden E-Commerce", text: "Online nursery/storefront with product browsing direction." },
    ],
    skills: ["HTML/CSS", "Vanilla JS", "Tailwind CDN", "Static assets"],
  },
  {
    phase: "02. Frontend Internship",
    tab: "Dragstr",
    year: "2024",
    role: "Frontend Developer Intern",
    company: "Dragstr Marketing",
    type: "Internship",
    period: "May 2024 - Aug 2024",
    duration: "4 months",
    location: "Kalyan, Maharashtra - Remote",
    summary: "Structured agency work across responsive pages, interactive sections, blogs, and client updates.",
    bullets: [
      "Maintained agency/client pages, blogs, and responsive sections.",
      "Moved into React and Next.js motion-heavy landing pages.",
      "Worked with EmailJS, AOS, TypeScript, and frontend delivery routines.",
    ],
    projects: [
      { name: "Dragstr", text: "Digital marketing agency website with services and content updates." },
      { name: "Prestine Nature", text: "Organic product landing page with small-business branding and motion polish." },
    ],
    skills: ["HTML/CSS", "EmailJS", "Next.js", "TypeScript", "AOS/Framer Motion"],
  },
  {
    phase: "03. Frontend Client Delivery",
    tab: "Psych Learn",
    year: "2024",
    role: "Frontend Developer",
    company: "Psych Learn",
    type: "Client work",
    period: "Short delivery",
    duration: "client project",
    location: "Remote",
    summary: "Ed-tech client platform focused on course/material structure and readable responsive UI.",
    bullets: [
      "Delivered a course/content platform UI for a client education workflow.",
      "Focused on enrollment CTAs, readable content sections, and clean navigation.",
      "Built a polished frontend surface with Next.js, TypeScript, Tailwind, and shadcn-style UI.",
    ],
    projects: [{ name: "Psych Learn", text: "Psychology ed-tech landing platform." }],
    skills: ["Next.js", "TypeScript", "Tailwind", "shadcn UI", "Course pages"],
  },
  {
    phase: "04. Full-Stack Product Engineering",
    tab: "Xenvolt AI",
    year: "2024 - 2025",
    role: "Full-Stack Product Developer & DevOps",
    company: "Xenvolt AI",
    type: "Full-time",
    period: "Aug 2024 - Nov 2025",
    duration: "1 yr 4 mos",
    location: "Kalyan, Maharashtra - Remote",
    summary: "Company products: dashboards, backend-connected flows, internal tools, website/admin systems, and deployments.",
    bullets: [
      "Built company website/admin tooling, industrial dashboards, and internal product flows.",
      "Connected frontend screens to APIs, data models, reports, alarms, analytics, and demo-safe flows.",
      "Supported deployment/debugging work around PM2, Nginx, and production-style delivery.",
    ],
    projects: [
      { name: "XENVOLT Site", text: "Company website with products, blogs, leads, and deployment workflow." },
      { name: "XENVOLT Admin", text: "Internal CMS/admin dashboard for blogs, leads, images, and updates." },
      { name: "SAMVIT / SCADA Platform", text: "Solar PV monitoring dashboards with alarms, reports, and analytics." },
      { name: "CHAKRA OEE", text: "Manufacturing/OEE POC." },
      { name: "SAMVIT Pro / Xenvolt EPC Track", text: "Solar EPC tracking product with tickets, alerts, maps, and metrics." },
      { name: "Randomizer / BA Test", text: "Airport testing/random-selection workflow with CSV, roles, reports, and MongoDB." },
    ],
    skills: ["Next.js", "TypeScript", "PostgreSQL/Prisma", "MongoDB/Mongoose", "PM2/Nginx"],
  },
  {
    phase: "05. Systems & DevOps Engineering",
    tab: "Vineet Oli",
    year: "2025 - Now",
    role: "Software Engineering - Systems & DevOps",
    company: "With Vineet Oli",
    type: "Senior guidance",
    period: "Nov 2025 - Present",
    duration: "approx 10 months",
    location: "Remote",
    summary: "Guided job work on developer tools, multiplayer/server systems, Linux operations, and debugging.",
    bullets: [
      "Worked on multiplayer/backend systems and developer tooling under senior guidance.",
      "Built dashboard/backend pieces, run paths, repo flows, and debugging workflows.",
      "Practiced terminal-first work across Redis, MongoDB, Electron, C++ direction, Linux, Cloudflare, and AWS paths.",
    ],
    projects: [
      { name: "V-Server", target: "V-Dashboard + V-Server", text: "Backend multiplayer/game operations services." },
      { name: "V-Dashboard", target: "V-Dashboard + V-Server", text: "Next.js admin control plane for game sessions and workflows." },
      { name: "Version Control Manager", text: "GitHub-like Electron/Next/Node developer tool." },
      { name: "AnarchyV2", text: "Large real-time multiplayer stack with C++ engine direction and runbooks." },
    ],
    skills: ["Fastify/Node.js", "Redis", "MongoDB", "Electron", "C++/FlatBuffers", "Cloudflare/AWS"],
  },
  {
    phase: "06. AI Product Engineering",
    tab: "Auryvedic",
    year: "Recent",
    role: "Full-Stack AI Product Developer",
    company: "Auryvedic",
    type: "Client work",
    period: "Recent",
    duration: "2-3 weeks",
    location: "Remote",
    summary: "Fast client AI platform with WhatsApp automation, appointments, knowledge engine, and admin dashboard.",
    bullets: [
      "Built a split Fastify/Next client platform for clinic operations.",
      "Connected MongoDB workflows with OpenAI and WhatsApp-assisted product paths.",
      "Delivered a demo-ready AI product surface in a short client window.",
    ],
    projects: [{ name: "Auryvedic", text: "Clinic AI assistant platform." }],
    skills: ["Fastify", "TypeScript", "MongoDB", "OpenAI SDK", "WhatsApp API", "TanStack Query"],
  },
  {
    phase: "07. Current Focus",
    tab: "Learning / Open",
    year: "Now",
    role: "Full-Stack / Backend Developer",
    company: "Open to work",
    type: "Learning + availability",
    period: "Right now",
    duration: "ongoing",
    location: "India - remote-friendly",
    summary: "Preparing for full-stack/backend roles while staying available for product builds and freelance delivery.",
    bullets: [
      "Learning advanced C++, DSA/LeetCode, backend networking, system design, and deeper JavaScript.",
      "Available for full-time roles and freelance builds across dashboards, APIs, websites, automation, and AI product workflows.",
      "Best fit: teams that value product ownership, terminal-first debugging, and practical full-stack delivery.",
    ],
    projects: [{ name: "Start a conversation", text: "Jump to contact section.", action: "contact" }],
    skills: ["Advanced C++", "DSA", "System design", "Backend networking", "Advanced JavaScript"],
  },
];

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = experiences[activeIndex];

  const selectExperience = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto w-[88vw] max-w-[1100px]">
        <div className="mb-8 md:mb-10" data-aos="fade-up">
          <p className="hero-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 md:text-sm">
            Experience Timeline
          </p>
          <TypingHeading
            text="Work progression, not project dumping."
            className="hero-display mt-3 text-2xl font-bold leading-tight text-white md:text-4xl"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
          <div
            role="tablist"
            aria-label="Experience history"
            className="flex scroll-px-4 overflow-x-auto border-b border-[#233554] lg:block lg:overflow-visible lg:border-b-0 lg:border-l"
          >
            {experiences.map((item, index) => {
              const selected = activeIndex === index;

              return (
                <button
                  key={item.phase}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectExperience(index)}
                  className={cn(
                    "group min-w-[178px] border-b-2 px-3 py-3 text-left transition sm:min-w-[200px] lg:min-w-0 lg:w-full lg:border-b-0 lg:border-l-2 lg:px-4",
                    selected
                      ? "border-cyan-300 bg-cyan-300/[0.06]"
                      : "border-transparent hover:bg-white/[0.035]",
                  )}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className={cn("hero-mono text-[11px] font-semibold md:text-xs", selected ? "text-cyan-200" : "text-[#8892b0]")}>
                      {String(index + 1).padStart(2, "0")}. {item.tab}
                    </span>
                    <span className="hero-mono text-[10px] text-[#8892b0] md:text-[11px]">{item.year}</span>
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-[#ccd6f6] md:text-sm">{item.role.split(" ").slice(0, 3).join(" ")}</span>
                </button>
              );
            })}
          </div>

          <article className="min-h-[380px] md:min-h-[430px]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="hero-mono text-xs font-bold text-[#ccd6f6] md:text-sm">{active.phase}</span>
                <span className="rounded border border-cyan-300/35 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-100">
                  {active.type}
                </span>
              </div>
              <span className="hero-mono text-xs leading-5 text-[#8892b0] md:text-sm md:leading-6">
                {active.period} / {active.duration}
              </span>
            </div>

            <h3 className="mt-6 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xl font-bold leading-7 text-[#ccd6f6] md:mt-8 md:text-2xl md:leading-8">
              <IconBriefcase className="h-4 w-4 shrink-0 text-cyan-300 md:h-5 md:w-5" />
              <span>{active.role}</span>
              <span className="text-[#8892b0]">/</span>
              <span className="text-cyan-300">{active.company}</span>
            </h3>

            <p className="mt-4 inline-flex items-center gap-2 text-xs leading-5 text-[#8892b0] md:mt-5 md:text-sm md:leading-6">
              <IconMapPin className="h-4 w-4 text-cyan-300" />
              {active.location}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#a8b2d1] md:mt-5 md:text-base md:leading-8">{active.summary}</p>

            <ul className="mt-5 grid gap-3 md:mt-7 md:gap-4">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="grid grid-cols-[16px_1fr] gap-2 text-sm leading-6 text-[#a8b2d1] md:grid-cols-[18px_1fr] md:gap-3 md:text-base md:leading-7">
                  <span className="mt-2 h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-cyan-300 md:border-y-[5px] md:border-l-[7px]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
              {active.projects.map((project) => (
                <button
                  key={`${active.phase}-${project.name}`}
                  type="button"
                  onClick={() => {
                    if (project.action === "contact") {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      return;
                    }
                    openProjectFromTimeline(project.target ?? project.name);
                  }}
                  className="group inline-flex items-center gap-1 rounded border border-[#233554] bg-[#112240]/70 px-3 py-2 text-xs font-semibold text-[#ccd6f6] transition hover:border-cyan-300/50 hover:text-cyan-200 md:px-4 md:py-3 md:text-sm"
                  title={project.text}
                >
                  {project.name}
                  <IconArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              {active.skills.map((skill) => (
                <span key={skill} className="hero-mono rounded bg-white/[0.045] px-2.5 py-1.5 text-[11px] text-[#8892b0] md:px-3 md:py-2 md:text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function openProjectFromTimeline(projectName: string) {
  window.dispatchEvent(new CustomEvent("portfolio-project-select", { detail: { projectName } }));
}
