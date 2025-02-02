import React, { useEffect, useState } from 'react';

function InteractiveBox() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX - 380, y: event.clientY - 380});
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="interactive-box h-[50rem] w-[50rem] opacity-70  rounded-full "
      style={{
        position:"fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents:'none',
        background: "radial-gradient(circle, #0DC5C520, transparent)",
      }}
    >
        {/* Outer Circle
        <div className={`h-[50rem] w-[50rem] bg-[#0dc5c520] absolute div-center rounded-full opacity-20`}>
        <div className={`h-[40rem] w-[40rem] bg-[#0dc5c520] absolute div-center rounded-full`}>
        <div className={`h-[30rem] w-[30rem] bg-[#0dc5c50e] absolute div-center rounded-full`}>
          <div className={`h-[20rem] w-[20rem] bg-[#0dc5c520] absolute div-center rounded-full`}>
            <div className={`h-[10rem] w-[10rem] bg-[#0dc5c520] absolute div-center rounded-full`}></div>
          </div>
        </div>
        </div>
        </div> */}
      {/* Mid Circle */}

      {/* Inner Circle */}
      
    </div>
  );
}

export default InteractiveBox;
