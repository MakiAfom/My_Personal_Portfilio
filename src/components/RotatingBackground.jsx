import { motion } from "framer-motion";
import mynewbg from "../assets/mynewbg.jpg";

const RotatingBackground = () => (
  <motion.img
    src={mynewbg}
    alt="Rotating background"
    className="fixed inset-0 w-screen h-screen object-cover z-0 pointer-events-none select-none"
    animate={{ rotate: [0, 360, 0, -360, 0] }}
    transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
    style={{ opacity: 0.5, filter: "brightness(0.7) blur(2px)" }}
  />
);

export default RotatingBackground; 