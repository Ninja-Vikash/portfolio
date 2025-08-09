import { Header } from '../header';

// ----------------------------------------------

export function SimpleLayout({ children }) {
  return (
    <Main>
      <Header
        slotsDisplay={{
          connect: false,
        }}
      />

      <div className="px-16">{children}</div>
    </Main>
  );
}

// ----------------------------------------------

function Main({ children }) {
  return <main className="min-h-[100dvh] bg-zinc-950 text-white">{children}</main>;
}
