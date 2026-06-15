import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpqjpjro");
  const [focusedField, setFocusedField] = useState(null);

  const inputStyle = (field) => ({
    width: "100%",
    padding: "0.875rem 1rem",
    background: "var(--cq-bg)",
    border: `1px solid ${focusedField === field ? "var(--cq-cyan)" : "var(--cq-border)"}`,
    borderRadius: "8px",
    color: "var(--cq-text)",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxShadow: focusedField === field ? "0 0 0 3px rgba(91,140,255,0.12)" : "none",
  });

  const socials = [
    {
      label: "Email",
      value: "troyzboy4023@gmail.com",
      href: "mailto:troyzboy4023@gmail.com",
    },
    {
      label: "Phone",
      value: "+976 9711 4649",
      href: "tel:+97697114649",
    },
    {
      label: "GitHub",
      value: "TroYzBoY",
      href: "https://github.com/TroYzBoY",
    },
    {
      label: "Instagram",
      value: "@shvdenz",
      href: "https://instagram.com/shvdenz",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem",
        background: "var(--cq-bg2)",
        borderTop: "1px solid var(--cq-border)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left: info */}
        <div>
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
            Contact
          </div>
          <h2
            className="font-bebas gradient-text"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 0.95,
              marginBottom: "1.5rem",
            }}
          >
            LET'S WORK TOGETHER
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--cq-muted)",
              marginBottom: "3rem",
              maxWidth: 400,
            }}
          >
            Open to freelance projects, full-time roles, and collaborations.
            Drop a message and I'll get back to you soon.
          </p>

          {/* Contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                  border: "1px solid var(--cq-border)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  background: "var(--cq-surface)",
                  transition: "border-color 0.2s, transform 0.2s",
                  color: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--cq-cyan)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--cq-border)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--cq-cyan)",
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "var(--cq-text)",
                  }}
                >
                  {s.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div
          style={{
            background: "var(--cq-surface)",
            border: "1px solid var(--cq-border)",
            borderRadius: "16px",
            padding: "2.5rem",
          }}
        >
          {state.succeeded ? (
            <div
              style={{
                textAlign: "center",
                padding: "3rem 0",
              }}
            >
              <div
                className="font-bebas gradient-text"
                style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}
              >
                MESSAGE SENT
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "var(--cq-muted)",
                  fontSize: "0.9rem",
                }}
              >
                Thank you! I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--cq-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  style={inputStyle("name")}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--cq-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  style={inputStyle("email")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--cq-coral)",
                    marginTop: "0.25rem",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--cq-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  style={{
                    ...inputStyle("message"),
                    resize: "none",
                    lineHeight: 1.6,
                  }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--cq-coral)",
                    marginTop: "0.25rem",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                style={{
                  padding: "0.875rem",
                  background: "linear-gradient(135deg, var(--cq-cyan), var(--cq-purple))",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  letterSpacing: "0.02em",
                  cursor: state.submitting ? "not-allowed" : "pointer",
                  opacity: state.submitting ? 0.6 : 1,
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!state.submitting) e.currentTarget.style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  if (!state.submitting) e.currentTarget.style.opacity = "1";
                }}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
