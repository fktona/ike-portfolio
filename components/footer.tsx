import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaWhatsapp,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 ">
          <Link href="/" className="text-xl font-serif italic">
            IkeOluwa.
          </Link>
        </div>

        <p>&copy; 2024 Ikeoluwa. All rights reserved.</p>

        <div className="flex gap-4 mt-6 md:mt-0">
          <a
            href="https://www.linkedin.com/in/ikeoluwa-adetona-983b20155"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            <FaLinkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://wa.me/message/4XBLK4YV4CWTC1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            <FaWhatsapp size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          {/* <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            <FaInstagram size={24} />
            <span className="sr-only">Instagram</span>
          </a> */}
          {/* <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            <span className="sr-only">Dribbble</span>
          </a> */}
        </div>
      </div>
    </footer>
  );
}
