import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const {
    delay = 0,
    duration = 1,
    y = 50,
    opacity = 0,
    scale = 1,
    ease = "power3.out",
    threshold = 0.1,
    once = true,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated)) {
            hasAnimated = true;
            gsap.fromTo(
              element,
              {
                y: y,
                opacity: opacity,
                scale: scale,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: duration,
                delay: delay,
                ease: ease,
              },
            );
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once && !entry.isIntersecting) {
            gsap.to(element, {
              y: y,
              opacity: opacity,
              scale: scale,
              duration: duration * 0.5,
              ease: ease,
            });
          }
        });
      },
      { threshold: threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, y, opacity, scale, ease, threshold, once]);

  return elementRef;
};

export const useStaggerAnimation = (options = {}) => {
  const containerRef = useRef(null);
  const {
    delay = 0,
    duration = 0.8,
    y = 50,
    opacity = 0,
    ease = "power3.out",
    threshold = 0.1,
    once = true,
    stagger = 0.1,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children);
    if (children.length === 0) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimated)) {
            hasAnimated = true;
            gsap.fromTo(
              children,
              {
                y: y,
                opacity: opacity,
              },
              {
                y: 0,
                opacity: 1,
                duration: duration,
                delay: delay,
                ease: ease,
                stagger: stagger,
              },
            );
            if (once) {
              observer.unobserve(container);
            }
          } else if (!once && !entry.isIntersecting) {
            gsap.to(children, {
              y: y,
              opacity: opacity,
              duration: duration * 0.5,
              ease: ease,
            });
          }
        });
      },
      { threshold: threshold },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, y, opacity, ease, threshold, once, stagger]);

  return containerRef;
};

export const useParallax = (options = {}) => {
  const elementRef = useRef(null);
  const { speed = 0.5 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      gsap.set(element, {
        y: rate,
        force3D: true,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return elementRef;
};
