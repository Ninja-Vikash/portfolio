import Image from "next/image";
import { forwardRef } from "react";

// ----------------------------------------

export const Icon = forwardRef(
  ({ src, alt, width = 20, height = 20, className, ...other }, ref) => (
    <Image
      ref={ref}
      alt={alt}
      src={src}
      width={width}
      height={height}
      data-role="icon"
      className={className}
      {...other}
    />
  ),
);
