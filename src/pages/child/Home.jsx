import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

import { SiMongodb } from "react-icons/si";
import Typewriter from 'react-typewriter-effect';
import { FaGithub } from "react-icons/fa";





const Home = () => {
    return <>
        <section id='home' className="bg-slate-900 h-screen text-white py-20 px-4 md:px-8 flex flex-col items-center justify-center relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Omkar Maske</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                <Typewriter
                    words={['Full-Stack Web Developer', 'Mobile App Developer', 'Web Designer']}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
            <p className="max-w-md text-center mb-12">
                I'm a passionate MERN stack developer with a strong background in building modern, responsive, and scalable web applications.
            </p>
            <ScrollLink

                to="contact"
                smooth={true}
                duration={500} className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-10 rounded-md transition-colors"
            >
                Hire Me
            </ScrollLink>

            {/* Adding images with absolute positioning */}
            <RiReactjsFill className="absolute top-36 left-[20%] text-yellow-300 w-24 h-24 animate-float" />
            <DiNodejs className="absolute top-36 right-20 text-yellow-500  w-36 h-36 animate-float" />
            <SiMongodb className="absolute bottom-20 left-[30%] text-yellow-400  w-24 h-24 animate-float" />
            <TbBrandJavascript className="absolute top-[61%] right-[20%] text-yellow-300 tranlsform -translate-x-1/2 -translate-y-1/2  w-24 h-24 animate-float" />
            <FaGithub className="absolute top-[11%] right-[35%] text-yellow-300 tranlsform -translate-x-1/2 -translate-y-1/2  w-16 h-24 animate-float" />

            <TbBrandTailwind className="absolute top-[55%] left-[5%] text-yellow-400  w-24 h-24 animate-float" />
        </section >
    </>
}

export default Home