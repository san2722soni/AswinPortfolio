"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex  bg-black/[0.96] antialiased bg-grid-white/[0.02] min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative opacity-100 flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "65rem" }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-white via-transparent to-transparent text-white [--conic-position:from_360deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0  bg-black/[0.96] antialiased bg-grid-white/[0.02] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0  bg-black/[0.96] antialiased bg-grid-white/[0.02]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "65rem" }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto h-56 w-[30rem] bg-gradient-conic from-white via-transparent to-tranparent text-black [--conic-position:from_360deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0  bg-black/[0.96] antialiased bg-grid-white/[0.02] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0  bg-black/[0.96] antialiased bg-grid-white/[0.02] bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-white  opactiy-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "2rem" }}
          whileInView={{ width: "5rem" }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-gray-100   blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "65rem" }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-white  opactiy-50 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem]"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
