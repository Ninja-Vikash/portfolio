import React from "react";
import Image from "next/image";

function RareButton({btnTitle}) {
  return (
    <button
      className="text-lg py-3 px-6 bg-purple-950 rounded-xl flex items-center gap-3 hover:bg-indigo-600 transition-all duration-200"
      href="/"
    >
      {btnTitle}
      <Image src="/Icons/ARROW.svg" width={15} height={10} className="invert" />
    </button>
  );
}

export default RareButton;
