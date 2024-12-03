import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const neue = localFont({
  src: "./fonts/Neue.otf",
  variable: "--font-neue",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IkeOluwa - Portfolio",
  description: "Legal Practitioner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${neue.variable} bg-gradient-to-b  from-[#fff8e7] to-[#fffffe]`}
      >
        <Navbar />
        <MobileNav />
        <div className="mb-6" />
        <main className="min-h-screen relative  max-w-screen-2xl mx-auto  md:px-16 px-4">
          {children}
          <Separator className="my-10 md:my-20" />
          <Footer />
        </main>
      </body>
    </html>
  );
}
