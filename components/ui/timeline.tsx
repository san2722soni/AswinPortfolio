"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { TypingHeading } from "@/components/TypingHeading";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  heading,
  description,
  intro,
  className,
}: {
  data: TimelineEntry[];
  heading?: string;
  description?: string;
  intro?: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(Math.max(rect.height - 72, 0));
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={className ?? "w-full font-sans"}
      ref={containerRef}
    >
      {(heading || description || intro) && (
        <div className="max-w-7xl mx-auto pb-6 px-0">
          {heading && (
            <h2 className="hero-display text-3xl font-bold text-white md:text-5xl">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-300 md:text-base">
              {description}
            </p>
          )}
          {intro}
        </div>
      )}

      <div ref={ref} className="relative mx-auto w-full max-w-none overflow-hidden pb-8 pl-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative grid gap-4 py-5 lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(520px,42%)_minmax(0,1fr)] 2xl:grid-cols-[minmax(560px,42%)_minmax(0,1fr)]"
          >
            <div className="relative z-20 flex min-h-12 items-center gap-3 pl-12 sm:gap-4 sm:pl-16 lg:pl-24">
              <div className="absolute left-[10px] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_0_20px_rgba(34,211,238,0.18)] sm:left-[18px] dark:bg-white">
                <div className="h-4 w-4 rounded-full border border-cyan-300/70 bg-cyan-300/20" />
              </div>
              <TypingHeading
                as="h3"
                text={item.title}
                delayMs={240}
                durationMs={1800}
                className="hero-mono text-[12px] font-black leading-5 text-white sm:text-[14px] sm:leading-6 md:text-base xl:whitespace-nowrap xl:text-lg"
              />
            </div>

            <div className="relative w-full min-w-0 pl-12 pr-0 sm:pl-16 lg:pl-0">
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[26px] top-0 w-[5px] overflow-hidden rounded-full bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_90%,transparent_100%)] sm:left-[34px]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[5px] rounded-full bg-gradient-to-t from-cyan-300 via-blue-500 to-transparent from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  );
};
