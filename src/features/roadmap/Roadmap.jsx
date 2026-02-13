import React from "react";
import ClickSpark from "../../components/effects/ClickSpark";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../../hooks/useScrollAnimation";

const Roadmap = () => {
  const headingRef = useScrollAnimation({
    y: 60,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
  });
  const milestonesRef = useStaggerAnimation({
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  const milestones = [
    {
      title: "Learning Phase",
      description: "Mastering the fundamentals of web development",
      status: "completed",
    },
    {
      title: "Building Projects",
      description: "Creating real-world applications and building portfolio",
      status: "completed",
    },
    {
      title: "Advanced Skills",
      description: "Learning advanced frameworks and cloud technologies",
      status: "in-progress",
    },
    {
      title: "Career Growth",
      description: "Contributing to open source and mentoring others",
      status: "upcoming",
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
      <section id="roadmap" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={headingRef.current}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400"
          >
            Roadmap
          </h2>
          <div ref={milestonesRef.current} className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-cyan-400/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/20">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {milestone.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        milestone.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : milestone.status === "in-progress"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {milestone.status.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default Roadmap;
