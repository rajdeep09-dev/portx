import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Portx — Converted (Demo)",
  description: "Portx converted from a Framer HTML export to Next.js (demo home page)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* If you want to preload fonts later, add <link rel=\"preload\" href=\"/fonts/YourFont.woff2\" as=\"font\" type=\"font/woff2\" crossOrigin=\"anonymous\" /> */}
      </head>
      <body>
        {/* Framer events script kept (non-blocking). Editor snippet removed. */}
        <Script
          src="https://events.framer.com/script?v=2"
          data-fid="19fdb4a55118908a878a50561e7224461d5d51bc9d26dcc0ac0d0a4b80159cd9"
          strategy="lazyOnload"
        />
        {children}
      </body>
    </html>
  );
}