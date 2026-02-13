import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const useSmoothScroll = () => {
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    gsap.to(window, {
      scrollTo: {
        y: element,
        autoKill: true,
      },
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return { scrollToSection };
};
