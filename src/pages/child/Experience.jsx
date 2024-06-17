import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experienceData = [
    {
        title: "Web Development Intern",
        company: "Skillhub it solution",
        date: "Jan 2024 - June 2024",
        description: "Contributed to the development of a responsive e-commerce website, using React.js, Tailwind, JavaScript, and MongoDB, Node.js."
    }
];

const Experience = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust threshold as needed
    });

    return (
        <section className="py-16 px-4 md:px-8">
            <motion.h2
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                }}
                className="experience-heading text-3xl font-bold mb-12"
            >
                Experience
            </motion.h2>
            <div className="flex justify-center">
                <div ref={ref} className="grid grid-cols-1 gap-8 mt-20 max-w-2xl mx-auto">
                    {experienceData.map((experience, index) => (
                        <motion.div

                            key={index}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, y: 200 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                            }}
                            className="bg-slate-700 p-6 rounded-md shadow-md transform transition duration-500 hover:scale-105 hover:bg-slate-800"
                        >
                            <h3 className="text-yellow-500 text-2xl font-bold mb-2">{experience.title}</h3>
                            <div className="flex items-center text-white mb-4 mt-5">
                                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-yellow-500" />
                                <p>{experience.company}</p>
                            </div>
                            <div className="flex items-center text-white mb-4">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-yellow-500" />
                                <p>{experience.date}</p>
                            </div>
                            <p className="text-white">{experience.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
