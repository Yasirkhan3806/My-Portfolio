import React, { useEffect, useState } from 'react';

function InteractiveBox() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX - 380, y: event.clientY - 380 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="interactive-box h-[50rem] w-[50rem] opacity-40 rounded-full z-[-1]"
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        pointerEvents: 'none',
        background: "radial-gradient(circle, rgba(176,38,255,0.15) 0%, rgba(0,240,255,0.05) 50%, transparent 80%)",
        transition: "top 0.1s ease-out, left 0.1s ease-out"
      }}
    >
    </div>
  );
}

export default InteractiveBox;
