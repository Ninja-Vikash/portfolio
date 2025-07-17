import { HomeAbout } from "../home-about";
import { HomeCollaborate } from "../home-collaborate";
import { HomeHero } from "../home-hero";
import { HomeJourney } from "../home-journey";
import { HomeProjects } from "../home-projects";
import { HomeSkills } from "../home-skills";

// ----------------------------------------------

export function HomeView() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeJourney />

      {/* <HomeProjects /> */}
      <HomeSkills id="skill" />
      <HomeCollaborate />
    </>
  );
}
