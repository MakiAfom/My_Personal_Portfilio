import { motion } from "framer-motion";
import aboutBg from "../assets/about-bg.jpg";

const About = () => {
  return (
    <section
      className="relative border-b border-neutral-900 pb-16 min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(20,20,40,0.7), rgba(40,20,60,0.6)), url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated, blurred colored shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-400 opacity-20 blur-2xl z-0"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-green-400 opacity-20 blur-2xl z-0"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl w-full mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20"
      >
        <h1 className="mb-10 text-center text-4xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          About <span className="text-neutral-300">Me</span>
        </h1>
        <div className="text-center">
          <p className="mb-6 text-lg leading-relaxed text-white/90">
            As a Mechanical Engineer and Data Analyst, I am driven by problem-solving. With expertise in Python and data visualization tools like Tableau and Matplotlib, I thrive on unraveling complex challenges and turning data into actionable insights.
            <br /><br />
            Throughout my career, I've worked across diverse projects—from optimizing operational efficiency by 40% in engineering roles to driving process improvements as a Data Analyst. My passion lies in identifying the root cause of issues and translating those findings into clear visualizations that help stakeholders make informed decisions.
            <br /><br />
            My goal is to contribute to a tech or engineering company where I can leverage my data analytics and problem-solving skills to tackle real-world challenges. I am always excited by the opportunity to collaborate with cross-functional teams and create data-driven strategies that shape the future.
          </p>
          <div className="mb-8">
            <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-semibold text-lg shadow-lg">
              Data Analysis & Visualization • Machine Learning & AI • Full-Stack Development • Business Intelligence
            </span>
          </div>
          <p className="mb-4 text-lg leading-relaxed text-white/80">
            Explore my portfolio below to see some of my key projects. For more detailed work, visit my{" "}
            <a
              href="https://github.com/MakiAfom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-blue-400 transition-colors duration-300 underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;