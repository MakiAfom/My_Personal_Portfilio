import { motion } from "framer-motion";
import mikalsprofile from "../assets/mikalsprofile.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Bio = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [-100, 100, -100],
          y: [-50, 50, -50]
        }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-lg bg-white/10 rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-4xl w-full border border-white/20"
      >
        {/* Profile Image with glowing effect */}
        <motion.div 
          className="mb-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 rounded-full blur-xl opacity-50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl"
            src={mikalsprofile}
            alt="Mikal Afewerki"
          />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-center"
        >
          Mikal Afewerki
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 text-2xl font-bold text-neutral-300"
        >
          Data Alchemist
        </motion.h2>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex flex-col items-center"
        >
          <FaQuoteLeft className="text-3xl text-purple-400 mb-2 animate-bounce" />
          <span className="italic text-xl md:text-2xl text-center bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold drop-shadow-lg">
            "If I were given 1 hour to save the planet, I would spend 59 minutes defining the problem and 1 minute resolving it."
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bio;
