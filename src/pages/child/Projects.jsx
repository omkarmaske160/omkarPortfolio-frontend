import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { useGetProjectQuery } from '../../api/adminApi';

const Projects = () => {
    // Move the hook inside the functional component
    const { data } = useGetProjectQuery();

    return (
        <section id="projects" className="py-16 px-4 md:px-8">
            <h2 className="project-heading">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-20 ">
                {data && data.map((project, index) => (
                    <div
                        key={index}
                        className="relative group bg-slate-700 rounded-lg hover:rounded-none shadow-md overflow-hidden h-[26rem] "
                    >
                        <a href={project.liveLink} className="block h-full">
                            <img
                                // src={project.imgSrc}
                                src={`${import.meta.env.VITE_BACKEND_URL}/${project.project_image}`}
                                alt={project.title}
                                className="w-full h-full object-center object-fill transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-center text-yellow-500">{project.title}</h3>
                                        <div className="text-white mb-4">
                                            {project.description.split('.').map((sentence, i) => (
                                                <div key={i} className="mb-2">
                                                    {sentence.trim() && <span>{sentence.trim()}.</span>}
                                                </div>
                                            ))}
                                        </div>                                    <div className="flex flex-wrap gap-2 mb-4">
                                            {project.languages.map((tech, techIndex) => (
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
            <div className='w-full flex justify-center mt-10 '>
                <button
                    onClick={() => window.location.href = 'https://drive.google.com/uc?export=download&id=1raH45wO3PxyJSiEyLOJJQRV1tK-_EwuP'}
                    className="bg-yellow-500 mt-7 hover:text-slate-700 hover:bg-yellow-400  transition-all duration-300 font-bold text-black px-10 py-3 rounded-full"
                >
                    DOWNLOAD CV
                </button>
            </div>
        </section>
    );
}

export default Projects;
