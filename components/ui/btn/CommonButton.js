import React from "react";

function CommonButton({textValue}) {
  return (
    <a href="/docs/Resume.pdf" download="Resume.pdf" className="btn-1 px-5 py-2 text-sm text-zinc-300 rounded-md bg-zinc-900 tracking-wider">
      {textValue}
    </a>
  );
}

export default CommonButton;
