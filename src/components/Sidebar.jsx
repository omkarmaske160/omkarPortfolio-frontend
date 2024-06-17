import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <aside
                className={`fixed top-0 left-0 w-[45%] bg-slate-800 h-full text-white p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}
            >
                <div className="flex flex-col items-center pt-10  h-full">
                    <img src='./user-img.jpg' alt="" width="150px" className="rounded-[100%] border-[9px] border-slate-700 mb-4" />
                    <h3 className="font-bold text-[26px] text-center">Omkar Maske</h3>
                    <div className={`flex flex-col gap-6 text-slate-400 px-2 pt-10`}>
                        {/* Sidebar links */}
                        <ScrollLink to="home" smooth={true} duration={500} className={`font-bold hover:text-yellow-500 cursor-pointer`} onClick={toggle}>
                            Home
                        </ScrollLink>
                        <ScrollLink to="resume" smooth={true} duration={500} className={`font-bold hover:text-yellow-500 cursor-pointer`} onClick={toggle}>
                            About
                        </ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500} className={`font-bold hover:text-yellow-500 cursor-pointer`} onClick={toggle}>
                            Projects
                        </ScrollLink>
                        <ScrollLink to="service" smooth={true} duration={500} className={`font-bold hover:text-yellow-500 cursor-pointer`} onClick={toggle}>
                            Service
                        </ScrollLink>
                        <ScrollLink to="education" smooth={true} duration={500} className={`font-bold hover:text-yellow-500 cursor-pointer`} onClick={toggle}>
                            Education
                        </ScrollLink>
                        <ScrollLink to="certificate" smooth={true} duration={500} className={`font-bold hover:text-yellow-500 cursor-pointer`} onClick={toggle}>
                            Resume
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} className={`font-bold hover:text-yellow-500 cursor-pointer`} onClick={toggle}>
                            Contact
                        </ScrollLink>
                        {/* Add more links as needed */}
                    </div>
                </div>
            </aside>
            <button onClick={toggle} className="fixed top-4 right-4 text-white md:hidden z-40">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </>
    );
};

export default Sidebar;
