import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "./components/project-card";

// ----------------------------------------------------

export function HomeProjects() {
  return (
    <section id="project" className="grid grid-cols-3 gap-6">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
