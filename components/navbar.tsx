"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar as AceternityNavbar,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/#home", id: "home" },
  { name: "About", link: "/#about", id: "about" },
  { name: "Experience", link: "/#experience", id: "experience" },
  { name: "Work", link: "/#portfolio", id: "portfolio" },
  { name: "Skills", link: "/#services", id: "services" },
  { name: "Contact", link: "/#contact", id: "contact" },
];
const sectionOrder = ["home", "about", "experience", "portfolio", "services", "contact"];

const resumeUrl = "https://drive.google.com/file/d/1DgrB14nlrVcWycuu716Q7azKJqfsmgND/view?usp=sharing";

export default function Navbar(_: { name?: string; description?: string }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollLine = window.scrollY + window.innerHeight * 0.35;
      let nextSection = "home";

      for (const id of sectionOrder) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollLine) nextSection = id;
      }

      setActiveSection(nextSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <AceternityNavbar className="fixed left-0 right-0 top-3 z-[99]">
      <NavBody
        className="hero-mono mx-auto min-w-0 max-w-[92vw] rounded-none bg-transparent px-4 py-3 text-white/90 lg:max-w-[82vw]"
      >
        <div className="flex items-center justify-center gap-1 text-sm font-semibold">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              className={`nav-item-enter rounded-md px-2.5 py-2 transition hover:bg-white/[0.06] hover:text-white ${
                activeSection === item.id ? "bg-white/[0.07] text-cyan-100" : "text-white/80"
              }`}
              style={{ animationDelay: `${index * 135}ms` }}
            >
              {item.name}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-item-enter ml-2 rounded-md border border-cyan-300/35 px-3 py-2 text-cyan-100 transition hover:bg-cyan-300/10"
            style={{ animationDelay: `${navItems.length * 135}ms` }}
          >
            Resume
          </a>
        </div>
      </NavBody>

      <MobileNav className="mx-auto max-w-[88vw] items-stretch rounded-none bg-transparent px-0 py-4">
        <MobileNavHeader>
          <Image
            src="/image.png"
            alt="Aswin Anand signature"
            width={128}
            height={48}
            className="h-10 w-auto object-contain"
            priority={false}
          />
          <button type="button" aria-label="Toggle navigation" className="text-white">
            <MobileNavToggle isOpen={open} onClick={() => setOpen((value) => !value)} />
          </button>
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={open}
          onClose={() => setOpen(false)}
          className="hero-mono border border-white/10 bg-neutral-950/95 text-slate-100"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setOpen(false)}
              className={`w-full rounded-md px-4 py-3 text-center transition hover:bg-white/[0.06] hover:text-cyan-100 ${
                activeSection === item.id ? "bg-white/[0.07] text-cyan-100" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="w-full rounded-md border border-cyan-300/35 px-4 py-3 text-center text-cyan-100 transition hover:bg-cyan-300/10"
          >
            Resume
          </a>
        </MobileNavMenu>
      </MobileNav>
    </AceternityNavbar>
  );
}
