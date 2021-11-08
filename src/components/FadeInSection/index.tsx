import React, { useRef, useState, useEffect } from "react";

interface FadeInSectionProps {
  children: JSX.Element;
}

export const FadeInSection = ({
  children,
}: FadeInSectionProps): JSX.Element => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach(
          // Get it stay as true once it's toggled on
          (entry) => entry.isIntersecting && setVisible(entry.isIntersecting)
        );
      }
    );

    domRef?.current && observer.observe(domRef.current);

    return () =>
      domRef?.current ? observer.unobserve(domRef.current) : undefined;
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};
