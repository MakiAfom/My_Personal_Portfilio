import React from 'react';
import { ProjectCardProps } from '../types/project';

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isExpanded, onToggle }) => {
  return (
    <div
      className="bg-white/5 rounded-xl p-6 border-l-4 cursor-pointer shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
      style={{ borderLeftColor: project.color }}
      onClick={() => onToggle(project.id)}
    >
      <h3 className="text-2xl mb-3 flex items-center" style={{ color: project.color }}>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center mr-3 font-bold text-sm"
          style={{ backgroundColor: project.color, color: '#000' }}
        >
          {project.id}
        </span>
        {project.title}
      </h3>

      <p className="mb-4 text-gray-400 leading-relaxed">
        {project.description}
      </p>

      {isExpanded && (
        <div className="mt-4 animate-fadeIn">
          <p className="leading-relaxed mb-4 text-gray-300">
            {project.details}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: `${project.color}20`, color: project.color }}
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