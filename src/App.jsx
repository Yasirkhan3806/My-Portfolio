import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeteorBackground from './Background';
import './App.css'
import Navbar from './Components/Navbar'
import InteractiveBox from './Components/InteractiveBoxPointer';
import AboutMe from './Components/About Me/AboutMe';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Contact/Footer';
import ProjectsPage from './Components/Projects/ProjectsPage';

function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden relative selection:bg-[#B026FF]/30 selection:text-white">
      <InteractiveBox />
      <Navbar />
      <div className="flex flex-col gap-10 md:gap-20">
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
