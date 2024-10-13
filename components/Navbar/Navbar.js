import React from "react";
import Navigations from "./Navigations";
import CommonButton from "../ui/btn/CommonButton";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between gap-12 px-32 py-6 border-b border-zinc-700 z-20 backdrop-blur-md bg-black bg-opacity-90 fixed w-full">
        <h2 className="logo tracking-wider flex items-center gap-3 text-md">
          <img src="/LOGO.svg" alt="brand logo" className="h-4 invert" />

          <div>
            <span className="text-[#FF9505]">vikash</span>.dev
          </div>
        </h2>

        <Navigations />

        <CommonButton textValue="Download CV" />
      </nav>
    </>
  );
}

export default Navbar;
