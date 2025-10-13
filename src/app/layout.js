import { Cinzel, Ubuntu_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--cinzel",
  subsets: ["latin"],
});

const ubuntu = Ubuntu_Sans({
  variable: "--ubuntu",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next App",
  description: "Standard NEXT App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${ubuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
