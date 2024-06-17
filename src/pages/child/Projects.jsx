import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { useGetProjectQuery } from '../../api/adminApi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    // Move the hook inside the functional component
    const { data } = useGetProjectQuery();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust threshold as needed
    });
    const buttonVariants = {
        hidden: { opacity: 0, scale: 0, x: "0%", y: "0%" },
        visible: {
            opacity: 1,
            scale: 1,
            x: "0%",
            y: "0%",
            transition: { duration: 1.2, ease: 'easeOut', delay: 5 },
        },
    };

    return (
        <section id="projects" className="py-16 px-4 md:px-8">
            <motion.h2 initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                }}
                className="project-heading">
                Projects
            </motion.h2>
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-20 ">
                {data && data.map((project, index) => {

                    const isLeft = index % 2 === 0; // Alternate between left and right
                    const delay = index < 2 ? 0.3 * index : 0.3 * (index - 2) + 0.5;

                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={delay}
                            variants={{
                                hidden: { opacity: 0, x: isLeft ? -200 : 200 },
                                visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.7 } },
                            }}
                            className="relative group bg-slate-700 rounded-lg hover:rounded-none shadow-md overflow-hidden h-[26rem] "
                        >
                            <a href={project.liveLink} className="block h-full">
                                <img
                                    // src={project.imgSrc}
                                    src={`${import.meta.env.VITE_BACKEND_URL}/${project.project_image}`}
                                    alt={project.title}
                                    className="w-full h-full object-center object-fill transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 text-center text-yellow-500">{project.title}</h3>
                                            <div className="text-white mb-4">
                                                {project.description.split('.').map((sentence, i) => (
                                                    <div key={i} className="mb-2">
                                                        {sentence.trim() && <span>{sentence.trim()}.</span>}
                                                    </div>
                                                ))}
                                            </div>                                    <div className="flex flex-wrap gap-2 mb-4">
                                                {project.languages.map((tech, techIndex) => (
                                                    <span key={techIndex} className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-md">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <a href={project.githubLink} className="text-white hover:text-yellow-500 transition-colors">
                                                GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    )
                })}
            </div>
            <motion.div variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className='w-full flex justify-center mt-10 '>

                <button
                    onClick={() => window.location.href = 'https://drive.google.com/uc?export=download&id=1raH45wO3PxyJSiEyLOJJQRV1tK-_EwuP'}
                    className="bg-yellow-500 mt-7 hover:text-slate-700 hover:bg-yellow-400  transition-all duration-300 font-bold text-black px-10 py-3 rounded-full"
                >
                    DOWNLOAD CV
                </button>
            </motion.div>
        </section>
    );
}

export default Projects;
