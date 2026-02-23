import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Experience() {
    const experiences = [
        {
            role: "Software Engineer",
            company: "KRW Chartered Accountants",
            duration: "May 2025–Present",
            description: [
                "Built TaxBot RAG assistant with ChromaDB and FastAPI, improving tax advisory response accuracy from 60–70% to 95%.",
                "Developed 7E Calculator processing 60,000+ tax records using Express.js, React.js, and PostgreSQL.",
                "Migrated krw.com.pk to Headless WordPress with high-performance Next.js frontend.",
                "Automated salary slip generation and distribution for hundreds of employees using n8n and Docker.",
                "Developed Playwright-based automation for government tax portal submissions.",
                "Built Clear-Canvas dermatology portfolio app using Vite and Firebase."
            ]
        },
        {
            role: "Full Stack Web Developer",
            company: "Academic Vitality",
            duration: "May 2025–Present",
            description: [
                "Built ICAP-style CBE examination platform (40,000+ lines) using Next.js, Express.js, and MongoDB.",
                "Developed WhatsApp scheduling agent scraping deeply nested Google Sheets with automated message delivery.",
                "Created AI pipelines converting unstructured data into structured exam question banks with automated PDF generation.",
                "Engineered LMS with video streaming, progress tracking, and secure enrollment/payment systems.",
                "Managed complex exam logic and text-editing features using Zustand state management.",
                "Deployed Vitality Co and Vitality Automation sites using Create React App."
            ]
        }
    ];

    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

    return (
        <div className="p-4 z-30 mb-[4rem] flex flex-col items-center relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center cosmic-gradient-text tracking-tighter">Experience</h1>

            {/* Decorative center line */}
            <div className="absolute left-[50%] top-[8rem] bottom-0 w-[2px] bg-gradient-to-b from-[#00F0FF]/30 via-[#B026FF]/30 to-transparent hidden lg:block z-0"></div>

            <div ref={ref} className="flex flex-col gap-16 w-[95vw] lg:w-[65vw] relative z-10">
                {experiences.map((exp, index) => (
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
                        className={`glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl flex flex-col gap-5 relative overflow-hidden group w-full lg:w-[80%] ${index % 2 === 0 ? 'lg:self-start' : 'lg:self-end'}`}
                    >
                        {/* Timeline Dot (Desktop) */}
                        <div className={`absolute top-[3rem] ${index % 2 === 0 ? '-right-[17.2rem]' : '-left-[18.2rem]'} w-6 h-6 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#B026FF] shadow-[0_0_15px_#B026FF] hidden lg:block z-20`} />

                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 z-10">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#00F0FF] transition-colors duration-300 tracking-tight">{exp.role}</h3>
                                <h4 className="text-xl text-[#00F0FF]/80 font-medium mt-1">{exp.company}</h4>
                            </div>
                            <span className="text-[#00F0FF] font-bold text-sm md:text-base border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-4 py-1.5 rounded-full w-max backdrop-blur-md">{exp.duration}</span>
                        </div>

                        <ul className="text-gray-300 flex flex-col gap-2 mt-3 z-10">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex gap-3 leading-relaxed text-sm md:text-base">
                                    <span className="text-[#B026FF] text-xl mt-[-2px]">▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00F0FF] rounded-full mix-blend-screen filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-[-1]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
