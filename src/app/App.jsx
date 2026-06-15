import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Intro from "../features/intro/Intro";
import Hero from "../features/hero/Hero";
import About from "../features/about/About";
import Skills from "../features/skills/Skills";
import Projects from "../features/projects/Projects";
import Experience from "../features/experience/Experience";
import Education from "../features/education/Education";
import Contact from "../features/contact/Contact";

function App() {
  const [theme, setTheme] = useState("dark");
  const progressRef = useRef(null);
  const gridRef = useRef(null);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      // Ambient grid parallax
      if (gridRef.current) {
        const offset = scrollTop * 0.02;
        gridRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal animations observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    };

    observe();
    const timer = setTimeout(observe, 500);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        id="progress-bar"
        style={{ width: "0%" }}
      />

      {/* Ambient grid */}
      <div ref={gridRef} className="ambient-grid" />

      {/* Spline intro — fullscreen top section */}
      <Intro />

      {/* Main site */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
