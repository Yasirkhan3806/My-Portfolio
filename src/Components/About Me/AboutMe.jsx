import React from "react";
import MyName from "./MyName";
import MyCharacters from "./MyCharacters";
import Links from "./Links";
import Skills from "../Skills/Skills";

export default function AboutMe() {
  return (
    <>
      <div className={`overflow-hidden w-[100vw] h-[250vh] flex flex-col xl:flex-row justify-center items-center pr-18 md:pl-26 lg:pl-26 xl:h-[120vh] lg:h-auto md:h-auto p-2 z-10 gap-8 xl:gap-8`}>
        <div className={`md:w-[48vw] lg:w-[48vw] flex flex-col pl-[6rem] md:pl-0 lg:pl-0 lg:pt-8 xl:pt-8 items-center justify-stretch gap-6`}>
          <MyName />
          <div className="w-[100vw] lg:w-[50vw] md:w-[50vw] px-4 md:px-0 z-10 text-gray-300 text-lg leading-relaxed">
            Full Stack Web Developer with expertise in building production-grade applications across React, Next.js, and Node.js ecosystems. Proven track record of delivering AI-powered systems, RAG implementations, and large-scale automation solutions with measurable business impact.
          </div>
          <MyCharacters />
          <Links />
        </div>
        <div className={`w-[100vw] md:w-[48vw] lg:w-[48vw] pl-[3rem] md:pl-0 lg:pl-0 xl:pt-8 lg:pt-0`}>
          <Skills />
        </div>
      </div>
    </>
  );
}
