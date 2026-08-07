"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words =
  "Full-stack product developer building dashboards, backend systems, and developer tools. I turn rough requirements into usable products with APIs, admin flows, deployment notes, and demo-safe proof.";

export default function TextGenerateEffectDemo({ start = true }: { start?: boolean }) {
  return (
    <TextGenerateEffect
      words={words}
      start={start}
      delay={0.35}
      duration={0.5}
      className="font-semibold [&_.mt-4]:mt-0 [&_.tracking-wide]:tracking-normal"
    />
  );
}
