import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Education() {
    const education = [
        {
            degree: "BS Computer Science",
            institution: "University of Peshawar",
            duration: "2023–2027",
            details: [
                "GPA: 3.98 / 4.00",
                "Concentrations: Full Stack Development & Agentic AI Development"
            ]
        }
    ];

    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <div className="p-4 z-30 mb-[8rem] flex flex-col items-center relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center cosmic-gradient-text tracking-tighter">Education Background</h1>

            {/* Decorative center line */}
            <div className="absolute left-[50%] top-[8rem] bottom-0 w-[2px] bg-gradient-to-b from-[#00F0FF]/30 via-[#B026FF]/30 to-transparent hidden lg:block z-0"></div>

            <div ref={ref} className="flex flex-col gap-12 w-[95vw] lg:w-[65vw] relative z-10">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, scale: 0.95, y: 30 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: { duration: 0.7, delay: 0.2 * index, type: "spring", damping: 20 },
                            },
                        }}
                        className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl flex flex-col gap-6 relative overflow-hidden group w-full lg:w-[80%] lg:self-end"
                    >
                        {/* Timeline Dot (Desktop) */}
                        <div className="absolute top-[3rem] -left-[18.2rem] w-6 h-6 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] shadow-[0_0_15px_#00F0FF] hidden lg:block z-20" />

                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 z-10">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#B026FF] transition-colors duration-300 tracking-tight">{edu.degree}</h3>
                                <h4 className="text-xl text-gray-300 font-medium mt-1">{edu.institution}</h4>
                            </div>
                            <span className="text-[#B026FF] font-bold text-sm md:text-base border border-[#B026FF]/30 bg-[#B026FF]/10 px-4 py-1.5 rounded-full w-max backdrop-blur-md">{edu.duration}</span>
                        </div>

                        <ul className="text-gray-300 flex flex-col gap-3 z-10 mt-2">
                            {edu.details.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start md:items-center text-sm md:text-base">
                                    <span className="text-[#00F0FF] text-xl mt-[-2px] md:mt-0">▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#B026FF] rounded-full mix-blend-screen filter blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none z-[-1]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
