import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IkeOluwa Adetona — Portfolio",
  description:
    "IkeOluwa Adetona — lawyer, legislative researcher, and real-estate consultant specializing in public policy and governance.",
};

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark'}else{document.documentElement.style.colorScheme='light'}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistSans.className} bg-page text-ink`}
      >
        <ThemeProvider>
          <Navbar />
          <MobileNav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
