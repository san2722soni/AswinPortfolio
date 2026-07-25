"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import { HeroHighlight, Highlight } from "@/components/hero-highlight";

export function About() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to a certain threshold, for example, halfway down the page
      if (window.scrollY > window.innerHeight / 2 / 2) {
        setShouldLoad(true);
        // Once the component is loaded, remove the scroll event listener to prevent unnecessary checks
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <HeroHighlight>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="mx-auto max-w-3xl"
          >
            {shouldLoad && (
              <Highlight>
                <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                  Full-stack developer building practical systems from UI to
                  production runtime.
                </h2>
              </Highlight>
            )}
            <p className="mt-6 text-base leading-8 text-neutral-300 md:text-lg">
              I work across Next.js, Node/Fastify, MongoDB/Redis, C++, Linux,
              SSH, PM2, Nginx, AWS, Cloudflare, Docker, Kubernetes, and ELK
              style monitoring. My strongest recent work is not just landing
              pages: it includes engines, dashboards, APIs, runbooks, smoke
              tests, and load-test notes.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["20+ projects shipped", "CLI-first debugging", "Production docs"].map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm text-neutral-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </HeroHighlight>

        <div className="mx-auto w-full max-w-sm">
          <PinContainer title="<Aswin/>" href="#contact">
            <div className="relative h-[30rem] w-[20rem] overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-3">
              <Image
                src="/image.png"
                width={720}
                height={1280}
                className="h-full w-full rounded object-cover object-center grayscale transition duration-300 hover:grayscale-0"
                alt="Aswin Anand"
                priority
              />
              <div className="absolute inset-x-3 bottom-3 rounded bg-black/75 p-4 backdrop-blur">
                <p className="text-lg font-semibold text-white">Aswin Anand</p>
                <p className="mt-1 text-sm text-neutral-300">
                  Full-Stack Developer | Pune, India
                </p>
                <div className="mt-3 flex gap-2">
                  <a href="#contact" className="rounded bg-white px-3 py-2 text-xs font-semibold text-black">
                    Contact
                  </a>
                  <a href="https://drive.google.com/file/d/1ibkxmcMT5-4oADko9CkZUlDlHO9dWA1V/view?usp=sharing" target="_blank" className="rounded border border-white/20 px-3 py-2 text-xs font-semibold text-white">
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </PinContainer>
        </div>
      </section>
    </>
  );
}

// <LampContainer>
//   <motion.h1
//     initial={{ opacity: 0.5, y: 100 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{
//       delay: 0.3,
//       duration: 0.8,
//       ease: "easeInOut",
//     }}
//     className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl z-50"
//   >
// {/* </motion.h1>
// </LampContainer> */}
