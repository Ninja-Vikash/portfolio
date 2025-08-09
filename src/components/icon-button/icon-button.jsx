import clsx from 'clsx';

// --------------------------------------

export function IconButton({ children, className = '', onClick, ...other }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('p-2 border bg-zinc-950/10 border-zinc-400/20 rounded-sm cursor-pointer', className)}
      {...other}
    >
      {children}
    </button>
  );
}
