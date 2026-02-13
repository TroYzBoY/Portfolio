import React, { useState, useEffect, useRef } from "react";

const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 15,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover", // 'hover' or 'view'
  revealDirection = "all", // 'all', 'start', 'end'
  sequential = false,
  useOriginalCharsOnly = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const intervalRef = useRef(null);
  const prevTextRef = useRef(text);

  const getRandomChar = React.useCallback(() => {
    if (useOriginalCharsOnly) {
      const originalChars = [
        ...new Set(text.split("").filter((c) => c !== " ")),
      ];
      return (
        originalChars[Math.floor(Math.random() * originalChars.length)] || "?"
      );
    }
    return characters[Math.floor(Math.random() * characters.length)];
  }, [text, useOriginalCharsOnly, characters]);

  const decryptText = React.useCallback(() => {
    if (isAnimating || (animateOn === "view" && hasAnimated)) return;

    setIsAnimating(true);
    let iteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => {
        return prev
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";

            if (revealDirection === "start") {
              if (index < iteration) return text[index];
            } else if (revealDirection === "end") {
              if (index >= text.length - iteration) return text[index];
            }

            if (iteration >= maxIterations) {
              return text[index];
            }

            return getRandomChar();
          })
          .join("");
      });

      iteration++;
      if (iteration > maxIterations) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        if (animateOn === "view") {
          setHasAnimated(true);
        }
        return text;
      }
    }, speed);
  }, [
    isAnimating,
    animateOn,
    hasAnimated,
    text,
    revealDirection,
    maxIterations,
    speed,
    getRandomChar,
  ]);

  // Reset animation when text changes and trigger it
  useEffect(() => {
    if (prevTextRef.current !== text) {
      setHasAnimated(false);
      setDisplayText(text);
      setIsAnimating(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      prevTextRef.current = text;

      // Auto-trigger animation if using view mode and element is in view
      if (animateOn === "view" && elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          // Small delay to ensure state is reset
          setTimeout(() => {
            decryptText();
          }, 50);
        }
      }
    }
  }, [text, animateOn, decryptText]);

  useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              decryptText();
            }
          });
        },
        { threshold: 0.1 },
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [animateOn, hasAnimated, decryptText]);

  const handleMouseEnter = () => {
    if (animateOn === "hover" && !isAnimating) {
      setDisplayText(
        text
          .split("")
          .map(() => getRandomChar())
          .join(""),
      );
      decryptText();
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === "hover" && intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsAnimating(false);
      setDisplayText(text);
    }
  };

  // Handle colored text parts for fenrir._
  const renderColoredText = () => {
    if (text === "fenrir._") {
      const parts = displayText.split("");
      return (
        <>
          <span className="text-cyan-400">{parts.slice(0, 6).join("")}</span>
          <span className="text-white">{parts[6] || "."}</span>
          <span style={{ color: "rgb(178,0,255)" }}>{parts[7] || "_"}</span>
        </>
      );
    }
    return displayText;
  };

  return (
    <span
      ref={elementRef}
      className={parentClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`${className} ${isAnimating ? encryptedClassName : ""}`}>
        {text === "fenrir._" ? renderColoredText() : displayText}
      </span>
    </span>
  );
};

export default DecryptedText;
