import React from 'react';
import { FaTwitter, FaGithub, FaInstagram, } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { SiLeetcode } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="bg-slate-800 px-10 mt-10 text-white py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">About</h2>
                    <p className="text-gray-400 text-lg">
                        I'm a MERN stack developer specializing in React and Node.js.
                    </p>
                    <div className="flex mt-4 space-x-4">
                        <a href="https://www.instagram.com/omkar_maske7/?igsh=MWZwdDIzZHRqbm1vcg%3D%3D" className="text-yellow-500 hover:text-yellow-500"><FaInstagram size={24} /></a>
                        <a href="https://github.com/omkarmaske160" className="text-yellow-500 hover:text-yellow-500"><FaGithub size={24} /></a>
                        <a href="https://leetcode.com/u/omkarmhaske/" className="text-yellow-500 hover:text-yellow-500"><SiLeetcode size={24} /></a>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Links</h2>
                    <ul className="space-y-2">
                        <li className='flex text-lg items-center text-gray-400'><FaLongArrowAltRight /><a href="#home" className=" hover:text-yellow-500 ml-3">Home</a></li>
                        <li className='flex text-lg items-center text-gray-400'><FaLongArrowAltRight /><a href="#resume" className=" hover:text-yellow-500 ml-3">About</a></li>
                        <li className='flex text-lg items-center text-gray-400'><FaLongArrowAltRight /><a href="#services" className=" hover:text-yellow-500 ml-3">Services</a></li>
                        <li className='flex text-lg items-center text-gray-400'><FaLongArrowAltRight /><a href="#projects" className=" hover:text-yellow-500 ml-3">Projects</a></li>
                        <li className='flex text-lg items-center text-gray-400'><FaLongArrowAltRight /><a href="#contact" className=" hover:text-yellow-500 ml-3">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Services</h2>
                    <ul className="space-y-2">
                        <li className='flex text-lg items-center text-gray-400'><FaLongArrowAltRight /><a className="ml-3 hover:text-yellow-500">Web Design</a></li>
                        <li className='flex text-lg items-center text-gray-400'><FaLongArrowAltRight /><a className="ml-3 hover:text-yellow-500">Web Development</a></li>
                        <li className='flex text-lg items-center text-gray-400'><FaLongArrowAltRight /><a className="ml-3 hover:text-yellow-500">App Development</a></li>

                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Have a Questions?</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center">
                            <FiMapPin className="text-yellow-500 text-lg mr-2" />Sai Palace Khumbarwada, Aurangabad
                        </li>
                        <li className="flex items-center">
                            <FiPhone className="text-yellow-500 text-lg mr-2" />+91 8080328556
                        </li>
                        <li className="flex items-center">
                            <FiMail className="text-yellow-500 text-lg mr-2" />omkarmaske160@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
