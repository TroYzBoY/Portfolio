import React, { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Techivation",
    role: "Full Stack Developer",
    type: "Part-time",
    description:
      "Working on web features and maintaining code for an audio plugin licensing platform.",
    period: "May 2025 – Present",
    status: "current",
    accent: "var(--cq-cyan)",
  },
  {
    company: "VexLogic",
    role: "Full Stack Developer",
    type: "Part-time",
    description:
      "Contributing to SaaS platform development with focus on frontend and database integration.",
    period: "Jun 2025 – Present",
    status: "current",
    accent: "var(--cq-cyan)",
  },
  {
    company: "ComraAI",
    role: "Frontend Developer",
    type: "Contract",
    description:
      "Built UI components for 3D web app using React and Three.js.",
    period: "Nov 2024 – Feb 2025",
    status: "past",
    accent: "var(--cq-purple)",
  },
  {
    company: "DigitalNatives",
    role: "Frontend Developer",
    type: "Contract",
    description:
      "Developed web pages and components using React and Tailwind CSS.",
    period: "Feb 2024 – Oct 2024",
    status: "past",
    accent: "var(--cq-purple)",
  },
  {
    company: "Fintechracy",
    role: "Frontend Developer",
    type: "Internship",
    description:
      "Worked on financial app UI and learned web development best practices.",
    period: "Nov 2023 – Mar 2024",
    status: "past",
    accent: "var(--cq-muted)",
  },
  {
    company: "Codintex",
    role: "Software Engineer",
    type: "Internship",
    description:
      "Gained foundational experience in backend development with .NET and C#.",
    period: "Jul 2022 – Sep 2023",
    status: "past",
    accent: "var(--cq-muted)",
  },
];

const ExperienceItem = ({ exp, index, lineProgress }) => {
  const itemRef = useRef(null);
  const isActive = lineProgress >= (index / experiences.length) * 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (itemRef.current) {
              itemRef.current.style.opacity = "1";
              itemRef.current.style.transform = "translateY(0)";
            }
          }, index * 100);
        }
      },
      { threshold: 0.15 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [index]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr",
        alignItems: "start",
        marginBottom: "3rem",
        opacity: 0,
        transform: "translateY(30px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {/* Left side */}
      {isEven ? (
        <div style={{ paddingRight: "2rem", textAlign: "right" }}>
          <ExperienceContent exp={exp} isActive={isActive} />
        </div>
      ) : (
        <div />
      )}

      {/* Center dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "0.25rem",
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            border: `2px solid ${isActive ? exp.accent : "var(--cq-border)"}`,
            background: isActive ? exp.accent : "var(--cq-bg)",
            boxShadow: isActive ? `0 0 12px ${exp.accent}88` : "none",
            transition: "all 0.5s ease",
            flexShrink: 0,
          }}
        />
      </div>

      {/* Right side */}
      {!isEven ? (
        <div style={{ paddingLeft: "2rem" }}>
          <ExperienceContent exp={exp} isActive={isActive} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

const ExperienceContent = ({ exp, isActive }) => (
  <div>
    <div
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.6rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: isActive ? exp.accent : "var(--cq-muted)",
        marginBottom: "0.4rem",
        transition: "color 0.4s",
      }}
    >
      {exp.period}
      {exp.status === "current" && (
        <span
          style={{
            marginLeft: "0.5rem",
            background: "var(--cq-green)",
            color: "#000",
            padding: "1px 6px",
            borderRadius: "4px",
            fontSize: "0.55rem",
          }}
        >
          NOW
        </span>
      )}
    </div>
    <div
      className="font-bebas"
      style={{
        fontSize: "clamp(1.4rem, 3vw, 2.5rem)",
        lineHeight: 1,
        color: isActive ? "var(--cq-text)" : "var(--cq-muted)",
        letterSpacing: "0.03em",
        marginBottom: "0.3rem",
        transition: "color 0.4s",
      }}
    >
      {exp.company}
    </div>
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        color: "var(--cq-muted)",
        marginBottom: "0.5rem",
      }}
    >
      {exp.role} · {exp.type}
    </div>
    <p
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.8rem",
        lineHeight: 1.6,
        color: "var(--cq-muted)",
        maxWidth: 320,
      }}
    >
      {exp.description}
    </p>
  </div>
);

const Experience = () => {
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = sectionRef.current.offsetHeight;
      const scrolled = windowH * 0.5 - rect.top;
      const progress = Math.min(100, Math.max(0, (scrolled / sectionH) * 100));
      setLineProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "8rem 2rem",
        background: "var(--cq-bg2)",
        borderTop: "1px solid var(--cq-border)",
        borderBottom: "1px solid var(--cq-border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--cq-cyan)",
            marginBottom: "1rem",
          }}
        >
          Experience
        </div>
        <h2
          className="font-bebas gradient-text"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "5rem",
            lineHeight: 0.95,
          }}
        >
          MY JOURNEY
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative" }} ref={timelineRef}>
          {/* Center line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--cq-border)",
              transform: "translateX(-50%)",
            }}
          />
          {/* Progress fill */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              width: "1px",
              height: `${lineProgress}%`,
              background: "linear-gradient(to bottom, var(--cq-cyan), var(--cq-purple))",
              transform: "translateX(-50%)",
              transition: "height 0.2s ease",
              boxShadow: "0 0 8px rgba(91,140,255,0.5)",
            }}
          />

          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.company}
              exp={exp}
              index={index}
              lineProgress={lineProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
