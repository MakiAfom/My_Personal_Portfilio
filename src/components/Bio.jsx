import mikalsprofile from "../assets/mikalsprofile.jpg";
import { motion } from "framer-motion";

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
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Mikal Afewerki
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight"
            >
              Data Analyst
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight text-white"
            >
              I’m Mikal, a data analyst and aspiring entrepreneur with a strong
              background in mechanical engineering. I enjoy working on
              data-driven projects that solve real-world problems and drive
              innovation. I’m currently seeking opportunities as a data analyst
              and am open to collaboration, mentorship, or feedback on my work.
              What I’m Looking For:
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-80 h-80 object-cover"
              src={mikalsprofile}
              alt="Mikal Afewerki"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
