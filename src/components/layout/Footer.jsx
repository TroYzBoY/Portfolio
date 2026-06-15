import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (d) => {
    return [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map((n) => String(n).padStart(2, "0"))
      .join(":");
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/TroYzBoY" },
    { name: "Instagram", href: "https://instagram.com/shvdenz" },
    { name: "Email", href: "mailto:troyzboy4023@gmail.com" },
  ];

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--cq-bg2)",
        borderTop: "1px solid var(--cq-border)",
        padding: "5rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Big name */}
        <div
          className="font-bebas gradient-text"
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            lineHeight: 0.9,
            marginBottom: "3rem",
            letterSpacing: "0.02em",
          }}
        >
          TEMUULEN
          <br />
          MUNKHBOLD
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--cq-border)",
            marginBottom: "2rem",
          }}
        >
          {/* Nav links */}
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--cq-cyan)",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  display: "block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "var(--cq-muted)",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--cq-text)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--cq-muted)")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--cq-purple)",
                marginBottom: "1rem",
              }}
            >
              Socials
            </div>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "block",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "var(--cq-muted)",
                  textDecoration: "none",
                  marginBottom: "0.5rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--cq-text)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--cq-muted)")}
              >
                {s.name}
              </a>
            ))}
          </div>

          {/* Local time */}
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--cq-green)",
                marginBottom: "1rem",
              }}
            >
              UB Local Time
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "1.5rem",
                color: "var(--cq-text)",
                marginBottom: "0.25rem",
              }}
            >
              {formatTime(currentTime)}
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                color: "var(--cq-muted)",
              }}
            >
              {currentTime.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--cq-coral)",
                marginBottom: "1rem",
              }}
            >
              Reach Out
            </div>
            <a
              href="mailto:troyzboy4023@gmail.com"
              style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8rem",
                color: "var(--cq-muted)",
                textDecoration: "none",
                marginBottom: "0.5rem",
                wordBreak: "break-all",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--cq-text)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--cq-muted)")}
            >
              troyzboy4023@gmail.com
            </a>
            <a
              href="tel:+97697114649"
              style={{
                display: "block",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.8rem",
                color: "var(--cq-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--cq-text)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--cq-muted)")}
            >
              +976 9711 4649
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--cq-muted)",
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} Temuulen Munkhbold. All rights reserved.
          </div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--cq-muted)",
              letterSpacing: "0.05em",
            }}
          >
            Built with React + Vite
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
