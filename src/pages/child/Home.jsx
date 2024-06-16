import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsFill } from 'react-icons/ri';
import { TbBrandJavascript, TbBrandTailwind } from 'react-icons/tb';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import Typewriter from 'react-typewriter-effect';
import { FaGithub } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
    const iconVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: 'easeOut' },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut', delay: 1.2 },
        },
    };

    return (
        <>
            <section id="home" className="bg-slate-900 h-screen text-white py-20 px-4 md:px-8 flex flex-col items-center justify-center relative">
                {/* Icons with Framer Motion animations */}
                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <RiReactjsFill className="absolute top-36 left-[16%] text-yellow-300 w-24 h-24  animate-float" // Increased size to w-32 h-32
                    />
                </motion.div>

                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <DiNodejs className="absolute top-36 right-20 text-yellow-500 w-24 h-24  animate-float1" // Increased size to w-32 h-32
                    />
                </motion.div>

                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <SiMongodb className="absolute bottom-[30%] left-[10%] text-yellow-400 w-24 h-24  animate-float1" // Increased size to w-32 h-32
                    />
                </motion.div>

                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <TbBrandJavascript className="absolute bottom-48 right-[25%] text-yellow-300 w-24 h-24  animate-float" // Increased size to w-32 h-32
                    />
                </motion.div>

                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <FaGithub className="absolute top-24 left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-yellow-300 w-14 h-14 animate-float2" // Increased size to w-20 h-20
                    />
                </motion.div>

                <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <TbBrandTailwind className="absolute bottom-20 left-[30%] text-yellow-400 w-24 h-24 animate-float2" // Increased size to w-32 h-32
                    />
                </motion.div>

                {/* Title and description */}
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Omkar Maske
                </motion.h1>

                <motion.h2
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl md:text-3xl font-bold text-white mb-8"
                >
                    <Typewriter
                        words={['Full-Stack Web Developer', 'Mobile App Developer', 'Web Designer']}
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </motion.h2>

                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-md text-center mb-12"
                >
                    I'm a passionate MERN stack developer with a strong background in building modern, responsive, and scalable web applications.
                </motion.p>

                {/* Scroll Link */}
                <ScrollLink to="contact" smooth={true} duration={500} className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-3 px-10 rounded-md transition-colors">
                    Hire Me
                </ScrollLink>
            </section>
        </>
    );
};

export default Home;
