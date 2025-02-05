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
    </div>
  );
}

export default InteractiveBox;
