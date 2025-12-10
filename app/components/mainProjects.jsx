import data from '../projects.json';
import ProjectCard from './projectCard';

export default function Projects(){
    return (
        <div className="text-white bg-neutral-800 mx-6 mt-8 rounded-lg min-h-screen p-8" >
            <div className="headings text-3xl font-bold mb-8">Main Projects</div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}