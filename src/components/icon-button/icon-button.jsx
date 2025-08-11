import clsx from 'clsx';
import { forwardRef } from 'react';

// --------------------------------------

export const IconButton = forwardRef(
  ({ children, target, href = '', className = '', onClick, ...other }, ref) => {
    const baseClasses = 'p-2 border bg-zinc-950/10 border-zinc-400/20 rounded-sm cursor-pointer';

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          target={target}
          className={clsx(baseClasses, className)}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          {...other}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={clsx(baseClasses, className)}
        {...other}
      >
        {children}
      </button>
    );
  }
);
