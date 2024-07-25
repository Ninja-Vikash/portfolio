import React from "react";

function ProjectDesc({ title, desc }) {
  return (
    <div className="project-desc">
      <h2 className="text-xl tracking-wide border-b pb-2" style={{fontFamily: "var(--font-300)"}}>{title}</h2>
      <p className="text-sm mt-1 h-12 text-zinc-400 tracking-wide" style={{fontFamily: "var(--font-200)"}}>{desc}</p>
    </div>
  );
}

export default ProjectDesc;
