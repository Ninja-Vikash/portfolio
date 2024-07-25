import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="h-16 w-full flex items-center justify-center px-28 absolute bottom-0">
      <h2 className="logo text-sm font-light tracking-wider flex items-center gap-2 absolute left-28">
        <Image
          src="/Icons/SHAPES.svg"
          width={14}
          height={10}
          className="invert"
        />
        Portfolio
      </h2>
      <p className="text-sm font-light">
        &copy;Copyright reserved | Vikash Kumar
      </p>
    </footer>
  );
}

export default Footer;
