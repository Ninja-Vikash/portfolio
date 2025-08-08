import Image from "next/image";
import { Icon } from "@/components/icon";

// ---------------------------------------------------

export function HomeAbout() {
  const renderGitHub = (
    <p className="text-zinc-300 text-sm">
      Find me on: <br />
      <span className="inline-flex bg-zinc-950 mt-2 text-zinc-300 font-mono text-lg px-2 py-1 rounded-md border tracking-wide border-zinc-700">
        <Icon src="/assets/icons/ic-github-2.svg" alt="github-icon" width={20} height={20} />
        /Ninja-Vikash
      </span>
    </p>
  );

  const renderGoogle = (
    <p className="text-zinc-300 text-sm">
      Better google: <br />
      <span className="inline-flex gap-1 mt-2 bg-zinc-950 text-zinc-300 font-mono text-lg tracking-wide px-2 py-1 rounded-md border border-zinc-700">
        <Icon src="/assets/icons/ic-google.svg" alt="google-icon" width={18} height={18} />
        /Ninja-Vikash
      </span>
    </p>
  );

  return (
    <section id="about" className="mb-10 flex gap-10 h-[90vh] relative">
      <figure className="relative h-[80%] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-100 z-10"></div>
      </figure>

      <div className="about h-[80%] w-3/5 px-5 py-7">
        <h3
          className="text-4xl text-white pb-2 border-b mb-3 flex gap-2 items-center"
          style={{ fontFamily: "var(--font-400)" }}
        >
          What I do?
        </h3>

        <section className="text-white mt-8">
          <p className="text-2xl italic font-bold tracking-widest text-cyan-300">
            <span className="text-white">"</span> I craft websites!
            <span className="text-white"> "</span>
          </p>
          <p className="text-xl text-zinc-300 mt-4">
            Have one intention to write{" "}
            <span className="text-green-400 font-semibold">scalable</span> and{" "}
            <span className="text-pink-400 font-semibold">beautiful</span> code with love and
            passion.
          </p>

          <p className="text-xl text-zinc-300 mt-4">
            If you are really interested to know about me?
          </p>

          <div className="grid grid-cols-2 mt-5">
            {renderGitHub} {renderGoogle}
          </div>
        </section>
      </div>
    </section>
  );
}
