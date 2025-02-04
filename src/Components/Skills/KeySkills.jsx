import React from "react";
import { motion } from "motion/react";

export default function KeySkills() {
  const skills = [
    "JavaScript",
    "Python",
    "React.Js",
    "TailwindCss",
    "Firebase",
    "Three.Js",
    "NodeJs",
    "ExpressJs",
  ];
  return (
    <>
      <div className={` flex flex-col gap-5`}>
        <h2 className={`text-2xl`}>Keys Skills</h2>
        <motion.ul
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring",stiffness:100 }}
          className={`flex flex-wrap w-full gap-2`}
        >
          {skills.map((skill) => {
            return (
              <li className={`py-3 px-4 bg-[#0dc5c517] rounded-full`}>
                {skill}
              </li>
            );
          })}
        </motion.ul>
      </div>
    </>
  );
}
