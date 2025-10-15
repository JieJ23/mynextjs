import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "Standard NEXT App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
