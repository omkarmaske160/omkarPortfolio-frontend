import React from 'react'

const Skills = () => {
    return <>
        <section id="skills" className="py-16 px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-8">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
                    <ul className="space-y-2">
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-4">Frameworks & Libraries</h3>
                    <ul className="space-y-2">
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Django</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
                    <ul className="space-y-2">
                        <li>Git</li>
                        <li>Docker</li>
                        <li>AWS</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="bg-gray-100  p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-4">Other Skills</h3>
                    <ul className="space-y-2">
                        <li>Responsive Design</li>
                        <li>Agile Methodology</li>
                        <li>Technical Writing</li>
                        <li>Project Management</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
}
export default Skills