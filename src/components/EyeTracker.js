import React, { useState, useEffect } from "react";

const EyeTracker = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const faceImage = "/th.jpeg"; 
  
  const eyeLeft = { top: "40%", left: "42%" };
  const eyeRight = { top: "40%", left: "58%" };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getEyeStyle = (eye) => ({
    position: "absolute",
    top: eye.top,
    left: eye.left,
    width: "3vw",
    height: "3vw",
    backgroundColor: "black",
    borderRadius: "50%",
    transform: `translate(${(position.x - window.innerWidth / 2) / 30}px, ${(position.y - window.innerHeight / 2) / 30}px)`,
    transition: "transform 0.1s linear",
  });

  return (
    <div className="eye-tracker-container">
      <img src={faceImage} alt="Character Face" className="full-screen-image" />
      <div style={getEyeStyle(eyeLeft)}></div>
      <div style={getEyeStyle(eyeRight)}></div>
    </div>
  );
};

export default EyeTracker;
