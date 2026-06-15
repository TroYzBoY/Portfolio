import React, { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    color: "var(--cq-cyan)",
    skills: [
      { name: "React / Next.js", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "Three.js / WebGL", level: 65 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    color: "var(--cq-purple)",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "Python / Django", level: 70 },
      { name: ".NET / C#", level: 60 },
      { name: "PostgreSQL / MongoDB", level: 72 },
    ],
  },
  {
    category: "Tools & Other",
    color: "var(--cq-green)",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 55 },
      { name: "Figma", level: 78 },
      { name: "OpenCV / ML", level: 60 },
    ],
  },
];

const SkillMeter = ({ name, level, color }) => {
  const fillRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          if (fillRef.current) {
            fillRef.current.style.setProperty("--target-width", `${level}%`);
            fillRef.current.classList.add("animate");
          }
        }
      },
      { threshold: 0.5 }
    );
    if (fillRef.current) observer.observe(fillRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.4rem",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "var(--cq-text)",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--cq-muted)",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "6px",
          background: "var(--cq-border)",
          borderRadius: "100px",
          overflow: "hidden",
        }}
      >
        <div
          ref={fillRef}
          className="skill-meter-fill"
          style={{
            height: "100%",
            width: 0,
            background: color,
            borderRadius: "100px",
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.1}s`;
            el.classList.add("visible");
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "8rem 2rem",
        background: "var(--cq-bg2)",
        borderTop: "1px solid var(--cq-border)",
        borderBottom: "1px solid var(--cq-border)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Label */}
        <div
          className="reveal"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--cq-cyan)",
            marginBottom: "1rem",
          }}
        >
          Skills
        </div>

        <h2
          className="reveal font-bebas gradient-text"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "4rem",
            lineHeight: 0.95,
          }}
        >
          TECHNICAL EXPERTISE
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.category} className="reveal">
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: group.color,
                  marginBottom: "1.5rem",
                  paddingBottom: "0.75rem",
                  borderBottom: `1px solid ${group.color}33`,
                }}
              >
                {group.category}
              </div>
              {group.skills.map((skill) => (
                <SkillMeter key={skill.name} {...skill} color={group.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div
          className="reveal"
          style={{
            marginTop: "4rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
          }}
        >
          {[
            "JavaScript", "TypeScript", "Python", "C#", "React", "Next.js",
            "Node.js", "Express", "Django", ".NET", "Three.js", "WebGL",
            "Spline", "TailwindCSS", "Figma", "PostgreSQL", "MongoDB",
            "Docker", "Git", "OpenCV", "Pygame",
          ].map((tag) => (
            <span key={tag} className="cq-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
