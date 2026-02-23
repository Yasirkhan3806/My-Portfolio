import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectsData } from "../../data/projectsData";
import Footer from "../Contact/Footer";
import Navbar from "../Navbar";
import InteractiveBox from "../InteractiveBoxPointer";

export default function ProjectsPage() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden relative selection:bg-[#B026FF]/30 selection:text-white">
            <InteractiveBox />
            <Navbar />

            <div className="p-4 z-30 mb-[4rem] mt-16 md:mt-24 flex flex-col items-center">
                <Link
                    to="/"
                    className="text-[#00F0FF] hover:text-[#B026FF] transition-colors mb-8 self-start ml-[5vw] lg:ml-[15vw] flex items-center gap-2 font-medium"
                >
                    <span className="text-xl">←</span> Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center cosmic-gradient-text tracking-tighter">
                    All Projects
                </h1>

                <div className="flex flex-col gap-16 w-full max-w-7xl">
                    {projectsData.map((project, index) => {
                        const { ref, inView } = useInView({
                            triggerOnce: false,
                            threshold: 0.15,
                        });

                        return (
                            <motion.div
                                ref={ref}
                                key={index}
                                className="glass-panel glass-panel-hover flex flex-col lg:flex-row gap-8 p-6 md:p-8 rounded-3xl relative overflow-hidden group"
                            >
                                {/* Decorative Subtle Background Glow */}
                                <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#00F0FF] rounded-full mix-blend-screen filter blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
                                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#B026FF] rounded-full mix-blend-screen filter blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                                <motion.div
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.6, ease: "easeOut" },
                                        },
                                    }}
                                    className="w-full lg:w-[45%] h-64 md:h-80 lg:h-auto rounded-2xl overflow-hidden relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                                    <img
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        src={project.img}
                                        alt={project.Title}
                                    />
                                </motion.div>

                                <div className="w-full lg:w-[55%] flex flex-col justify-center gap-5 relative z-10">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-[#00F0FF] transition-colors duration-300">
                                            {project.Title}
                                        </h3>
                                        <h4 className="text-lg md:text-xl text-[#00F0FF]/80 font-medium">
                                            {project.SubTitle}
                                        </h4>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                        {project.Description}
                                    </p>

                                    <motion.ul
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: { staggerChildren: 0.1 },
                                            },
                                        }}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className="flex flex-wrap gap-2 mt-2"
                                    >
                                        {project.techStack.map((skill, i) => (
                                            <motion.li
                                                variants={{
                                                    hidden: { y: 20, opacity: 0 },
                                                    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
                                                }}
                                                key={i}
                                                className="py-1.5 px-4 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-gray-200 font-medium backdrop-blur-md"
                                            >
                                                {skill}
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    <div className="mt-4">
                                        <a
                                            href={project.link}
                                            className="animated-button w-max"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="text">View Live Project</span>
                                            <span className="circle"></span>
                                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </main>
    );
}
