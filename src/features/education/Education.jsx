import React, { useEffect, useRef } from "react";

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
  "Attention to Detail",
  "Self-learning",
  "Creative Thinking",
];

const Education = () => {
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
      id="education"
      ref={sectionRef}
      style={{ padding: "8rem 2rem" }}
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
          Education
        </div>

        <h2
          className="reveal font-bebas gradient-text"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "4rem",
            lineHeight: 0.95,
          }}
        >
          ACADEMIC BACKGROUND
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Education card */}
          <div className="reveal cq-card" style={{ padding: "2rem" }}>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--cq-cyan)",
                marginBottom: "1rem",
              }}
            >
              2021 – 2025
            </div>
            <h3
              className="font-bebas"
              style={{
                fontSize: "1.8rem",
                letterSpacing: "0.03em",
                color: "var(--cq-text)",
                marginBottom: "0.5rem",
                lineHeight: 1,
              }}
            >
              NATIONAL UNIVERSITY OF MONGOLIA
            </h3>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "var(--cq-purple)",
                marginBottom: "1rem",
              }}
            >
              Bachelor's in Computer Science &amp; Software Engineering
            </div>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--cq-border)",
              }}
            >
              <div>
                <div
                  className="font-bebas gradient-text"
                  style={{ fontSize: "2rem", lineHeight: 1 }}
                >
                  3.4
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    color: "var(--cq-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  GPA / 4.0
                </div>
              </div>
              <div>
                <div
                  className="font-bebas gradient-text"
                  style={{ fontSize: "2rem", lineHeight: 1 }}
                >
                  4
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    color: "var(--cq-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Years
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                color: "var(--cq-muted)",
                lineHeight: 1.6,
                marginTop: "1rem",
              }}
            >
              Focused on algorithms, data structures, software engineering
              principles, and full-stack web development.
            </p>
          </div>

          {/* Soft skills */}
          <div>
            <div
              className="reveal"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--cq-purple)",
                marginBottom: "1.5rem",
              }}
            >
              Soft Skills
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              {softSkills.map((skill, i) => (
                <span
                  key={skill}
                  className="reveal"
                  style={{
                    transitionDelay: `${i * 0.05}s`,
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    border: "1px solid var(--cq-border)",
                    borderRadius: "100px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "var(--cq-text)",
                    background: "var(--cq-surface)",
                    transition: "border-color 0.2s, color 0.2s, opacity 0.6s, transform 0.6s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--cq-purple)";
                    e.currentTarget.style.color = "var(--cq-purple)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--cq-border)";
                    e.currentTarget.style.color = "var(--cq-text)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div
              className="reveal"
              style={{ marginTop: "3rem" }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--cq-green)",
                  marginBottom: "1rem",
                }}
              >
                Languages
              </div>
              {[
                { lang: "Mongolian", level: "Native" },
                { lang: "English", level: "Professional" },
              ].map((item) => (
                <div
                  key={item.lang}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid var(--cq-border)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "var(--cq-text)",
                    }}
                  >
                    {item.lang}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--cq-green)",
                    }}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
