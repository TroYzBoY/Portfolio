import React, { useState, useRef, useEffect } from "react";
import ClickSpark from "../../components/effects/ClickSpark";
import pygameImage from "../../assets/images/pygame.png";
import faceIdImage from "../../assets/images/faceId.jpg";
import auraImage from "../../assets/images/Aura.png";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../../hooks/useScrollAnimation";

const LetterReveal = ({ text, isHovered, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isHovered, delay]);

  return (
    <span
      className="inline-block text-white text-2xl md:text-5xl transition-all duration-500 whitespace-pre"
      style={{
        clipPath: isVisible
          ? "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)"
          : "polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px)",
        transitionDelay: `${delay}ms`,
        transform: isVisible ? "translateY(0px)" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
        willChange: "auto",
        lineHeight: "1",
      }}
    >
      {text === " " ? "\u00A0" : text}
    </span>
  );
};

const SlidingTextButton = ({ text, href = "#" }) => {
  return (
    <a href={href}>
      <button className="relative group flex items-center justify-center cursor-pointer select-none">
        <div className="group relative inline-flex items-center justify-center gap-3 bg-cyan-400 text-black font-medium rounded-full transition-all duration-300 hover:gap-4 overflow-hidden text-lg px-8 py-5">
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div className="relative z-10 overflow-hidden flex items-center">
            <div className="relative overflow-hidden inline-block cursor-pointer select-none">
              <div className="block">
                {text.split("").map((char, index) => (
                  <span key={index} className="inline-block whitespace-pre">
                    {char}
                  </span>
                ))}
              </div>
              <div className="block absolute top-0 left-0">
                {text.split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block whitespace-pre group-hover:translate-y-0 translate-y-7 transition-transform duration-300"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden overflow-hidden md:flex w-14 h-14 bg-cyan-400 rounded-full items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 delay-100 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <svg
            className="w-5 h-5 text-black absolute transition-all duration-300 translate-y-0 translate-x-0 opacity-100 group-hover:translate-y-full group-hover:-translate-x-full group-hover:opacity-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M7 17L17 7M17 7H7M17 7v10"
            ></path>
          </svg>
          <svg
            className="w-5 h-5 text-black absolute transition-all duration-300 translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M7 17L17 7M17 7H7M17 7v10"
            ></path>
          </svg>
        </div>
      </button>
    </a>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const headingRef = useScrollAnimation({
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
  });
  const projectsRef = useStaggerAnimation({
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  const buttonRef = useScrollAnimation({
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
  });

  const projects = [
    {
      title: "Pygame Project",
      category: "Game Development",
      description:
        "Interactive game development project built with Python and Pygame, showcasing game mechanics and user interaction.",
      tech: ["Python", "Pygame", "Game Development"],
      link: "https://github.com/TroYzBoY/pygame",
      image: pygameImage,
    },
    {
      title: "Face ID Recognition",
      category: "AI/ML",
      description:
        "Face recognition system using computer vision and machine learning for identity verification and authentication.",
      tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      link: "https://github.com/TroYzBoY/Faceless",
      image: faceIdImage,
    },
    {
      title: "Aura Mini E-commerce",
      category: "E-commerce",
      description:
        "Mini e-commerce platform with product management, shopping cart, and payment integration features.",
      tech: ["React", "Node.js", "E-commerce", "Payment Integration"],
      link: "https://github.com/TroYzBoY/Aura-E-commerce",
      image: auraImage,
    },
    {
      title: "Site Cloning Experience",
      category: "Web Development",
      description:
        "Recreating popular websites with modern web technologies, focusing on responsive design and user experience.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://github.com/TroYzBoY/Package-Site-Clone",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    },
  ];

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <section
        id="projects"
        className="works-section relative mt-10 px-[1rem] md:px-[4rem]"
      >
        <div className="max-w-[90vw] mx-auto works-section">
          {/* Main Heading */}
          <div
            ref={headingRef}
            className="text-sec w-full text-3xl lg:text-4xl font-medium max-w-3xl mb-8 sm:mb-12 leading-[1.1] lg:px-4 px-1 break-words"
          >
            Discover my latest work and creative solutions that bring ideas to
            life
          </div>

          {/* Projects Grid */}
          <div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group will-change-transform relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Title and Category - Mobile Only / Desktop Hidden */}
                <div className="mb-4 relative z-10">
                  <div className="text-2xl md:hidden block md:text-4xl font-medium text-white mb-2 break-words">
                    {project.title}
                  </div>
                  <div className="text-gray-400 text-base md:text-lg font-light break-words">
                    {project.category}
                  </div>
                </div>

                {/* Project Card */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden aspect-[4/3] cursor-pointer z-0 rounded-2xl"
                  style={{
                    backgroundColor:
                      project.title === "Aura Mini E-commerce"
                        ? "#ffffff"
                        : "transparent",
                  }}
                >
                  {/* Image */}
                  <img
                    alt={project.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="object-cover transition-transform duration-700 ease-out w-full h-full absolute inset-0 rounded-2xl"
                    src={project.image}
                    style={{
                      transform:
                        hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                      willChange: "auto",
                    }}
                  />

                  {/* Dark Overlay */}
                  <div
                    className="absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none z-10"
                    style={{
                      opacity: hoveredIndex === index ? 0.4 : 0,
                      willChange: "auto",
                    }}
                  />

                  {/* Animated Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center px-8 pointer-events-none z-20">
                    <div className="flex flex-wrap justify-center gap-1 max-w-full">
                      {project.title.split("").map((char, charIndex) => (
                        <LetterReveal
                          key={charIndex}
                          text={char}
                          isHovered={hoveredIndex === index}
                          delay={charIndex * 30}
                        />
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Button */}
        <div
          ref={buttonRef}
          className="relative z-10 w-full mt-16 flex items-center justify-center"
        >
          <SlidingTextButton text="projects" href="#projects" />
        </div>

        {/* Cyan connector line to next section (Experience is excluded; visual only) */}
        <div className="w-full flex justify-center mt-16">
          <div className="absolute w-full h-[2px] bg-cyan-400/70 opacity-80" />
        </div>
      </section>
    </ClickSpark>
  );
};

export default Projects;
