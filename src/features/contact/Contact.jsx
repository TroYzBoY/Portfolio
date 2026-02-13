import React, { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ClickSpark from "../../components/effects/ClickSpark";
import LaserFlow from "../../components/layout/LaserFlow";
import ElectricBorder from "../../components/ui/ElectricBorder";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpqjpjro");
  const [laserFlowWidth, setLaserFlowWidth] = useState(0);
  const formRef = useRef(null);

  useEffect(() => {
    const updateLaserFlowSize = () => {
      if (formRef.current) {
        const formRect = formRef.current.getBoundingClientRect();
        // Match form width (includes padding p-8)
        setLaserFlowWidth(formRect.width);
      }
    };

    const timeoutId = setTimeout(() => {
      updateLaserFlowSize();
    }, 100);

    window.addEventListener("resize", updateLaserFlowSize);

    const resizeObserver = new ResizeObserver(() => {
      updateLaserFlowSize();
    });

    if (formRef.current) {
      resizeObserver.observe(formRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateLaserFlowSize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400">
            Get In Touch
          </h2>
          <div className="relative">
            {/* LaserFlow at top of form */}
            {laserFlowWidth > 0 && (
              <div
                className="absolute left-1/2 -top-[365px] pointer-events-none"
                style={{
                  height: "100vh",
                  maxHeight: "100vh",
                  width: `${laserFlowWidth}px`,
                  transform: "translateX(-50%)",
                  zIndex: 10,
                  overflow: "visible",
                  opacity: 1,
                }}
              >
                <LaserFlow
                  horizontalBeamOffset={0.0}
                  verticalBeamOffset={0.0}
                  color="#22d3ee"
                  verticalSizing={2}
                  horizontalSizing={1.2}
                  wispDensity={0.8}
                  wispSpeed={18}
                  wispIntensity={40}
                  flowSpeed={0.35}
                  flowStrength={0.65}
                  fogIntensity={1.0}
                  fogScale={0.17}
                  fogFallSpeed={0.6}
                  decay={0.99}
                  falloffStart={0.81}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
            )}
            <ElectricBorder
              color="#06b6d4"
              speed={0.4}
              chaos={0.03}
              style={{ borderRadius: 16 }}
              className="relative z-20"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 relative z-20"
                style={{ backgroundColor: "rgb(19,26,39)", opacity: 1 }}
              >
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                      ✨ Message Sent Successfully!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for reaching out! I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="block text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-pink-400 text-sm mt-1"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-900 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300 resize-none"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-pink-400 text-sm mt-1"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </>
                )}
              </form>
            </ElectricBorder>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">Or reach me directly:</p>
            <div className="flex justify-center gap-6 items-center">
              <a
                href="mailto:troyzboy4023@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email</span>
              </a>
              <a
                href="tel:+97697114649"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
                aria-label="Phone"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+976 9711 4649</span>
              </a>
              <a
                href="https://github.com/TroYzBoY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://instagram.com/shvdenz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </ClickSpark>
  );
};

export default Contact;
