import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-orange-50 via-orange-50/80 to-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-serif italic text-6xl md:text-7xl mb-12">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={6} />
              <Button className="bg-black text-white rounded-full px-8 py-6 text-lg">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-neutral-600">
                Email: ikeoluwaadetona@gmail.com
              </p>
              <p className="text-neutral-600">Phone: +2348109474571</p>
              <p className="text-neutral-600">
                Location: Associated Estates, Lifecamp Extension, FCT- Abuja
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-neutral-600 hover:text-black transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-neutral-600 hover:text-black transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-neutral-600 hover:text-black transition-colors"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
