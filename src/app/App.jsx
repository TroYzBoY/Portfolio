import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../features/hero/Hero";
import About from "../features/about/About";
import Projects from "../features/projects/Projects";
import Experience from "../features/experience/Experience";
import Contact from "../features/contact/Contact";
import Footer from "../components/layout/Footer";
import Preloader from "../components/Preloader";
import { ScrollSection } from "../components/ScrollSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white light:bg-gradient-to-br light:from-gray-50 light:via-white light:to-gray-100 light:text-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <ScrollSection id="hero" threshold={0.1}>
          <Hero />
        </ScrollSection>
        <ScrollSection id="about" threshold={0.1}>
          <About />
        </ScrollSection>
        <ScrollSection id="projects" threshold={0.1}>
          <Projects />
        </ScrollSection>
        <ScrollSection id="experience" threshold={0.1}>
          <Experience />
        </ScrollSection>
        <ScrollSection id="contact" threshold={0.1}>
          <Contact />
        </ScrollSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;
