import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../features/hero/Hero";
import About from "../features/about/About";
import Projects from "../features/projects/Projects";
import Experience from "../features/experience/Experience";
import Contact from "../features/contact/Contact";
import Footer from "../components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white light:bg-gradient-to-br light:from-gray-50 light:via-white light:to-gray-100 light:text-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
