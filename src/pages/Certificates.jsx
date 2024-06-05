import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Certificates = () => {
    const certificateData = [
        {
            title: "React Certification",
            organization: "Coursera",
            date: "July 2020",
            description: "Completed a certification course on React.js fundamentals."
        },
        {
            title: "Web Design Specialization",
            organization: "Udemy",
            date: "March 2019",
            description: "Earned a specialization certificate in modern web design techniques."
        }
    ];

    return (
        <section className="py-16 px-4 md:px-8">
            <h2 className="certificate-heading text-3xl font-bold mb-12">Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                {certificateData.map((certificate, index) => (
                    <div key={index} className="bg-slate-700 p-6 rounded-md shadow-md transform transition duration-500 hover:scale-105 hover:bg-gradient-to-tl from-blue-800 to-yellow-700">
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
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificates;
