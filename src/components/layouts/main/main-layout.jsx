import { Header } from '../header';
import { BgGradientMask } from '../bg-gradient-mask';

// ----------------------------------------------

export function MainLayout({ children }) {
  return (
    <Main>
      <Header />

      <div className="px-32">{children}</div>
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
