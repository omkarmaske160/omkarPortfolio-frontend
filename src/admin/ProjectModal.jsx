import React, { useState } from 'react';
import { useAddProjectMutation } from '../api/adminApi';

const ProjectModal = ({ closeModal }) => {
    const [addProjectFn, { isSuccess, isError }] = useAddProjectMutation();

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        languages: [],
        githubLink: '',
        liveLink: '',
        project_image: null // Store file object here
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first file from the input
        setFormState({
            ...formState,
            project_image: file
        });
    };

    const handleAddLanguage = () => {
        if (formState.language && !formState.languages.includes(formState.language.trim())) {
            setFormState({
                ...formState,
                languages: [...formState.languages, formState.language.trim()],
                language: ''
            });
        }
    };

    const handleDeleteLanguage = (lang) => {
        setFormState({
            ...formState,
            languages: formState.languages.filter((l) => l !== lang)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', formState.title);
        formData.append('description', formState.description);
        formState.languages.forEach((lang) => formData.append('languages[]', lang));
        formData.append('githubLink', formState.githubLink);
        formData.append('liveLink', formState.liveLink);
        formData.append('project_image', formState.project_image); // Append file object

        addProjectFn(formData);

        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block text-gray-700">Project Image</label>
                        <input
                            type="file"
                            name="project_image"
                            onChange={handleFileChange}
                            className="w-full px-3 py-2 border rounded"
                            accept="image/*" // Accept only image files
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formState.title}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formState.description}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Languages</label>
                        <div className="flex items-center mb-2">
                            <input
                                type="text"
                                name="language"
                                value={formState.language}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded"
                            />
                            <button
                                type="button"
                                onClick={handleAddLanguage}
                                className="ml-2 px-3 py-2 bg-green-600 text-white rounded"
                            >
                                Add
                            </button>
                        </div>
                        <div>
                            {formState.languages.map((lang, index) => (
                                <div key={index} className="flex items-center mb-1">
                                    <span className="mr-2">{lang}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteLanguage(lang)}
                                        className="px-2 py-1 bg-red-600 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">GitHub Link</label>
                        <input
                            type="url"
                            name="githubLink"
                            value={formState.githubLink}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Live Link</label>
                        <input
                            type="url"
                            name="liveLink"
                            value={formState.liveLink}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 bg-gray-600 text-white rounded"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                            Add Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;
