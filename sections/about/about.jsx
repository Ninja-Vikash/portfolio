import React from "react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="px-28 mb-10 flex gap-10 h-[90vh] relative">
      <figure className="relative h-[80%] w-full">
        <Image
          src="/Images/about.jpg"
          alt="image"
          fill
          className="object-cover"
        />

        {/* Mask Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-100 z-10"></div>
      </figure>


      <div className="about h-[80%] w-3/5 px-5 py-7">
        <h3
          className="text-3xl text-white pb-2 border-b mb-3 flex gap-2 items-center"
          style={{ fontFamily: "var(--font-300)" }}
        >
          About <Image src="/card.svg" height={44} width={44} alt="card icon" />
        </h3>

        <section className="text-gray-300 max-w-2xl mx-auto mt-10">
          <p className="text-xl text-gray-400">
            Hello👋, I'm{" "}
            <span className="text-white font-semibold" style={{ fontFamily: "var(--font-500)" }}>
              Vikash Kumar
            </span>
            , a passionate Web Developer from India.
          </p>

          <p className="text-xl text-gray-400 my-2">
            I craft fast, responsive, and interactive websites using Next.js, React & Tailwind CSS.
          </p>

          <p className="text-xl text-gray-100 my-2">
            Currently building <span className="text-white font-bold">Quizforces 🧑‍🎓</span> to make learning fun & smart.
          </p>
        </section>
        
      </div>
    </section>
  );
}
