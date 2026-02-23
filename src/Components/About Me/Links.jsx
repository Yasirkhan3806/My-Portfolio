import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import default styles

import githubIcon from "../../assets/Icons/githubIcon.png";
import linkedinIcon from "../../assets/Icons/linkedinIcon.png";
import gmailIcon from "../../assets/Icons/gmailIcon.png";
import whatsAppIcon from "../../assets/Icons/whatsappIcon.png";

export default function Links() {
  const imgsArray = [
    {
      title: "GitHub",
      img: githubIcon,
      link: "https://github.com/Yasirkhan3806",
    },
    {
      title: "LinkedIn",
      img: linkedinIcon,
      link: "https://www.linkedin.com/in/yasir-khan-ba8976316",
    },
    {
      title: "Gmail",
      img: gmailIcon,
      link: "https://mail.google.com/mail/u/0/?to=yk5645123@gmail.com&fs=1&tf=cm",
    },
    {
      title: "WhatsApp",
      img: whatsAppIcon,
      link: "https://wa.me/923369016582",
    },
  ];

  return (
    <ul className="flex gap-6 w-full px-4 md:px-0 mt-2 z-10 relative">
      {imgsArray.map((item, index) => (
        <li key={index}>
          <Tippy content={item.title} placement="bottom" animation="shift-away">
            <a
              className="glass-panel glass-panel-hover flex justify-center items-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
            >
              <img className="h-[22px] transition-all duration-300" src={item.img} alt={item.title} style={{ filter: "brightness(0) invert(1)" }} />
            </a>
          </Tippy>
        </li>
      ))}
    </ul>
  );
}
