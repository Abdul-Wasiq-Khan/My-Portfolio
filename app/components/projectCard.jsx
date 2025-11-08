

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-400">{project.description}</p>
    </div>
  );
}
