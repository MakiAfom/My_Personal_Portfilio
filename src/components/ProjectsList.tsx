import React, { useState } from 'react';
import { Project } from '../types/project';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsList: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="flex flex-row bg-[#141419] text-white font-inter p-8 rounded-xl shadow-2xl min-h-screen">
      <div className="flex-[0_0_40%] relative overflow-hidden rounded-xl shadow-2xl">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/developer-bg.jpg")',
            transform: expandedProject ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </div>

      <div className="flex-[0_0_60%] px-8 overflow-y-auto">
        <h1 className="text-4xl mb-8 font-bold tracking-wider bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Table of Contents
        </h1>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProject === project.id}
              onToggle={toggleProject}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList; 