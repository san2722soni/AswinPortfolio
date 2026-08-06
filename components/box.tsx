"use client";
import React, { useEffect, useState } from "react";
import { FormUI } from "./form";
import { TypingHeading } from "@/components/TypingHeading";

export const Form = () => {
  return (
    <section className="mx-auto w-[88vw] max-w-none py-28 lg:w-[70vw]">
      <div className="grid min-h-[720px] gap-24 md:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center">
            <p className="hero-mono text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Contact
            </p>
            <TypingHeading
              text="Let's build the next useful thing."
              className="hero-display max-w-none text-4xl font-bold leading-tight text-white md:whitespace-nowrap md:text-5xl lg:text-[3.35rem]"
            />
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Send a role, project brief, or terminal/debugging task. I can share
              demos, GitHub access, deployment notes, and walkthrough context.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-delay="420"
              className="india-map relative isolate mt-14 w-full max-w-[780px] overflow-visible md:-ml-8"
            >
              <div className="pointer-events-none absolute left-[59%] top-[45%] z-20 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-2xl" />
              <InlineIndiaMap />
              <div className="pointer-events-none absolute left-[59%] top-[37%] z-40 h-28 w-px bg-gradient-to-b from-cyan-100 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
              <span className="hero-mono pointer-events-none absolute left-[52%] top-[30%] z-50 rounded bg-black px-2.5 py-1 text-[12px] font-semibold text-white shadow-[0_0_16px_rgba(0,0,0,0.7)] ring-1 ring-white/25">
                Jharkhand, India
              </span>
              <span className="pointer-events-none absolute left-[59%] top-[37%] z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-cyan-200 shadow-[0_0_24px_6px_rgba(34,211,238,0.38)]" />
            </div>
          </div>
          <div className="flex items-center">
            <div
              data-aos="fade-down"
              data-aos-delay="620"
              className="w-full rounded-md border border-white/10 bg-white/[0.035] bg-grid-white/[0.025] p-8 shadow-2xl shadow-black/25 sm:p-12 lg:p-14"
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
