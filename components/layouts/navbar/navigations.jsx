"use client";
import React from "react";

import { NavLink } from "./nav-link";

export function Navigations() {

  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="nav-section flex-grow flex gap-7 items-center justify-end text-sm">

      <NavLink href="#">Home</NavLink>

      <NavLink
        href="#about"
        onClick={(e) => handleNavigation(e, "about")}
      >About</NavLink>
      <NavLink
        href="#skill"
        onClick={(e) => handleNavigation(e, "skill")}
      >Skills</NavLink>

    </section>
  );
}
