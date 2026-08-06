"use client";

import { useEffect, useRef, useState } from "react";

type TypingHeadingProps = {
  as?: "h1" | "h2" | "h3" | "p";
  text: string;
  className?: string;
  delayMs?: number;
  durationMs?: number;
};

export function TypingHeading({
  as: Tag = "h2",
  text,
  className = "",
  delayMs = 160,
  durationMs = 2600,
}: TypingHeadingProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLength(text.length);
      return;
    }

    let index = 0;
    setVisibleLength(0);
    const stepMs = Math.max(28, durationMs / Math.max(text.length, 1));
    let interval = 0;
    const startTimer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setVisibleLength(index);
        if (index >= text.length) window.clearInterval(interval);
      }, stepMs);
    }, delayMs);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(interval);
    };
  }, [delayMs, durationMs, started, text]);

  const visible = text.slice(0, visibleLength);
  const hidden = text.slice(visibleLength);

  return (
    <Tag className={className} aria-label={text}>
      <span ref={ref} aria-hidden="true">
        {visible}
        <span className="opacity-0">{hidden}</span>
      </span>
    </Tag>
  );
}
