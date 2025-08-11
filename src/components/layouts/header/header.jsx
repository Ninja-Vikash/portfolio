import { Logo } from 'src/components/logo';

import { Navigations } from './navigations';

// ---------------------------------------------

export function Header({ slotProps }) {
  return (
    <header className="padding_offset py-6 xl:py-12 flex items-center justify-between">
      <Logo />

      <div className="flex gap-12">{slotProps?.navigations ?? <Navigations />}</div>
    </header>
  );
}
