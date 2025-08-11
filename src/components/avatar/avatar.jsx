import clsx from 'clsx';
import { forwardRef } from 'react';

// ----------------------------------

export const Avatar = forwardRef(({ src, alt, className, slotProps, ...other }, ref) => {
  const baseClasses = `w-8 h-8 rounded-full ${className}`;

  return (
    <div ref={ref} className={clsx('rounded-full', slotProps?.wrapperClasses)} {...other}>
      <img src={src} alt={alt} data-content="avatar" className={baseClasses} />
    </div>
  );
});
