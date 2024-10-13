import Project from "@/components/containers/Project";
import Skill from "@/components/containers/Skill";
import About from "@/components/containers/About";
import Collaborate from "@/components/containers/Collaborate";
import LandingPage from "@/components/containers/LandingPage";
import Root from "@/components/containers/Root";

export default function Home() {
  return (
    <Root>
      <LandingPage />

      <About />

      <Project />

      <section id="skill" className="px-28 mt-20">
        <Skill />
      </section>

      <section className="footer-part py-20 px-28">
        <Collaborate />
      </section>
    </Root>
  );
}
