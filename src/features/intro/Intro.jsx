import React, { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Intro = () => {
  const scrollDown = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="intro"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "var(--cq-bg)",
      }}
    >
      {/* Spline scene — fullscreen */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/lxEQ73FF9ft956mk/scene.splinecode" />
        </Suspense>
      </div>

      {/* Bottom gradient fade into portfolio */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: "linear-gradient(to bottom, transparent, var(--cq-bg))",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Scroll indicator */}
      <div
        onClick={scrollDown}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--cq-muted)",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--cq-cyan), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
};

export default Intro;
