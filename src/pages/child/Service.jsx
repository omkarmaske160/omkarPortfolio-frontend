import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence from framer-motion
import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const services = [
        {
            title: 'Web Developer',
            icon: <FaLaptopCode className="text-yellow-500 text-8xl mb-4 transition-opacity duration-500" />,
            description: [
                'Build and maintain websites',
                'Develop web applications',
                'Ensure website performance and security',
                'Collaborate with designers and backend developers'
            ]
        },
        {
            title: 'App Developer',
            icon: <FaMobileAlt className="text-yellow-500 text-8xl mb-4 transition-opacity duration-500" />,
            description: [
                'Create mobile applications for iOS and Android',
                'Optimize apps for performance and user experience',
                'Implement APIs and third-party services',
                'Maintain and update existing apps'
            ]
        },
        {
            title: 'Web Design',
            icon: <FaPalette className="text-yellow-500 text-8xl mb-4 transition-opacity duration-500" />,
            description: [
                'Design user-friendly and visually appealing websites',
                'Create responsive designs for various devices',
                'Develop wireframes and prototypes',
                'Collaborate with developers to implement designs'
            ]
        },
    ];
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
            transition: { duration: 1.2, ease: 'easeOut', delay: 2 },
        },
    };

    const ServiceCard = ({ service, index }) => {
        const [hover, setHover] = useState(false);

        return (
            <motion.div
                initial={{ x: -1000, opacity: 0 }} // Initial animation state (off-screen left)
                animate={{ x: 0, opacity: 1 }} // Animation when card enters (to its final position)
                transition={{ duration: 1, delay: index * 0.3 }} // Animation duration and staggered delay
                className={`relative h-[17rem] bg-slate-700 text-white p-5 rounded-lg cursor-pointer transition-all duration-500 ${hover ? 'bg-gradient-to-tl from-blue-900 to-yellow-900 rounded-none' : ''}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className={`flex flex-col items-center h-full justify-center ${hover ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                {hover && (
                    <div className="absolute inset-0 flex items-center justify-center text-center p-5 rounded-xl transition-opacity duration-500">
                        <ul className="list-disc list-inside text-left space-y-3">
                            {service.description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>
        );
    };

    return (
        <div id='service'>
            <motion.h2
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                }}
                className="service-heading">Services</motion.h2>
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
                <AnimatePresence>
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </AnimatePresence>
            </div>
            <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"

                className='flex justify-center -mt-5 cursor-pointer'>
                <ScrollLink to="contact" smooth={true} duration={500} className={` px-16 py-4 text-sm bg-yellow-500  text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300`} >
                    CONTACT ME
                </ScrollLink>
            </motion.div>
        </div>
    );
};

export default Services;
