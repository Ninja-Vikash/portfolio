import { MainLayout } from "@/components/layouts/core/main-layout";
import { About } from "@/sections/about";
import { Collaborate } from "@/sections/collaborate";

import { MainHero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";

export default function Home() {
  return (
    <MainLayout>
      <MainHero />

      <About />

      <Projects />

      <section id="skill" className="px-28 mt-20">
        <Skills />
      </section>

      <section className="footer-part py-20 px-28">
        <Collaborate />
      </section>
    </MainLayout>
  );
}
