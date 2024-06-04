import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Certificates from './pages/Certificates';


const App = () => {
  return <>
    <BrowserRouter >
      <div className="flex flex-col min-h-[100dvh]">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Contact />


      </div>

    </BrowserRouter>
  </>
}

export default App