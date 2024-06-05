import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
    return <header className="bg-slate-800 overflow-hidden text-white p-4 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-default">Omkar</div>
        <nav>
            <ul className="flex space-x-4">
                <li><a href="#resume" className="hover:text-yellow-500">Resume</a></li>
                <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
                <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
        </nav>
    </header>
}

export default Navbar