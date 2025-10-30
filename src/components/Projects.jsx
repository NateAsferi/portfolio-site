import React from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projects';

function Projects() {
  return (
    <section id="projects" className="py-12 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
      
      {/* Use Tailwind Grid to display cards in a responsive layout */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {
          projectData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Projects;