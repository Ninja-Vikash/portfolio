import React from "react";
import Image from "next/image";

function CustomLink({link,icon, w, classname, alt}) {
    const className = classname ? classname : ""
  return (
    <a target="_blank" href={`${link}`}>
      <Image
        src={`/Icons/${icon}.svg`}
        height={70}
        width={w}
        alt={alt}
        className={`${className}`}
      />
    </a>
  );
}

export default CustomLink;
