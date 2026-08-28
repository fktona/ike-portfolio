"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { navLinks } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 hidden backdrop-blur-md lg:block ${
        scrolled ? "bg-page/92" : "bg-page/70"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-8 xl:px-12">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          IkeOluwa.
        </Link>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary h-10 px-5 text-sm">
            Book a call
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`hover-underline-animation text-[13px] tracking-wide ${
        active ? "font-semibold text-copper" : "text-ink-muted"
      }`}
    >
      {children}
    </Link>
  );
}
