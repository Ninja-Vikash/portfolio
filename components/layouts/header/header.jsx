import { Logo } from "@/components/logo";
import { Button } from "@/components/button";

import { Navigations } from "./navigations";

// ----------------------------------------

export function Header({ slots }) {
  return (
    <header className="flex justify-between gap-12 px-28 py-6 border-b border-zinc-700 z-20 backdrop-blur-md bg-black bg-opacity-90 fixed w-full">
      <Logo />

      {slots?.navigations ?? <Navigations />}

      {slots?.startButton && <Button>Get Started</Button>}
    </header>
  );
}
