import React from "react";
import { motion } from "motion/react";

export default function MyName() {
  return (
    <>
      <div className="w-full z-10">
        <h1 className={`text-5xl z-10`}>Hi, I'm</h1>
        <h1 className={`text-6xl z-10 text-[#0dc5c5] font-bold`}>Yasir Khan</h1>
      </div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }} // Scale up and down
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth looping
        className={`bg-[#0dc5c5] opacity-5 h-[19rem] w-[19rem] rounded-full absolute top-[9rem] left-12`}
      ></motion.div>
    </>
  );
}
