import React from "react";
import Image from "next/image";

// ----------------------------------------------------

function Details({ title, desc }) {
  return (
    <div className="project-desc">
      <h2
        className="text-xl text-zinc-100 tracking-wide border-b pb-2"
        style={{ fontFamily: "var(--font-300)" }}
      >
        {title}
      </h2>
      <p
        className="text-sm mt-1 h-12 text-zinc-400 tracking-wide"
        style={{ fontFamily: "var(--font-200)" }}
      >
        {desc}
      </p>
    </div>
  );
}

// ----------------------------------------------------

function Icon({ icon, w, alt, padding, scale }) {
  const style = padding ? "bg-zinc-900 p-1 rounded-md" : "";
  const hoverEffect = scale ? "hover:scale-125" : "";
  return (
    <Image
      src={`/Icons/${icon}.svg`}
      width={w}
      height={20}
      alt={alt || "image"}
      className={`${style} ${hoverEffect} ease-in transition-all`}
    />
  );
}

// ----------------------------------------------------

export function ProjectCard({ image, title, desc, techStack, netlifyLink, githubLink }) {
  return (
    <>
      <div className="bg-gradient-to-br from-zinc-950/100 via-zinc-950/50 to-zinc-950/70 rounded-lg p-4 relative">
        <Image
          src={`/Images/${image}.png`}
          height={400}
          width={500}
          alt="Project images"
          className="rounded-md mb-4"
        />

        <Details title={title} desc={desc} />

        <div className="tech mt-2 mb-4">
          <h3 className="text-sm text-zinc-100 mb-2">Tech Stack</h3>

          <div className="flex gap-5">
            {techStack.map((icon, index) => (
              <Icon key={index} icon={icon} w={36} />
            ))}
          </div>
        </div>

        <div className="icons flex items-center gap-7">
          {netlifyLink && (
            <a target="_blank" href={netlifyLink}>
              <Icon icon="ic-rocket" w={24} scale />
            </a>
          )}
          <a target="_blank" href={githubLink}>
            <Icon icon="ic-github-2" w={28} scale />
          </a>
        </div>
      </div>
    </>
  );
}
