import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full px-10 p-4 flex justify-between items-center z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-slate-800'
                } text-white`}
        >
            <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-2xl font-bold hover:text-yellow-500 cursor-pointer"
            >
                Omkar
            </ScrollLink>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <ScrollLink
                            to="resume"
                            smooth={true}
                            duration={500}
                            className="hover:text-yellow-500 cursor-pointer"
                        >
                            Resume
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="hover:text-yellow-500 cursor-pointer"
                        >
                            Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="service"
                            smooth={true}
                            duration={500}
                            className="hover:text-yellow-500 cursor-pointer"
                        >
                            Service
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="hover:text-yellow-500 cursor-pointer"
                        >
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
