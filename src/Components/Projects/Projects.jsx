import React from "react";
import bitCoderLabsPicture from "../../assets/Pictures/festarPicture.png";
import festarPicture from "../../assets/Pictures/bitCoderLabsPicture.png";
import interneePicture from "../../assets/Pictures/interneePicture.png";
import earthandmoonrotation from '../../assets/Pictures/EarthAndMoonAnimation.png'

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
      SubTitle: "Internee.pk is a internship provider",
      img: interneePicture,
      Description:
        "The Internee.pk Redesign project was a comprehensive effort to enhance the user interface (UI) and user experience (UX) of the platform while improving its overall performance. The primary goal was to create a modern, intuitive, and visually appealing design that aligns with industry standards and improves accessibility for users.",
      techStack: ["ReactJs", "CSS"],
      link: "https://internee-redesign.web.app",
    },
    {
      Title: "Earth And Moon Rotation",
      SubTitle: "A 3D Space Simulation",
      img: earthandmoonrotation,
      Description:
        "This project is a realistic 3D simulation of the Earth and Moon rotation, built using Three.js. The goal was to create an interactive, visually stunning representation of celestial motion, showcasing my skills in 3D rendering, physics-based animations, and WebGL development.",
      techStack: ["JavaScript", "ThreeJs","CSS"],
      link: "https://three-beta-two.vercel.app",
    },
  ];
  return (
    <>
      <div className="p-4 z-30">
        <h1 className={`text-6xl font-bold mb-8 text-center `}>Projects</h1>
        <div className={`flex flex-col gap-4 `}>
          {projects.map((project) => {
            return (
              <div className={` flex mt-4 gap-4 p-4`}>
                <div
                  className={`w-[50vw] z-20 border-2 border-[#0DC5C5] rounded-xl shadow-lg`}
                >
                  <img className={`rounded-xl`} src={project.img} alt="" />
                </div>
                <hr />
                <div className={`w-[50vw] flex flex-col justify-evenly gap-4`}>
                  <span>
                    <h3 className={`text-5xl text-[#0DC5C5] font-bold`}>
                      {project.Title}
                    </h3>
                    <h4 className={`text-xl text-[#087c80b7] font-semibold`}>
                      {project.SubTitle}
                    </h4>
                  </span>
                  <p className="">{project.Description}</p>
                  <ul className={`flex flex-wrap w-full gap-2`}>
                    {project.techStack.map((skill) => {
                      return (
                        <li className={`py-3 px-4 bg-[#0dc5c517] rounded-full`}>
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                  <hr />
                  <a href = {project.link}
                  className = "animated-button w-52"
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
