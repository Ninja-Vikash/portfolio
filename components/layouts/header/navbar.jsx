import React from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { Navigations } from "./navigations";

export function Navbar({ slots }) {
  return (
    <>
      <nav className="flex justify-between gap-12 px-32 py-6 border-b border-zinc-700 z-20 backdrop-blur-md bg-black bg-opacity-90 fixed w-full">
        <Logo />

        {slots?.navigation && <Navigations />}

        {slots?.getStart && <Button>
          Get Started
        </Button>}
      </nav>
    </>
  );
}
