import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <FaChartLine className="text-white text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mikal Afewerki
              </span>
              <span className="text-xs text-gray-400">Data Scientist & Analyst</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mikal-afewerki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/MakiAfom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            {/* Twitter */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaSquareXTwitter className="text-xl" />
            </a>
            {/* Fide */}
            <a
              href="https://ratings.fide.com/profile/your-fide-id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fide Chess Profile"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaChessKnight className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
