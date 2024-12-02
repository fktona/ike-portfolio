"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0  hidden lg:block   left-0 right-0 z-50 md:px-16 px-4"
      initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container h-full  flex relative z-50 items-center justify-between py-2">
        <Link href="/" className="text-xl font-serif italic">
          IkeOluwa.
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="#works" active={pathname === "#works"}>
            Works
          </NavLink>
          <NavLink href="/properties" active={pathname === "/properties"}>
            Properties
          </NavLink>
        </div>
        <Link href="/contact" className="text-sm">
          <Button
            size={"sm"}
            variant="default"
            className="rounded-full hidden md:block text-sm"
          >
            Contact
          </Button>
        </Link>
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
      className={`text-sm hover-underline-animation ${
        active ? "font-semibold" : ""
      }`}
    >
      {children}
    </Link>
  );
}
