"use client";
import React, { useEffect, useState } from "react";
import { FormUI } from "./form";
import { TypingHeading } from "@/components/TypingHeading";

export const Form = () => {
  return (
    <section className="mx-auto w-[88vw] max-w-[1100px] py-20 md:py-24">
      <div className="mb-10" data-aos="fade-up">
        <p className="hero-mono text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
          Contact
        </p>
        <TypingHeading
          text="Let's build the next useful thing."
          className="hero-display mt-4 text-3xl font-bold leading-tight text-white md:text-5xl"
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="flex min-h-[360px] items-center justify-center">
            <div
              data-aos="zoom-in"
              data-aos-delay="180"
              className="india-map relative isolate mx-auto w-full max-w-[470px] overflow-visible opacity-85"
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
              className="w-full rounded-md border border-white/10 bg-white/[0.04] p-5 sm:p-6"
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
