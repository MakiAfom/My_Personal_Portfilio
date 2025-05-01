import React, { useState } from "react";
import aboutme from "../assets/computer-program-coding-screen.png";

const ProjectsList = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Optimizing Solar Cooking Efficiency",
      description:
        "A project focused on improving solar cooking systems for sustainability, analyzing energy use for optimal performance.",
      details:
        "This research project evaluated different solar cooker designs and materials to maximize heat retention and cooking efficiency. Data was collected across various climate conditions to determine optimal configurations for different regions.",
      tags: ["Sustainability", "Data Analysis", "Energy Optimization"],
      color: "#f5a623",
    },
    {
      id: 2,
      title: "Data-Driven Restaurant Recommendation System",
      description:
        "This project aims to enhance customer experience by using restaurant reviews and location data from a Kaggle dataset. The primary objective is to analyze restaurant ratings based on various features and create a personalized restaurant recommendation system.",
      details:
        "Using collaborative filtering and content-based techniques, this system analyzes user preferences, cuisine types, price ranges, and geographical proximity to provide tailored recommendations. The implementation includes sentiment analysis of reviews to gauge customer satisfaction more accurately.",
      tags: [
        "Machine Learning",
        "NLP",
        "Recommendation Systems",
        "Data Mining",
      ],
      color: "#4a90e2",
    },
    {
      id: 3,
      title:
        "Customer Empowering Employee Learning through Power BI in Rural Eritrea",
      description:
        "A development initiative sought to enhance workforce efficiency and gather demographic insights to shape training programs in rural Eritrea of employee data to uncover gender-based patterns in investments and educational needs.",
      details:
        "This project leveraged Power BI dashboards to visualize workforce demographics, skills gaps, and training outcomes. The interactive reporting system enabled stakeholders to identify underserved populations and allocate resources more effectively.",
      tags: ["Power BI", "Data Visualization", "International Development"],
      color: "#7ed321",
    },
    {
      id: 4,
      title: "SDS and Walmart Sales Prediction",
      description:
        "Forecast Walmart's sales to optimize inventory, improve marketing strategies, and manage seasonal demand more effectively.",
      details:
        "Using time series analysis and machine learning algorithms, this project created predictive models for Walmart's sales across different product categories. The models incorporated seasonal trends, promotional events, and macroeconomic indicators to improve accuracy.",
      tags: ["Time Series Analysis", "Forecasting", "Retail Analytics"],
      color: "#bd10e0",
    },
  ];

  const toggleProject = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#141419",
        color: "#ffffff",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          flex: "0 0 40%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://source.unsplash.com/random/800x1200/?developer,coding")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease",
            transform: expandedProject ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      <div
        style={{
          flex: "0 0 60%",
          padding: "0 2rem",
          overflowY: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            backgroundImage: "linear-gradient(90deg, #9c27b0, #3f51b5)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: "2rem",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          Table of Contents
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                padding: "1.5rem",
                borderLeft: `4px solid ${project.color}`,
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                transform:
                  expandedProject === project.id ? "translateY(-5px)" : "none",
              }}
              onClick={() => toggleProject(project.id)}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  color: project.color,
                }}
              >
                <span
                  style={{
                    backgroundColor: project.color,
                    color: "#000",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  {project.id}
                </span>
                {project.title}
              </h3>

              <p
                style={{
                  marginBottom: "1rem",
                  lineHeight: "1.6",
                  color: "#aaa",
                }}
              >
                {project.description}
              </p>

              {expandedProject === project.id && (
                <div
                  style={{
                    marginTop: "1rem",
                    animation: "fadeIn 0.5s ease",
                  }}
                >
                  <p
                    style={{
                      lineHeight: "1.6",
                      marginBottom: "1rem",
                      color: "#ddd",
                    }}
                  >
                    {project.details}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginTop: "1rem",
                    }}
                  >
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "50px",
                          fontSize: "0.8rem",
                          color: "#fff",
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    style={{
                      backgroundColor: project.color,
                      color: "#000",
                      border: "none",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "8px",
                      marginTop: "1.5rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    View Project Details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33337 8H12.6667"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 3.33331L12.6667 7.99998L8 12.6666"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsList;
