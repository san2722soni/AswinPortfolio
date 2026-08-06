"use client";

import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="relative mt-6 bg-black/30 text-neutral-300">
      <div className="mx-auto flex w-[88vw] flex-col items-center justify-between gap-6 py-8 sm:flex-row lg:w-[80vw]">
        <Image
          src="/image.png"
          alt="Aswin Anand signature"
          width={260}
          height={100}
          className="h-[100px] w-auto object-contain"
          priority={false}
        />
        <nav className="flex items-center gap-4 text-slate-200">
          {[
            { label: "GitHub", href: "https://github.com/san2722soni", icon: IconBrandGithub },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/aswin-anand-90ab91275/", icon: IconBrandLinkedin },
            { label: "Instagram", href: "https://www.instagram.com/code2006asw/", icon: IconBrandInstagram },
            { label: "WhatsApp", href: "https://wa.me/916200855270", icon: IconBrandWhatsapp },
            { label: "Email", href: "mailto:invictusasw7@gmail.com", icon: IconMail },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="rounded-full border border-white/10 bg-white/[0.035] p-2.5 text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </nav>
        <p className="hero-mono text-right text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} Aswin Anand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
