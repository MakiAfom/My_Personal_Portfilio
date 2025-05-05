import React, { useState } from "react";
import { PROJECTS as projects } from '../constants';
import '../styles/ProjectsList.css';

// Import project images
import segmentAnalysis from '../assets/projects/segment analysis.jpg';
import bikeSales from '../assets/projects/bike sales.jpg';
import cryptoViz from '../assets/projects/CryptoViz.jpg';
import chronicDiseases from '../assets/projects/chronic diseases image.jpg';
import hotelSales from '../assets/projects/hotel-Sales.jpg';
import covid from '../assets/projects/covid.jpg';
import dataCleaning from '../assets/projects/Data cleaning.jpg';
import movieCorrelation from '../assets/projects/movie corelation.jpg';
import webScraping from '../assets/projects/web scrapping .jpg';
import dsSales from '../assets/projects/DS Sales Associate.jpg';
import hrEmployee from '../assets/projects/HR employee analysis.jpg';
import kpmgAnalysis from '../assets/projects/KPMG Analysis.png';
import pwcDigital from '../assets/projects/PWC didgital intelligence .jpg';
import quantumFinance from '../assets/projects/Quantum finace .jpg';
import genderInclusion from '../assets/projects/Gender Inclusioon .jpg';
import airways from '../assets/projects/airways.jpg';
import aiDigital from '../assets/projects/AI Digital.png';

const ProjectsList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Map of project IDs to their corresponding images
  const projectImages = {
    1: segmentAnalysis,
    2: bikeSales,
    3: cryptoViz,
    4: chronicDiseases,
    5: hotelSales,
    6: covid,
    7: segmentAnalysis,
    8: dataCleaning,
    9: movieCorrelation,
    10: webScraping,
    11: dsSales,
    12: hrEmployee,
    13: kpmgAnalysis,
    14: pwcDigital,
    15: quantumFinance,
    16: genderInclusion,
    17: airways,
    18: aiDigital
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20">
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group"
              onClick={() => handleProjectClick(project)}
              style={{ 
                borderColor: project.color,
                '--project-color': project.color 
              }}
            >
              {projectImages[project.id] && (
                <div className="project-image">
                  <img src={projectImages[project.id]} alt={project.title} />
                </div>
              )}
              <div className="project-card-content">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tag, index) => (
                    <span 
                      key={index} 
                      className="tag" 
                      style={{ backgroundColor: project.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              style={{ '--project-color': selectedProject.color }}
            >
              <button className="close-button" onClick={handleCloseModal}>×</button>
              {projectImages[selectedProject.id] && (
                <div className="modal-image">
                  <img src={projectImages[selectedProject.id]} alt={selectedProject.title} />
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="project-description text-gray-300 mb-6">{selectedProject.description}</p>
              <div className="project-details mb-6">
                <h3 className="text-xl font-semibold mb-2">Key Achievements</h3>
                <p className="text-gray-300">{selectedProject.details}</p>
              </div>
              <div className="project-tags mb-6">
                {selectedProject.technologies.map((tag, index) => (
                  <span 
                    key={index} 
                    className="tag" 
                    style={{ backgroundColor: selectedProject.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
                {selectedProject.githubUrl3 && (
                  <a
                    href={selectedProject.githubUrl3}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
