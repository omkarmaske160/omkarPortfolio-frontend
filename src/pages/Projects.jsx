import React from 'react'

const Projects = () => {
    return <>
        <section id="projects" className="bg-gray-100  py-16 px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white  p-6 rounded-md shadow-md">
                    <img src="/placeholder.svg" alt="Project 1" className="w-full rounded-md mb-4" />
                    <h3 className="text-xl font-bold mb-2">Project 1</h3>
                    <p className="text-gray-600  mb-4">
                        A web application that allows users to manage their tasks and projects.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">React.js</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">Node.js</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">MongoDB</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                            Live Demo
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="bg-white  p-6 rounded-md shadow-md">
                    <img src="/placeholder.svg" alt="Project 2" className="w-full rounded-md mb-4" />
                    <h3 className="text-xl font-bold mb-2">Project 2</h3>
                    <p className="text-gray-600  mb-4">
                        A responsive e-commerce website for a clothing brand.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">Next.js</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">Stripe</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">Tailwind CSS</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                            Live Demo
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="bg-white  p-6 rounded-md shadow-md">
                    <img src="/placeholder.svg" alt="Project 3" className="w-full rounded-md mb-4" />
                    <h3 className="text-xl font-bold mb-2">Project 3</h3>
                    <p className="text-gray-600  mb-4">
                        A data visualization dashboard for a financial services company.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">React.js</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">D3.js</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-md">Firebase</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                            Live Demo
                        </a>
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Projects