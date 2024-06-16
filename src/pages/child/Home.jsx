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
        hidden: { opacity: 0, scale: 0, x: "0%", y: "0%" },
        visible: (custom) => ({
            opacity: 1,
            scale: 1,
            x: custom.x,
            y: custom.y,
            transition: { duration: 1.2, ease: 'easeOut' },
        }),
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut', delay: 1.2 },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0, x: "0%", y: "0%" },
        visible: {
            opacity: 1,
            scale: 1,
            x: "0%",
            y: "0%",
            transition: { duration: 1.2, ease: 'easeOut', delay: 1.2 },
        },
    };

    return (
        <>
            <section id="home" className="bg-slate-900 h-screen text-white py-20 px-4 md:px-8 flex flex-col items-center justify-center relative">
                {/* Icons with Framer Motion animations */}
                <motion.div
                    custom={{ x: "-34%", y: "-14%" }}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute md:top-36 md:left-[16%] top-[7%] left-[17%] "

                >
                    <RiReactjsFill className="text-yellow-300 w-24 h-24 animate-float" />
                </motion.div>

                <motion.div
                    custom={{ x: "20%", y: "-14%" }}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute md:top-[30%] md:right-20 top-[25%] right-[7%] "

                >
                    <DiNodejs className="text-yellow-500 w-24 h-24 animate-float1" />
                </motion.div>

                <motion.div
                    custom={{ x: "-40%", y: "0%" }}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute   md:bottom-[30%] md:left-[5%] bottom-[15%] left-[5%]"
                >
                    <SiMongodb className="text-yellow-400 w-24 h-24 animate-float1" />
                </motion.div>

                <motion.div
                    custom={{ x: "25%", y: "30%" }}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute md:bottom-48 md:right-[25%] bottom-[5%] right-[20%]"
                >
                    <TbBrandJavascript className="text-yellow-300 w-24 h-24 animate-float" />
                </motion.div>

                <motion.div
                    custom={{ x: "10%", y: "-40%" }}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute md:top-[15%] md:left-[60%] hidden md:block"
                >
                    <FaGithub className="text-yellow-300 w-14 h-14 animate-float2" />
                </motion.div>

                <motion.div
                    custom={{ x: "-20%", y: "30%" }}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute md:bottom-20 md:left-[30%] hidden md:block"
                >
                    <TbBrandTailwind className="text-yellow-400 w-24 h-24 animate-float2" />
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
                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <ScrollLink to="contact" smooth={true} duration={500} className=" cursor-pointer text-lg bg-yellow-500 mt-7 hover:text-slate-700 hover:bg-yellow-400 text-black  font-bold duration-300 py-3 px-10 rounded-md transition-all">
                        Hire Me
                    </ScrollLink>
                </motion.div>
            </section >
        </>
    );
};

export default Home;
