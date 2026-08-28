"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-page/80 px-5 py-4 backdrop-blur-md lg:hidden">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        IkeOluwa.
      </Link>
      <div className="relative z-50 flex items-center gap-1">
        <ThemeToggle />
        <button
          className="p-1"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-page"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex h-full flex-col px-6 pb-10 pt-24">
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl font-medium ${
                        pathname === link.href ? "text-copper" : "text-ink-muted"
                      }`}
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="btn-primary mt-auto h-12 w-full text-base"
              >
                Book a call
                <ArrowUpRight className="size-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
