import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Intro Spline section өнгөрөх хүртэл (бараг бүтэн viewport) navbar нуух
      const introThreshold = window.innerHeight * 0.85;
      setScrolled(currentScrollY > 20);
      setHidden(currentScrollY < introThreshold);

      // Scroll-spy: which section is currently in the upper viewport
      const marker = window.innerHeight * 0.35;
      let current = navLinks[0].href.replace("#", "");
      for (const link of navLinks) {
        const el = document.getElementById(link.href.replace("#", ""));
        if (el && el.getBoundingClientRect().top <= marker) {
          current = link.href.replace("#", "");
        }
      }
      setActiveId(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape or outside click
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
    };
  }, [isOpen]);

  const scrollToSection = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        height: "var(--nav-h)",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.3s ease, border-color 0.3s ease",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        background: scrolled ? "rgba(9,9,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--cq-border)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 2rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "1.1rem",
            color: "var(--cq-text)",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ color: "var(--cq-cyan)" }}>&lt;</span>
          <span>/</span>
          <span style={{ color: "var(--cq-cyan)" }}>&gt;</span>
        </a>

        {/* Desktop nav */}
        <div
          className="hidden md:flex"
          style={{ gap: "2rem", alignItems: "center" }}
        >
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={activeId === id ? "true" : undefined}
                className={`nav-link${activeId === id ? " active" : ""}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "1px solid var(--cq-border)",
              borderRadius: "8px",
              padding: "6px 10px",
              color: "var(--cq-muted)",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontFamily: "'Space Mono', monospace",
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
            {theme === "dark" ? "☀" : "☾"}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1px",
                  background: "var(--cq-text)",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform:
                    isOpen
                      ? i === 0
                        ? "translateY(6px) rotate(45deg)"
                        : i === 2
                        ? "translateY(-6px) rotate(-45deg)"
                        : "scaleX(0)"
                      : "none",
                  opacity: isOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "460px" : "0",
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
          background: "rgba(9,9,15,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: isOpen ? "1px solid var(--cq-border)" : "1px solid transparent",
        }}
      >
        <div style={{ padding: "1rem 2rem 1.5rem" }}>
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                style={{
                  display: "block",
                  padding: "0.75rem 0",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: isActive ? "var(--cq-cyan)" : "var(--cq-muted)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--cq-border)",
                  transition: "color 0.2s",
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
