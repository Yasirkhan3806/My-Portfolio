import React from "react";
import MyName from "./MyName";
import MyCharacters from "./MyCharacters";
import Links from "./Links";
import Skills from "../Skills/Skills";

export default function AboutMe() {
  return (
    <>
      <div className={`w-full flex justify-around px-26 h-[60vh] z-10 `}>
        <div className={`w-[50vw] flex flex-col pt-8 items-center justify-stretch gap-6`}>
          <MyName />
        <MyCharacters/>
        <Links/>
        </div>
        <div className={`w-[50vw] pt-8`}>
          <Skills/>
        </div>
      </div>
    </>
  );
}
