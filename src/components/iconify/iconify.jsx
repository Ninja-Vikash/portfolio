import { forwardRef } from 'react';
import { Icon } from '@iconify/react';

// ------------------------------------------

export const Iconify = forwardRef(({ icon, width = 20, className, color, ...other }, ref) => (
  <Icon
    ref={ref}
    icon={icon}
    width={width}
    height={width}
    aria-label="icon"
    className={className}
    {...other}
  />
));
