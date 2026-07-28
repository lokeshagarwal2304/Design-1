import React, { forwardRef, useEffect, useState, useRef } from "react";

const createMotionComponent = (Tag) => {
  const Component = forwardRef(
    (
      {
        children,
        className = "",
        style = {},
        initial,
        animate,
        whileInView,
        whileHover,
        transition = {},
        viewport,
        variants,
        ...props
      },
      ref
    ) => {
      const [isInView, setIsInView] = useState(false);
      const internalRef = useRef(null);
      const combinedRef = ref || internalRef;

      useEffect(() => {
        if (!whileInView) return;
        const target = combinedRef.current;
        if (!target || typeof IntersectionObserver === "undefined") {
          setIsInView(true);
          return;
        }

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              if (viewport?.once) {
                observer.unobserve(target);
              }
            } else if (!viewport?.once) {
              setIsInView(false);
            }
          },
          { threshold: viewport?.amount || 0.1 }
        );

        observer.observe(target);
        return () => observer.disconnect();
      }, [whileInView, viewport]);

      return (
        <Tag
          ref={combinedRef}
          className={`transition-all ease-out duration-500 ${className}`}
          style={style}
          {...props}
        >
          {children}
        </Tag>
      );
    }
  );
  Component.displayName = `Motion.${Tag}`;
  return Component;
};

export const motion = {
  div: createMotionComponent("div"),
  section: createMotionComponent("section"),
  span: createMotionComponent("span"),
  p: createMotionComponent("p"),
  h1: createMotionComponent("h1"),
  h2: createMotionComponent("h2"),
  h3: createMotionComponent("h3"),
  h4: createMotionComponent("h4"),
  a: createMotionComponent("a"),
  button: createMotionComponent("button"),
  img: createMotionComponent("img"),
  ul: createMotionComponent("ul"),
  li: createMotionComponent("li"),
};

export const AnimatePresence = ({ children }) => <>{children}</>;
