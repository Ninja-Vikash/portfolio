import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full flex items-center justify-center px-28 py-10">
      <div className="w-2/12 ">
        <h1 className="text-2xl">vikash.dev</h1>
      </div>

      <div className="w-7/12 border-l ps-10">
        <p className="text-sm mb-2" style={{fontFamily: "var(--font-200)"}}>Developed by Vikash Kumar</p>
        <p className="text-sm text-zinc-300" style={{fontFamily: "var(--font-200)"}}>&copy; 2024 Copyright reserved</p>
      </div>

      <div className="w-3/12">
        <div className="flex gap-5">
          <Image src={"/Icons/GITHUB.svg"} width={28} height={20} alt=""/>
          <Image src={"/Icons/LINKEDIN.svg"} width={28} height={20} alt=""/>
        </div>

        <p className="mt-2" style={{fontFamily: "var(--font-200)"}}>
          vikashloharjsr@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
