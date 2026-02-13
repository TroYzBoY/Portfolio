import { useScrollTriggerRender } from "../hooks/useScrollTriggerRender";

export const ScrollSection = ({ children, threshold = 0.1, id }) => {
  const { elementRef, isVisible } = useScrollTriggerRender({
    threshold,
    once: true,
  });

  return (
    <div
      ref={elementRef}
      id={id}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
        visibility: isVisible ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  );
};
