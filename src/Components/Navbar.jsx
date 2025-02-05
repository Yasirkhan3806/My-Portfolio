import React from "react";
import { motion, useScroll } from "motion/react";

export default function Navbar() {
  const {scrollYProgress} = useScroll()
  return (
    <>
      <nav className={`sticky top-0 glassmorphism z-[1000]`}>
     
        {/* <motion.ul
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          id="main-list"
          className={`flex justify-between items-center w-full  h-[15vh] p-4 text-xl transition-all duration-300`}
        >
          <li>Yasir Khan</li>
          <li>
            <ul className="flex gap-3">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
              <button>darkMode</button>
            </ul>
          </li>
        </motion.ul> */}
        <motion.div className={`bg-[#0dc5c5] h-[6px] origin-left`} style={{scaleX:scrollYProgress}}></motion.div>
      </nav>
    </>
  );
}
