import { Logo } from "@/components/logo";
import { Button } from "@/components/button";

import { Navigations } from "./navigations";

// ----------------------------------------

export function Header({ slots }) {
  return (
    <header className="flex">
      <Logo />


    </header>
  );
}
