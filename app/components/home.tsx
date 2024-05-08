"use client";
import Typewriter from "typewriter-effect";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

interface HeaderProps{
  className: string
};

export const Header:React.FC<HeaderProps> = ({className}) => {
  return (
    <div className={`w-full lg:h-[90vh] h-2/3 flex lg:flex-row flex-col lg:justify-evenly lg:items-center items-start justify-end`}>
          <h1 className={`lg:w-1/2 w-5/6 lg:text-5xl md:text-3xl text-[27px] flex lg:mb-0 mb-20 relative lg:left-0 left-10`}>
            <span className={`font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mr-[10px] ${className}`}>I'm a </span>
            <a className={`font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 underline underline-offset-8 ${className}`}>
              <Typewriter
                options={{
                  strings: [
                    '"DEVELOPER"',
                    '"PROGRAMMER"',
                    '"ENGINEER"',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
              />
            </a>
          </h1>
      <a><video
        width="800"
        className=" z-10 rounded-lg"
        id="vdo"
        loop
        autoPlay
        muted
      >
        <source src="final.mp4" type="video/mp4" />
      </video>
      </a>
    </div>
  );
}
