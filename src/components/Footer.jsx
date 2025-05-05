import React from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter, FaChessKing, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors">
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:mikalafewerki14@gmail.com">mikalafewerki14@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-blue-500" />
                <span>+9804579962</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <FaLocationDot className="text-blue-500" />
                <span>North Carolina, CH 28212</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="block text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mikal-afewerki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://github.com/MakiAfom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaXTwitter className="text-2xl" />
              </a>
              <a
                href="https://ratings.fide.com/profile/your-fide-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaChessKing className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Mikal Afewerki. All rights reserved.</p>
          <p className="mt-2 text-sm">Data Scientist & Analyst | Machine Learning | Business Intelligence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 