import React from 'react';

function ProjectCard({ project }) { 
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      
      {/* Title and Tech Icons */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        
        {/* Map over the technologies array to display icons */}
        <div className="flex space-x-2">
          {project.technologies.map((tech) => (
            <img 
              key={tech.name} 
              src={tech.icon} 
              alt={tech.name} 
              className="w-6 h-6" 
              title={tech.name} 
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{project.description}</p>

      {/* GitHub Link */}
      <p className="flex items-center text-sm text-gray-500">
        View on Github: 
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-2 hover:opacity-75 transition-opacity"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
            alt="GitHub Link" 
            className="w-6 h-6" 
          />
        </a>
      </p>
    </div>
  );
}

export default ProjectCard;