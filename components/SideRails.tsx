"use client";

import { Code2, Github, Instagram, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/san2722soni", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/code2006asw/", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/916200855270", icon: MessageCircle },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aswin-anand-90ab91275/", icon: Linkedin },
  { label: "Code", href: "#portfolio", icon: Code2 },
];

export function SideRails() {
  return (
    <>
      <aside className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-6 text-slate-400 lg:flex">
        {socialLinks.map(({ label, href, icon: Icon }, index) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            className="side-rail-enter text-slate-400 transition hover:-translate-y-1 hover:text-cyan-200"
            style={{ animationDelay: `${index * 240}ms` }}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <span className="h-28 w-px bg-slate-500/70" />
      </aside>

      <aside className="fixed bottom-0 right-8 z-40 hidden flex-col items-center gap-6 text-slate-400 lg:flex">
        <a
          href="mailto:invictusasw7@gmail.com"
          className="hero-mono [writing-mode:vertical-rl] text-xs tracking-[0.2em] transition hover:-translate-y-1 hover:text-cyan-200"
        >
          invictusasw7@gmail.com
        </a>
        <span className="h-28 w-px bg-slate-500/70" />
      </aside>
    </>
  );
}
