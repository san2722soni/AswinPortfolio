"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
} from "@tabler/icons-react";
import { SvgPathPortrait } from "./SvgPathPortrait";
import { FlipWords } from "@/components/ui/flip-words";
import { LinkPreview } from "@/components/ui/link-preview";
import TextGenerateEffectDemo from "@/components/text-generate-effect-demo";

interface HeaderProps{
  className: string
  animatePortrait?: boolean
  textEffectStarted?: boolean
  showActions?: boolean
};

export const Header:React.FC<HeaderProps> = ({
  className,
  animatePortrait = true,
  textEffectStarted = true,
  showActions = true,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      offset: 150,
      once: true,
      anchorPlacement: "top-bottom",
    });

    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 22,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto flex min-h-screen w-[92vw] max-w-none flex-col items-start overflow-hidden pb-14 pt-6 sm:w-[90vw] lg:w-[86vw] lg:flex-row lg:items-center lg:pb-20 lg:pt-32">
      <div className="pointer-events-none relative mb-0 h-[min(54vh,440px)] min-h-[340px] w-full shrink-0 overflow-hidden sm:h-[min(58vh,500px)] lg:hidden">
        <SvgPathPortrait key={animatePortrait ? "mobile-portrait-play" : "mobile-portrait-wait"} featured animate={animatePortrait} />
      </div>
      <div className="pointer-events-none absolute right-[-170px] top-[2vh] hidden h-[96vh] w-[56vw] max-w-[1040px] opacity-85 lg:block">
        <div className="relative z-10 h-full">
          <SvgPathPortrait key={animatePortrait ? "desktop-portrait-play" : "desktop-portrait-wait"} featured animate={animatePortrait} />
        </div>
      </div>

      <div className="relative z-10 max-w-[840px]">
        <p className="hero-reveal hero-mono mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300 md:mb-8 md:text-base">
          Hi, my name is
        </p>
        <h1 className="hero-reveal hero-display text-4xl font-black leading-[0.95] text-slate-100 min-[390px]:text-5xl md:text-7xl">
          Aswin Anand.
        </h1>
        <div className="hero-reveal mt-6 flex flex-wrap gap-2">
          {["Full-stack", "Dashboards", "DevOps-ready", "AI-assisted"].map((item) => (
            <span
              key={item}
              className="hero-mono rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
            >
              {item}
            </span>
          ))}
        </div>
        <h2 className={`hero-reveal hero-display mt-10 max-w-[900px] text-left text-3xl font-black leading-[1.08] text-slate-200 min-[390px]:text-[2.15rem] md:mt-12 md:text-[3.1rem] ${className}`}>
          <span className="text-slate-400">I turn</span>{" "}
          <FlipWords words={["requirements", "workflows", "product ideas", "internal tools"]} className="px-1 text-cyan-100" />
          <span className="text-slate-200">into software that ships.</span>
        </h2>
        <div className="hero-reveal mt-12 min-h-[150px] max-w-[820px] text-slate-200/85 md:mt-16 md:min-h-[170px]">
          <TextGenerateEffectDemo key={textEffectStarted ? "summary-started" : "summary-waiting"} start={textEffectStarted} />
        </div>
        {showActions && (
        <div className="mt-8 flex flex-wrap gap-3 md:mt-12">
          <span className="hero-action-enter" style={{ animationDelay: "0ms" }}>
            <LinkPreview
              href="https://github.com/san2722soni"
              label="GitHub: project repositories and code access"
              className="hero-mono inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-xs font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200 sm:px-6 sm:py-4 sm:text-sm"
            >
              GitHub <IconBrandGithub className="h-4 w-4" />
            </LinkPreview>
          </span>
          <span className="hero-action-enter" style={{ animationDelay: "350ms" }}>
            <LinkPreview
              href="https://www.linkedin.com/in/aswin-anand-90ab91275/"
              label="LinkedIn: experience, roles, and contact"
              className="hero-mono inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-3 text-xs font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200 sm:px-6 sm:py-4 sm:text-sm"
            >
              LinkedIn <IconBrandLinkedin className="h-4 w-4" />
            </LinkPreview>
          </span>
          <span className="hero-action-enter" style={{ animationDelay: "700ms" }}>
            <HoverPreviewLink
              href="https://drive.google.com/file/d/1DgrB14nlrVcWycuu716Q7azKJqfsmgND/view?usp=sharing"
              preview={<ResumeHoverPreview />}
              className="hero-mono inline-flex items-center gap-2 rounded-md border border-cyan-300/40 px-4 py-3 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-300/10 sm:px-6 sm:py-4 sm:text-sm"
            >
              Resume <IconFileText className="h-4 w-4" />
            </HoverPreviewLink>
          </span>
        </div>
        )}
      </div>

    </div>
  );
}

function HoverPreviewLink({
  href,
  children,
  preview,
  className,
}: {
  href: string;
  children: React.ReactNode;
  preview: React.ReactNode;
  className: string;
}) {
  return (
    <span className="group relative inline-flex">
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={className}>
        {children}
      </a>
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-4 hidden -translate-x-1/2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:block group-hover:opacity-100 lg:block lg:scale-95 lg:group-hover:scale-100">
        {preview}
      </span>
    </span>
  );
}

function ResumeHoverPreview() {
  return (
    <span className="block w-[360px] overflow-hidden rounded-md border border-cyan-300/20 bg-neutral-950 p-3 shadow-2xl shadow-black/50">
      <iframe
        title="Resume preview"
        src="https://drive.google.com/file/d/1DgrB14nlrVcWycuu716Q7azKJqfsmgND/preview"
        className="h-[440px] w-full rounded border border-white/10 bg-white"
      />
    </span>
  );
}
