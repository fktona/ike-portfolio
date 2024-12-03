"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { submitForm } from "../actions/form";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-black text-white rounded-full px-8 py-6 text-lg"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(submitForm, {
    errors: {},
    message: "",
  });

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-orange-50 via-orange-50/80 to-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-serif italic text-6xl md:text-7xl mb-12">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form action={formAction} className="space-y-6">
              <div>
                <Input name="name" placeholder="Your Name" />
                {state.errors?.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.name[0]}
                  </p>
                )}
              </div>
              <div>
                <Input name="email" type="email" placeholder="Your Email" />
                {state.errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.email[0]}
                  </p>
                )}
              </div>
              <div>
                <Textarea name="message" placeholder="Your Message" rows={6} />
                {state.errors?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {state.errors.message[0]}
                  </p>
                )}
              </div>
              <SubmitButton />
              {state.message && (
                <p
                  className={`text-sm mt-2 ${
                    state.success ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {state.message}
                </p>
              )}
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
