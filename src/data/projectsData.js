import bitCoderLabsPicture from "../assets/Pictures/festarPicture.png";
import festarPicture from "../assets/Pictures/bitCoderLabsPicture.png";
import interneePicture from "../assets/Pictures/interneePicture.png";
import earthandmoonrotation from "../assets/Pictures/EarthAndMoonAnimation.png";
import fullStackLMS from "../assets/Pictures/fullStackLMS.png";
import icapExamSoftware from "../assets/Pictures/Exam.png";
import clearCanvasPicture from "../assets/Pictures/clearCanvas.png";
import ecovisPicture from "../assets/Pictures/ecovisKRW.png";

export const projectsData = [
   
    {
        Title: "Full-Stack LMS | Academic Vitality",
        SubTitle: "Educational E-Learning Platform",
        img: fullStackLMS,
        Description:
            "Designed a student portal featuring secure enrollment, payment tracking, and progress-monitored lecture watching. Built a responsive dashboard with Tailwind CSS to manage 100+ student profiles and performance metrics.",
        techStack: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Redis", "Tailwind CSS"],
        link: "https://academicvitality.com/",
    },
    {
        Title: "Full-Stack Exam Software | ICAP Style",
        SubTitle: "ICAP Style Exam Software",
        img: icapExamSoftware,
        Description:
            "Developed a full-scale examination platform inspired by Institute of Chartered Accountants of Pakistan (ICAP) assessment software, engineered with complex client-side state orchestration and a robust, high-throughput backend architecture.The system supports three examination streams—CFAP (Final), PRC, and CAF—each with distinct workflows, validation logic, and grading pipelines.Designed for reliability, exam integrity, and scalable concurrent usage under high-stakes testing conditions.100+ concurrent students use this software at a time",
        techStack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
        link: "https://academicvitality.org/",
    },
     {
        Title: "ECOVISKRW",
        SubTitle: "Corporate Firm Website",
        img: ecovisPicture,
        Description:
            "A comprehensive corporate website for a large chartered accountants firm in Islamabad. Features in-depth information about the firm, team members, and articles. Powered by a Headless WordPress CMS allowing seamless management of blogs and press releases, wrapped in a bold, responsive design.",
        techStack: ["Next.js", "Tailwind CSS", "Headless CMS", "Apache"],
        link: "https://ecoviskrw.com/",
    },
    {
        Title: "Clear Canvas",
        SubTitle: "Dermatologist Clinic Portfolio",
        img: clearCanvasPicture,
        Description:
            "A minimalist and sleek portfolio site for a dermatologist clinic. Features dedicated sections for about, services, press, blogs, and procedures. Integrated Formspree for contact forms and a custom backend using Firebase and Cloudinary to easily manage and upload blogs and press articles.",
        techStack: ["Vite", "Tailwind CSS", "Cloudinary", "Firebase"],
        link: "https://www.drmaimoonamumtaz.com/",
    },
    {
        Title: "Festar Meetup",
        SubTitle: "Virtual Hosting Platform",
        img: festarPicture,
        Description:
            "Fester Meetup is an innovative virtual meeting platform designed to provide seamless and efficient communication. Achieved a mobile-first, clean UI/UX design using Tailwind CSS. Built with React, Tailwind CSS, Firebase, and AgoraRTC.",
        techStack: ["ReactJs", "TailwindCss", "Firebase", "AgoraRTC"],
        link: "https://fester-meetup.web.app",
    },
    {
        Title: "BitCodersLab Clone",
        SubTitle: "BitCodersLabs.com is a software house website",
        img: bitCoderLabsPicture,
        Description:
            "The BitCodersLab Clone is a web-based platform designed to replicate the functionality and user experience of BitCodersLab. This project showcases my ability to develop interactive and scalable learning platforms.",
        techStack: ["HTML", "CSS", "Vanilla Javascript"],
        link: "https://bit-coder-labs-clone.vercel.app",
    },
    {
        Title: "Internee.pk Redesign",
        SubTitle: "Internee.pk is an internship provider",
        img: interneePicture,
        Description:
            "The Internee.pk Redesign project was a comprehensive effort to enhance the user interface (UI) and user experience (UX) of the platform while improving its overall performance. The primary goal was to create a modern, intuitive, and visually appealing design that aligns with industry standards and improves accessibility for users.",
        techStack: ["ReactJs", "CSS"],
        link: "https://internee-redesign.web.app",
    },
    {
        Title: "3D Animation",
        SubTitle: "A 3D Space Simulation",
        img: earthandmoonrotation,
        Description:
            "This project is a realistic 3D simulation of the Earth and Moon rotation, built using Three.js. The goal was to create an interactive, visually stunning representation of celestial motion, showcasing my skills in 3D rendering, physics-based animations, and WebGL development.",
        techStack: ["JavaScript", "ThreeJs", "CSS"],
        link: "https://three-beta-two.vercel.app",
    },
];
