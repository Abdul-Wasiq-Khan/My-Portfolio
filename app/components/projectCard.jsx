export default function ProjectCard({ project }) {
  const tagPalette = {
    JavaScript: '#FFC107',
    Python: '#4CAF50',
    WebDev: '#FF9800',
    FullStack: '#2196F3',
    Frontend: '#9C27B0',
    Backend: '#F44336',
    IOT: '#00BCD4',
    Robotics: '#8BC34A',
    ESP: '#FF5722',
    "C++": '#3F51B5',
    RaspberryPi: '#795548'
  };
  const defaultColor = '#60A5FA';
  const getTagColor = (tech) => tagPalette[tech] || defaultColor;

  return (
    <div data-aos="zoom-in-up">
      <style>{`
        @keyframes glowFade {
          0%, 100% { 
            opacity: 1; 
            box-shadow: 0 0 6px 2px var(--tag-color-alpha), 0 0 0 1px var(--tag-color); 
          }
          50% { 
            opacity: 0.6; 
            box-shadow: 0 0 12px 4px var(--tag-color-alpha), 0 0 0 1px var(--tag-color); 
          }
        }
        .tech-tag {
          animation: glowFade 2s ease-in-out infinite;
        }
      `}</style>

      <div className="bg-gray-900 rounded-3xl shadow-lg p-4 lg:p-6 hover:shadow-2xl transition-shadow duration-300 border border-gray-800 relative">
        {/* Status Badge */}


        <div className="flex gap-6">
          {/* Image/Avatar Section */}
          <div className="flex shrink-0">
            <div className="w-32 h-32 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full rounded-full object-cover" />
              ) : (
                <span className="text-gray-600 text-sm">Image</span>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>

            {/* Description Box */}
            <div className="bg-gray-800 border border-gray-700 rounded-md p-4 mb-4 min-h-24">
              <p className="text-gray-300">{project.description}</p>
            </div>

            {/* Key Features Box */}
            <div className="bg-gray-800 border border-gray-700 rounded-md p-4 mb-6 min-h-32">
              <h3 className="text-gray-300 font-semibold mb-2">Key points taken from</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                {project.keyFeatures?.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {project.technologies?.map((tech, idx) => {
                const color = getTagColor(tech);
                const colorAlpha = color + '44';
                return (
                  <span
                    key={idx}
                    className="border-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide tech-tag"
                    style={{
                      color,
                      borderColor: color,
                      '--tag-color': color,
                      '--tag-color-alpha': colorAlpha
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-6 text-xs text-gray-500 border-t border-gray-700 pt-4">
        
          <a href={project.github} className="text-blue-400 hover:underline">
            <img src="/icons/github.png" alt="GitHub" className="inline w-8 h-8  bg-gray-300 rounded-full" />
          </a>
          <a href={project.demo} className="ml-4 text-blue-400 hover:underline">
            <img src="/icons/link.svg" alt="Demo" className="inline w-8 h-8  rounded-full" />
              <span className="text-xl">Link to demonstration</span>
          </a>
        </div>


      </div>
      
    </div>
  );
}
{/*
function statusBadge(status) {
  if (status === "ongoing") {
    return (
<div className="absolute top-[7%] left-[80%] z-10">
  <div className="bg-red-500 opacity-80 text-gray-900 px-3 py-1 text-sm font-semibold transform rotate-45 shadow-md clip-trapezoid w-[20vh] text-center"
       style={{clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"}}
  >
    {status}
  </div>
</div>

    );
  }
}
  */}