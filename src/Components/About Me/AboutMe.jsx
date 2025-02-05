import React from "react";
import MyName from "./MyName";
import MyCharacters from "./MyCharacters";
import Links from "./Links";
import Skills from "../Skills/Skills";

export default function AboutMe() {
  return (
    <>
      <div className={`overflow-x-hidden w-[95vw] flex flex-col md:flex-row lg:flex-row justify-center items-center md:pl-26 lg:pl-26 lg:h-[100vh] md:h-[100vh] h-[125vh] z-10 `}>
        <div className={`md:w-[48vw] lg:w-[48vw] flex flex-col  pl-[6rem] md:pl-0 lg:pl-0 lg:pt-8 items-center justify-stretch gap-6`}>
          <MyName />
        <MyCharacters/>
        <Links/>
        </div>
        <div className={`w-[100vw] md:w-[48vw] lg:w-[48vw] pl-[3rem] md:pl-0 lg:pl-0 pt-8`}>
          <Skills/>
        </div>
      </div>
    </>
  );
}
