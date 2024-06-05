import React from 'react'

const Home = () => {
    return <>
        <section className="bg-slate-900 text-white py-20 px-4 md:px-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">Full-Stack Web Developer</h2>
            <p className="max-w-md text-center mb-12">
                I\'m a passionate web developer with a strong background in building modern, responsive, and scalable web
                applications.
            </p>
            <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
                Hire Me
            </a>
        </section>
    </>
}

export default Home