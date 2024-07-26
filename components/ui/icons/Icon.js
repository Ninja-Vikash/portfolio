import React from "react";
import Image from "next/image";

function Icon(props) {
  const style = props.pad ? "bg-zinc-800 p-1 rounded-md" : ""
  const hoverEffect = props.scale ? "hover:scale-125" : ""
  return (
    <Image src={`/Icons/${props.icon}.svg`} width={props.w} height={20} alt={props.alt} className={`${style} ${hoverEffect} ease-in transition-all`}/>
  );
}

export default Icon;
