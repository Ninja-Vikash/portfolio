import Image from "next/image";
import { SKILLS } from "@/data/skills";

// ----------------------------------------------------

function Icon({ icon }) {
  return (
    <Image
      src={`./Icons/${icon}.svg`}
      alt={`Icon of ${icon}`}
      width={100}
      height={20}
      className="w-full"
    />
  );
}

// ----------------------------------------------------

export function HomeSkills({ className, ...other }) {
  return (
    <section className="mt-20" {...other}>
      <div className="bg-zinc-950 rounded-lg p-5 grid grid-cols-10 gap-10">
        {SKILLS.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </div>
    </section>
  );
}
