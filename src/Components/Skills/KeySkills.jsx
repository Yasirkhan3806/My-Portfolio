import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function KeySkills() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const skills = [
    "JavaScript (ES6+)", "Python", "React.js", "Next.js", "Tailwind CSS",
    "Framer Motion", "Three.js", "Node.js", "Express.js", "FastAPI",
    "LangChain", "RAG", "PostgreSQL", "MongoDB", "Firebase", "Docker"
  ];

  return (
    <div ref={ref} className="flex flex-col gap-6 w-[100vw] lg:w-[36vw] md:w-[40vw] mt-8 md:mt-0 px-4 md:px-0 z-10">
      <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Capabilities Core</h2>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill) => {
          return (
            <motion.li
              key={skill}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="py-2.5 px-5 glass-panel rounded-full text-sm font-medium text-[#00F0FF] border border-[#00F0FF]/30 cursor-crosshair hover:bg-[#00F0FF]/10 transition-colors duration-300"
            >
              {skill}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
