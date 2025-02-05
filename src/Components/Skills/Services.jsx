import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
console.log(inView)
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // ✅ Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const services = [
    "Full Stack Development",
    "Specialized In FrontEnd Development",
    "Web Design And Development",
  ];

  return (
    <div ref={ref}> {/* ✅ Attach ref to parent div */}
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // ✅ Reacts to scrolling
        className="flex flex-col gap-3"
      >
        {services.map((service) => (
          <motion.li
            key={service}
            variants={itemVariants}
            className="flex gap-2"
          >
            <span className="text-[#0DC5C5]">→</span>
            <p className="text-lg">{service}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
