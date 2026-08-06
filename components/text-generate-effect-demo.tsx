"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words =
  "Full-stack software engineer building dependable product systems: APIs, dashboards, developer tools, deployment workflows, and AI-assisted flows that move from rough requirements to demo-safe production proof for client, company, and partner-led work.";

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
