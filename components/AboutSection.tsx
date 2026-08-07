"use client";

import { useEffect, useRef, useState } from "react";
import { IconRefresh } from "@tabler/icons-react";
import { SvgPathPortrait } from "./SvgPathPortrait";
import { LinkPreview } from "@/components/ui/link-preview";
import { TypingHeading } from "@/components/TypingHeading";

const currentStack = [
  "Next.js",
  "TypeScript",
  "Fastify/Node",
  "MongoDB/PostgreSQL",
  "Redis",
  "Linux/PM2/Nginx",
  "AWS/Cloudflare",
  "ELK Stack",
  "C++/FlatBuffers",
  "System Design",
  "Git/CLI",
  "OpenAI SDK",
];

export function AboutSection({ animatePortrait = true }: { animatePortrait?: boolean }) {
  const portraitRef = useRef<HTMLDivElement>(null);
  const [portraitInView, setPortraitInView] = useState(false);
  const [portraitStarted, setPortraitStarted] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const node = portraitRef.current;
    if (!node || portraitInView) return;

    let frame = 0;
    const checkPortraitCenter = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.52;
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setPortraitInView(true);
        }
      });
    };

    checkPortraitCenter();
    window.addEventListener("scroll", checkPortraitCenter, { passive: true });
    window.addEventListener("resize", checkPortraitCenter);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", checkPortraitCenter);
      window.removeEventListener("resize", checkPortraitCenter);
    };
  }, [portraitInView]);

  useEffect(() => {
    if (!portraitInView || portraitStarted) return;

    const timer = window.setTimeout(() => {
      setPortraitStarted(true);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [portraitInView, portraitStarted]);

  const replayPortrait = () => {
    setPortraitInView(true);
    setPortraitStarted(true);
    setReplayKey((value) => value + 1);
  };

  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto grid w-[88vw] max-w-[1100px] gap-8 lg:grid-cols-[minmax(0,1.12fr)_500px] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="mb-10" data-aos="fade-up">
            <p className="hero-mono text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              About Me
            </p>
            <TypingHeading
              text="Self-taught, then battle-tested."
              className="hero-display mt-4 text-3xl font-bold leading-tight text-white md:text-4xl"
            />
          </div>

          <div className="max-w-3xl space-y-4 text-sm leading-7 text-[#8892b0] md:text-base md:leading-8">
            <p>
              I&apos;m a 19-year-old self-taught programmer who started programming at 14 out of pure curiosity. I learned from YouTube, docs, online resources, and small builds, then kept turning that curiosity into real work: freelance sites, client pages, product screens, and full-stack delivery.
            </p>
            <p>
              Before Xenvolt, I worked on freelance/client projects and spent time with{" "}
              <LinkPreview
                href="https://dragstr.vercel.app"
                label="Dragstr public website"
                className="font-semibold text-cyan-300 transition hover:text-cyan-100"
              >
                Dragstr
              </LinkPreview>
              , where I learned faster frontend delivery, responsive sections, and how real briefs become public-facing websites. Those projects, along with ed-tech and clinic-style client work, taught me how to help people bring their work digital with clearer pages, dashboards, and usable flows.
            </p>
            <p>
              At{" "}
              <LinkPreview
                href="https://www.linkedin.com/company/xenvolt/"
                label="Xenvolt AI company profile"
                className="font-semibold text-cyan-300 transition hover:text-cyan-100"
              >
                Xenvolt AI
              </LinkPreview>
              , I learned corporate product discipline: working with company requirements, maintaining production-facing pages, building admin/CMS tooling, industrial dashboards, SCADA/OEE-style flows, reports, alarms, data-heavy screens, and supporting deployments with more ownership.
            </p>
            <div>
              The biggest software-engineering level-up happened while working with my senior developer and mentor,{" "}
              <LinkPreview
                href="https://www.linkedin.com/in/vineet-oli/"
                label="Vineet Oli LinkedIn"
                className="font-semibold text-cyan-300 transition hover:text-cyan-100"
              >
                Vineet Oli
              </LinkPreview>
              {" "}(Senior Engineer at UC). He taught me how to think beyond screens: architecture, multiplayer/server workflows, developer tooling, Redis and MongoDB flows, Linux debugging, Electron, C++ direction, repo operations, run paths, and terminal-first problem solving.
            </div>
            <p>
              Right now I&apos;m sharpening advanced C++, DSA, backend networking, system design, and deeper JavaScript while staying open to full-stack/backend roles where practical product ownership and fast learning matter.
            </p>
          </div>

          <p className="mt-7 text-sm leading-7 text-[#8892b0]">
            Technologies I&apos;ve been working with recently:
          </p>
          <div className="mt-5 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
            {currentStack.map((item) => (
              <p key={item} className="hero-mono flex items-center gap-3 text-xs text-[#8892b0]">
                <span className="h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-cyan-300" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div ref={portraitRef} className="order-1 relative mx-auto h-[500px] w-full max-w-[500px] sm:h-[620px] lg:order-2 lg:h-[720px]">
          <div className="absolute inset-0 rounded-md bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.13),rgba(17,34,64,0.28)_48%,rgba(255,255,255,0.035)_100%)] shadow-[0_24px_90px_rgba(0,0,0,0.3)]" />
          <div className="relative h-full overflow-hidden rounded-md bg-white/[0.025]">
            <button
              type="button"
              onClick={replayPortrait}
              className="absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded border border-white/15 bg-black/35 text-cyan-100 backdrop-blur transition hover:border-cyan-300 hover:text-cyan-200"
              aria-label="Replay portrait animation"
              title="Replay animation"
            >
              <IconRefresh className="h-4 w-4" />
            </button>
            <SvgPathPortrait
              key={portraitStarted ? `about-svg-draw-${replayKey}` : `about-svg-wait-${replayKey}`}
              featured
              animate={animatePortrait && portraitStarted}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
