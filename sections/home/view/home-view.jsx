import { HomeAbout } from "../home-about";
import { HomeCollaborate } from "../home-collaborate";
import { HomeHero } from "../home-hero";
import { HomeProjects } from "../home-projects";
import { HomeSkills } from "../home-skills";

// ----------------------------------------------

export function HomeView() {
  return (
    <>
      <HomeHero />
      <HomeAbout />

      <HomeProjects />
      <HomeSkills id="skill" />
      <HomeCollaborate />
    </>
  );
}
