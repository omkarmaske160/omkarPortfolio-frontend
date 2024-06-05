import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const experienceData = [
    {
        title: "Software Engineering Intern",
        company: "Google, Mountain View, CA",
        date: "June 2019 - August 2019",
        description: "Developed a web-based tool for automating software deployment processes, using React.js, Node.js, and Docker."
    },
    {
        title: "Web Development Intern",
        company: "Amazon, Seattle, WA",
        date: "May 2018 - August 2018",
        description: "Contributed to the development of a responsive e-commerce website, using HTML, CSS, JavaScript, and React.js."
    }
];

const Experience = () => {
    return (
        <section className="py-16 px-4 md:px-8">
            <h2 className="experience-heading text-3xl font-bold mb-12">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                {experienceData.map((experience, index) => (
                    <div key={index} className="bg-slate-700 p-6 rounded-md shadow-md transform transition duration-500 hover:scale-105 hover:bg-gradient-to-tl from-blue-800 to-yellow-700">
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
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
