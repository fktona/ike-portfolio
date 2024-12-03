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
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <MobileNav />
        <main className="min-h-screen bg-gradient-to-b relative from-[#fff8e7] to-[#fffffe] md:px-16 px-4">
          {children}
          <Separator className="my-10 md:my-20" />
          <Footer />
        </main>
      </body>
    </html>
  );
}
