import React from "react";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="px-28 mb-10 flex gap-10 h-[90vh]">
      <figure className="w-2/5 h-[80%] bg-zinc-950 rounded-lg myShadow flex items-center justify-center">
        <Image src={"/Images/about.png"} height={100} width={420} />
      </figure>

      <div className="about h-[80%] w-3/5 px-5 py-7">
        <h3
          className="text-3xl pb-2 border-b mb-3"
          style={{ fontFamily: "var(--font-300)" }}
        >
          About
        </h3>

        <p className="text-xl text-gray-400">
          Hello👋, I'm <span className="text-white" style={{fontFamily: "var(--font-500)"}}>Vikash Kumar</span> a front-end developer based in India.
        </p>
        <p className="text-xl text-gray-100 my-2">Learning MERN Stack! 🧑‍🎓</p>
        <p className="text-xl text-gray-400">
          I live in Jamshedpur, Jharkhand. I am a <span className="text-white">graduate of mathematics</span>. But I
          chose my passion to become a <span className="text-white" style={{fontFamily: "var(--font-500)"}}>Web Developer</span>.
        </p>
        <p className="text-xl text-gray-400 my-2">
          I have started with HTML and CSS. When I was learning JavaScript, I
          experienced so many interesting stuff. Since I had learned some basic
          C++ in my Intermediate.
        </p>
        <p className="text-xl text-gray-400">
          Helps me to understand basic programming concepts like Loops, Array,
          String, and so on. Because I have a mathematics background, I can
          solve and understand complex logic in programming.
        </p>
      </div>
    </section>
  );
}

export default About;
