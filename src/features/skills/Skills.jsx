import React from "react";
import ClickSpark from "../../components/effects/ClickSpark";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../../hooks/useScrollAnimation";

const Skills = () => {
  const headingRef = useScrollAnimation({
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
  });
  const categoriesRef = useStaggerAnimation({
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
  });
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "AWS", "Vite", "Webpack"],
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
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={headingRef.current}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          >
            Skills
          </h2>
          <div
            ref={categoriesRef.current}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-white rounded-lg border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default Skills;
