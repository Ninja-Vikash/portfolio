import { NavLink } from 'react-router';

// -------------------------------------------

const NAVITEMS = [
  { url: '/', label: 'Present' },
  { url: '/', label: 'Skills' },
  { url: '/', label: 'Contact' },
];

// -------------------------------------------

export function Navigations() {
  return (
    <nav className="flex gap-4 md:gap-8 items-center">
      {NAVITEMS.map((item) => (
        <NavLink
          to={item.url}
          key={item.label}
          className="text-sm font-medium text-gray-600 transition-all"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
