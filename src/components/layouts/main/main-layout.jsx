import { Header } from '../header';
import { BgGradientMask } from '../bg-gradient-mask';

// ----------------------------------------------

export function MainLayout({ children }) {
  return (
    <Main>
      <Header />

      <div className="padding_offset">{children}</div>
    </Main>
  );
}

// ----------------------------------------------

function Main({ children }) {
  return (
    <main className="min-h-[100dvh] relative bg-black/70">
      <BgGradientMask />
      {children}
    </main>
  );
}
