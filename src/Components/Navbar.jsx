import React from "react";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <nav className="sticky top-0 z-[1000] pointer-events-none">
        <motion.div
          className="h-[4px] md:h-[6px] origin-left bg-gradient-to-r from-[#00F0FF] to-[#B026FF] shadow-[0_0_10px_rgba(176,38,255,0.6)]"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>
    </>
  );
}
