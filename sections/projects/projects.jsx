import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
      <section id="project" className='px-28 grid grid-cols-3 gap-6'>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    )
}