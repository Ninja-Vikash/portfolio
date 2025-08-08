import clsx from 'clsx';
import { forwardRef } from 'react';

// ----------------------------------------

export const SvgColor = forwardRef(
  ({ src, color = 'currentColor', className = '', style = {}, alt, ...other }, ref) => (
    <span
      ref={ref}
      role="img"
      aria-label={alt}
      className={clsx('inline-flex w-24 h-24', className)}
      style={{
        backgroundColor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        display: 'inline-block',
        ...style,
      }}
      {...other}
    />
  )
);
