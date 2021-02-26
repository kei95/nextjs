import React, { useRef, useState, useEffect } from "react";

interface FadeInSectionProps {
  children: JSX.Element[] | JSX.Element;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    return () => domRef?.current && observer.unobserve(domRef.current);
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
