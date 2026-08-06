"use client";

import { motion } from "motion/react";

const writeStrokes = [
  {
    d: "M78 262 C116 235 155 168 205 70 C188 140 176 214 171 314",
    delay: 0.15,
    duration: 1.35,
  },
  {
    d: "M88 246 C140 217 195 199 250 188",
    delay: 0.85,
    duration: 1.05,
  },
  {
    d: "M214 195 C238 160 272 170 252 205 C236 232 266 232 292 207 C316 184 336 186 322 216 C314 236 344 230 365 207",
    delay: 1.55,
    duration: 1.6,
  },
  {
    d: "M311 262 C347 230 382 156 426 70 C410 138 398 220 392 318",
    delay: 2.75,
    duration: 1.35,
  },
  {
    d: "M322 246 C376 217 430 200 484 190",
    delay: 3.4,
    duration: 1.0,
  },
  {
    d: "M430 194 C456 171 480 176 466 208 C459 226 486 229 505 207 C526 183 550 190 532 222 C524 239 550 237 576 213",
    delay: 4.05,
    duration: 1.45,
  },
  {
    d: "M78 315 C184 268 360 262 584 270",
    delay: 4.8,
    duration: 1.15,
  },
];

export function AnimatedSignatureSvg({
  src = "/signature.svg",
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 600 400"
        className="h-full w-full overflow-visible drop-shadow-[0_0_28px_rgba(255,255,255,0.18)]"
        role="img"
        aria-label="Aswin Anand signature being written"
      >
        <defs>
          <mask id="signature-write-mask" maskUnits="userSpaceOnUse">
            <rect width="600" height="400" fill="black" />
            {writeStrokes.map((stroke) => (
              <motion.path
                key={stroke.d}
                d={stroke.d}
                fill="none"
                stroke="white"
                strokeWidth="54"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: stroke.duration,
                  delay: stroke.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
            <motion.rect
              width="600"
              height="400"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 6.0, ease: "easeOut" }}
            />
          </mask>
        </defs>

        <image
          href={src}
          width="600"
          height="400"
          preserveAspectRatio="xMidYMid meet"
          mask="url(#signature-write-mask)"
          className="brightness-0 invert"
        />
        <motion.circle
          r="5"
          fill="white"
          initial={{ opacity: 0, cx: 78, cy: 262 }}
          animate={{
            opacity: [0, 1, 1, 0],
            cx: [78, 205, 292, 426, 576, 584],
            cy: [262, 70, 207, 70, 213, 270],
          }}
          transition={{ duration: 5.8, delay: 0.12, ease: "easeInOut" }}
          className="drop-shadow-[0_0_14px_rgba(255,255,255,0.85)]"
        />
      </svg>
    </div>
  );
}
