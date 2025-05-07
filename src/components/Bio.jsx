import { motion } from "framer-motion";
import mikalsprofile from "../assets/mikalsprofile.jpg";
import mynewbg from "../assets/mynewbg.jpg";

const Bio = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden z-10 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-800">
      {/* Centered, vivid, rotating background image */}
      <motion.img
        src={mynewbg}
        alt="Rotating background"
        className="absolute left-1/2 top-1/2 w-[700px] h-[700px] object-cover -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
        animate={{ rotate: [0, 360, 0, -360, 0] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
        style={{ opacity: 1 }}
      />
      {/* Glassmorphism Card (no blur, just translucent) */}
      <div className="relative z-10 max-w-2xl w-full mx-auto rounded-3xl bg-white/10 shadow-2xl border border-white/20 p-10 flex flex-col items-center">
        {/* Profile Image - slightly larger */}
        <img
          src={mikalsprofile}
          alt="Mikal Afewerki"
          className="w-52 h-52 object-cover rounded-full border-4 border-white shadow-lg mb-6"
        />
        {/* Name */}
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent mb-1">
          Mikal Afewerki
        </h1>
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-[Orbitron,Roboto,sans-serif]">
          Data Alchemist
        </h2>
        {/* Motto or Description */}
        <p className="text-lg text-center text-white/90">
          "If I were given 1 hour to save the planet, I would spend 59 minutes defining the problem and 1 minute resolving it."
        </p>
      </div>
    </section>
  );
};

export default Bio;