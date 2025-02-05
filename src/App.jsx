import React from 'react'
import MeteorBackground from './Background';
import './App.css'
import Navbar from './Components/Navbar'
import InteractiveBox from './Components/InteractiveBoxPointer';
import AboutMe from './Components/About Me/AboutMe';
import Projects from './Components/Projects/Projects';

function App() {

  return (
    <>
{/* <MeteorBackground/> */}
    <InteractiveBox/>
    <Navbar/>
    <AboutMe/>
    <Projects/>
    </>
  )
}

export default App
