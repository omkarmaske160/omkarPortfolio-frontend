import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const HireMe = () => {
    return <>
        <div className="relative flex items-center justify-center py-24 bg-cover bg-center" style={{ backgroundImage: "url('./bg.jpg')" }}>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white p-5">
                <h1 className="text-5xl font-bold">
                    I’m <span className="text-yellow-500">Available</span> for freelancing
                </h1>
                <p className="mt-4 text-lg max-w-md mx-auto mb-10">
                    I specialize in web and app development, creating modern, responsive websites and mobile applications
                    that deliver exceptional user experiences.
                </p>

                <ScrollLink to="contact" smooth={true} duration={500} className={` cursor-pointer px-16 py-4 text-sm bg-yellow-500  text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300`} >
                    HIRE ME
                </ScrollLink>
            </div>
        </div>
    </>
}

export default HireMe