import React from "react";
import { motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

export default function MyName() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <>
      <motion.div
      ref={ref}

        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={inView?"visible":'hidden'}
        transition={{duration:0.5,delay:0.15}}
        className="w-[100vw] lg:w-[50vw] md:w-[50vw] z-10"
      >
        <h1 className={`text-4xl z-10`}>Hi, I'm</h1>
        <h1 className={`text-6xl  z-10 text-[#0dc5c5] font-bold`}>Yasir Khan</h1>
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }} // Scale up and down
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Smooth looping
        className={`bg-[#0dc5c5] opacity-5 h-[19rem] w-[19rem] rounded-full absolute top-[9rem] left-12 pointer-events-none`}
      ></motion.div>
    </>
  );
}
