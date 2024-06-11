import React, { useState } from 'react';
import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

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

    const ServiceCard = ({ service }) => {
        const [hover, setHover] = useState(false);

        return (
            <div
                className={`relative h-[17rem] bg-slate-700 text-white p-5 rounded-lg cursor-pointer transition-all duration-500 ${hover ? 'bg-gradient-to-tl from-blue-700 to-yellow-700 rounded-none' : ''}`}
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
                                <li key={index} >{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    return <div id='service'>
        <h2 className="service-heading">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10">

            {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
            ))}
        </div>
        <div className='flex justify-center -mt-5 cursor-pointer'>
            <ScrollLink to="contact" smooth={true} duration={500} className={` px-16 py-4 text-sm bg-yellow-500  text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300`} >
                CONTACT ME
            </ScrollLink>
        </div>

    </div>
};

export default Services;
