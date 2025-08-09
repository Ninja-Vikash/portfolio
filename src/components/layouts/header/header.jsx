import { Logo } from 'src/components/logo';

import { Navigations } from './navigations';
import { ConnectButton } from './header-connect-button';
import { ProfileButton } from './header-profile-button';

// ---------------------------------------------

const defaultSlots = {
  connect: true,
  profile: true,
};

export function Header({ slotProps, slotsDisplay }) {
  const slots = {
    ...defaultSlots,
    ...slotsDisplay,
  };

  return (
    <header className="px-16 py-4 flex items-center justify-between">
      <Logo />

      <div className="flex gap-12">
        {slotProps?.navigations ?? <Navigations />}

        {slots?.connect && <ConnectButton />}

        {slots?.profile && <ProfileButton />}
      </div>
    </header>
  );
}
