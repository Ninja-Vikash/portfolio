export function NavLink({ children, onClick, className, href, ...other }) {
  return (
    <h3>
      <a onClick={onClick} className={`text-white ${className}`} href={href} {...other}>
        {children}
      </a>
    </h3>
  );
}
