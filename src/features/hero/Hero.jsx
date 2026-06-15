import React, { useEffect, useRef } from "react";
import profilePic from "../../assets/images/picc.jpg";

const Hero = () => {
  const titleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll(".hero-letter");
    letters.forEach((letter, i) => {
      letter.style.animationDelay = `${i * 0.04}s`;
    });
  }, []);

  // Scroll parallax for hero background
  useEffect(() => {
    const grid = bgRef.current?.querySelector(".hero-grid");
    const blobs = bgRef.current?.querySelectorAll(".hero-blob");
    let raf = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (grid) grid.style.transform = `translateY(${y * 0.25}px)`;
        blobs?.forEach((blob, i) => {
          const speed = 0.12 + i * 0.06;
          blob.style.marginTop = `${y * speed}px`;
        });
        raf = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const titleText = "TEMUULEN";

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "var(--nav-h)",
      }}
    >
      {/* Animated gradient + grid background */}
      <div ref={bgRef} className="hero-bg" style={{ pointerEvents: "none" }}>
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-grid" />
      </div>

      {/* Gradient fade at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to bottom, transparent, var(--cq-bg))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-layout"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr clamp(200px, 30vw, 340px)",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: text */}
        <div>
          {/* Tag */}
          <div
            className="cq-tag reveal"
            style={{
              marginBottom: "1.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span className="status-dot" />
            Available for work · UB Mongolia
          </div>

          {/* Big title */}
          <h1
            ref={titleRef}
            className="font-bebas"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              lineHeight: 0.9,
              marginBottom: "0.5rem",
              letterSpacing: "0.02em",
            }}
          >
            {titleText.split("").map((char, i) => (
              <span key={i} className="hero-letter gradient-text">
                {char}
              </span>
            ))}
          </h1>
          <h1
            className="font-bebas gradient-text"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              lineHeight: 0.9,
              marginBottom: "2rem",
              letterSpacing: "0.02em",
            }}
          >
            MUNKHBOLD
          </h1>

          {/* Subtitle */}
          <p
            className="reveal stagger-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--cq-muted)",
              maxWidth: 480,
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            Building scalable web platforms, real-time systems, and secure APIs.
            <br />
            <span style={{ color: "var(--cq-cyan)" }}>React · Next.js · Node.js · PostgreSQL</span>
          </p>

          {/* CTA buttons */}
          <div
            className="reveal stagger-3"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects <span className="arrow">→</span>
            </a>
            <a
              href="#contact"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </a>
            <a
              href="/Temuulen_CV_FullStack.docx"
              className="btn-ghost"
              download="Temuulen_CV_FullStack.docx"
            >
              Download CV <span className="arrow">↓</span>
            </a>
          </div>

          {/* Stats row */}
          <div
            className="reveal stagger-4 hero-stats"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--cq-border)",
            }}
          >
            {[
              { value: "5+", label: "Projects" },
              { value: "15+", label: "Technologies" },
              { value: "3.4", label: "GPA / 4.0" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-bebas gradient-text"
                  style={{ fontSize: "2.5rem", lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    color: "var(--cq-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: profile pic */}
        <div
          className="reveal hero-photo"
          style={{
            position: "relative",
            width: "min(340px, 35vw)",
            aspectRatio: "1",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, var(--cq-cyan), var(--cq-purple), var(--cq-cyan))",
              opacity: 0.15,
              animation: "rotate 8s linear infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1px solid rgba(91,140,255,0.2)",
            }}
          />
          <img
            src={profilePic}
            alt="Temuulen Munkhbold"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              filter: "grayscale(20%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
