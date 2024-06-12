import React, { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';
import { useDeleteProjectMutation, useGetProjectQuery } from '../api/adminApi';
import { toast } from 'react-toastify'

const Dashboard = () => {
    // Dummy data for projects and certificates
    const { data } = useGetProjectQuery()
    const [deleteProjectFn, { isSuccess, isError }] = useDeleteProjectMutation()
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            toast("Delete Successful")
        }
    }, [isSuccess])


    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>
                <div className="flex flex-col md:flex-row md:space-x-4 mb-5">
                    <button
                        onClick={() => setIsProjectModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded mb-3 md:mb-0"
                    >
                        Add New Project
                    </button>

                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data && data.map((project, index) => (
                            <div key={index} className="relative bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300 group">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="mb-2">{project.description}</p>
                                <p className="mb-2">Languages: {project.languages ? project.languages.join(', ') : ''}</p>
                                <p>
                                    <a href={project.githubLink} className="text-blue-600 hover:underline">
                                        GitHub
                                    </a>
                                    {' | '}
                                    <a href={project.liveLink} className="text-blue-600 hover:underline">
                                        Live
                                    </a>
                                </p>
                                <div className="absolute bottom-4 right-4 flex flex-col items-end space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        className="px-2 py-1 bg-red-600 text-white rounded"
                                        onClick={e => deleteProjectFn(project._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {
                isProjectModalOpen && (
                    <ProjectModal
                        closeModal={() => setIsProjectModalOpen(false)}

                    />
                )
            }


        </div >
    );
};

export default Dashboard;
