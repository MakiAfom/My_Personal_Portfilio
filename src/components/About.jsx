import { motion } from "framer-motion";
import aboutBg from "../assets/about-bg.jpg";
import chessImage from "../assets/chess.jpg";
import natureImage from "../assets/nature.jpg";

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
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-400 opacity-20 blur-2xl z-0"
        animate={{ 
          y: [0, 30, 0], 
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-green-400 opacity-20 blur-2xl z-0"
        animate={{ 
          y: [0, -30, 0], 
          x: [0, -20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-blue-400 opacity-20 blur-3xl z-0"
        animate={{ 
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.4, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-2 text-center text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg"
          >
            Mikal Afewerki
          </motion.h1>
          <div className="text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6 text-lg leading-relaxed text-white/90"
            >
              As a Mechanical Engineer and Data Analyst, I am driven by problem-solving. With expertise in Python and data visualization tools like Tableau and Matplotlib, I thrive on unraveling complex challenges and turning data into actionable insights.
              <br /><br />
              Throughout my career, I've worked across diverse projects—from optimizing operational efficiency by 40% in engineering roles to driving process improvements as a Data Analyst. My passion lies in identifying the root cause of issues and translating those findings into clear visualizations that help stakeholders make informed decisions.
              <br /><br />
              My goal is to contribute to a tech or engineering company where I can leverage my data analytics and problem-solving skills to tackle real-world challenges. I am always excited by the opportunity to collaborate with cross-functional teams and create data-driven strategies that shape the future.
            </motion.p>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Beyond the Code
        </motion.h2>

        {/* Cards container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Chess Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="relative h-72">
              <img
                src={chessImage}
                alt="Chess Strategy"
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-['Playfair_Display',serif]">
                Strategic Mind
              </h3>
              <p className="text-white/90 leading-relaxed font-['Playfair_Display',serif]">
                "Chess teaches me patience, foresight, and resilience. It mirrors how I approach data problems — 
                thinking three steps ahead, adapting quickly, and staying calm under pressure. Whether I'm facing 
                a board or a bug, I enjoy the challenge of turning complexity into clarity."
              </p>
            </div>
          </motion.div>

          {/* Nature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-green-500/20 transition-all duration-300"
          >
            <div className="relative h-72">
              <img
                src={natureImage}
                alt="Nature Connection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-['Playfair_Display',serif]">
                Grounded Presence
              </h3>
              <p className="text-white/90 leading-relaxed font-['Playfair_Display',serif]">
                "When I'm surrounded by nature, I reconnect with clarity and stillness. It reminds me that great 
                ideas often come in quiet moments. Hiking, exploring, or simply sitting by a river helps me 
                recharge and return to my work with a fresh, focused mind."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;