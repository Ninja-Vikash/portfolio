import clsx from 'clsx';
import { forwardRef } from 'react';

// ----------------------------------------

export const Card = forwardRef(({ children, className = '', ...other }, ref) => (
  <div
    ref={ref}
    data-content="card-content"
    className={clsx('bg-zinc-950 px-6 md:px-12 py-4 md:py-8 rounded-xl', className)}
    {...other}
  >
    {children}
  </div>
));
