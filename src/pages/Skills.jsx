import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faJava, faDocker, faAws, faReact, faNode, faGit, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faProjectDiagram, faFileAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { SiTailwindcss, SiMongodb, SiBootstrap, SiPhp, SiVisualstudiocode } from 'react-icons/si'; // Importing icons from react-icons/si

const Skills = () => {
    const skills = [
        {
            category: "Programming Languages",
            items: [
                { name: "JavaScript", icon: faJs },
                { name: "PHP", icon: SiPhp },
                { name: "Java", icon: faJava },
                { name: "C++", icon: faHtml5 }, // Substitute with an appropriate icon for C++
            ]
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { name: "React.js", icon: faReact },
                { name: "Node.js", icon: faNode },
                { name: "Tailwind", icon: SiTailwindcss },
                { name: "Bootstrap", icon: SiBootstrap },
            ]
        },
        {
            category: "Tools & Technologies",
            items: [
                { name: "Git", icon: faGit },
                { name: "MongoDb", icon: SiMongodb },
                { name: "VS Code", icon: SiVisualstudiocode },
                { name: "SQL", icon: faDatabase },
            ]
        },
        {
            category: "Other Skills",
            items: [
                { name: "Responsive Design", icon: faHtml5 }, // Substitute with an appropriate icon for Responsive Design
                { name: "Team Player", icon: faProjectDiagram },
                { name: "Technical Writing", icon: faFileAlt },
                { name: "Time Management", icon: faClock },
            ]
        }
    ];
    return <>
        <section id="skills" className="py-16 pt-[2.5rem] px-4 md:px-8">
            <h2 className="skills-heading">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 md:pt-16">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="bg-slate-700 p-6 rounded-md shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-yellow-500">{skillCategory.category}</h3>
                        <ul className="space-y-2">
                            {skillCategory.items.map((skill, idx) => (
                                <li key={idx} className="flex items-center text-white break-words w-full">
                                    {typeof skill.icon === 'object' ? (
                                        <FontAwesomeIcon icon={skill.icon} className="mr-2 text-yellow-500" />
                                    ) : (
                                        <skill.icon className="mr-2 w-4 h-4 text-yellow-500" />
                                    )}
                                    <span className="whitespace-normal">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    </>
}
export default Skills