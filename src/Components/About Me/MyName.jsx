import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MyName() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={inView ? "visible" : 'hidden'}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="w-[100vw] lg:w-[50vw] md:w-[50vw] z-10 relative"
      >
        <h1 className="text-3xl md:text-4xl text-gray-300 mb-2 tracking-wide font-light z-10">Hey, I'm</h1>
        <h1 className="text-6xl md:text-8xl font-bold z-10 cosmic-gradient-text drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] tracking-tighter">
          Yasir Khan
        </h1>
      </motion.div>

      {/* Background Cosmic Orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5rem] left-[-2rem] md:top-[-2rem] md:left-[5rem] w-64 h-64 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] rounded-full blur-[80px] pointer-events-none z-[-1]"
      />
    </div>
  );
}
