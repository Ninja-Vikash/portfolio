import React from "react";
import SkillCard from "../ui/cards/SkillCard";
import { skills } from "@/data/skills.data";

function Skill() {
  return (
    <section className="bg-zinc-950 rounded-lg p-5 grid grid-cols-8 gap-10">

      {skills.map((skill, index) => (
        <SkillCard icon={skill} />
      ))}
      
    </section>
  );
}

export default Skill;
