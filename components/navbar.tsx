"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar as AceternityNavbar,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "01. Home", link: "#home" },
  { name: "02. Contact", link: "#contact" },
  { name: "03. Skills", link: "#services" },
  { name: "04. Experience", link: "#experience" },
  { name: "05. Portfolio", link: "#portfolio" },
];

export default function Navbar(_: { name?: string; description?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <AceternityNavbar className="fixed left-0 right-0 top-3 z-[99]">
      <NavBody
        className="hero-mono mx-auto min-w-0 max-w-[88vw] rounded-none bg-transparent px-6 py-4 text-white/90 lg:max-w-[70vw]"
      >
        <NavItems items={navItems} className="static justify-center text-white/90" />
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
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="w-full rounded-md px-4 py-3 text-center transition hover:bg-white/[0.06] hover:text-cyan-100"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </AceternityNavbar>
  );
}
