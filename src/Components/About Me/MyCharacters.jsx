import React from "react";
import locationIcon from '../../assets/Icons/locationIcon.png';
import codingIcon from '../../assets/Icons/codingIcon.png';
import plusIcon from '../../assets/Icons/plusIcon.png';
import experianceIcon from '../../assets/icons/experianceIcon.png'

export default function MyCharacters() {

  const characters = [
    {
      img: locationIcon,
      title: "Kpk, Pakistan",
    },
    {
      img:codingIcon ,
      title: "Full Stack Web Developer",
    },
    {
      img: plusIcon,
      title: "19 Years Old",
    },
    {
      img: experianceIcon,
      title: "1+ Years Of Project Experiance",
    },
  ];
  return (
    <>
      <ul className={`w-full flex flex-col gap-4 text-xl`}>
        {characters.map((items) => {
            return(
          <li className={`flex gap-2`}>
            <img className="h-[24px]" src={items.img} alt="" />
            <p>{items.title}</p>
          </li>)
        })}
      </ul>
    </>
  );
}
