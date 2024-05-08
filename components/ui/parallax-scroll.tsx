"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const half = Math.ceil(images.length / 2);

  const secondPart = images.slice(0, half);
  const thirdPart = images.slice(half);

  return (
    <div className="h-[37rem] overflow-hidden w-full">
      <div
        className={cn(
          "h-full items-start box-content pb-[17px] overflow-y-scroll w-full",
          className
        )}
        ref={gridRef}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-start  max-w-7xl mx-auto gap-10 py-40 px-10"
          ref={gridRef}
        >
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                <iframe
                  src={el}
                  allow="autoplay"
                  className="lg:w-[600px] lg:h-[400px] h-[270px] w-[330px] rounded-md"
                ></iframe>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                <iframe
                  src={el}
                  allow="autoplay"
                  className="lg:w-[600px] lg:h-[400px] h-[300px] w-[400px] rounded-md"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
