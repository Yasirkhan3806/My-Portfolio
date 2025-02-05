import React,{useState} from "react";
import myPicture from "../../assets/Pictures/myPicBgRe.png";
import { motion } from "framer-motion";

export default function Contact() {
  const [animationState, setAnimationState] = useState(false);
  return (
    <>
      <h1 className={`text-6xl text-center font-bold`}>
        Lets Get In <span className={`text-[#0dc5c5]`}>Touch</span>
      </h1>
      <div className={`flex flex-col md:flex-row lg-flex-row gap-4 p-4`}>
        <div className={`pt-14 flex flex-col gap-4  relative`}>
          <p className={`w-full md:w-[60vw] lg:w-[60vw] leading-10 text-xl`}>
            I’m Yasir Khan, a computer science undergraduate at the University
            of Peshawar with a focus on web development. I specialize in React,
            Tailwind CSS, Firebase, and Node.js, building full-stack
            applications, real-time chat systems, and video call integrations. I
            enjoy solving DSA problems on LeetCode and constantly improving my
            coding skills. My projects range from frontend redesigns to Three.js
            simulations. I'm always open to learning and working on new ideas.
            Let’s connect!
          </p>
          <div className="relative">
          <motion.button
        className="z-10 px-4 py-2 text-white border-2 border-[#0dc5c5] rounded-lg relative"
        onMouseEnter={() => setAnimationState(true)} // Start animation
        onMouseLeave={() => setAnimationState(false)} // Reset after swosh
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back To Top
      </motion.button>
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 z-[1] rounded-lg ${animationState?'swosh-animation':''}`}
      ></div>
          </div>
        </div>
        <div className={''}>
          <img className={``} src={myPicture} alt="" />
        </div>
      </div>
    </>
  );
}
