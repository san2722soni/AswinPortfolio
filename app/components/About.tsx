"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
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
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="w-fit text-lg px-4 md:text-xl lg:text-2xl text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto lg:mb-14"
        >
          {shouldLoad && (
            <Highlight className="">
              <a className="font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-200">
                "Dynamic Full-Stack Developer with 2+ years of experience in
                Software Engineering Technologies, prioritizing robust solutions
                over UI/UX design. Known for problem-solving abilities and a
                keen eye for detail. Excited to collaborate on compelling visual
                content projects."
              </a>
            </Highlight>
          )}
        </motion.h1>
      </HeroHighlight>
      <div className="w-fit mx-auto mb-[100px]">
        <PinContainer title="<Aswin/>" href="">
          <div className="flex basis-full flex-col p-4 sm:basis-1/2 lg:w-[25rem] w-[13rem] lg:h-[25rem] h-[13rem] z-1 relative group overflow-visible">
            <h2 className="w-fit py-2 px-4 rounded-md bg-[#202020] text-white text-[2px] lg:group-hover:text-lg group-hover:text-[12px] opacity-50 absolute top-[50%] left-[40%] group-hover:left-[-95%] group-hover:top-[10%] transition-all duration-100 ease-in-out group-hover:opacity-100">
              Name: Aswin Anand
            </h2>
            <h2 className="w-fit py-2 px-4 rounded-md bg-[#202020] text-white text-[2px] lg:group-hover:text-lg group-hover:text-[14px] opacity-50 absolute top-[50%] left-[40%] group-hover:left-[-95%] group-hover:top-[50%] transition-all duration-500 ease-in-out group-hover:opacity-100">
              Date Of Birth: 19/12/2006
            </h2>
            <h2 className="w-fit py-2 px-4 rounded-md bg-[#202020] text-white text-[2px] lg:group-hover:text-lg group-hover:text-[14px] opacity-50 absolute top-[50%] left-[40%] group-hover:left-[-95%] group-hover:top-[90%] transition-all duration-[1000ms] ease-in-out group-hover:opacity-100">
              Email: invictusasw7@gmail.com
            </h2>
            <h2 className="w-fit py-2 px-4 rounded-md bg-[#202020] text-white text-[2px] lg:group-hover:text-lg group-hover:text-[14px] opacity-50 absolute top-[50%] right-[40%] group-hover:right-[-60%] group-hover:top-[10%] transition-all duration-[100ms] ease-in-out group-hover:opacity-100">
              Hire Me
            </h2>
            <button className="w-fit py-2 px-4 rounded-md bg-[#202020] text-white text-[2px] lg:group-hover:text-lg group-hover:text-[14px] opacity-50 absolute top-[50%] right-[40%] group-hover:right-[-60%] group-hover:top-[50%]  transition-all duration-[500ms] ease-in-out group-hover:opacity-100">
              <a href="https://drive.google.com/file/d/1ibkxmcMT5-4oADko9CkZUlDlHO9dWA1V/view?usp=sharing" target="_blank">Downlaod CV</a>
            </button>
            <button className="w-fit py-2 px-4 rounded-md bg-[#202020] text-white text-[2px] lg:group-hover:text-lg group-hover:text-[14px] opacity-50 absolute top-[50%] right-[40%] group-hover:right-[-60%] group-hover:top-[90%]  transition-all duration-[1000ms] ease-in-out group-hover:opacity-100">
              <a href="#contacts">Phone: 985252007</a>
            </button>
            <Image
              src={"/profile.jpeg"}
              width={400}
              height={400}
              className="rounded-full aspect-square object-cover filter grayscale transition duration-300 ease-in-out hover:filter-none border-2 border-gray-300 cursor-pointer hover:border-blue-500 hover:border-3 "
              alt="profile"
            />
          </div>
        </PinContainer>
      </div>
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
