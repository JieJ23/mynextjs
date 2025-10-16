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
        <>
          <div className="fixed w-full h-lvh -z-10 pointer-events-none">
            <div className="w-full h-full bg-[url('/hades2.webp')] bg-right xl:bg-center bg-cover" />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b to-[#000000]/80 from-[#000000]/60" />
          </div>
          {children}
        </>
      </body>
    </html>
  );
}
