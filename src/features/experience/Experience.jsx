import React, { useEffect, useRef, useState } from "react";
import ClickSpark from "../../components/effects/ClickSpark";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { gsap } from "gsap";

const Experience = () => {
  const [progress, setProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const pathRef = useRef(null);
  const headingRef = useScrollAnimation({
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
  });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animate timeline container on scroll
  useEffect(() => {
    if (!timelineRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
              },
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Techivation",
      role: "Full Stack Developer",
      type: "Part-time",
      description:
        "Working on web features and maintaining code for audio plugin licensing platform.",
      period: "May 2025 – Present",
      status: "current",
    },
    {
      company: "VexLogic",
      role: "Full Stack Developer",
      type: "Part-time",
      description:
        "Contributing to SaaS platform development with focus on frontend and database integration.",
      period: "Jun 2025 – Present",
      status: "current",
    },
    {
      company: "ComraAI",
      role: "Frontend Developer",
      type: "Contract",
      description:
        "Built UI components for 3D web app using React and Three.js.",
      period: "Nov 2024 – Feb 2025",
      status: "past",
    },
    {
      company: "DigitalNatives",
      role: "Frontend Developer",
      type: "Contract",
      description:
        "Developed web pages and components using React and Tailwind CSS.",
      period: "Feb 2024 – Oct 2024",
      status: "past",
    },
    {
      company: "Fintechracy",
      role: "Frontend Developer",
      type: "Internship",
      description:
        "Worked on financial app UI and learned web development best practices.",
      period: "Nov 2023 – Mar 2024",
      status: "past",
    },
    {
      company: "Codintex",
      role: "Software Engineer",
      type: "Internship",
      description:
        "Gained foundational experience in backend development with .NET and C#.",
      period: "Jul 2022 – Sep 2023",
      status: "past",
    },
  ];

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;
    }
  }, []);

  useEffect(() => {
    const updateTimelineHeight = () => {
      if (timelineRef.current) {
        const height = timelineRef.current.scrollHeight;
        if (height > 0) {
          setTimelineHeight(height);
        }
      }
    };

    // Initial calculation with delay to ensure content is rendered
    const timeoutId = setTimeout(() => {
      updateTimelineHeight();
    }, 100);

    window.addEventListener("resize", updateTimelineHeight);

    // Use ResizeObserver for better tracking
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.contentRect.height;
        if (height > 0) {
          setTimelineHeight(height);
        }
      }
    });

    if (timelineRef.current) {
      resizeObserver.observe(timelineRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateTimelineHeight);
      resizeObserver.disconnect();
    };
  }, [experiences.length]);

  useEffect(() => {
    const updateSectionHeight = () => {
      if (sectionRef.current) {
        const height = sectionRef.current.offsetHeight;
        if (height > 0) {
          setSectionHeight(height);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      updateSectionHeight();
    }, 100);

    window.addEventListener("resize", updateSectionHeight);

    const resizeObserver = new ResizeObserver(() => {
      updateSectionHeight();
    });

    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateSectionHeight);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const startScroll = sectionTop - windowHeight * 0.5;
      const endScroll = sectionTop + sectionHeight - windowHeight * 0.5;
      const scrollRange = endScroll - startScroll;

      if (scrollY >= startScroll && scrollY <= endScroll) {
        const progressPercent = ((scrollY - startScroll) / scrollRange) * 100;
        const clampedProgress = Math.min(100, Math.max(0, progressPercent));
        setProgress(clampedProgress);

        if (pathRef.current && pathLength > 0) {
          const offset = pathLength - (pathLength * clampedProgress) / 100;
          pathRef.current.style.strokeDashoffset = offset;
        }
      } else if (scrollY < startScroll) {
        setProgress(0);
        if (pathRef.current) {
          pathRef.current.style.strokeDashoffset = pathLength;
        }
      } else if (scrollY > endScroll) {
        setProgress(100);
        if (pathRef.current) {
          pathRef.current.style.strokeDashoffset = 0;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength]);

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <section
        ref={sectionRef}
        id="experience"
        className="flex flex-col items-center w-full text-white lg:px-8 px-0 py-12 md:py-16 lg:py-24 relative"
      >
        {/* SVG Path Line */}
        <div
          className="absolute top-[10rem] md:right-[10rem] md:top-[10rem] lg:top-[10rem] lg:left-0 w-full pointer-events-none z-[5]"
          style={{ height: "calc(100% + 20vh)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 3000"
            fill="none"
            preserveAspectRatio="xMidYMin slice"
            className="w-full h-full"
          >
            <path
              ref={pathRef}
              id="experience-line-path"
              d="M0.478149 0.14624C179.389 584.988 1024.24 241.063 1203.16 488.791C1382.07 736.519 591.549 555.192 685.399 850.592C754.827 1069.12 1251.74 767.219 1254.66 995.312C1257.47 1214.38 748.65 1128.11 748.65 1392.87C748.65 1678.93 1318.81 1483.96 1318.81 1754.67C1318.81 1978.88 826.875 1777.46 819.13"
              stroke="#22d3ee"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Main Heading */}
        <div
          ref={headingRef}
          className="text-center mb-10 md:mb-16 lg:mb-20 max-w-4xl px-4 relative z-10"
        >
          <h3 className="lg:text-4xl text-2xl font-bold leading-tight mb-4 break-words">
            Explore my journey and the technologies that define my craft.
          </h3>
        </div>

        {/* Timeline Container */}
        <div
          ref={timelineRef}
          className="w-full px-[1rem] md:px-[3rem] lg:px-[2rem] xl:px-[6rem] mb-10 md:mb-16 lg:mb-20 relative z-10"
        >
          {/* Vertical line from first dot to bottom */}
          {timelineHeight > 0 && (
            <div
              className="absolute left-1/2 pointer-events-none"
              style={{
                top: 0,
                height: `${timelineHeight + 345 - (isMobile ? 100 : 0)}px`,
                width: "5px",
                backgroundColor: "#22d3ee",
                opacity: 0.9,
                transform: "translateX(-50%)",
                zIndex: 15,
                boxShadow:
                  "0 0 25px rgba(34,211,238,0.9), 0 0 55px rgba(34,211,238,0.75), 0 0 90px rgba(34,211,238,0.6)",
                filter: "blur(1px)",
              }}
            />
          )}

          {/* Experience Items */}
          <div className="relative experience-timeline-container z-[50]">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  data-index={index}
                  className="experience-item w-full flex items-start mb-[20vh] sm:mb-[30vh] md:mb-[50vh] lg:mb-[80vh]"
                >
                  {/* Timeline Dot */}
                  <div
                    className="timeline-dot absolute left-1/2 w-3 h-3 rounded-full border z-50 transition-all duration-500"
                    style={{
                      transform: `translate(-50%, 0%) scale(${progress >= (index / experiences.length) * 100 ? "1.3" : "1"})`,
                      opacity:
                        progress >= (index / experiences.length) * 100
                          ? 1
                          : 0.4,
                      borderColor:
                        progress >= (index / experiences.length) * 100
                          ? "#22d3ee"
                          : "rgba(34, 211, 238, 0.4)",
                      boxShadow:
                        progress >= (index / experiences.length) * 100
                          ? "0 0 18px rgba(34,211,238,0.9), 0 0 32px rgba(34,211,238,0.8)"
                          : "0 0 6px rgba(34,211,238,0.35)",
                      backgroundColor:
                        progress >= (index / experiences.length) * 100
                          ? "#22d3ee"
                          : "rgba(0,0,0,0.8)",
                    }}
                  />

                  {/* Content */}
                  <div
                    className={`experience-content experience-content-${index} z-[100] relative w-full md:w-[45%] ${
                      isEven
                        ? "md:ml-auto md:pl-20 text-left lg:px-6 px-4"
                        : "md:pr-20 text-right lg:px-6 px-4"
                    }`}
                  >
                    {/* Company Name */}
                    <div className="experience-text font-bold text-3xl sm:text-4xl md:text-6xl xl:text-7xl lg:mb-2 mb-1 leading-tight company-name text-white break-words">
                      {exp.company}
                    </div>

                    {/* Role */}
                    <div className="experience-text-secondary text-lg sm:text-xl md:text-3xl xl:text-4xl font-light lg:mb-1.5 mb-1 leading-relaxed role-text text-white/60 break-words">
                      {exp.role} ({exp.type})
                    </div>

                    {/* Description */}
                    <div className="experience-text-secondary text-sm sm:text-base md:text-lg leading-relaxed lg:mb-1.5 mb-1 max-w-xl description-text text-white/60 break-words">
                      {exp.description}
                    </div>

                    {/* Date */}
                    <div className="experience-text-secondary text-xs sm:text-sm md:text-base font-light date-tag text-white/60 break-words">
                      {exp.period}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default Experience;
