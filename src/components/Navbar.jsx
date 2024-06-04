import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    return <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Clark</div>
        <nav>
            <ul className="flex space-x-4">
                <li><a href="#about" className="hover:text-yellow-500">About</a></li>
                <li><a href="#resume" className="hover:text-yellow-500">Resume</a></li>
                <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
                <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
                <li><a href="#blog" className="hover:text-yellow-500">Blog</a></li>
                <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
        </nav>
    </header>
}

export default Navbar