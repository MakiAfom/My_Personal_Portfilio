import React from 'react';
import { ProjectCardProps } from '../types/project';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isExpanded, onToggle }) => {
  return (
    <div
      className="bg-white/5 rounded-xl p-6 border-l-4 cursor-pointer shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
      style={{ borderLeftColor: project.color }}
      onClick={() => onToggle(project.id)}
    >
      <div className="flex items-center mb-4">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold text-sm"
          style={{ backgroundColor: project.color, color: '#000' }}
        >
          {project.id}
        </span>
        <h3 className="text-xl font-semibold" style={{ color: project.color }}>
          {project.title}
        </h3>
      </div>

      <p className="mb-4 text-gray-300 leading-relaxed">
        {project.description}
      </p>

      {isExpanded && (
        <div className="mt-4 animate-fadeIn">
          <p className="leading-relaxed mb-4 text-gray-200">
            {project.details}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: `${project.color}20`,
                  color: project.color
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard; 