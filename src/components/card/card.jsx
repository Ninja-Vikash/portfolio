import clsx from 'clsx';

// ----------------------------------------

export function Card({ children, className = '', ...other }) {
  return (
    <div
      data-content="card-content"
      className={clsx('bg-zinc-950 px-12 py-8 rounded-xl', className)}
      {...other}
    >
      {children}
    </div>
  );
}
