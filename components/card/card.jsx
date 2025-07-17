import clsx from "clsx";
import { forwardRef } from "react";

// ------------------------------------------------

export const Card = forwardRef(({ className, children }, ref) => {
  const baseStyleClasses = `bg-gradient-to-br from-zinc-950/100 via-zinc-950/50 to-zinc-950/70 shadow-md rounded-lg p-4`;

  return (
    <div ref={ref} className={clsx(baseStyleClasses, className)}>
      {children}
    </div>
  );
});
