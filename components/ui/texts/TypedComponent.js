"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import { typedRoles } from "@/data/roles.data";

function TypedComponent() {
  useEffect(() => {

    const typed = new Typed("#typed", {
      strings: typedRoles,
      startDelay: 200,
      typeSpeed: 50,
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
      <div className="text-xl" id="typed" style={{fontFamily: "var(--font-300)"}}></div>
    </>
  );
}

export default TypedComponent;
