import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function KeySkills() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

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
      <div ref={ref} className={` flex flex-col gap-5 w-[36vw] md:w-[40vw]`}>
        <h2 className={`text-2xl`}>Keys Skills</h2>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Reacts to scrolling
          className={`flex flex-wrap  gap-2`}
        >
          {skills.map((skill) => {
            return (
              <motion.li
                key={skill}
                variants={itemVariants}
                className="py-3 px-4 bg-[#0dc5c517] rounded-full"
              >
                {skill}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </>
  );
}
