import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import CertificateModal from './CertificateModal';
import { useAddProjectMutation } from '../api/adminApi';

const Dashboard = () => {
    // Dummy data for projects and certificates
    const dummyProjects = [
        {
            title: 'Project One',
            description: 'This is a description of project one.',
            languages: ['JavaScript', 'React'],
            githubLink: 'https://github.com/project-one',
            liveLink: 'https://project-one-live.com',
        },
        {
            title: 'Project Two',
            description: 'This is a description of project two.',
            languages: ['Python', 'Django'],
            githubLink: 'https://github.com/project-two',
            liveLink: 'https://project-two-live.com',
        },
    ];

    const dummyCertificates = [
        {
            title: 'Certificate One',
            description: 'This is a description of certificate one.',
            platform: 'Coursera',
            date: 'March 2003',
        },
        {
            title: 'Certificate Two',
            description: 'This is a description of certificate two.',
            platform: 'Udemy',
            date: 'May 2011',
        },
    ];

    // State for new projects and certificates
    const [newProjects, setNewProjects] = useState([]);
    const [newCertificates, setNewCertificates] = useState([]);
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

    const addProject = (project) => {
        setNewProjects([...newProjects, project]);

    };

    const addCertificate = (certificate) => {
        setNewCertificates([...newCertificates, certificate]);
    };

    const combinedProjects = [...dummyProjects, ...newProjects];
    const combinedCertificates = [...dummyCertificates, ...newCertificates];

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
                    <button
                        onClick={() => setIsCertificateModalOpen(true)}
                        className="px-4 py-2 bg-green-600 text-white rounded"
                    >
                        Add New Certificate
                    </button>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {combinedProjects.map((project, index) => (
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
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-3 mt-5">Certificates</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {combinedCertificates.map((certificate, index) => (
                            <div key={index} className="relative bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300 group">
                                <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                                <p className="mb-2">{certificate.platform}</p>
                                <p className="mb-2">{certificate.description}</p>
                                <p>{certificate.date}</p>
                                <div className="absolute bottom-4 right-4 flex flex-col items-end space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        className="px-2 py-1 bg-red-600 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isProjectModalOpen && (
                <ProjectModal
                    closeModal={() => setIsProjectModalOpen(false)}
                    addProject={addProject}
                />
            )}
            {isCertificateModalOpen && (
                <CertificateModal
                    closeModal={() => setIsCertificateModalOpen(false)}
                    addCertificate={addCertificate}
                />
            )}

        </div>
    );
};

export default Dashboard;
