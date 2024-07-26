import React from "react";
import Navigations from "./Navigations";
import CommonButton from "../ui/btn/CommonButton";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between gap-12 px-28 py-3 border-b border-zinc-700 z-20 backdrop-blur-md bg-black bg-opacity-90 fixed w-full">

        <h2 className="logo tracking-wider flex items-center text-xl">
          <span className="text-yellow-300">v</span>ikash.dev
        </h2>

        <Navigations/>

        <CommonButton textValue="Download CV" />

      </nav>
    </>
  );
}

export default Navbar;
