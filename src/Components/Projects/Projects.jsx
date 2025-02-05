import React from "react";
import bitCoderLabsPicture from "../../assets/Pictures/festarPicture.png";
import festarPicture from "../../assets/Pictures/bitCoderLabsPicture.png";
import interneePicture from "../../assets/Pictures/interneePicture.png";
import earthandmoonrotation from "../../assets/Pictures/EarthAndMoonAnimation.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const projects = [
    {
      Title: "Festar Meetup",
      SubTitle: "Virtual Hosting Platform",
      img: festarPicture,
      Description:
        "Fester Meetup is an innovative virtual meeting platform designed to provide seamless and efficient communication. Built with React, Tailwind CSS, Firebase, and AgoraRTC, Fester offers high-quality video conferencing and real-time chat functionality, making online collaboration effortless.",
      techStack: ["ReactJs", "TailwindCss", "Firebase", "AgoraRTC"],
      link: "https://fester-meetup.web.app",
    },
    {
      Title: "BitCodersLab Clone",
      SubTitle: "BitCodersLabs.com is a software house website",
      img: bitCoderLabsPicture,
      Description:
        "The BitCodersLab Clone is a web-based platform designed to replicate the functionality and user experience of BitCodersLab. This project showcases my ability to develop interactive and scalable learning platforms.",
      techStack: ["HTML", "CSS", "Vanilla Javascript"],
      link: "https://bit-coder-labs-clone.vercel.app",
    },
    {
      Title: "Internee.pk Redesign",
      SubTitle: "Internee.pk is an internship provider",
      img: interneePicture,
      Description:
        "The Internee.pk Redesign project was a comprehensive effort to enhance the user interface (UI) and user experience (UX) of the platform while improving its overall performance. The primary goal was to create a modern, intuitive, and visually appealing design that aligns with industry standards and improves accessibility for users.",
      techStack: ["ReactJs", "CSS"],
      link: "https://internee-redesign.web.app",
    },
    {
      Title: "3D Animation",
      SubTitle: "A 3D Space Simulation",
      img: earthandmoonrotation,
      Description:
        "This project is a realistic 3D simulation of the Earth and Moon rotation, built using Three.js. The goal was to create an interactive, visually stunning representation of celestial motion, showcasing my skills in 3D rendering, physics-based animations, and WebGL development.",
      techStack: ["JavaScript", "ThreeJs", "CSS"],
      link: "https://three-beta-two.vercel.app",
    },
  ];

  return (
    <div className="p-4 z-30">
      <h1 className={`text-6xl font-bold mb-8 text-center`}>Projects</h1>
      <div className={`flex flex-col gap-12`}>
        {projects.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          return (
            <motion.div ref={ref} key={index} className={`flex flex-col lg:flex-row gap-6 p-4`}>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.2 * index },
                  },
                }}
                className={`w-[95vw] lg:w-[50vw] border-2 border-[#0DC5C5] rounded-xl shadow-lg`}
              >
                <img
                  className={`rounded-xl`}
                  src={project.img}
                  alt={project.Title}
                />
              </motion.div>

              <div
                className={`w-[95vw] lg:w-[50vw] flex flex-col justify-evenly gap-4 relative`}
              >
                <span>
                  <h3 className={`text-5xl text-[#0DC5C5] font-bold`}>
                    {project.Title}
                  </h3>
                  <h4 className={`text-xl text-[#087c80b7] font-semibold`}>
                    {project.SubTitle}
                  </h4>
                </span>
                <motion.div
                  variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                  }}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 * index,
                    ease: "easeIn",
                  }}
                  className={`absolute top-0 lg:top-4 left-0 right-0 bottom-4 bg-[#0DC5C5] h-[5rem]`}
                ></motion.div>
                <p>{project.Description}</p>
                <motion.ul
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.4, // Delay between each child animation
                      },
                    },
                  }}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"} // Reacts to scrolling
                  transition={{
                    duration: 0.6,
                    delay: 0.6 * index,
                    ease: "easeIn",
                  }}
                  className={`flex flex-wrap gap-2`}
                >
                  {project.techStack.map((skill, i) => (
                    <motion.li
                    variants={{ hidden: { y: 100, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { type: "spring", stiffness: 100 },
                    },}}
                      key={i}
                      className={`py-3 px-4 bg-[#0dc5c517] rounded-full`}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
                <a
                    href={project.link}
                    className="animated-button w-52"
                    target="blank"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      class="arr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">Show Project</span>
                    <span class="circle"></span>
                    <svg
                      viewBox="0 0 24 24"
                      class="arr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
