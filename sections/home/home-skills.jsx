import clsx from "clsx";

import { SKILLS } from "@/data/skills";
import { Icon } from "@/components/icon";

// ----------------------------------------------------

export function HomeSkills({ className, ...other }) {
  return (
    <section className={clsx("mt-20", className)} {...other}>
      <div className="bg-zinc-950 rounded-lg p-5 grid grid-cols-10 gap-10">
        {SKILLS.map((src) => (
          <Icon key={src} src={`./assets/icons/${src}.svg`} alt={`icon-${src}`} />
        ))}
      </div>
    </section>
  );
}
