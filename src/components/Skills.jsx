import React from 'react';
import { skillsData } from '../data/skills'; 

function Skills() {
  return (
    <section id="skills" className="py-12 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
      
      {/* Responsive Grid Layout for Icons */}
      <ul className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
        {
          skillsData.map((skill) => (
            <li 
              key={skill.name}
              className="flex flex-col items-center justify-center p-3 transition-transform duration-300 hover:scale-110"
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-12 h-12 mb-2" 
              />
              <span className="text-sm font-medium text-gray-600 text-center">{skill.name}</span>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Skills;