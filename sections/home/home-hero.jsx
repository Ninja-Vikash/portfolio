import { TypedComponent } from "@/components/typed-js";

// ----------------------------------------------------

export function HomeHero() {
  return (
    <section className="flex items-center justify-center h-[100vh] w-full relative">
      <div className="flex items-center flex-col gap-2">
        <h1 className="text-6xl tracking-wide mb-4 text-white">
          I'm <span className="font-black tracking-widest">VIKASH </span> ✨
        </h1>

        <h2 className="text-white">
          Co-founder of
          <a href="https:quizforces.com" target="_blank" className="text-yellow-200">
            {" "}
            Quizforces{" "}
          </a>
          | Web Developer
        </h2>

        <div className="h-12 pt-8">
          <TypedComponent />
        </div>
      </div>
    </section>
  );
}
