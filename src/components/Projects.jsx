import React, { useState } from "react";
import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      {/* Grid layout for projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS &&
          PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Details (conditionally rendered on hover) */}
              {hoveredProject === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mt-2"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-lg font-semibold hover:text-blue-700"
                  >
                    {project.title}
                  </a>
                  <p className="mb-4 text-neutral-400">{project.description}</p>

                  {/* Optional Additional Links */}
                  {project.githubUrl3 && (
                    <a
                      href={project.githubUrl3}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 underline hover:text-blue-700"
                    >
                      View Model Testing Code
                    </a>
                  )}

                  {/* Technologies Used */}
                  <div className="mt-2 flex flex-wrap justify-center">
                    {project.technologies &&
                      project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
