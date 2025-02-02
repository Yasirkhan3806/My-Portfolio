import React from "react";

export default function Services() {
  const services = [
    "Full Stack Development",
    "Specialized In FrontEnd Development",
    "Web Design And Development",
  ];
  return (
    <>
      <div>
        <ul className={`flex flex-col gap-3`}>
          {services.map((service) => {
            return (
              <li className={`flex gap-2`}>
                <span className={`text-[#0DC5C5]`}>→</span>
                <p className={`text-lg`}>{service}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
