import clsx from 'clsx';

// ----------------------------------

export function Avatar({ src, width, alt, className, slotProps, ...other }) {
  return (
    <div className={clsx('rounded-full', slotProps?.wrapperClasses)} {...other}>
      <img
        src={src}
        alt={alt}
        data-content="avatar"
        style={{ width, height: width }}
        className={clsx('w-8 h-8 rounded-full', className)}
      />
    </div>
  );
}
