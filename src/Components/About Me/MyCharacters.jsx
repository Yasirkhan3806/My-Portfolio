import React from "react";
import locationIcon from "../../assets/Icons/locationIcon.png";
import codingIcon from "../../assets/Icons/codingIcon.png";
import plusIcon from "../../assets/Icons/plusIcon.png";
import experianceIcon from "../../assets/Icons/EIcon.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MyCharacters() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const characters = [
    {
      img: codingIcon,
      title: "Full Stack Web Developer",
    },
    {
      img: experianceIcon,
      title: "1+ Years of Industry Experience",
    },
    {
      img: locationIcon,
      title: "KPK, Pakistan",
    },
    {
      img: plusIcon,
      title: "20 Years Old",
    },
  ];

  return (
    <motion.ul
      ref={ref}
      variants={listVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full flex flex-wrap gap-4 text-sm md:text-base z-10 px-4 md:px-0"
    >
      {characters.map((item, i) => (
        <motion.li
          variants={itemVariants}
          key={i}
          className="glass-panel glass-panel-hover flex gap-3 items-center py-3 px-5 rounded-2xl flex-grow md:flex-grow-0"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00F0FF]/20 to-[#B026FF]/20 flex justify-center items-center border border-white/10">
            <img className="h-4 brightness-200" src={item.img} alt="" style={{ filter: "brightness(0) invert(1)" }} />
          </div>
          <p className="font-medium text-gray-200">{item.title}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
