import { useEffect, useRef, useState } from "react";

export const useScrollTriggerRender = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { threshold = 0.1, once = true } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let hasBeenVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!once || !hasBeenVisible) {
              setIsVisible(true);
              hasBeenVisible = true;
              if (once) {
                observer.unobserve(element);
              }
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once]);

  return { elementRef, isVisible };
};
