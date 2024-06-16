import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faJava, faReact, faNode, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faProjectDiagram, faFileAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { SiTailwindcss, SiMongodb, SiBootstrap, SiPhp, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            category: "Programming Languages",
            items: [
                { name: "JavaScript", icon: faJs },
                { name: "PHP", icon: <SiPhp /> },
                { name: "Java", icon: faJava },
                { name: "C++", icon: faDatabase },
            ]
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { name: "React.js", icon: faReact },
                { name: "Node.js", icon: faNode },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
            ]
        },
        {
            category: "Tools & Technologies",
            items: [
                { name: "Git", icon: faGit },
                { name: "MongoDb", icon: <SiMongodb /> },
                { name: "VS Code", icon: <SiVisualstudiocode /> },
                { name: "SQL", icon: faDatabase },
            ]
        },
        {
            category: "Other Skills",
            items: [
                { name: "Responsive Design", icon: faDatabase },
                { name: "Team Player", icon: faProjectDiagram },
                { name: "Technical Writing", icon: faFileAlt },
                { name: "Time Management", icon: faClock },
            ]
        }
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust threshold as needed
    });

    return (
        <section id="skills" className="py-16 pt-[2.5rem] px-4 md:px-8">
            <motion.h2
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
                }}
                className="skills-heading"
            >
                My Skills
            </motion.h2>
            <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 md:pt-16">
                {skills.map((skillCategory, index) => {
                    const isLeft = index % 2 === 0; // Alternate between left and right
                    const delay = index < 2 ? 0.3 * index : 0.3 * (index - 2) + 0.5;

                    return (
                        <motion.div
                            key={index}
                            className="bg-slate-700 p-6 rounded-md shadow-md"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            custom={delay}
                            variants={{
                                hidden: { opacity: 0, x: isLeft ? -200 : 200 },
                                visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.7 } },
                            }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-yellow-500">{skillCategory.category}</h3>
                            <ul className="space-y-2">
                                {skillCategory.items.map((skill, idx) => (
                                    <li key={idx} className="flex items-center text-white break-words w-full">
                                        {typeof skill.icon === 'object' ? (
                                            <FontAwesomeIcon icon={skill.icon} className="mr-2 text-yellow-500" />
                                        ) : (
                                            skill.icon
                                        )}
                                        <span className="whitespace-normal">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;
