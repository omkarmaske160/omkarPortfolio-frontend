import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certificates = () => {
    const certificateData = [
        {
            title: "Javascript",
            organization: "sololearn.",
            date: "July 2020",
            description: "Completed a certification course on Javascript fundamentals."
        },
        {
            title: "HTML, CSS",
            organization: "sololearn.",
            date: "July 2023",
            description: "Earned a specialization certificate in HTML, CSS techniques."
        }
    ];
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust threshold as needed
    });

    return (
        <section to="certificate" className="py-16 px-4 md:px-8">
            <motion.h2
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                }}
                className="certificate-heading text-3xl font-bold mb-12">
                Certificates
            </motion.h2>
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                {certificateData.map((certificate, index) => {
                    const isLeft = index % 2 === 0; // Alternate between left and right

                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={{
                                hidden: { opacity: 0, x: isLeft ? -200 : 200 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.5 } },
                            }}
                            className="bg-slate-700 p-6 rounded-md shadow-md transform transition duration-500 hover:scale-105 hover:bg-gradient-to-tl from-blue-800 to-yellow-700">
                            <h3 className="text-yellow-500 text-2xl font-bold mb-2">{certificate.title}</h3>
                            <div className="flex items-center text-white mb-4 mt-5">
                                <FontAwesomeIcon icon={faAward} className="mr-2 text-yellow-500" />
                                <p>{certificate.organization}</p>
                            </div>
                            <div className="flex items-center text-white mb-4">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-yellow-500" />
                                <p>{certificate.date}</p>
                            </div>
                            <p className="text-white">{certificate.description}</p>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
}

export default Certificates;
