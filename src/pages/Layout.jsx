import React from 'react'
import Navbar from '../components/Navbar'
import Home from './child/Home'
import About from './child/About'
import Skills from './child/Skills'
import Projects from './child/Projects'
import Education from './child/Education'
import Experience from './child/Experience'
import Certificates from './child/Certificates'
import Contact from './child/Contact'
import MainComponent from '../components/MainComponent'
import HireMe from './child/HireMe'
import Footer from '../components/Footer'
import Service from './child/Service'

const Layout = () => {
    return <>
        <div className="flex flex-col min-h-[100dvh] bg-slate-900 overflow-hidden">
            <MainComponent />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Service />
            <Experience />
            <HireMe />
            <Certificates />
            <Contact />
            <Footer />
        </div>
    </>
}

export default Layout