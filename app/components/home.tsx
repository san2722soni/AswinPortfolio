"use client";

interface HeaderProps{
  className: string
};

export const Header:React.FC<HeaderProps> = ({className}) => {
  return (
    <div className="mx-auto flex min-h-[90vh] w-full max-w-7xl flex-col justify-center gap-10 px-6 pt-28 lg:flex-row lg:items-center lg:px-10">
      <div className="max-w-3xl">
        <p className="mb-5 w-fit rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-cyan-200">
          Full-Stack Developer | Systems, CLI Tooling & Production Workflows
        </p>
        <h1 className={`text-4xl font-bold leading-tight text-white md:text-6xl ${className}`}>
          I build web apps, backend systems, and terminal-first workflows.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
          Recent work includes C++ game engines, Fastify APIs, Redis runtime
          state, FlatBuffers protocols, Next.js dashboards, Linux deployments,
          PM2/Nginx operations, Cloudflare rules, and Kibana-backed debugging.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#portfolio" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200">
            View Projects
          </a>
          <a href="#services" className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
            Skills & Ops
          </a>
          <a href="#contact" className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">
            Contact
          </a>
        </div>
        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {["C++ Engine", "Fastify APIs", "Linux/PM2", "Load Tests"].map((item) => (
            <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-neutral-200">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full max-w-md overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-cyan-950/30">
        <video
          className="aspect-video w-full rounded object-cover"
          id="vdo"
          loop
          autoPlay
          muted
        >
          <source src="final.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
