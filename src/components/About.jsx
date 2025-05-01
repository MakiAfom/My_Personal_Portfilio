import aboutme from "../assets/computer-program-coding-screen.png";
import { motion } from "framer-motion";
import ProjectsList from "./ProjectsList";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex justify-center">
        <div className="max-w-2xl text-center">
          <p className="mb-4">
            My passion is to solve complex problems and optimize processes where
            data is the solution. I enjoy working on projects that involve
            playing with programming languages to optimize systems and find
            innovative solutions. Below are some highlights of the selected
            projects in my portfolio, but I’ve completed many more, which you
            can find on my GitHub.
          </p>
          <p className="mb-4">
            These are the key projects I’ve chosen to showcase in my portfolio,
            demonstrating my ability to analyze data, build models, and create
            solutions. For a deeper look into my work, feel free to explore my
            other projects on{" "}
            <a
              href="https://github.com/MakiAfom"
              target="_blank"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutme} alt="about" />
          </div>
        </motion.div> */}
        {/* <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-600">
                Table of Contents
              </h2>
              <ul className="list-disc ml-4">
                <li className="my-2">
                  <strong className="text-red-500">Project 1:</strong>{" "}
                  Optimizing Solar Cooking Efficiency
                  <p className="ml-4">
                    A project focused on improving solar cooking systems for
                    sustainability, analyzing energy use for optimal
                    performance.
                  </p>
                </li>
                <li className="my-2">
                  <strong className="text-yellow-500">Project 2:</strong>{" "}
                  Data-Driven Restaurant Recommendation System
                  <p className="ml-4">
                    This project aims to enhance customer experience by using
                    restaurant reviews and location data from a Kaggle dataset.
                    The primary objective is to analyze restaurant ratings based
                    on various features and create a personalized restaurant
                    recommendation system.
                  </p>
                </li>
                <li className="my-2">
                  <strong className="text-blue-500">Project 3:</strong> Customer
                  Empowering Employee Learning through Power BI in Rural Eritrea
                  <p className="ml-4">
                    A development initiative sought to enhance workforce
                    efficiency and gather demographic insights to shape training
                    programs in rural Eritrea of employee data to uncover
                    gender-based patterns in investments and educational needs..
                  </p>
                </li>
                <li className="my-2">
                  <strong className="text-green-500">Project 4:</strong> SDS and
                  Walmart Sales Prediction
                  <p className="ml-4">
                    Forecast Walmart's sales to optimize inventory, improve
                    marketing strategies, and manage seasonal demand more
                    effectively.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div> */}
        <ProjectsList />
      </div>
    </div>
  );
};

export default About;
