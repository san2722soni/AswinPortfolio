import SkillCard from "./skillCard";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function Services() {

  const words = [
    {
      text: "Proficiencies"
    },
    {
      text: "and"
    },
    {
      text: "Offerings."
    }
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-row items-center justify-center space-x-2 md:space-y-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-[#202020] text-white text-sm">
            Hire Me
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black text-sm">
            Freelance-capable
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-20">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export const projects = [
  {
    title: <SkillCard desc="C++" limit={80} duration="2s" fill={120} icon={'CPP'}/>,
    description:
    "Skilled in C++, with proficiency in data structures and algorithms, I've developed robust applications and optimized performance, demonstrating expertise in efficient algorithms, object-oriented programming, and memory management.",
    link: "https://netflix.com",
  },
  {
    title: <SkillCard desc="React" limit={70} duration="2s" fill={130} icon={'REACT'}/>,
    description:
    "Skilled in Next.js and React, I've developed dynamic web applications and created interactive user interfaces, showcasing expertise in server-side rendering, seamless client-side navigation, component-based architecture, and state management.",
    link: "https://google.com",
  },
  {
    title: <SkillCard desc="REDIS"  limit={65} duration="2s" fill={140} icon={'REDIS'}/>,
    description:
    "Experienced with Prisma and Redis, I've built scalable database solutions and implemented efficient caching strategies, showcasing expertise in ORM integration, data modeling, key-value store optimization, and data persistence.",
    link: "https://meta.com",
  },
  {
    title: <SkillCard desc="TS" limit={75} duration="2s" fill={120} icon={'TS'}/>,
    description:
    "Proficient in JavaScript and TypeScript, I've developed dynamic web applications and scalable solutions, showcasing expertise in frontend and backend development, type safety, asynchronous programming, and modern JavaScript development.",
    link: "https://amazon.com",
  },
  {
    title: <SkillCard desc="NODE" limit={70} duration="2s" fill={145} icon={'NODE'}/>,
    description:
    "Skilled in Node.js and cloud technologies, I've built server-side applications and deployed scalable solutions, showcasing expertise in asynchronous programming, RESTful APIs, cloud architecture, and serverless computing.",
    link: "https://microsoft.com",
  },
    {
    title: <SkillCard desc="HTML" limit={90} duration="2s" fill={80} icon={'HTML'}/>,
    description:
    "Experienced in HTML and CSS, I've crafted responsive and visually appealing web interfaces, showcasing expertise in semantic markup, styling techniques, layout design, and cross-browser compatibility.",
    link: "https://stripe.com",
  },
  
];

"Experienced with Next.js, I've developed dynamic web applications, showcasing expertise in server-side rendering and seamless client-side navigation."
"Proficient in React, I've created interactive user interfaces, demonstrating expertise in component-based architecture and state management."