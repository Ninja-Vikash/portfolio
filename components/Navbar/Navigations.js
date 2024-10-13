"use client";
import React from "react";
import Link from "next/link";

function Navigations() {
  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="nav-section flex-grow flex gap-7 items-center justify-end text-sm">
      <h3>
        <a className="tracking-wide font-light" href="#">
          Home
        </a>
      </h3>
      <h3>
        <a
          onClick={(e) => handleNavigation(e, "about")}
          className="tracking-wide font-light"
          href="#about"
        >
          About
        </a>
      </h3>
      <h3>
        <a
          onClick={(e) => handleNavigation(e, "project")}
          className="tracking-wide font-light"
          href="#projects"
        >
          Projects
        </a>
      </h3>
      <h3>
        <a
          onClick={(e) => handleNavigation(e, "skill")}
          className="tracking-wide font-light"
          href="#skill"
        >
          Skills
        </a>
      </h3>
      <h3>
        <Link className="tracking-wide font-light" href={""}>
          Docs <span style={{ fontSize: "10px" }}>↗</span>
        </Link>
      </h3>
    </section>
  );
}

export default Navigations;
