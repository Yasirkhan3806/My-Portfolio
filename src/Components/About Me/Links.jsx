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
    <ul className="flex gap-4 w-full">
      {imgsArray.map((item, index) => (
        <li key={index}>
          <Tippy content={item.title}>
            <a className="cursor-pointer" target="_blank" rel="noopener noreferrer" href={item.link}>
              <img className="h-[32px]" src={item.img} alt={item.title} />
            </a>
          </Tippy>
        </li>
      ))}
    </ul>
  );
}
