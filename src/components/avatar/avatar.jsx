import clsx from 'clsx';

// ----------------------------------

export function Avatar({ src, alt, className, slotProps, ...other }) {

  const baseClasses = `w-8 h-8 rounded-full ${className}`

  return (
    <div className={clsx('rounded-full', slotProps?.wrapperClasses)} {...other}>
      <img
        src={src}
        alt={alt}
        data-content="avatar"
        className={baseClasses}
      />
    </div>
  );
}
