import { Header } from "../header";

// ---------------------------------------------------

export function SimpleLayout({ children }) {
  return (
    <main>
      <Header slots={{ navigations: false }} />

      <section className="pt-20 px-28">
        {children}
      </section>
    </main>
  );
}
