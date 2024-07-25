"use client";
import CommonButton from "@/components/ui/btn/CommonButton";
import ContactItem from "@/components/ContactPage/ContactItem";
import RareButton from "@/components/ContactPage/RareButton";
import TypedComponent from "@/components/LandingPage/TypedComponent";
import Image from "next/image";
import { useState } from "react";
import Project from "@/components/containers/Project";
import Skill from "@/components/containers/Skill";

export default function Home() {

  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const commentChange = (e) => {
    setComment(e.target.value);
    // console.log(comment)
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  return (
    <main>

      {/* Landing Page Section */}
      <section className="landing-page grid items-center grid-cols-2 py-20 px-28 h-[100vh] w-full relative">
        <div className="">
          <h1 className="text-4xl tracking-tight mb-2" style={{fontFamily: "var(--font-200)"}}>
            Hello
            <div className="text-7xl" style={{fontFamily: "var(--font-300)"}}>I am <span className="text-yellow-400">Vikash.</span></div>
          </h1>

          <h1 className="text-5xl tracking-tight mt-3 text-zinc-400" style={{fontFamily: "var(--font-200)"}}>
            A Frontend Developer
          </h1>

          <TypedComponent />

          <div className="btn-area mt-16 flex gap-4">
            <CommonButton textValue="Download CV 💛" />
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex items-center justify-center bg-zinc-950 rounded-lg">
          <Image
            src="/Images/computer.png"
            width={400}
            height={600}
            alt="Developer Image"
          />
        </div>

      </section>

      <Project/>

      <section className="px-28 mt-20">
        <Skill/>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="landing-page py-0 px-28 h-[100vh]">
        {/* User Interaction & Contact Informations */}
        {/* <form action="" method="">
          <div className="flex gap-5 ">
            <div className="w-2/5 px-10 py-20 ">
              <h3 className="text-5xl mb-7">Connect with me!</h3>
              <ContactItem />
            </div>

            <div className="w-3/5 pt-20">
              <textarea
                className="resize-none w-full h-40 border-none rounded-md px-3 py-2 text-white bg-indigo-950 focus:outline-none"
                name=""
                id=""
                placeholder="Your comment"
                onChange={commentChange}
              ></textarea>
              <input
                className="w-full h-9 border-none rounded-md px-3 mt-1 text-white bg-indigo-950 focus:outline-none"
                type="text"
                placeholder="Your email"
                onChange={emailChange}
              />
              <button
                type="submit"
                className="text-sm py-2 px-8 bg-purple-950 rounded-md mt-3"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        <div className="pt-2">
          <h2 className="text-6xl text-center">Open to Collaboration!🥰</h2>
          <h2 className="text-4xl text-center mt-5 font-thin">
            On frontend projects
          </h2>
        </div> */}
      </section>
    </main>
  );
}
