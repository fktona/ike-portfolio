import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { contact, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 md:py-20 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-lg text-4xl font-semibold tracking-tight md:text-5xl">
            Got a brief? Let&apos;s bring it to life.
          </h2>
          <Link
            href="/contact"
            className="btn-primary h-12 shrink-0 px-8 text-base"
          >
            Book a call
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </nav>
            <a
              href={`mailto:${contact.email}`}
              className="text-xl font-semibold tracking-tight hover:text-copper md:text-3xl lg:text-4xl"
            >
              {contact.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Ikeoluwa Adetona
            </p>
            <div className="flex gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-copper"
              >
                <FaLinkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-copper"
              >
                <FaWhatsapp size={18} />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
