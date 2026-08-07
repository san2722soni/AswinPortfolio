"use client";
import React, { useEffect, useState } from "react";
import { FormUI } from "./form";
import { TypingHeading } from "@/components/TypingHeading";

export const Form = () => {
  return (
    <section className="mx-auto w-[88vw] max-w-none py-28 lg:w-[70vw]">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="flex flex-col justify-center">
            <p className="hero-mono text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Contact
            </p>
            <TypingHeading
              text="Let's build the next useful thing."
              className="hero-display max-w-none text-4xl font-bold leading-tight text-white md:whitespace-nowrap md:text-5xl lg:text-[3.35rem]"
            />
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Available for full-time full-stack/backend roles and freelance projects.
              Send a role, build brief, or debugging task; I usually respond with
              demos, links, and next-step context.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-neutral-300">
              <a href="mailto:invictusasw7@gmail.com" className="w-fit transition hover:text-cyan-100">
                invictusasw7@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/aswin-anand-90ab91275/" target="_blank" rel="noreferrer" className="w-fit transition hover:text-cyan-100">
                LinkedIn /aswin-anand-90ab91275
              </a>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="420"
              className="india-map relative isolate mt-10 w-full max-w-[380px] overflow-visible opacity-80"
            >
              <div className="pointer-events-none absolute left-[59%] top-[45%] z-20 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-2xl" />
              <InlineIndiaMap />
              <div className="pointer-events-none absolute left-[59%] top-[37%] z-40 h-20 w-px bg-gradient-to-b from-cyan-100 to-transparent" />
              <span className="hero-mono pointer-events-none absolute left-[52%] top-[30%] z-50 rounded bg-black px-2.5 py-1 text-[11px] font-semibold text-white ring-1 ring-white/20">
                Jharkhand, India
              </span>
              <span className="pointer-events-none absolute left-[59%] top-[37%] z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-cyan-200" />
            </div>
          </div>
          <div className="flex items-center">
            <div
              data-aos="fade-up"
              data-aos-delay="260"
              className="w-full rounded-md border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10"
            >
              <FormUI />
            </div>
          </div>
      </div>
    </section>
  );
};

function InlineIndiaMap() {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let ignore = false;

    fetch("/india.svg")
      .then((response) => response.text())
      .then((text) => {
        if (ignore) return;
        const doc = new DOMParser().parseFromString(text, "image/svg+xml");
        doc.querySelectorAll("script").forEach((node) => node.remove());
        const svgEl = doc.querySelector("svg");
        if (!svgEl) return;

        svgEl.removeAttribute("width");
        svgEl.removeAttribute("height");
        svgEl.setAttribute("class", "h-auto w-full");
        svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
        setSvg(svgEl.outerHTML);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div
      aria-label="India map with Jharkhand highlighted"
      className="relative z-10 w-full"
      role="img"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
