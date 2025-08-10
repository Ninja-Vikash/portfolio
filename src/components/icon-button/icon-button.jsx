import clsx from 'clsx';

// --------------------------------------

export function IconButton({ children, target, href = '', className = '', onClick, ...other }) {
  const baseClasses = 'p-2 border bg-zinc-950/10 border-zinc-400/20 rounded-sm cursor-pointer';

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={clsx(baseClasses, className)}
        {...other}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(baseClasses, className)} {...other}>
      {children}
    </button>
  );
}
