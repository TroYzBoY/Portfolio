import React from "react";
import ClickSpark from "../../components/effects/ClickSpark";
import CountUp from "../../components/ui/CountUp";
import ElectricBorder from "../../components/ui/ElectricBorder";
import profilePic from "../../assets/images/picc.jpg";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../../hooks/useScrollAnimation";

const About = () => {
  const headingRef = useScrollAnimation({
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
  });
  const secondParaRef = useScrollAnimation({
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
  });
  const buttonRef = useScrollAnimation({
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
  });
  const detailsRef = useScrollAnimation({
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
  });
  const statsRef = useStaggerAnimation({
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });
  const servicesRef = useStaggerAnimation({
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
  });

  const services = [
    {
      number: "01",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        >
          <path
            d="M12 18L22 12L32 18L42 12V38L32 44L22 38L12 44V18Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M22 12V38M32 18V44"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Full Stack Development",
      description:
        "Building scalable web apps with modern tech stacks and clean code.",
    },
    {
      number: "02",
      icon: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 64 64"
          fill="none"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
        >
          <rect
            x="10"
            y="10"
            width="44"
            height="44"
            rx="6"
            stroke="currentColor"
            strokeWidth="2.5"
          ></rect>
          <path
            d="M10 22H54M22 10V54"
            stroke="currentColor"
            strokeWidth="2.5"
          ></path>
          <circle
            cx="38"
            cy="38"
            r="6"
            stroke="currentColor"
            strokeWidth="2.5"
          ></circle>
        </svg>
      ),
      title: "UI/UX Design & Frontend",
      description:
        "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
    },
    {
      number: "03",
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          className="mt-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        >
          <path
            d="M32 10L46 18V38L32 46L18 38V18L32 10Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32 10V46M18 18L46 38M46 18L18 38"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "SaaS Platform Development",
      description:
        "Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management. Ensuring scalability and secure user management.",
    },
  ];

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <section
        id="about"
        className="relative min-h-screen flex flex-col items-center w-full py- text-white z-50"
      >
        {/* Main Heading */}
        <div
          ref={headingRef}
          className="z-[60] text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center lg:mb-4 pt-10 xl:max-w-6xl lg:max-w-5xl w-full mx-auto px-4 mb-8 break-words"
        >
          <p>
            I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Temuulen
            </span>
            {" — "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>{" "}
            <span className="text-white">(Junior)</span> building fast, scalable
            digital experiences.
          </p>
        </div>

        {/* Second Paragraph */}
        <div
          ref={secondParaRef}
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center mb-8 max-w-5xl mx-auto px-4 break-words"
        >
          <p>
            I specialize in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SaaS, AI, and 3D web experiences
            </span>{" "}
            using Next.js, Node.js, and Three.js.
          </p>
        </div>

        {/* About Me Button */}
        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <a href="#about-details">
            <button className="relative group flex items-center justify-center cursor-pointer select-none">
              <div className="group relative inline-flex items-center justify-center gap-3 bg-cyan-400 text-black font-medium rounded-full transition-all duration-300 hover:gap-4 overflow-hidden text-lg px-8 py-5">
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative z-10 flex items-center">
                  <span>About Me</span>
                </div>
              </div>
            </button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="flex overflow-hidden justify-between items-center text-sm text-cyan-400 px-4 w-full max-w-5xl mb-8">
          <div className="flex items-center gap-2">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
            <span>Scroll to Explore</span>
          </div>
          <span>My Story</span>
        </div>

        {/* Divider Line */}
        <div className="w-full z-[9999] h-[1px] bg-cyan-400/30 mb-12"></div>

        {/* Detailed About Section */}
        <div
          ref={detailsRef}
          id="about-details"
          className="relative more-about-me z-[380] w-full text-white py-10 mt-5 px-[1rem] md:px-[6.3rem]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Left Column - Heading */}
            <div className="text-3xl lg:text-4xl font-medium">
              <p>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Driving growth through design and engineering
                </span>
              </p>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <div className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 break-words">
                <p>
                  Every product starts with user goals. I build intuitive,
                  high-performance experiences focused on real results.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-16"
          >
            <div className="border-t border-cyan-400/30 pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 text-cyan-400/70">
                YEARS OF EXPERIENCE
              </p>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                <CountUp
                  to={1}
                  duration={2}
                  className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                />
                +
              </div>
            </div>
            <div className="border-t border-cyan-400/30 pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 text-cyan-400/70">
                PROJECTS COMPLETED
              </p>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                <CountUp
                  to={4}
                  duration={2}
                  className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                />
                +
              </div>
            </div>
          </div>
        </div>

        {/* Services/Expertise Section */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 w-full px-4 lg:px-24 py-20 sm:py-32 lg:py-40 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto relative z-[50]">
            <div className="flex flex-col text-left items-center max-w-3xl justify-center mb-16">
              <div className="text-white text-3xl lg:text-4xl font-medium mb-8 sm:mb-12 leading-[1.1] lg:px-4 px-1">
                <p>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Transforming ideas into exceptional digital experiences
                  </span>{" "}
                  through expertise and innovation
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className="flex justify-center items-center w-full">
              <div
                ref={servicesRef}
                className="flex flex-row justify-center gap-6 lg:gap-8 flex-wrap"
              >
                {services.map((service, index) => (
                  <div key={index} className="group relative">
                    <ElectricBorder
                      color="#06b6d4"
                      speed={0.4}
                      chaos={0.03}
                      thickness={2}
                      style={{ borderRadius: 16 }}
                      className="w-full sm:w-[350px] md:w-[400px] lg:w-[420px]"
                    >
                      <div className="relative text-white w-full h-auto sm:h-[400px] md:h-[450px] lg:h-[470px] p-6 sm:p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden">
                        <div className="relative flex flex-col justify-between z-10 h-full">
                          <div className="flex items-start justify-between mb-4 sm:mb-6">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <span className="text-cyan-400 absolute -top-3 sm:-top-5 -right-3 sm:-right-5 text-base sm:text-lg md:text-2xl font-light">
                                {service.number}
                              </span>
                              <div className="transition-all bg-cyan-400/20 h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 rounded-full flex items-center justify-center duration-500 text-cyan-400/60 group-hover:bg-cyan-400/30 group-hover:text-cyan-400">
                                {service.icon}
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-3 w-full lg:w-[70%] leading-tight transition-colors duration-500 text-white group-hover:text-cyan-400">
                            {service.title}
                          </h3>
                          <div className="pt-4 sm:pt-6 border-t border-cyan-400/10">
                            <p className="text-white/70 text-lg leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-2xl"></div>
                        </div>
                      </div>
                    </ElectricBorder>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cyan connector line to next section */}
        <div className="w-full h-[2px] bg-cyan-400/70 opacity-80" />
      </section>
    </ClickSpark>
  );
};

export default About;
