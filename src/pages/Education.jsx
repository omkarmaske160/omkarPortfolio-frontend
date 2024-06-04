import React from 'react'

const Education = () => {
    return <>
        <section id="education" className="py-16 px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600  mb-4">University of California, Berkeley</p>
                    <p className="text-gray-600  mb-2">Graduated: May 2018</p>
                    <p className="text-gray-600 ">GPA: 3.8/4.0</p>
                </div>
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-2">Coursera Online Certification: Full-Stack Web Development</h3>
                    <p className="text-gray-600  mb-4">Coursera</p>
                    <p className="text-gray-600  mb-2">Completed: June 2020</p>
                    <p className="text-gray-600 ">Specialization in React, Node.js, and MongoDB</p>
                </div>
            </div>
        </section>
    </>
}

export default Education