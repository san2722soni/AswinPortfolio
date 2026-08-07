"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { animate } from "animejs";
import AOS from "aos";
import { AnimatePresence, motion } from "motion/react";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBriefcase,
  IconLayoutGrid,
  IconListDetails,
  IconList,
  IconMovie,
  IconPlayerPlay,
  IconTerminal2,
  IconUserCode,
  IconUsers,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TypingHeading } from "@/components/TypingHeading";
import { FocusCards } from "@/components/ui/focus-cards";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

type Filter = "All" | "Job Work" | "Senior Guided" | "Client Work" | "Personal";
type TagFilter = Filter | "Frontend" | "Full-Stack" | "Systems/DevOps" | "Dashboard";

type Project = {
  title: string;
  eyebrow: string;
  category: Exclude<Filter, "All">;
  workType: string;
  duration?: string;
  context: string;
  summary: string;
  about: string;
  myRole: string;
  outcome: string;
  stack: string[];
  features: string[];
  proof: string[];
  video?: string;
  videoId?: string;
  repo?: string;
  extraLinks?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "AnarchyV2",
    eyebrow: "Real-Time Multiplayer Game Server",
    category: "Senior Guided",
    workType: "Senior engineer guided job work",
    duration: "2-3 months",
    context:
      "Worked with Vineet Oli on a real-time multiplayer game/server system where one server coordinates many running boards/players.",
    summary:
      "A multiplayer game platform built around engine/runtime thinking, backend services, load testing, and operational scripts.",
    about:
      "AnarchyV2 was a large game/server engineering project inspired by a multi-board chess-like workload. The core idea was to coordinate many players and game boards through one backend/runtime system.",
    myRole:
      "I coded and debugged implementation pieces while Vineet Oli guided architecture, review, and engineering direction. This was one of my strongest learning-heavy job-work projects.",
    outcome:
      "Best proof of systems thinking, terminal-first debugging, multiplayer backend implementation, and load-test-aware engineering under senior guidance.",
    stack: ["C++", "Next.js", "Node/Fastify", "MongoDB", "Redis", "Linux", "PM2", "Nginx", "ELK"],
    features: ["Game client/server flow", "Engine/runtime structure", "Load-test direction", "Deployment and monitoring scripts"],
    proof: ["Systems engineering", "Multiplayer backend thinking", "Linux/terminal workflow", "Performance/debugging mindset"],
    video: "https://youtu.be/ag_KtDZrXwI",
    videoId: "ag_KtDZrXwI",
    repo: "https://github.com/san2722soni/AnarchyV2",
    extraLinks: [{ label: "Screen walkthrough", href: "https://youtu.be/Sn7XAAzTvuM" }],
  },
  {
    title: "Version Control Manager",
    eyebrow: "GitHub-Like Desktop Tool",
    category: "Senior Guided",
    workType: "Senior engineer guided job work",
    duration: "3 months",
    context:
      "Worked after V-Dashboard/V-Server with Vineet Oli guiding architecture while I coded implementation.",
    summary:
      "A GitHub-like version-control manager built with Electron, Next.js, Node.js, ELK, and Linux deployment workflows.",
    about:
      "VCM is a developer tooling product for repository, branch, and workflow management. It was built as a desktop-style Git/version-control tool with frontend screens, backend APIs, auth, and deployment/observability thinking.",
    myRole:
      "I worked on the implementation, frontend/backend flow, local run path, and project preparation while receiving senior guidance on architecture and product direction.",
    outcome:
      "Strong match for Git, terminal, debugging, CLI, and developer-tooling roles.",
    stack: ["Electron", "Next.js", "Node.js", "Git", "MongoDB", "Redis", "ELK", "Linux"],
    features: ["Repository workflow UI", "Branch/developer screens", "Backend auth/API flow", "Desktop-style developer product"],
    proof: ["Git workflow understanding", "Developer tooling", "Full-stack integration", "Linux/ELK deployment exposure"],
    video: "https://youtu.be/V_F9goWYqc4",
    videoId: "V_F9goWYqc4",
    repo: "https://github.com/san2722soni/Version-Control-Manager",
  },
  {
    title: "Auryvedic",
    eyebrow: "Clinic Management Dashboard",
    category: "Client Work",
    workType: "Client work",
    duration: "2-3 weeks",
    context: "Client project for an Ayurveda/clinic-style product.",
    summary:
      "Clinic dashboard with appointments, users, conversations, knowledge/AI-assisted flows, and admin-style management views.",
    about:
      "Auryvedic is a client-facing healthcare-style platform for clinic workflows. It brings operational screens like dashboard metrics, appointments, users, conversations, and knowledge workflows into one admin product.",
    myRole:
      "I built the client-facing product screens and full-stack workflow needed for the demo.",
    outcome:
      "Shows fast client delivery, dashboard UX, appointment workflows, and full-stack product thinking.",
    stack: ["Fastify", "TypeScript", "MongoDB", "OpenAI SDK", "WhatsApp API", "Next.js", "TanStack Query"],
    features: ["Clinic dashboard", "Appointment screens", "User management", "Conversations and knowledge flows"],
    proof: ["Client delivery", "Healthcare-style UX", "Full-stack dashboard", "Fast product execution"],
    video: "https://youtu.be/IFI0Qrgk0E4",
    videoId: "IFI0Qrgk0E4",
    repo: "https://github.com/san2722soni/Auyrveda",
  },
  {
    title: "XENVOLT Site",
    eyebrow: "16-Page Industrial AI Website",
    category: "Job Work",
    workType: "Job work at XENVOLT",
    duration: "Built in 1 month, maintained during employment",
    context:
      "Built and maintained the XENVOLT company website: pages, updates, content tweaks, Vercel/devops and CI/CD-style workflow.",
    summary:
      "Industrial AI company website with product pages, AI solutions, case studies, blogs, careers, clients, and company content.",
    about:
      "XENVOLT Site is the company website I worked on during my XENVOLT role. It presents company positioning, products, AI solutions, case studies, blogs, careers, and client-facing pages across a multi-page Next.js app.",
    myRole:
      "I built the website, maintained updates, handled content tweaks, fixed UI/dev issues, and supported deployment workflow.",
    outcome:
      "Shows professional client/company website work, responsive UI, content-heavy pages, and real maintenance responsibility.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Email workflows", "Cloudinary", "Recharts"],
    features: ["16-page company website", "Case studies and blogs", "Careers and clients pages", "Maintenance and deployment workflow"],
    proof: ["Business website delivery", "UI polish", "Content-heavy Next.js app", "Devops/deployment support"],
    video: "https://youtu.be/GJjCe7zWu9Q",
    videoId: "GJjCe7zWu9Q",
    repo: "https://github.com/san2722soni/XENVOLT-Site",
  },
  {
    title: "XENVOLT Admin",
    eyebrow: "Website CMS Dashboard",
    category: "Job Work",
    workType: "Job work at XENVOLT",
    context:
      "Internal dashboard built so data/content users could update blogs and website content without sending files to a developer.",
    summary:
      "Admin CMS with forms, markdown-editor style content entry, blog/content management, and internal website update workflows.",
    about:
      "XENVOLT Admin was built to make the website maintainable by non-developer users. Instead of sending Word files for each blog/content update, the internal team could manage content through dashboard forms and editor flows.",
    myRole:
      "I built the admin product, content editing flow, and dashboard UX for internal website/content operations.",
    outcome:
      "Shows product thinking beyond frontend: solving an internal workflow with admin tooling.",
    stack: ["Next.js", "TypeScript", "Clerk", "Prisma", "PostgreSQL", "Rich text CMS", "Cloudinary"],
    features: ["Blog/content editor", "Admin dashboard", "Lead/content management", "Website update workflow"],
    proof: ["Internal tooling", "CMS product thinking", "Admin UX", "Business process improvement"],
    video: "https://youtu.be/u7WYNmXhg_Q",
    videoId: "u7WYNmXhg_Q",
    repo: "https://github.com/san2722soni/XENVOLT-Admin",
  },
  {
    title: "SAMVIT / SCADA Platform",
    eyebrow: "Solar Monitoring Product",
    category: "Job Work",
    workType: "Job work at XENVOLT",
    duration: "1 month",
    context: "Product built while working at XENVOLT as a full-stack developer.",
    summary:
      "SCADA-style solar monitoring platform with plant dashboards, energy analytics, alarms, reports, and notifications.",
    about:
      "SAMVIT is a solar monitoring product for plant operations. It turns energy production, alarms, reports, and site health into dashboards that operators can scan quickly.",
    myRole:
      "I built and connected full-stack product screens, dashboard flows, data views, and demo-ready functionality.",
    outcome:
      "Best proof of industrial dashboard thinking, data-heavy UX, and real-world monitoring software.",
    stack: ["Next.js", "Node/Express", "MongoDB", "Charts", "Reports", "SCADA", "Predictive analysis"],
    features: ["Plant overview dashboard", "Energy analytics", "Alarms and reports", "Notification workflows"],
    proof: ["Industrial domain UX", "Chart-heavy dashboard work", "Backend-driven pages", "Monitoring/debugging mindset"],
    video: "https://youtu.be/xJVRv9B4Hmk",
    videoId: "xJVRv9B4Hmk",
    repo: "https://github.com/san2722soni/SAMVIT",
    extraLinks: [{ label: "Notification workflow", href: "https://youtu.be/XdtZ9UeJzdM" }],
  },
  {
    title: "SAMVIT Pro / Xenvolt EPC Track",
    eyebrow: "Solar EPC Dashboard",
    category: "Job Work",
    workType: "Job work at XENVOLT",
    duration: "1 month",
    context:
      "Separate new product after SAMVIT, not just an improvement of the previous product.",
    summary:
      "Solar EPC tracking dashboard with plant status, production analytics, maintenance, alerts, weather, and performance views.",
    about:
      "SAMVIT Pro / Xenvolt EPC Track is a separate solar EPC product focused on tracking plant performance, maintenance, alerts, weather, and production across dashboard screens.",
    myRole:
      "I built and prepared the dashboard experience, data screens, mock/demo data flow, and recording-ready UI.",
    outcome:
      "Shows dashboard-heavy frontend engineering, EPC domain understanding, and data presentation.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Dashboard APIs", "Mock Data"],
    features: ["Production analytics", "Maintenance views", "Alert screens", "Weather/performance pages"],
    proof: ["Solar EPC domain", "Chart-heavy UI", "Dashboard architecture", "Frontend data handling"],
    video: "https://youtu.be/FMMf0_Tfu9Y",
    videoId: "FMMf0_Tfu9Y",
    repo: "https://github.com/san2722soni/Xenvolt-EPC-Track",
  },
  {
    title: "V-Dashboard + V-Server",
    eyebrow: "Multiplayer Game Ops Stack",
    category: "Senior Guided",
    workType: "Senior engineer guided job work",
    duration: "4-5 months",
    context:
      "Frontend dashboard plus backend server stack built with Vineet Oli after XENVOLT.",
    summary:
      "Control dashboard and backend service layer for multiplayer game builds, sessions, developers, backend docs, and runtime operations.",
    about:
      "V-Dashboard is the game operations dashboard and V-Server is the backend behind it. Together they form a multiplayer game control stack built from scratch for builds, sessions, developer operations, auth, APIs, and runtime management.",
    myRole:
      "I built dashboard/product screens, worked on backend implementation, connected run flow, seed/demo setup, and integration between frontend and backend.",
    outcome:
      "Shows admin dashboard UX, backend services, MongoDB/Redis ecosystem, and internal tooling.",
    stack: ["Next.js", "Fastify", "MongoDB", "Redis", "JWT", "AWS EC2", "Admin APIs"],
    features: ["Build/session management", "Developer/admin panels", "Backend API docs", "V-Server integration"],
    proof: ["Full-stack control plane", "Backend services", "Admin workflows", "MongoDB/Redis usage"],
    video: "https://youtu.be/bHUvejhSDjo",
    videoId: "bHUvejhSDjo",
    repo: "https://github.com/san2722soni/V-Dashboard",
    extraLinks: [{ label: "V-Server repo", href: "https://github.com/san2722soni/V-Server" }],
  },
  {
    title: "Psych Learn",
    eyebrow: "Online EdTech Platform",
    category: "Client Work",
    workType: "Client work",
    context:
      "Online ed-tech platform for a woman educator to sell courses/materials with illustration-heavy UI.",
    summary:
      "Educational platform UI for psychology content, course/material presentation, clean navigation, and student-friendly screens.",
    about:
      "Psych Learn is a client project for presenting and selling educational psychology courses/materials online. The design uses clean course sections and illustration-led presentation.",
    myRole:
      "I built the client platform UI and course/material presentation flow.",
    outcome:
      "Shows client delivery, educational product UI, and clean content navigation.",
    stack: ["Next.js", "React", "Tailwind", "Educational UI", "Illustration-Led Design"],
    features: ["Course presentation", "Material/content screens", "Student-friendly navigation", "Responsive landing flow"],
    proof: ["Client work", "EdTech UI", "Content structure", "Frontend polish"],
    video: "https://youtu.be/eWCmQCCtYII",
    videoId: "eWCmQCCtYII",
    repo: "https://github.com/san2722soni/pysch-learning",
  },
  {
    title: "Directors Chair",
    eyebrow: "Cinematographer Workflow Tool",
    category: "Personal",
    workType: "Personal project + client/friend use case",
    context:
      "Built from a real use case for professional cinematographer Ayush Prakash, not from a tutorial.",
    summary:
      "Media-production workflow interface inspired by clapperboard/director-style recording and shoot management.",
    about:
      "Directors Chair came from a practical cinematography workflow idea. It explores a product experience for recording/shoot-management style tasks where there was no ready tutorial path to copy.",
    myRole:
      "I built the product concept and implementation out of curiosity and a real practical need.",
    outcome:
      "Shows original product thinking, creative workflow design, and frontend breadth beyond dashboards.",
    stack: ["Next.js", "React", "Tailwind", "Media Workflow UI", "Product UX"],
    features: ["Clapperboard-style screens", "Production workflow UI", "Creative interaction flow", "Cinematography use case"],
    proof: ["Original idea", "Personal engineering", "Workflow design", "Creative UX"],
    video: "https://youtu.be/CaNlNzLP8X4",
    videoId: "CaNlNzLP8X4",
    repo: "https://github.com/san2722soni/Director-s-Chair",
  },
  {
    title: "Randomizer / BA Test",
    eyebrow: "Airport Staff Testing System",
    category: "Job Work",
    workType: "Job work at XENVOLT",
    duration: "2 months",
    context: "Product built at XENVOLT for airport/staff testing workflows.",
    summary:
      "Role-based staff testing workflow with CSV upload, random selection, doctor result entry, station manager views, and reports.",
    about:
      "Randomizer BA Test is an airport staff testing platform. Admins upload staff data, station managers run random selections, doctors record test results, and reports summarize testing history.",
    myRole:
      "I built/debugged the frontend and backend run path, generated demo data/CSV, prepared role flows, and made the product recording-ready.",
    outcome:
      "Shows real business process automation, role-based UX, CSV/data handling, and reporting dashboards.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "CSV", "JWT", "Reports"],
    features: ["CSV staff import", "Random test selection", "Doctor result workflow", "Admin/station manager reports"],
    proof: ["Role-based app flow", "CSV/data handling", "Business reporting", "MongoDB-backed workflow"],
    video: "https://youtu.be/y4-FRud6dlo",
    videoId: "y4-FRud6dlo",
    repo: "https://github.com/san2722soni/Randomizer-BA-Test",
  },
  {
    title: "CHAKRA OEE",
    eyebrow: "Manufacturing Dashboard POC",
    category: "Job Work",
    workType: "Job work at XENVOLT",
    context: "Proof-of-concept dashboard built at XENVOLT for a client pitch.",
    summary:
      "OEE/manufacturing dashboard with digital twin, maintenance, predictive insights, equipment, and production screens.",
    about:
      "CHAKRA OEE was a proof-of-concept project used to pitch a manufacturing/OEE dashboard idea. It focuses on operational dashboards, predictive screens, digital twin, and maintenance views.",
    myRole:
      "I worked on the POC dashboard and product UI used to communicate the client pitch idea.",
    outcome:
      "Shows industrial software UI, data-heavy product screens, and POC delivery under company work.",
    stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/Radix", "OEE Dashboard"],
    features: ["OEE dashboard", "Digital twin screen", "Predictive insights", "Maintenance/equipment views"],
    proof: ["Industrial software UI", "Dashboard architecture", "Manufacturing domain", "POC delivery"],
    video: "https://youtu.be/mDH5zXn7inI",
    videoId: "mDH5zXn7inI",
    repo: "https://github.com/san2722soni/CHAKRA-OEE",
  },
  {
    title: "Grid Prototype",
    eyebrow: "Compact Multi-Graph UI",
    category: "Personal",
    workType: "Job work + personal/creative exploration",
    context:
      "Creative compact dashboard UI for showing graphs, dates, dependencies, and dense information cleanly.",
    summary:
      "Interaction-heavy prototype for presenting multiple graph/data dependencies in a compact professional interface.",
    about:
      "Grid Prototype is a UI/UX experiment for compressing many graphs, dates, dependencies, and supporting information into a clean dashboard presentation. It was built creatively with help from Vercel v0.",
    myRole:
      "I designed and built the prototype to explore a compact dashboard presentation pattern.",
    outcome:
      "Shows frontend creativity, information-density thinking, and dashboard prototyping.",
    stack: ["React", "Vercel v0", "Dashboard UI", "Charts", "Prototype", "Animation"],
    features: ["Multi-graph layout", "Date/dependency presentation", "Compact UI pattern", "Motion/polish"],
    proof: ["Interaction design", "Information architecture", "Frontend polish", "Creative prototyping"],
    video: "https://youtu.be/2ZT8AiIlpc0",
    videoId: "2ZT8AiIlpc0",
  },
  {
    title: "Dragstr",
    eyebrow: "Digital Marketing Website",
    category: "Client Work",
    workType: "Client work",
    context: "Website built for a digital marketing company.",
    summary:
      "Creative marketing website with brand positioning, service presentation, interactive sections, and responsive layout.",
    about:
      "Dragstr is a client website for a digital marketing company. It focuses on creative service presentation, brand sections, and conversion-oriented layout.",
    myRole:
      "I built the frontend website and creative interaction/presentation style.",
    outcome:
      "Shows client frontend delivery and creative landing-page design.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI", "Marketing Website"],
    features: ["Service sections", "Interactive presentation", "Responsive layout", "Brand/content flow"],
    proof: ["Client delivery", "Creative frontend", "Marketing UI", "Responsive fundamentals"],
    video: "https://youtu.be/ZcdwwsQfSZA",
    videoId: "ZcdwwsQfSZA",
    repo: "https://github.com/san2722soni/Dragstr",
  },
  {
    title: "Prestine Nature",
    eyebrow: "Organic Product Landing Page",
    category: "Client Work",
    workType: "Client work",
    context:
      "Small-business landing page for an organic farm/product brand.",
    summary:
      "Polished organic product landing page with responsive sections, product/story presentation, motion, and conversion-focused layout.",
    about:
      "Prestine Nature is an organic farm/product landing page built as a polished small-business web presence. It focuses on product positioning, clean visuals, responsive sections, and simple conversion flow.",
    myRole:
      "I built the frontend layout, responsive UI, and presentation flow for the product/brand website.",
    outcome:
      "Shows client landing-page delivery, brand presentation, responsive UI, and frontend polish.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Lucide", "AOS", "Framer Motion"],
    features: ["Product landing page", "Brand/story sections", "Responsive layout", "Motion polish"],
    proof: ["Client delivery", "Small-business UI", "Frontend polish", "Responsive design"],
  },
  {
    title: "Eduford",
    eyebrow: "Education Website",
    category: "Client Work",
    workType: "Client work",
    context: "Education website project built for a client.",
    summary:
      "Education landing website focused on school/institute sections, content layout, contact presentation, and responsiveness.",
    about:
      "Eduford is an education website project from my earlier frontend phase. It is useful as a clean archive of responsive page-building fundamentals.",
    myRole:
      "I built the education website frontend and responsive page sections.",
    outcome:
      "Shows client-facing static frontend fundamentals.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    features: ["Education landing pages", "Responsive sections", "Contact/content layout", "Static frontend structure"],
    proof: ["Frontend fundamentals", "Responsive design", "Client work", "Page composition"],
    video: "https://youtu.be/N8Q_hrBwZ6I",
    videoId: "N8Q_hrBwZ6I",
    repo: "https://github.com/san2722soni/Eduford",
  },
  {
    title: "RealViewGarden E-Commerce",
    eyebrow: "Nursery Storefront + Dashboard",
    category: "Client Work",
    workType: "Client work",
    context:
      "Online nursery/storefront project with management-focused dashboard direction.",
    summary:
      "E-commerce storefront for a nursery business with product browsing and owner-management workflow direction.",
    about:
      "This e-commerce project was built to represent a nursery business online. It includes storefront/product browsing and a dashboard/admin direction so the owner can manage the business end to end.",
    myRole:
      "I built the online storefront and management-focused flow for the client use case.",
    outcome:
      "Shows ecommerce UI, storefront patterns, and business management thinking.",
    stack: ["React", "Frontend", "E-Commerce", "Product UI", "Dashboard Workflow"],
    features: ["Product browsing", "Storefront sections", "Customer-facing pages", "Admin/dashboard direction"],
    proof: ["Ecommerce patterns", "Client delivery", "Frontend layout", "Business workflow thinking"],
    video: "https://youtu.be/2vWkRkh1WXE",
    videoId: "2vWkRkh1WXE",
    repo: "https://github.com/san2722soni/RealViewGarden-store",
  },
  {
    title: "The Intellect",
    eyebrow: "Coaching Website",
    category: "Client Work",
    workType: "Client work",
    context: "Coaching/education website frontend built for a client.",
    summary:
      "Coaching/education website with institutional content, responsive layout, content hierarchy, and page sections.",
    about:
      "The Intellect is a client work coaching/education website frontend. It presents institutional content through responsive sections and clean visual hierarchy.",
    myRole:
      "I built the website frontend and responsive content presentation.",
    outcome:
      "Shows early client frontend polish and responsive content work.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Frontend"],
    features: ["Education content pages", "Responsive sections", "Visual hierarchy", "Static frontend flow"],
    proof: ["Frontend fundamentals", "Client work", "Content layout", "Responsive UI"],
    video: "https://youtu.be/VfKphuHxXYE",
    videoId: "VfKphuHxXYE",
    repo: "https://github.com/san2722soni/The-Intellect",
  },
  {
    title: "Ayush Prakash Portfolio",
    eyebrow: "Cinematographer Portfolio",
    category: "Client Work",
    workType: "Client/friend work",
    context:
      "Portfolio website for professional cinematographer Ayush Prakash.",
    summary:
      "Personal brand portfolio with project/media presentation, responsive sections, and contact flow.",
    about:
      "Ayush Prakash Portfolio presents cinematography work, personal branding, project/media sections, and contact flow for a professional creator.",
    myRole:
      "I built the portfolio website and presentation flow for his cinematography profile.",
    outcome:
      "Shows client portfolio delivery and media-focused personal branding.",
    stack: ["React", "Next.js", "Tailwind/CSS", "Portfolio UI", "Responsive Branding"],
    features: ["Personal branding", "Media/project presentation", "Responsive sections", "Contact flow"],
    proof: ["Client/friend delivery", "Portfolio UI", "Responsive design", "Creator-focused layout"],
    video: "https://youtu.be/LqQaX7pDyZk",
    videoId: "LqQaX7pDyZk",
    repo: "https://github.com/san2722soni/AyushPrakash_Portfolio",
  },
  {
    title: "Halloween Calculator",
    eyebrow: "Vanilla JS Multi-Calculator",
    category: "Personal",
    workType: "Personal curiosity project",
    context:
      "Early frontend project built from curiosity, not from a tutorial.",
    summary:
      "Halloween-themed multi-utility calculator with advanced tabs, converters, keyboard support, spooky mode, clues, and easter eggs.",
    about:
      "Halloween Calculator is not just a basic calculator. It includes arithmetic, age, area, BMI, data, discount, length, mass, speed, temperature, currency conversion, keyboard support, Halloween mode, tutorial popup, clues, and hidden OTP/easter egg behavior.",
    myRole:
      "I built the themed UI and vanilla JavaScript logic myself as a curiosity-driven project.",
    outcome:
      "Shows DOM-heavy JavaScript, event handling, UI state switching, and playful engineering curiosity.",
    stack: ["HTML", "CSS", "Vanilla JavaScript", "DOM", "Converters", "Easter Eggs"],
    features: ["Normal calculator", "Advanced calculator tabs", "Multiple converters", "Halloween mode and hidden easter eggs"],
    proof: ["Vanilla JS fundamentals", "DOM/event handling", "Creative curiosity", "Early frontend progression"],
    video: "https://youtu.be/LjS2nbdrMf0",
    videoId: "LjS2nbdrMf0",
  },
];

const filters: TagFilter[] = [
  "All",
  "Job Work",
  "Client Work",
  "Senior Guided",
  "Personal",
  "Frontend",
  "Full-Stack",
  "Systems/DevOps",
  "Dashboard",
];

const searchPlaceholders = [
  "Search selected work",
  "Search backend systems",
  "Search VCM",
  "Search dashboards",
  "Search AI platform",
  "Search client work",
];

const projectOrder = [
  "AnarchyV2",
  "Version Control Manager",
  "SAMVIT / SCADA Platform",
  "XENVOLT Admin",
  "Auryvedic",
  "V-Dashboard + V-Server",
  "XENVOLT Site",
  "SAMVIT Pro / Xenvolt EPC Track",
  "CHAKRA OEE",
  "Randomizer / BA Test",
  "Grid Prototype",
  "Directors Chair",
  "Psych Learn",
  "Dragstr",
  "Prestine Nature",
  "The Intellect",
  "Ayush Prakash Portfolio",
  "RealViewGarden E-Commerce",
  "Eduford",
  "Halloween Calculator",
];

const orderedProjects = [...projects].sort(
  (a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title),
);

const initialProjectLimit = 6;

function getProjectCardAos(index: number) {
  if (index % 3 === 0) return "fade-right";
  if (index % 3 === 2) return "fade-left";
  return Math.floor(index / 3) % 2 === 0 ? "fade-down" : "fade-up";
}

const filterIcons: Record<TagFilter, typeof IconBriefcase> = {
  All: IconMovie,
  "Job Work": IconBriefcase,
  "Client Work": IconUsers,
  "Senior Guided": IconUserCode,
  Personal: IconTerminal2,
  Frontend: IconMovie,
  "Full-Stack": IconBriefcase,
  "Systems/DevOps": IconTerminal2,
  Dashboard: IconListDetails,
};

const viewOptions = [
  { value: "grid" as const, Icon: IconLayoutGrid },
  { value: "list" as const, Icon: IconList },
];

export function VideoProjects({ mode = "home" }: { mode?: "home" | "all" }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<TagFilter>("All");
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const filterSummaryRef = useRef<HTMLDivElement>(null);
  const layoutId = useId();
  const normalizedQuery = query.trim().toLowerCase();
  const visibleProjects = orderedProjects.filter((project) => {
    const filterMatch = matchesFilter(project, activeFilter);
    const searchBlob = [
      project.title,
      project.eyebrow,
      project.category,
      project.workType,
      project.context,
      project.summary,
      project.stack.join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return filterMatch && (!normalizedQuery || searchBlob.includes(normalizedQuery));
  });
  const displayProjects = mode === "all"
      ? visibleProjects
      : visibleProjects.slice(0, initialProjectLimit);
  const featuredProjects = orderedProjects.slice(0, 3);
  const getFilterCount = (filter: TagFilter) =>
    filter === "All"
      ? orderedProjects.length
      : orderedProjects.filter((project) => matchesFilter(project, filter)).length;

  useEffect(() => {
    if (!filterSummaryRef.current) return;
    animate(filterSummaryRef.current, {
      opacity: [0.45, 1],
      y: [8, 0],
      duration: 320,
      ease: "outQuad",
    });
  }, [activeFilter, query]);

  useEffect(() => {
    AOS.refreshHard();
  }, [activeFilter, query, viewMode]);

  useEffect(() => {
    const onProjectSelect = (event: Event) => {
      const projectName = (event as CustomEvent<{ projectName?: string }>).detail?.projectName;
      if (!projectName) return;
      const project = orderedProjects.find((item) => item.title === projectName);
      if (!project) return;

      setActiveFilter("All");
      setQuery(project.title);
      setSelectedProject(project);
      window.setTimeout(() => {
        document.getElementById("portfolio")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    };

    window.addEventListener("portfolio-project-select", onProjectSelect);
    return () => window.removeEventListener("portfolio-project-select", onProjectSelect);
  }, []);

  if (mode === "home") {
    return (
      <section className="relative overflow-visible py-24 md:py-32">
        <div className="mx-auto w-[88vw] max-w-[1100px]">
          <div className="mb-12" data-aos="fade-up">
            <p className="hero-mono text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Selected Work
            </p>
            <TypingHeading
              text="Case studies first, video proof inside."
              className="hero-display mt-4 text-3xl font-bold leading-tight text-white md:text-5xl"
            />
          </div>

          <div className="grid gap-20">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/projects"
              className="hero-mono inline-flex items-center gap-3 rounded border border-cyan-300 px-7 py-4 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/10"
            >
              View all projects
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <ProjectExpandableCard
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </section>
    );
  }

  return (
    <section className="relative overflow-visible py-20 md:py-28">
      <div className="mx-auto w-[92vw] max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              All Projects
            </p>
            <TypingHeading
              text="All case studies."
              className="hero-display mt-4 text-3xl font-bold leading-tight text-white md:text-5xl"
            />
            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
              Search, filter, and switch views across every project, stack, walkthrough, and public/private note.
            </p>
          </div>
          <div className="lg:ml-auto lg:w-full" data-aos="fade-down" data-aos-delay="420">
            <PlaceholdersAndVanishInput
              value={query}
              placeholders={searchPlaceholders}
              onChange={(value) => {
                setQuery(value);
              }}
              onSubmit={() => undefined}
              className="mx-0 border border-cyan-300/20 bg-neutral-950 text-white shadow-[0_0_24px_rgba(34,211,238,0.08)]"
            />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex rounded border border-white/10 bg-white/[0.035] p-1">
                {viewOptions.map(({ value, Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setViewMode(value)}
                    className={`inline-flex h-9 w-10 items-center justify-center rounded text-sm transition ${
                      viewMode === value
                        ? "bg-cyan-300 text-black"
                        : "text-neutral-400 hover:text-cyan-200"
                    }`}
                    aria-label={`Switch to ${value} view`}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedProject(null);
                  }}
                  className="rounded border border-white/10 px-4 py-2 text-sm font-semibold text-neutral-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 grid w-full grid-cols-4 gap-2 md:grid-cols-4 lg:grid-cols-8">
          {filters.map((filter, index) => {
            const Icon = filterIcons[filter];
            const active = activeFilter === filter;
            return (
              <motion.button
                key={filter}
                type="button"
                data-aos="fade-down"
                data-aos-delay={String(120 + index * 80)}
                onClick={() => {
                  setActiveFilter(filter);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex min-h-11 w-full items-center justify-center gap-0.5 rounded-md border px-1 py-2 text-[9px] font-semibold whitespace-nowrap transition min-[390px]:text-[10px] sm:gap-1 sm:text-xs lg:min-h-12 lg:gap-1.5 lg:px-2 ${
                  active
                    ? "border-cyan-300 bg-cyan-300/15 text-cyan-100"
                    : "border-white/10 bg-white/[0.035] text-neutral-300 hover:border-cyan-300/40 hover:text-white"
                }`}
              >
                <Icon className="hidden h-4 w-4 shrink-0 sm:block" />
                <span className="min-w-0 leading-tight">{filter}</span>
                <span className="hidden shrink-0 rounded bg-white/10 px-1.5 py-0.5 text-[11px] sm:inline-block">
                  {getFilterCount(filter)}
                </span>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <div
            ref={filterSummaryRef}
            className="w-fit rounded-md border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300 lg:ml-auto lg:text-right"
          >
            Showing <span className="font-semibold text-cyan-100">{displayProjects.length}</span>
            {" "}of <span className="font-semibold text-cyan-100">{visibleProjects.length}</span>{" "}
            projects in <span className="font-semibold text-white">{activeFilter}</span>
            {query && (
              <>
                {" "}for <span className="font-semibold text-white">{query}</span>
              </>
            )}
          </div>
        </div>

        {viewMode === "grid" ? (
          <AnimatePresence mode="popLayout">
            <FocusCards
              cards={displayProjects}
              getKey={(project) => project.title}
              className="mt-8 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
              getClassName={() => "h-full"}
              renderCard={(project, index, hovered) => (
                <ProjectFocusCard
                  project={project}
                  index={index}
                  activeFilter={activeFilter}
                  layoutId={layoutId}
                  onOpen={() => setSelectedProject(project)}
                />
              )}
            />
          </AnimatePresence>
        ) : (
          <div className="mt-8 overflow-x-auto">
            <div className="min-w-[1120px]">
              <div className="grid grid-cols-[70px_90px_1.35fr_1fr_1.65fr_150px] gap-6 border-b border-white/10 pb-4 text-sm font-bold text-neutral-400">
                <span>No.</span>
                <span>Year</span>
                <span>Title</span>
                <span>Made at</span>
                <span>Built with</span>
                <span>Links</span>
              </div>
              <div>
                {displayProjects.map((project, index) => (
                  <ArchiveProjectRow
                    key={project.title}
                    project={project}
                    index={index}
                    onOpen={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <ProjectExpandableCard
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const reversed = index % 2 === 1;

  return (
    <article className="grid gap-5 lg:grid-cols-12 lg:items-center lg:gap-0">
      <button
        type="button"
        onClick={onOpen}
        className={`group relative min-h-[240px] overflow-hidden rounded border border-white/10 bg-white/[0.035] text-left shadow-2xl shadow-black/20 sm:min-h-[320px] lg:row-start-1 lg:min-h-[390px] ${
          reversed ? "lg:col-start-6 lg:col-span-7" : "lg:col-start-1 lg:col-span-7"
        }`}
      >
        <ProjectVisual project={project} />
      </button>

      <div
        className={`relative z-10 lg:row-start-1 lg:col-span-6 ${
          reversed ? "lg:col-start-1 lg:text-left" : "lg:col-start-7 lg:text-right"
        }`}
      >
        <p className="hero-mono text-sm font-semibold text-cyan-300">Featured Project</p>
        <h3 className="mt-3 text-2xl font-bold text-[#ccd6f6] md:text-3xl">{project.title}</h3>
        <button
          type="button"
          onClick={onOpen}
          className="mt-6 w-full rounded bg-neutral-900/95 p-5 text-left shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-neutral-900 lg:p-6"
        >
          <p className="text-base leading-8 text-neutral-300">{project.summary}</p>
        </button>
        <div className={`mt-6 flex flex-wrap gap-4 ${reversed ? "lg:justify-start" : "lg:justify-end"}`}>
          {project.stack.slice(0, 6).map((tech) => (
            <span key={tech} className="hero-mono text-sm text-neutral-400">
              {tech}
            </span>
          ))}
        </div>
        <div className={`mt-6 flex gap-5 ${reversed ? "lg:justify-start" : "lg:justify-end"}`}>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-200 transition hover:text-cyan-300"
              aria-label={`${project.title} repository`}
            >
              <IconBrandGithub className="h-5 w-5" />
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-200 transition hover:text-cyan-300"
              aria-label={`${project.title} walkthrough`}
            >
              <IconArrowUpRight className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const image = project.videoId ? `https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg` : "";

  return (
    <div className="absolute inset-0">
      {image ? (
        <div
          className="h-full w-full bg-cover bg-center opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#112240] text-2xl font-bold text-[#ccd6f6]">
          {project.title}
        </div>
      )}
      <div className="absolute inset-0 bg-cyan-300/35 mix-blend-multiply transition group-hover:bg-transparent" />
      <div className="absolute inset-0 border border-cyan-300/15" />
    </div>
  );
}

function ArchiveProjectRow({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <div className="grid grid-cols-[70px_90px_1.35fr_1fr_1.65fr_150px] gap-6 border-b border-white/10 py-5 text-sm text-neutral-400 transition hover:bg-white/[0.035]">
      <span className="hero-mono text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
      <span className="hero-mono text-cyan-300">{getProjectYear(project)}</span>
      <button type="button" onClick={onOpen} className="text-left font-bold text-white transition hover:text-cyan-300">
        {project.title}
      </button>
      <span>{getProjectTypeLabel(project)}</span>
      <span className="hero-mono leading-6">{project.stack.slice(0, 7).join(" - ")}</span>
      <span className="flex items-center gap-4">
        <button type="button" onClick={onOpen} className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/10 text-neutral-200 transition hover:border-cyan-300/50 hover:text-cyan-300" aria-label={`${project.title} details`}>
          <IconListDetails className="h-5 w-5" />
        </button>
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/10 text-neutral-200 transition hover:border-cyan-300/50 hover:text-cyan-300" aria-label={`${project.title} repository`}>
            <IconBrandGithub className="h-5 w-5" />
          </a>
        )}
        {project.video && (
          <a href={project.video} target="_blank" rel="noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/10 text-neutral-200 transition hover:border-cyan-300/50 hover:text-cyan-300" aria-label={`${project.title} walkthrough`}>
            <IconArrowUpRight className="h-5 w-5" />
          </a>
        )}
      </span>
    </div>
  );
}

function ProjectFocusCard({
  project,
  index,
  activeFilter,
  layoutId,
  onOpen,
}: {
  project: Project;
  index: number;
  activeFilter: TagFilter;
  layoutId: string;
  onOpen: () => void;
}) {
  return (
    <motion.article
      id={`project-${slugify(project.title)}`}
      layoutId={`card-${project.title}-${layoutId}`}
      layout
      data-aos={activeFilter === "All" ? getProjectCardAos(index) : "fade-up"}
      data-aos-delay={String(180 + (index % 6) * 160)}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      whileHover={{ y: -2, zIndex: 80 }}
      onClick={onOpen}
      className="group/project relative flex h-full min-h-[300px] origin-center cursor-pointer flex-col rounded-none bg-neutral-950 p-4 transition-[transform,opacity,background-color] duration-300 hover:bg-white/[0.035]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge>{getProjectTypeLabel(project)}</Badge>
          <Badge>{project.eyebrow}</Badge>
          <Badge>{project.repo ? "Public code" : "Private/demo-safe"}</Badge>
        </div>
        <span className="hero-mono rounded border border-white/10 px-2 py-1 text-xs text-neutral-400">
          {String(orderedProjects.indexOf(project) + 1).padStart(2, "0")}
        </span>
      </div>
      <motion.h3
        layoutId={`title-${project.title}-${layoutId}`}
        className="mt-5 text-xl font-semibold leading-tight text-white"
      >
        {project.title}
      </motion.h3>
      <p className="mt-3 text-sm leading-6 text-neutral-300">{project.summary}</p>

      <div className="mt-4 grid gap-2 text-xs leading-5 text-neutral-400">
        <p><span className="text-cyan-200">Role:</span> {project.workType}</p>
        <p><span className="text-cyan-200">Proves:</span> {project.proof.slice(0, 2).join(", ")}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((tech) => (
          <span key={tech} className="rounded border border-white/10 bg-black/25 px-2.5 py-1 text-xs text-neutral-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <ProjectFooter project={project} onOpen={onOpen} />
      </div>
    </motion.article>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

function ProjectFooter({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
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
      {project.video && (
        <a
          href={project.video}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-cyan-200"
        >
          Watch walkthrough <IconPlayerPlay className="h-4 w-4" />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
        >
          View code <IconArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function CompactProjectList({
  title,
  description,
  projects,
  onOpen,
}: {
  title: string;
  description: string;
  projects: Project[];
  onOpen: (project: Project) => void;
}) {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.025] p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
      <div className="mt-4 grid gap-3">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => onOpen(project)}
            className="group grid gap-2 rounded-md border border-white/10 bg-black/20 p-3 text-left transition hover:border-cyan-300/35 hover:bg-white/[0.04]"
          >
            <span className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-white">{project.title}</span>
              <span className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-neutral-400">
                {getProjectTypeLabel(project)}
              </span>
              <span className="rounded border border-white/10 px-2 py-0.5 text-[11px] text-neutral-400">
                {project.repo ? "Public code" : "Demo-safe"}
              </span>
            </span>
            <span className="text-sm leading-6 text-neutral-300">{project.summary}</span>
            <span className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech} className="rounded bg-white/[0.045] px-2 py-1 text-[11px] text-neutral-400">
                  {tech}
                </span>
              ))}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ProjectExpandableCard({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      {project && (
        <DialogContent className="no-scrollbar max-h-[82dvh] w-[min(880px,calc(100vw-2rem))] max-w-none overflow-y-auto border-white/10 bg-neutral-950 p-5 text-white shadow-2xl shadow-black sm:p-6">
              <DialogHeader className="pr-12">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  {project.eyebrow}
                </p>
                <DialogTitle className="mt-3 text-3xl font-bold text-white">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="mt-3 max-w-3xl text-sm leading-7 text-neutral-300">
                  {project.summary}
                </DialogDescription>
                <p className="mt-4 rounded-md border border-white/10 bg-white/[0.035] p-3 text-xs leading-5 text-neutral-400">
                  Demo-safe showcase. Some source, data, and workflows may be private because this work is client, company, or senior-guided collaborator owned.
                </p>
              </DialogHeader>

              <div className="mt-6 rounded-md bg-black p-3">
                {project.videoId ? (
                  <iframe
                    className="aspect-video w-full rounded-md border border-white/10"
                    src={`https://www.youtube.com/embed/${project.videoId}`}
                    title={`${project.title} case study video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center rounded-md border border-white/10 bg-neutral-900 text-neutral-400">
                    Demo video not added yet
                  </div>
                )}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <InfoPill label="Type" value={project.workType} />
                {project.duration && <InfoPill label="Duration" value={project.duration} />}
                <InfoPill label="Context" value={project.context} />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <section className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    Project About
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">{project.about}</p>
                </section>
                <div className="grid gap-4">
                  <section className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      Review Summary
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{project.outcome}</p>
                  </section>
                  <section>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      What I Did
                    </h4>
                    <p className="mt-3 border-l border-cyan-300/40 pl-4 text-sm leading-7 text-cyan-50/90">
                      {project.myRole}
                    </p>
                  </section>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <DetailList title="What It Does" items={project.features} />
                <DetailList title="What It Proves" items={project.proof} />
              </div>

              <section className="mt-6 rounded-md border border-white/10 bg-white/[0.025] p-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Stack And Links
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.video && (
                    <a href={project.video} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-cyan-200">
                      Watch walkthrough <IconPlayerPlay className="h-4 w-4" />
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
                      View code <IconArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.extraLinks?.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-xs font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
                      {link.label} <IconArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                {!project.repo && (
                  <p className="mt-4 rounded border border-white/10 bg-white/[0.035] p-3 text-xs leading-5 text-neutral-400">
                    Demo-safe showcase. Source/code may be private due to client/company ownership.
                  </p>
                )}
              </section>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <CaseStudyPanel
                  title="Project Review Notes"
                  items={[
                    `What it is: ${project.about}`,
                    `Stack reviewed: ${project.stack.join(", ")}.`,
                    `Main workflows: ${project.features.join(", ")}.`,
                  ]}
                />
                <CaseStudyPanel
                  title="Portfolio Readiness"
                  items={[
                    `Best angle: ${project.outcome}`,
                    `Aswin's contribution: ${project.myRole}`,
                    project.repo
                      ? "Public link is available, but demo data and secrets should still be checked before broad sharing."
                      : "Demo-safe showcase. Source/code may be private due to client/company ownership.",
                  ]}
                />
              </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

function matchesFilter(project: Project, filter: TagFilter) {
  if (filter === "All") return true;
  if (project.category === filter) return true;

  const blob = [
    project.title,
    project.eyebrow,
    project.workType,
    project.context,
    project.summary,
    ...project.stack,
    ...project.features,
    ...project.proof,
  ]
    .join(" ")
    .toLowerCase();

  const terms: Record<Exclude<TagFilter, Filter>, string[]> = {
    Frontend: ["frontend", "react", "next.js", "tailwind", "responsive", "landing", "website", "portfolio ui"],
    "Full-Stack": ["full-stack", "backend", "api", "node", "fastify", "express", "mongodb", "jwt"],
    "Systems/DevOps": ["linux", "devops", "pm2", "nginx", "docker", "aws", "kubernetes", "redis", "elk", "server"],
    Dashboard: ["dashboard", "admin", "cms", "scada", "oee", "reports", "analytics", "monitoring"],
  };

  return terms[filter as Exclude<TagFilter, Filter>]?.some((term) => blob.includes(term)) ?? false;
}

function getProjectTypeLabel(project: Project) {
  const labels: Record<Project["category"], string> = {
    "Job Work": "Company work",
    "Senior Guided": "Guided work",
    "Client Work": "Client work",
    Personal: "Personal",
  };

  return labels[project.category];
}

function getProjectYear(project: Project) {
  if (project.title === "Auryvedic") return "2026";
  if (["AnarchyV2", "Version Control Manager", "V-Dashboard + V-Server"].includes(project.title)) return "2025";
  if (project.category === "Job Work") return "2024";
  if (project.title === "Psych Learn") return "2024";
  if (["Dragstr", "Prestine Nature"].includes(project.title)) return "2024";
  if (project.category === "Personal") return "2024";
  return "2023";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
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

function CaseStudyPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h4>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <p key={item} className="text-sm leading-7 text-neutral-300">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
