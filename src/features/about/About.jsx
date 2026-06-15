import React, { useEffect, useRef } from "react";
import profilePic from "../../assets/images/picc.jpg";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.1}s`;
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: "8rem 2rem",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      {/* Section label */}
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
        About
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left: heading */}
        <div>
          <h2
            className="reveal font-bebas gradient-text"
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            DRIVING GROWTH THROUGH DESIGN &amp; ENGINEERING
          </h2>

          {/* Profile image (small) */}
          <div
            className="reveal"
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid var(--cq-border)",
              marginBottom: "2rem",
            }}
          >
            <img
              src={profilePic}
              alt="Temuulen"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(30%)",
              }}
            />
          </div>
        </div>

        {/* Right: bio */}
        <div>
          <p
            className="reveal"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--cq-muted)",
              marginBottom: "2rem",
            }}
          >
            I'm Temuulen Munkhbold — a Full Stack Developer based in Ulaanbaatar,
            Mongolia. I work with React, Next.js, Node.js and PostgreSQL to build
            intuitive, high-performance digital products.
          </p>
          <p
            className="reveal"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--cq-muted)",
              marginBottom: "3rem",
            }}
          >
            I focus on web platforms, real-time systems, authentication, database
            design and software architecture. I value long-term, stable work and
            continuously learn new technologies to grow with the team.
          </p>

          {/* Info grid */}
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {[
              { label: "Email", value: "troyzboy4023@gmail.com" },
              { label: "Phone", value: "+976 9711 4649" },
              { label: "Location", value: "Ulaanbaatar, Mongolia" },
              { label: "GPA", value: "3.4 / 4.0" },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--cq-cyan)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--cq-text)",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--cq-border)",
            }}
          >
            {[
              { value: "5+", label: "Projects Done" },
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
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--cq-muted)",
                    marginTop: "0.25rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
