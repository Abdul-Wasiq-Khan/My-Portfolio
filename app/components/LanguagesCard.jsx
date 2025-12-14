import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faNodeJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faCode, faCog, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const skills = [
    {
        "category": "Web Development",
        "skills": ["React.js", "Next.js", "Tailwind CSS", "Node.js", "HTML/CSS/JS"],
        "color": "red",
        "logo": <FontAwesomeIcon icon={faReact} />
    },
    {
        "category": "Hardware & Electronics", 
        "skills": ["Arduino", "ESP32", "IoT systems", "Circuit design", "Robotics assembly"],
        "color": "amber",
        "logo": <FontAwesomeIcon icon={faMicrochip} />
    },
    {
        "category": "Python",
        "skills": ["OpenCV", "NumPy", "PyTorch", "Matplotlib", "Machine Learning"],
        "color": "blue",
        "logo": <FontAwesomeIcon icon={faPython} />
    },
    {
        "category": "C++",
        "skills": ["STL", "OpenCV", "Arduino Libraries", "Embedded Systems"],
        "color": "purple", 
        "logo": <FontAwesomeIcon icon={faCode} />
    },
    {
        "category": "Miscellaneous",
        "skills": ["3D Modeling", "Computer Vision", "Graphic Design", "IoT Development"],
        "color": "green",
        "logo": <FontAwesomeIcon icon={faLayerGroup} />
    }
];

export default function LanguagesCard() {
    const getColorClasses = (color) => {
        const colorMap = {
            red: "text-red-400 bg-red-900/20 border-red-500/30",
            amber: "text-amber-400 bg-amber-900/20 border-amber-500/30", 
            blue: "text-blue-400 bg-blue-900/20 border-blue-500/30",
            purple: "text-purple-400 bg-purple-900/20 border-purple-500/30",
            green: "text-green-400 bg-green-900/20 border-green-500/30"
        };
        return colorMap[color] || "text-gray-400 bg-gray-900/20 border-gray-500/30";
    };

    return (
        <div className="bg-neutral-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 mt-6 ">
            <h2 className="text-2xl font-bold mb-6 text-white" data-aos="fade-up dat">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((category) => (
                    <div key={category.category} className={`p-4 rounded-lg border ${getColorClasses(category.color)}  hover:opacity-80 transform transition-transform duration-200`}
                        data-aos="zoom-in"
                    >
                        <div className="flex items-center mb-3">
                            <div className="text-xl mr-3">{category.logo}</div>
                            <h3 className="font-semibold text-white">{category.category}</h3>
                        </div>
                        <ul className="space-y-1">
                            {category.skills.map((skill, index) => (
                                <li key={index} className="text-sm text-gray-300 flex items-center">
                                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${category.color === 'red' ? 'bg-red-400' : 
                                        category.color === 'amber' ? 'bg-amber-400' :
                                        category.color === 'blue' ? 'bg-blue-400' :
                                        category.color === 'purple' ? 'bg-purple-400' : 'bg-green-400'}`}></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}