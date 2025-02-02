import React, { useEffect, useState } from "react";

export default function Navbar() {


  return (
    <>
      <nav className={`sticky top-0 glassmorphism`}>
        <ul
          id="main-list"
          className={`flex justify-between items-center w-full   h-[15vh] p-4 text-xl transition-all duration-300`}
        >
          <li>Yasir Khan</li>
          <li>
            <ul className="flex gap-3">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
              <button>darkMode</button>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
