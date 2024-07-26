import "./globals.css";
import SocialAside from "@/components/containers/SocialAside";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Vikash Kumar | Portfolio",
  description: "Portfolio website of vikash kumar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <SocialAside/>
        <Footer/>
      </body>
    </html>
  );
}
