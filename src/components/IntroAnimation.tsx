import { useState } from "react";

export const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="intro-overlay"
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.currentTarget === event.target) {
          setIsVisible(false);
        }
      }}
    >
      <p className="intro-logo">PARIHA PEDDA</p>
    </div>
  );
};
