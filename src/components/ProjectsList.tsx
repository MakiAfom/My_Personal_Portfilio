import React, { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import '../styles/ProjectsList.css';

const ProjectsList: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
            style={{ 
              borderColor: project.color,
              '--project-color': project.color 
            } as React.CSSProperties}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag: string, index: number) => (
                <span 
                  key={index} 
                  className="tag" 
                  style={{ backgroundColor: project.color }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div 
            className="modal-content" 
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            style={{ '--project-color': selectedProject.color } as React.CSSProperties}
          >
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <h2>{selectedProject.title}</h2>
            <p className="project-description">{selectedProject.description}</p>
            <div className="project-details">
              <h3>Details</h3>
              <p>{selectedProject.details}</p>
            </div>
            <div className="project-tags">
              {selectedProject.tags.map((tag: string, index: number) => (
                <span 
                  key={index} 
                  className="tag" 
                  style={{ backgroundColor: selectedProject.color }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsList; 