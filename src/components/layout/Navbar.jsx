import React, { useState, useEffect } from "react";
import DecryptedText from "../ui/DecryptedText";
import ClickSpark from "../effects/ClickSpark";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolledDown(currentScrollY > lastScrollY && currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "-" },
    { code: "mn", name: "Монгол", flag: "-" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setIsLangOpen(false);
    localStorage.setItem("language", code);
  };

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 border-b border-black bg-black/80 backdrop-blur-xl ${isScrolledDown ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 ml-10 mr-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
                className="text-2xl font-bold tracking-wider transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] flex items-center"
              >
                <DecryptedText
                  text="fenrir._"
                  speed={30}
                  maxIterations={11}
                  className="flex items-center"
                  parentClassName="flex items-center"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href.substring(1));
                  }}
                  className="relative text-white light:text-gray-900 font-medium px-3 py-2 transition-all duration-300 hover:text-cyan-400 light:hover:text-cyan-600 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"></span>
                </a>
              ))}
            </div>

            {/* Right Side - Language & Menu Button */}
            <div className="flex items-center gap-4">
              {/* Language Selector - Desktop */}
              <div
                className="hidden md:block relative"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <button
                  className="px-4 py-2 bg-cyan-400 text-black font-medium rounded-3xl transition-all duration-300 hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] flex items-center gap-2"
                  aria-label="Change language"
                >
                  {/* Global Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-black border-2 border-cyan-400 rounded-3xl shadow-[0_0_20px_rgba(0,255,255,0.5)] z-50 min-w-[150px] overflow-hidden">
                    <div className="px-4 py-3 text-white font-semibold border-b-2 border-cyan-400">
                      Language
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-300 hover:bg-gray-800 ${
                          language === lang.code
                            ? "bg-cyan-400/20 text-cyan-400 font-semibold"
                            : "text-white"
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Selector - Mobile */}
              <div
                className="md:hidden relative"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <button
                  className="p-2 bg-cyan-400 text-black rounded-3xl transition-all duration-300 hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                  aria-label="Change language"
                >
                  {/* Global Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-black border-2 border-cyan-400 rounded-3xl shadow-[0_0_20px_rgba(0,255,255,0.5)] z-50 min-w-[150px] overflow-hidden">
                    <div className="px-4 py-3 text-white font-semibold border-b-2 border-cyan-400">
                      Language
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-300 hover:bg-gray-800 ${
                          language === lang.code
                            ? "bg-cyan-400/20 text-cyan-400 font-semibold"
                            : "text-white"
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="flex flex-col gap-1.5 focus:outline-none md:hidden"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-cyan-400 rounded transition-all duration-300 shadow-[0_0_5px_rgba(0,255,255,0.3)] ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-cyan-400 rounded transition-all duration-300 shadow-[0_0_5px_rgba(0,255,255,0.3)] ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-cyan-400 rounded transition-all duration-300 shadow-[0_0_5px_rgba(0,255,255,0.3)] ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-black to-gray-950 light:from-gray-50 light:to-white border-t border-cyan-400/20 light:border-cyan-600/30">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-white light:text-gray-900 font-medium hover:bg-cyan-400/10 light:hover:bg-cyan-100 hover:text-cyan-400 light:hover:text-cyan-600 transition-all duration-300 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                  setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </ClickSpark>
  );
};

export default Navbar;
