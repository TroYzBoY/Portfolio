import React, { lazy, Suspense, useState, useEffect } from "react";
import profilePic from "../../assets/images/picc.jpg";
import mouseScrollGif from "../../assets/gifs/mouse scroll.gif";
import DecryptedText from "../../components/ui/DecryptedText";
import RotatingCircle from "../../components/ui/RotatingCircle";
import ClickSpark from "../../components/effects/ClickSpark";

// Lazy load Spline to avoid build-time issues
const Spline = lazy(() => import("@splinetool/react-spline"));

// Cycling Name Component with DecryptedText animation
const CyclingName = ({ names, delay = 4000, cycleInterval = 6000 }) => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isInitialDelay, setIsInitialDelay] = useState(true);

  useEffect(() => {
    // Initial 4 second delay before first animation
    const initialDelay = setTimeout(() => {
      setIsInitialDelay(false);
      setAnimationKey(1); // Start first animation
    }, delay);

    // Cycle through names every cycleInterval
    const cycleTimer = setInterval(() => {
      setCurrentNameIndex((prev) => {
        const nextIndex = (prev + 1) % names.length;
        // Force new animation by changing key
        setAnimationKey((prev) => prev + 1);
        return nextIndex;
      });
    }, cycleInterval);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(cycleTimer);
    };
  }, []);

  const currentName = names[currentNameIndex];

  // Show static text during initial delay
  if (isInitialDelay) {
    return (
      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
        {currentName}
      </span>
    );
  }

  // Use key to force remount and re-animation
  return (
    <DecryptedText
      key={`${currentName}-${animationKey}`}
      text={currentName}
      animateOn="view"
      revealDirection="start"
      speed={30}
      maxIterations={11}
      className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
    />
  );
};

const Hero = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Spline Background */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{ transform: "scale(1)" }}
        >
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/6VZLwtIfNyyQBOx5/scene.splinecode" />
          </Suspense>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
          <div className="flex flex-col lg:flex-row ml-10 mr-10 items-center justify-between gap-18 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg md:text-xl text-white mb-2">Hello I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                <CyclingName
                  names={["Temuulen", "fenrir", "TroYzBoY"]}
                  delay={3000}
                  cycleInterval={5000}
                />
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Munkhbold
              </h2>
              <p className="text-2xl md:text-3xl text-white mb-4 font-semibold">
                Software Engineer
              </p>
              <div className="text-lg md:text-xl text-white mb-8">
                Full Stack Developer
                <br />
                Junior
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]"
                >
                  Explore My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Connect with Me
                </a>
              </div>
            </div>

            {/* Right Side - Picture */}
            <div className="flex-1 flex justify-center lg:justify-end relative">
              <div className="w-full max-w-md lg:max-w-lg relative">
                {/* Rotating Circle Background - positioned behind */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ zIndex: 1 }}
                >
                  <RotatingCircle className="opacity-60" />
                </div>

                <div
                  className="relative w-full aspect-square mx-auto"
                  style={{ zIndex: 2 }}
                >
                  <div className="rounded-full overflow-hidden w-full h-full relative">
                    <img
                      src={profilePic}
                      alt="Me"
                      className="object-cover shadow-md shadow-cyan-400 p-3 rounded-full"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
            <p className="text-sm text-cyan-400/70 uppercase tracking-wider mb-2">
              scroll down
            </p>
            <img
              src={mouseScrollGif}
              alt="Scroll down"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default Hero;
