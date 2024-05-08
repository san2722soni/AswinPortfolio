"use client";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

import Navbar from "./components/navbar";
import { Header } from "./components/home";
import { Spotlight } from "@/components/ui/Spotlight";
import { About } from "./components/About";
import { Projects } from "./projects";
import { Services } from "./components/services";
import { Testimonial } from "./components/testimonial";
import { Form } from "./components/box";
import { Footer } from "./components/footer";
import { Gallery } from "./components/gallery";
export default function Home() {
  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <span className="z-[9999]">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
        />
      </span>
      <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]" id="home">
        <Navbar name="name" description="desc" />
        <div className="lg:h-screen h-[90vh] w-full overflow-x-hidden flex relative">
          <Spotlight
            className="lg:-top-7 lg:left-32 md:left-96 md:-top-20 left-32 top-[-4rem] w-[170%]"
            fill="white"
          />
          <Header className={""} />
        </div>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Projects />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        {/* <section id="testimonial">
          <Testimonial />
        </section> */}
        <section id="contact">
        <Form />
        </section>
        <Footer />
      </div>
    </>
  );
}

//
// You see the polished software, I write the code that makes it shine.
