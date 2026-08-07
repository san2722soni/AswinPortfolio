"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const portraits = [
  { src: "/pfp1.svg?v=2", label: "pfp1" },
  { src: "/pfp3.svg?v=2", label: "pfp3" },
  { src: "/pfp4.svg?v=2", label: "pfp4" },
];
const FEATURED_DRAW_MS = 15000;
const FEATURED_PATH_MS = 2000;

export function SvgPathPortrait({
  featured = false,
  animate = true,
}: {
  featured?: boolean;
  animate?: boolean;
}) {
  if (featured) {
    return <FeaturedSvgPortrait animate={animate} />;
  }

  return (
    <div className="grid h-[520px] gap-3 md:grid-cols-3">
      {portraits.map((portrait, index) => (
        <SvgPathCard key={portrait.src} {...portrait} index={index} />
      ))}
    </div>
  );
}

function FeaturedSvgPortrait({ animate }: { animate: boolean }) {
  const [drawSvg, setDrawSvg] = useState("");
  const [defaultSvg, setDefaultSvg] = useState("");
  const [showDefault, setShowDefault] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ignore = false;

    fetch("/pfp4.svg")
      .then((res) => res.text())
      .then((text) => {
        if (ignore) return;
        const doc = new DOMParser().parseFromString(text, "image/svg+xml");
        doc.querySelectorAll("script").forEach((node) => node.remove());
        const svgEl = doc.querySelector("svg");
        if (!svgEl) return;

        svgEl.removeAttribute("width");
        svgEl.removeAttribute("height");
        svgEl.setAttribute("class", "h-full w-full");
        svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
        const drawSvgEl = svgEl.cloneNode(true) as SVGSVGElement;
        drawSvgEl.querySelectorAll("g, path").forEach((node) => {
          node.setAttribute("fill", "none");
          node.removeAttribute("fill-opacity");
          node.setAttribute("stroke", "black");
          node.setAttribute("stroke-width", "7px");
          node.setAttribute("stroke-linecap", "round");
          node.setAttribute("stroke-linejoin", "round");
        });

        setDefaultSvg(svgEl.outerHTML);
        setDrawSvg(drawSvgEl.outerHTML);
      });

    return () => {
      ignore = true;
    };
  }, []);

  useLayoutEffect(() => {
    const root = wrapRef.current;
    if (!root || !drawSvg) return;

    setShowDefault(false);

    const paths = Array.from(root.querySelectorAll("path"))
      .map((path) => {
        const length = path.getTotalLength();
        const top = path.getBoundingClientRect().top;
        return { path, length, top };
      })
      .filter(({ length }) => Number.isFinite(length) && length > 0);
    if (!paths.length) return;

    const minTop = Math.min(...paths.map(({ top }) => top));
    const maxTop = Math.max(...paths.map(({ top }) => top));
    const range = maxTop - minTop || 1;

    paths.forEach(({ path, length }) => {
      path.style.fill = "none";
      path.style.stroke = "black";
      path.style.strokeWidth = "7px";
      path.style.strokeOpacity = "1";
      path.style.strokeLinecap = "round";
      path.style.strokeLinejoin = "round";
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.transition = "none";
    });

    root.getBoundingClientRect();

    if (!animate) {
      return;
    }

    const startTimer = window.setTimeout(() => {
      paths.forEach(({ path, top }) => {
        const delay = ((top - minTop) / range) * (FEATURED_DRAW_MS - FEATURED_PATH_MS);
        path.style.transition = `stroke-dashoffset ${FEATURED_PATH_MS}ms ease ${delay}ms`;
        path.style.strokeDashoffset = "0";
      });
    }, 80);

    const defaultTimer = window.setTimeout(() => setShowDefault(true), FEATURED_DRAW_MS);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(defaultTimer);
    };
  }, [animate, drawSvg]);

  return (
    <div className="featured-portrait-svg relative h-full min-h-0 overflow-hidden opacity-100">
      <div
        ref={wrapRef}
        data-hidden={!animate || showDefault}
        className="featured-portrait-draw absolute inset-0 h-full w-full scale-[1.28] md:scale-[1.22] lg:scale-[1.24]"
        dangerouslySetInnerHTML={{ __html: drawSvg }}
      />
      <div
        data-visible={showDefault}
        className="featured-portrait-default absolute inset-0 h-full w-full scale-[1.28] md:scale-[1.22] lg:scale-[1.24]"
        dangerouslySetInnerHTML={{ __html: defaultSvg }}
      />
    </div>
  );
}

function SvgPathCard({
  src,
  label,
  index,
  featured = false,
}: {
  src: string;
  label: string;
  index: number;
  featured?: boolean;
}) {
  const [svg, setSvg] = useState("");
  const [replay, setReplay] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ignore = false;

    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        if (ignore) return;
        const doc = new DOMParser().parseFromString(text, "image/svg+xml");
        doc.querySelectorAll("script").forEach((node) => node.remove());
        const svgEl = doc.querySelector("svg");
        if (svgEl) {
          svgEl.removeAttribute("width");
          svgEl.removeAttribute("height");
          svgEl.setAttribute("class", "h-full w-full");
          svgEl.setAttribute("preserveAspectRatio", "xMidYMid meet");
        }
        setSvg(svgEl?.outerHTML ?? "");
      });

    return () => {
      ignore = true;
    };
  }, [src]);

  useEffect(() => {
    const root = wrapRef.current;
    if (!root || !svg) return;

    const paths = Array.from(root.querySelectorAll("path"));
    paths.forEach((path, pathIndex) => {
      const length = path.getTotalLength();
      path.style.fill = featured ? "#050505" : "rgba(255,255,255,0)";
      path.style.fillOpacity = featured ? "0.02" : "1";
      path.style.stroke = featured ? "#050505" : "white";
      path.style.strokeWidth = featured ? "0.7" : "10";
      path.style.strokeLinecap = "round";
      path.style.strokeLinejoin = "round";
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.opacity = "0.95";
      path.style.shapeRendering = "geometricPrecision";
      path.style.transition = "none";
      path.getBoundingClientRect();
      const delay = Math.min(
        pathIndex * (featured ? 2.3 : 1.15) + index * 180,
        featured ? 1800 : 900,
      );
      path.style.transition = featured
        ? `stroke-dashoffset 10000ms cubic-bezier(.22,1,.36,1) ${delay}ms, fill-opacity 10000ms ease ${delay}ms`
        : `stroke-dashoffset 2800ms cubic-bezier(.22,1,.36,1) ${delay}ms`;
      path.style.strokeDashoffset = "0";
      if (featured) {
        path.style.fillOpacity = "1";
      }
    });
  }, [featured, index, replay, svg]);

  return (
    <div
      className={`group relative h-full min-h-0 overflow-hidden transition ${
        featured
          ? "rounded-md border border-white/15 bg-[#cfd6dc] shadow-2xl shadow-cyan-950/30"
          : "rounded-md border border-white/10 bg-black hover:border-cyan-300/45"
      }`}
    >
      <div
        ref={wrapRef}
        className={`absolute inset-0 flex items-center justify-center opacity-95 transition duration-300 group-hover:scale-105 ${
          featured ? "p-2" : "p-3 drop-shadow-[0_0_18px_rgba(103,232,249,0.35)]"
        }`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {!featured && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(34,211,238,0.1),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.38))]" />
      )}
      {!featured && (
        <div className="absolute left-3 top-3 rounded-md border border-cyan-300/30 bg-black/70 px-2.5 py-1 text-xs font-semibold text-cyan-100">
          {label}
        </div>
      )}
      <button
        type="button"
        onClick={() => setReplay((value) => value + 1)}
        className="absolute bottom-3 right-3 rounded-md border border-white/15 bg-white px-3 py-2 text-xs font-bold text-black shadow-xl transition hover:bg-cyan-200"
      >
        {featured ? "Replay 15s draw" : "Show animation"}
      </button>
    </div>
  );
}
