import { useEffect, useRef } from "react";
import "./index.css";

const TechBackground = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;

      const { clientX, clientY } = e;

      glowRef.current.style.background = `
        radial-gradient(
          500px circle at ${clientX}px ${clientY}px,
          rgba(140, 0, 255, 0.15),
          transparent 70%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="background-layer">
      <div className="hex-pattern"></div>
      <div className="color-overlay"></div>
      <div className="mouse-glow" ref={glowRef}></div>
    </div>
  );
};

export default TechBackground;