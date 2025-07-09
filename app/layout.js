import "./globals.css";

export const metadata = {
  title: "Vikash Kumar | Portfolio",
  description: "Portfolio website of vikash kumar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false">
        {children}
      </body>
    </html>
  );
}
