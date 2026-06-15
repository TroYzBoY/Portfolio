import React, { lazy, Suspense, Component, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

/* Catches any error thrown while loading/rendering the Spline scene so the
   page never ends up as a blank black screen (common on production builds). */
class SplineBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    console.error("Spline scene failed to load:", error);
  }
  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}

/* Branded fallback shown while loading or if the 3D scene can't load */
const SplineFallback = ({ loading }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1.25rem",
      background:
        "radial-gradient(120% 100% at 50% 30%, rgba(91,140,255,0.12), transparent 60%), var(--cq-bg)",
    }}
  >
    <div
      className="font-bebas gradient-text"
      style={{ fontSize: "clamp(3rem, 9vw, 7rem)", lineHeight: 0.9, letterSpacing: "0.02em" }}
    >
      TEMUULEN
    </div>
    {loading && (
      <div
        style={{
          width: 32,
          height: 32,
          border: "2px solid var(--cq-border)",
          borderTopColor: "var(--cq-cyan)",
          borderRadius: "50%",
          animation: "rotate 0.8s linear infinite",
        }}
      />
    )}
  </div>
);

const Intro = () => {
  const [loaded, setLoaded] = useState(false);

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
        {/* Branded placeholder underneath — visible until the scene paints */}
        {!loaded && <SplineFallback loading />}

        <SplineBoundary fallback={<SplineFallback loading={false} />}>
          <Suspense fallback={null}>
            <Spline
              scene="https://prod.spline.design/lxEQ73FF9ft956mk/scene.splinecode"
              onLoad={() => setLoaded(true)}
              onError={() => console.error("Spline onError fired")}
            />
          </Suspense>
        </SplineBoundary>
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
