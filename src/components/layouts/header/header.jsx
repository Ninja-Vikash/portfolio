import { Logo } from 'src/components/logo';

import { Navigations } from './navigations';

// ---------------------------------------------

export function Header({ slotProps }) {
  return (
    <header className="px-32 py-12 flex items-center justify-between">
      <Logo />

      <div className="flex gap-12">{slotProps?.navigations ?? <Navigations />}</div>
    </header>
  );
}
