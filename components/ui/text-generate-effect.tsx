"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  start = true,
  delay = 0,
  staggerDelay = 0.2,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  start?: boolean;
  delay?: number;
  staggerDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    if (!start) return;

    const timer = window.setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(staggerDelay),
        }
      );
    }, delay * 1000);

    return () => window.clearTimeout(timer);
  }, [animate, delay, duration, filter, staggerDelay, start]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
            className="text-inherit opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-lg leading-snug tracking-wide text-inherit md:text-2xl">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
