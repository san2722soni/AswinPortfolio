"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IconArrowDown,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
} from "@tabler/icons-react";
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
      duration: 800,
      easing: "ease-out-cubic",
      offset: 100,
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
    <div
      ref={rootRef}
      data-portrait-ready={animatePortrait}
      className="relative mx-auto flex min-h-[88vh] w-[88vw] max-w-[1100px] flex-col justify-center overflow-hidden py-20 md:py-24"
    >
      <div className="relative z-10 max-w-[900px]">
        <p className="hero-reveal hero-mono mb-5 text-sm font-semibold tracking-[0.12em] text-cyan-300 md:text-base">
          Hi, my name is
        </p>
        <h1 className="hero-reveal hero-display text-4xl font-black leading-[1.03] text-[#ccd6f6] min-[390px]:text-5xl md:text-6xl lg:text-[4.55rem]">
          Aswin Anand.
        </h1>
        <h2 className={`hero-reveal hero-display mt-5 max-w-[860px] text-left text-[1.7rem] font-black leading-[1.1] text-[#8892b0] min-[390px]:text-[2rem] md:text-[2.75rem] lg:text-[3.2rem] ${className}`}>
          <span className="text-[#8892b0]">I turn</span>{" "}
          <FlipWords words={["requirements", "workflows", "product ideas", "internal tools"]} className="px-1 text-cyan-200" />
          <span className="text-[#8892b0]">into software that ships.</span>
        </h2>
        <div className="hero-reveal mt-7 max-w-[620px] text-[#a8b2d1]">
          <TextGenerateEffectDemo key={textEffectStarted ? "summary-started" : "summary-waiting"} start={textEffectStarted} />
        </div>
        {showActions && (
        <div className="mt-7 flex flex-nowrap items-center gap-2 sm:gap-4">
          <span className="hero-action-enter" style={{ animationDelay: "0ms" }}>
            <a
              href="#portfolio"
              className="hero-mono inline-flex items-center gap-2 rounded border border-cyan-300 px-4 py-3 text-xs font-bold text-cyan-200 transition hover:bg-cyan-300/10 sm:gap-3 sm:px-7 sm:py-4 sm:text-sm"
            >
              View case studies <IconArrowDown className="h-4 w-4" />
            </a>
          </span>
          <span className="hero-action-enter" style={{ animationDelay: "180ms" }}>
            <LinkPreview
              href="https://github.com/san2722soni"
              label="GitHub: project repositories and code access"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#233554] text-[#8892b0] transition hover:border-cyan-300 hover:text-cyan-200 sm:h-11 sm:w-11"
            >
              <IconBrandGithub className="h-5 w-5" />
            </LinkPreview>
          </span>
          <span className="hero-action-enter" style={{ animationDelay: "300ms" }}>
            <LinkPreview
              href="https://www.linkedin.com/in/aswin-anand-90ab91275/"
              label="LinkedIn: experience, roles, and contact"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#233554] text-[#8892b0] transition hover:border-cyan-300 hover:text-cyan-200 sm:h-11 sm:w-11"
            >
              <IconBrandLinkedin className="h-5 w-5" />
            </LinkPreview>
          </span>
          <span className="hero-action-enter" style={{ animationDelay: "420ms" }}>
            <HoverPreviewLink
              href="https://drive.google.com/file/d/1DgrB14nlrVcWycuu716Q7azKJqfsmgND/view?usp=sharing"
              preview={<ResumeHoverPreview />}
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-[#233554] text-[#8892b0] transition hover:border-cyan-300 hover:text-cyan-200 sm:h-11 sm:w-11"
            >
              <IconFileText className="h-5 w-5" />
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
