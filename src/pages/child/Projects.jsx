import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const projectsData = [
    {
        title: 'Project 1',
        description: 'A web application that allows users to manage their tasks and projects.',
        imgSrc: '/placeholder.svg',
        technologies: ['React.js', 'Node.js', 'MongoDB'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Project 2',
        description: 'A responsive e-commerce website for a clothing brand.',
        imgSrc: '/placeholder.svg',
        technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Project 3',
        description: 'A data visualization dashboard for a financial services company.',
        imgSrc: '/placeholder.svg',
        technologies: ['React.js', 'D3.js', 'Firebase'],
        githubLink: '#',
        liveLink: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 px-4 md:px-8">
            <h2 className="project-heading">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="relative group bg-slate-700 rounded-md shadow-md overflow-hidden h-[20rem] "
                    >
                        <a href={project.liveLink} className="block h-full">
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-yellow-500">{project.title}</h3>
                                        <p className="text-white mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-md">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <a href={project.githubLink} className="text-white hover:text-yellow-500 transition-colors">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
