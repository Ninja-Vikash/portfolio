import { NavLink } from 'react-router';

// -------------------------------------------

const NAVITEMS = [
  { url: '/', label: 'Home' },
  { url: '/', label: 'Blogs' },
  { url: '/', label: 'Services' },
];

// -------------------------------------------

export function Navigations() {
  return (
    <nav className="flex gap-8 items-center">
      {NAVITEMS.map((item) => (
        <NavLink
          to={item.url}
          key={item.url}
          className="text-sm font-medium hover:text-green-400 transition-all"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
