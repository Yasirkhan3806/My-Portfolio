import React from "react";
import locationIcon from "../../assets/Icons/locationIcon.png";
import codingIcon from "../../assets/Icons/codingIcon.png";
import plusIcon from "../../assets/Icons/plusIcon.png";
import experianceIcon from "../../assets/Icons/EIcon.png";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

export default function MyCharacters() {
  const {ref,inView} = useInView({triggerOnce:false,threshold:0.2})
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const characters = [
    {
      img: locationIcon,
      title: "Kpk, Pakistan",
    },
    {
      img: codingIcon,
      title: "Full Stack Web Developer",
    },
    {
      img: plusIcon,
      title: "19 Years Old",
    },
    {
      img: experianceIcon,
      title: "1+ Years Of Project Experiance",
    },
  ];
  return (
    <>
      <motion.ul
      ref={ref}
        variants={listVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Reacts to scrolling
        className={`w-full flex flex-col gap-4 text-xl z-10`}
      >
        {characters.map((items) => {
          return (
            <motion.li variants={itemVariants} key={items} className={`flex gap-2`}>
              <img className="h-[24px]" src={items.img} alt="" />
              <p>{items.title}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </>
  );
}
