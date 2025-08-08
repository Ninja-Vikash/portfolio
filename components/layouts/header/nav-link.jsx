import clsx from "clsx";

// ------------------------------------------

export function NavLink({ children, onClick, className, href, ...other }) {
  return (
    <h3 data-role="nav-link">
      <a onClick={onClick} className={clsx("text-white", className)} href={href} {...other}>
        {children}
      </a>
    </h3>
  );
}
