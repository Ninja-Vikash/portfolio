import Image from "next/image";
import { SKILLS } from "@/data/skills";

function SkillCard({icon}) {
  return (
    <Image
      src={`./Icons/${icon}.svg`}
      alt="skill card"
      width={100}
      height={20}
      className="w-full" />
  );
}

export function Skills() {
  return (
      <section className="bg-zinc-950 rounded-lg p-5 grid grid-cols-10 gap-10">
  
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} icon={skill} />
        ))}
        
      </section>
    );
}