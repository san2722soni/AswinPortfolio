import CountUp from "react-countup";
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

import { FaHtml5 } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

interface SkillCardProps {
  desc: string;
  limit: number;
  duration: string;
  fill: number;
  icon: string | null;
}

const SkillCard: React.FC<SkillCardProps> = ({
  desc,
  limit,
  duration,
  fill,
  icon,
}) => {
  const [showSkill, setShowSkill] = useState(false);

  return (
    <>
      {/* @ts-ignore */}
      <ScrollTrigger onEnter={() => setShowSkill(true)}>
        {showSkill && (
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number">
                  <IconComponent iconName={`${icon}`} />
                  <div>
                    {showSkill && (
                      <CountUp start={0} end={limit} duration={3} delay={1} />
                    )}
                    %
                  </div>
                </div>
              </div>
            </div>
            <span className="html-circle-skill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle
                  id="html-circle"
                  cx="80"
                  cy="80"
                  r="70"
                  stroke-linecap="round"
                  style={{
                    animationDuration: `${duration}`,
                    //@ts-ignore
                    "--dash-offset": fill,
                  }}
                />
              </svg>
            </span>
          </div>
        )}
      </ScrollTrigger>
    </>
  );
};
export default SkillCard;

interface IconeComponentProps {
  iconName: string;
}

const IconComponent: React.FC<IconeComponentProps> = ({ iconName }) => {
  switch (iconName) {
    case "HTML":
      return (
        <div className="flex flex-row justify-center items-center">
          <FaHtml5 className="text-4xl text-white" />
          <FaCss3Alt className="text-4xl text-white" />
        </div>
      );
    case "CPP":
      return <TbBrandCpp className="text-4xl text-white" />;
    case "TS":
      return (
        <div className="flex flex-row justify-center items-center">
          <SiJavascript className="text-3xl text-white" />
          <TbBrandTypescript className="text-4xl text-white" />
        </div>
      );
    case "REACT":
      return (
        <div className="flex flex-row justify-center items-center">
          <SiNextdotjs className="text-3xl text-white mx-1" />
          <FaReact className="text-3xl text-white" />
        </div>
      );
    case "REDIS":
      return (
        <div className="flex flex-row justify-center items-center">
          <SiPrisma className="text-4xl text-white mx-1" />
          <SiRedis className="text-4xl text-white" />
        </div>
      );
    case "NODE":
      return (
        <div className="flex flex-row justify-center items-center">
          <FaNodeJs className="text-4xl text-white mx-1" />
          <FaCloud className="text-4xl text-white" />
        </div>
      );
    default:
      return null;
  }
};
