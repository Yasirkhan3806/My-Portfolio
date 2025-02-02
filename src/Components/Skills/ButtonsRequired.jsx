import React from "react";

export default function ButtonsRequired() {
  return (
    <>
      <div className={`flex gap-6`}>
        <a
          href="src\Components\Yasir khan Resume.pdf"
          download="Yasir_Khan_Resume.pdf"
          type="download"
          class="animated-button"
        >
          <svg
            viewBox="0 0 24 24"
            class="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span class="text">Download Resume</span>
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
    </>
  );
}
