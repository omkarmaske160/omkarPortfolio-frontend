import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    const educationData = [
        {
            title: "Bachelor in Computer Application (BCA)",
            institution: "Deogiri College of Chh. Sambhajinagar",
            date: "May 2018",
            description: "GPA: 3.8/4.0"
        },
        {
            title: "Coursera Online Certification: Full-Stack Web Development",
            institution: "Chh. Sambhajinagar",
            date: "June 2020",
            description: "Specialization in React, Node.js, and MongoDB"
        }
    ];

    return (
        <section id="education" className="py-16 px-4 md:px-8">
            <h2 className="education-heading text-3xl font-bold mb-12">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationData.map((education, index) => (
                    <div key={index} className="bg-slate-700 p-6 rounded-md shadow-md transform transition duration-500 hover:scale-105 hover:bg-gradient-to-tl from-blue-800 to-yellow-700">
                        <h3 className="text-xl text-yellow-500 font-bold mb-2">{education.title}</h3>
                        <div className="flex items-center text-white mb-4 mt-5">
                            <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-yellow-500" />
                            <p>{education.institution}</p>
                        </div>
                        <p className="text-white mb-2">Graduated: {education.date}</p>
                        <p className="text-white">{education.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
