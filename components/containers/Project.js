import React from 'react'
import ProjectCard from '../ui/cards/ProjectCard'
import { projectData } from '@/data/projects.data'

function Project() {
  
  return (
    <section id="project" className='px-28 grid grid-cols-3 gap-6'>
      {projectData.map((project, index) => (
        <ProjectCard key={index} data={project}/>
      ))}
    </section>
  )

}

export default Project
