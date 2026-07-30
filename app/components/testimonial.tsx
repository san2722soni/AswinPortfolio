"use client";

import { motion } from "framer-motion";
import {
  IconBriefcase,
  IconBuildingFactory2,
  IconCode,
  IconUserCheck,
} from "@tabler/icons-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const notes = [
  {
    title: "Company Product Work",
    name: "XENVOLT",
    text:
      "Built and maintained product work across SAMVIT, SAMVIT Pro, Randomizer, XENVOLT Site/Admin, and CHAKRA POC with sanitized demos for portfolio review.",
    icon: IconBuildingFactory2,
  },
  {
    title: "Senior-Guided Engineering",
    name: "Vineet Oli collaboration",
    text:
      "Worked on AnarchyV2, V-Dashboard/V-Server, and VCM with senior engineering guidance, focusing on implementation, debugging, systems thinking, and Linux-backed workflows.",
    icon: IconCode,
  },
  {
    title: "Client Delivery",
    name: "Independent client work",
    text:
      "Delivered websites and product interfaces for Auryvedic, Psych Learn, Dragstr, Eduford, The Intellect, RealViewGarden, and creator portfolio use cases.",
    icon: IconBriefcase,
  },
  {
    title: "Personal Engineering",
    name: "Curiosity-led builds",
    text:
      "Built Directors Chair and Halloween Calculator from practical ideas and curiosity, showing original workflow thinking beyond tutorial-style projects.",
    icon: IconUserCheck,
  },
];

export function Testimonial() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <motion.div
        className="mb-10 max-w-3xl"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
          Collaboration Notes
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Real work contexts, not placeholder testimonials.
        </h2>
        <p className="mt-5 text-base leading-8 text-neutral-300">
          These notes explain where the work came from: company product work,
          partner-guided engineering, client delivery, and personal projects.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {notes.map((note, index) => {
          const Icon = note.icon;
          return (
            <motion.article
              key={note.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-md border border-white/10 bg-white/[0.035] p-5"
            >
              <span className="inline-flex rounded-md border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-200">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {note.title}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{note.name}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{note.text}</p>
            </motion.article>
          );
        })}
      </div>

      <InfiniteMovingCards
        className="mt-10"
        items={notes.map((note) => ({
          quote: note.text,
          name: note.name,
          title: note.title,
        }))}
        direction="right"
        speed="slow"
      />
    </section>
  );
}
