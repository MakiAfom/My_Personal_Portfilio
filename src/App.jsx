import React from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import About from "./components/About";
import Technologies from "./components/Technologies";
import ProjectsList from "./components/ProjectsList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Bio />
          <About />
          <section className="py-16">
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Data Science & Analytics Portfolio
            </h2>
            <ProjectsList />
          </section>
          <Technologies />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
