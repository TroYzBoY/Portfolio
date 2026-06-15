import React, { useEffect, useRef, useState } from "react";
import pygameImage from "../../assets/images/pygame.png";
import faceIdImage from "../../assets/images/faceId.jpg";
import auraImage from "../../assets/images/Aura.png";
import codequestImage from "../../assets/images/codequest.png";

const projects = [
  {
    number: "01",
    title: "CodeQuest Academy",
    category: "Graduation Project · SaaS",
    description:
      "Online learning & examination SaaS platform with interactive coding tasks for JS, TS, Python, SQL & HTML/CSS. Auto-graded exams plus a full anti-cheat suite — fullscreen lock, focus-loss & duplicate-tab detection, DevTools detection and webcam proctoring. Admin dashboard, audit logs, achievements, notifications & subscriptions.",
    tech: ["Next.js 16", "React", "TypeScript", "Prisma", "PostgreSQL", "Pyodide WASM"],
    link: "https://online-learning-and-online-exam-ant.vercel.app/",
    image: codequestImage,
    accent: "var(--cq-purple)",
    featured: true,
  },
  {
    number: "02",
    title: "Restaurant Delivery System",
    category: "Team Project · Real-time",
    description:
      "Full-scale delivery platform with JWT + bcrypt authentication, OTP verification and rate limiting. Live real-time location tracking, an admin dashboard and Grafana-based monitoring.",
    tech: ["React", "Node.js", "Express", "MySQL", "Socket.io", "Docker", "Grafana", "Leaflet"],
    link: "https://github.com/TroYzBoY/DRAGON-DANCE-RESTAURANT",
    image: null,
    accent: "var(--cq-coral)",
  },
  {
    number: "03",
    title: "Face Recognition System",
    category: "AI / Computer Vision",
    description:
      "Face ID authentication and recognition logic with security-oriented access control, built using Python and image processing.",
    tech: ["Python", "Image Processing"],
    link: "https://github.com/TroYzBoY/Faceless",
    image: faceIdImage,
    accent: "var(--cq-green)",
  },
  {
    number: "04",
    title: "Aura E-Commerce",
    category: "E-commerce · Site Clone",
    description:
      "E-commerce platform with product CRUD, a REST API backend and a fully responsive UI/UX — a pixel-faithful clone of the Auriga Space storefront.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    link: "https://github.com/TroYzBoY/AURIGASPACE-LAST-DANCE",
    image: auraImage,
    whiteBg: true,
    accent: "var(--cq-green)",
  },
  {
    number: "05",
    title: "Pygame Project",
    category: "Game Development",
    description:
      "Interactive game built with Python and Pygame, showcasing game mechanics and user interaction design.",
    tech: ["Python", "Pygame"],
    link: "https://github.com/TroYzBoY/pygame",
    image: pygameImage,
    accent: "var(--cq-cyan)",
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 120);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        height: "100%",
        opacity: 0,
        transform: "translateY(40px)",
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        textDecoration: "none",
        color: "inherit",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="cq-card"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
          borderColor: hovered ? `${project.accent}44` : undefined,
          transform: hovered ? "translateY(-6px)" : undefined,
          boxShadow: hovered ? `0 12px 40px ${project.accent}22` : undefined,
        }}
      >
        {/* Image */}
        <div
          style={{
            height: 240,
            overflow: "hidden",
            position: "relative",
            background: project.whiteBg
              ? "#ffffff"
              : project.image
              ? "transparent"
              : "var(--cq-bg2)",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: project.whiteBg ? "contain" : "cover",
                padding: project.whiteBg ? "1.5rem" : 0,
                transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                transform: hovered ? "scale(1.06)" : "scale(1)",
                filter: project.whiteBg ? "none" : "grayscale(20%)",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                background: `radial-gradient(120% 120% at 50% 0%, ${project.accent}22, transparent 60%), var(--cq-bg2)`,
                overflow: "hidden",
              }}
            >
              {/* faint grid texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                  maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 80%)",
                  WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 80%)",
                }}
              />
              <span
                className="font-bebas"
                style={{
                  position: "relative",
                  fontSize: "2.4rem",
                  letterSpacing: "0.04em",
                  color: project.accent,
                  textShadow: `0 0 24px ${project.accent}66`,
                  transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                  transform: hovered ? "scale(1.08)" : "scale(1)",
                }}
              >
                {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
              </span>
            </div>
          )}

          {/* Number badge */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: project.accent,
              background: "rgba(9,9,15,0.8)",
              padding: "4px 8px",
              borderRadius: "4px",
              border: `1px solid ${project.accent}44`,
            }}
          >
            {project.number}
          </div>

          {/* Hover overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to top, ${project.accent}33, transparent)`,
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: project.accent,
              marginBottom: "0.5rem",
            }}
          >
            {project.category}
          </div>
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.6rem",
              letterSpacing: "0.03em",
              color: "var(--cq-text)",
              marginBottom: "0.75rem",
              lineHeight: 1,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              color: "var(--cq-muted)",
              marginBottom: "1.25rem",
            }}
          >
            {project.description}
          </p>

          {/* Tech tags — pinned to bottom so all card footers align */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginTop: "auto",
              paddingTop: "1.25rem",
            }}
          >
            {project.tech.map((t) => (
              <span key={t} className="cq-tag">
                {t}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <div
            style={{
              marginTop: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: project.accent,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(0)" : "translateX(-8px)",
              transition: "opacity 0.3s, transform 0.3s",
            }}
          >
            {project.link.includes("github.com") ? "View on GitHub →" : "View Live →"}
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".section-reveal").forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 80);
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
      id="projects"
      ref={sectionRef}
      style={{ padding: "8rem 2rem" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Label */}
        <div
          className="section-reveal"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--cq-cyan)",
            marginBottom: "1rem",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Projects
        </div>

        <h2
          className="section-reveal font-bebas gradient-text"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "1rem",
            lineHeight: 0.95,
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          SELECTED WORKS
        </h2>
        <p
          className="section-reveal"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "var(--cq-muted)",
            marginBottom: "4rem",
            maxWidth: 480,
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          A collection of projects spanning SaaS platforms, real-time systems, AI, and e-commerce.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>

        <div
          className="section-reveal"
          style={{
            marginTop: "3rem",
            textAlign: "center",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <a
            href="https://github.com/TroYzBoY"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.7rem 1.5rem",
              border: "1px solid var(--cq-border)",
              borderRadius: "8px",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--cq-muted)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--cq-cyan)";
              e.currentTarget.style.color = "var(--cq-cyan)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--cq-border)";
              e.currentTarget.style.color = "var(--cq-muted)";
            }}
          >
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
