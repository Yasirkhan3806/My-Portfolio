import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MeteorBackground = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generateMeteors = () => {
      const newMeteors = Array.from({ length: 20 }).map((_, index) => ({
        id: index,
        left: Math.random() * 100 + "vw", // Random horizontal position
        duration: Math.random() * 3 + 2, // Random speed between 2s and 5s
        size: Math.random() * 4 + 2 + "px", // Random size
        opacity: Math.random() * 0.6 + 0.4, // Random opacity
      }));
      setMeteors(newMeteors);
    };

    generateMeteors();
    const interval = setInterval(generateMeteors, 5000); // Refresh meteors every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[305vh] bg-black overflow-hidden z-[-1]">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          initial={{ y: "-10vh", opacity: meteor.opacity }}
          animate={{ y: "305vh", opacity: 0 }}
          transition={{ duration: meteor.duration, ease: "linear",repeat:Infinity }}
          className="absolute h-[1rem] w-[1rem] bg-amber-400 rounded-full shadow-lg"
          style={{ left: meteor.left, width: meteor.size, height: meteor.size }}
        />
      ))}
    </div>
  );
};

export default MeteorBackground;
