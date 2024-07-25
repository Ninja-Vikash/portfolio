"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";

function TypedComponent() {
  useEffect(() => {

    const typed = new Typed("#typed", {
      strings: ["MERN Stack Developer🚀", "Video Editor🎥", "Freelancer✨", "UI Designer🧑‍💻","Frontend Developer🔥"],
      startDelay: 200,
      typeSpeed: 40,
      backDelay: 1000,
      backSpeed: 40,
      showCursor: false,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="mt-5 h-10 text-4xl" id="typed" style={{fontFamily: "var(--font-300)"}}></div>
    </>
  );
}

export default TypedComponent;
