import React from "react";
import Image from "next/image";

function SkillCard({icon}) {
  return (
    <>
      <Image src={`./Icons/${icon}.svg`} width={120} height={20} className="w-full" />
    </>
  );
}

export default SkillCard;
