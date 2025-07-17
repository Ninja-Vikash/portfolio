import "./globals.css";

export const metadata = {
  title: "vikash-ai",   
  description: "Is not a portfolio? Documentary of experience!",
};

// -------------------------------------------

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false">
        {children}
      </body>
    </html>
  );
}
