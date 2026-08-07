import Link from "next/link";
import { VideoProjects } from "@/components/VideoProjects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto flex w-[88vw] max-w-none items-center justify-between py-6 lg:w-[70vw]">
        <Link
          href="/"
          className="hero-mono rounded border border-[#233554] px-3 py-2 text-xs font-semibold text-[#8892b0] transition hover:border-cyan-300/40 hover:text-cyan-100"
        >
          Back home
        </Link>
      </div>
      <section id="portfolio">
        <VideoProjects mode="all" />
      </section>
    </main>
  );
}
