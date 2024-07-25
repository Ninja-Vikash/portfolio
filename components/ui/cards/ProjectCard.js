import React from 'react'
import Image from "next/image";
import ProjectDesc from '../texts/ProjectDesc';
import Icon from '../icons/Icon';

function ProjectCard({data}) {
  return (
    <>
      <div className='bg-zinc-950 rounded-lg p-4'>

        <Image
            src={`/Images/${data.image}.png`}
            height={400}
            width={500}
            alt="Project images"
            className="rounded-md mb-4"
        />

        <ProjectDesc title={data.title} desc={data.desc}/>

        <div className="tech mt-2 mb-4">

          <h3 className='text-sm mb-2'>Tech Stack</h3>

          <div className='flex gap-5'>
            {data.techStack.map((tech, index) => (
              <Icon icon={tech} w={32} pad={true}/>
            ))}
          </div>

        </div>

        <div className="icons flex items-center gap-7">
          {data.netlifyLink && <a target='_blank' href={data.netlifyLink}>
            <Icon icon={"ROCKET"} w={24}/>
          </a>}
          <a target='_blank' href={data.githubLink}>
            <Icon icon={"GITHUB"} w={32}/>
          </a>
        </div>

      </div>
    </>
  )
}

export default ProjectCard
