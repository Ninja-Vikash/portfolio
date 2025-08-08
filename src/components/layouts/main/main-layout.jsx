import { Header } from '../header';

// ----------------------------------------------

export function MainLayout({ children }) {
  return (
    <Main>
      <Header />

      <div className="px-16">{children}</div>
    </Main>
  );
}

// ----------------------------------------------

function Main({ children }) {
  return <main className="min-h-[100dvh] bg-zinc-950 text-white">{children}</main>;
}
