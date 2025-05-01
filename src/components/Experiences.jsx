import { motion } from "framer-motion";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Technical Data Analyst",
    company: "Na'amal Agency and Equal Reach",
    description: `Problem Discovery: Identifying key business challenges, such as analyzing gender distribution to tailor investment strategies.

Data Identification & Cleaning: Extracting relevant data, handling missing values, and preparing datasets for analysis.

Statistical Analysis: Performing hypothesis testing, frequency analysis, and descriptive statistics to uncover patterns and insights.`,
    technologies: ["PowerBI", "EDA", "Python", "SeaBorn"],
  },
  {
    year: "2022 - 2023",
    role: "Backend Developer",
    company: "Na'amal Agency",
    description: `Designed and developed user interfaces for web applications using Vue.js. Worked closely with software developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend and backend performance.`,
    technologies: ["HTML", "CSS", "Vue.js"],
  },
  {
    year: "2021 - 2022",
    role: "Entry Level Full Stack Developer",
    company: "DOT Ethiopia",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["JavaScript", "React.js", "Node.js", "PostgreSQL"],
  },
  {
    year: "2020 - 2021",
    role: "Data Scientist",
    company: "Gig Works",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Excel", "Python", "Django", "SQLite"],
  },
];

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiences
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
