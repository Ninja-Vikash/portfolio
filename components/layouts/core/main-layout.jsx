import { Aside } from "../aside";
import { Footer } from "../footer";
import { Header } from "../header";

export function MainLayout({ children }) {
  return (
    <main>
      <Header
        slots={{
          startButton: true,
        }}
      />

      <Aside />

      <div className="px-28">{children}</div>

      <Footer />
    </main>
  );
}
