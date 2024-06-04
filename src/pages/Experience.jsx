import React from 'react'

const Experience = () => {
    return <>
        <section className="bg-gray-100  py-16 px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Internships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white  p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Software Engineering Intern</h3>
                    <p className="text-gray-600  mb-4">Google, Mountain View, CA</p>
                    <p className="text-gray-600  mb-4">June 2019 - August 2019</p>
                    <p className="text-gray-600 ">
                        Developed a web-based tool for automating software deployment processes, using React.js, Node.js, and
                        Docker.
                    </p>
                </div>
                <div className="bg-white  p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Web Development Intern</h3>
                    <p className="text-gray-600  mb-4">Amazon, Seattle, WA</p>
                    <p className="text-gray-600  mb-4">May 2018 - August 2018</p>
                    <p className="text-gray-600 ">
                        Contributed to the development of a responsive e-commerce website, using HTML, CSS, JavaScript, and
                        React.js.
                    </p>
                </div>
            </div>
        </section>
    </>
}

export default Experience