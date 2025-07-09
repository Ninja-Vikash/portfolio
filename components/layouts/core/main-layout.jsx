import { Aside } from "../aside";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

export function MainLayout({children}) {
  return (
    <main>
      <Navbar />

      <Aside />
      
      {children}

      <Footer />
    </main>
  )
}