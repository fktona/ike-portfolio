"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormState, useFormStatus } from "react-dom";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { submitForm } from "../actions/form";
import { contact } from "@/lib/site";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="rounded-full bg-copper px-8 py-6 text-white hover:bg-copper/90"
    >
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(submitForm, {
    errors: {},
    message: "",
    success: false,
  });

  return (
    <div className="min-h-[calc(100vh-80px)] bg-page pb-24 pt-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-ink-muted">
          Contact
        </p>
        <h1 className="mb-16 max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
          Got a brief? Let&apos;s bring it to life.
        </h1>

        <div className="grid gap-16 md:grid-cols-2">
          <form action={formAction} className="space-y-5">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                className="h-12 rounded-none border-0 border-b border-ink/15 bg-transparent px-0"
              />
              {state.errors?.name && (
                <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
              )}
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                className="h-12 rounded-none border-0 border-b border-ink/15 bg-transparent px-0"
              />
              {state.errors?.email && (
                <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
              )}
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="rounded-none border-0 border-b border-ink/15 bg-transparent px-0"
              />
              {state.errors?.message && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.message[0]}
                </p>
              )}
            </div>
            <SubmitButton />
            {state.message && (
              <p
                className={`text-sm ${
                  state.success ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {state.message}
              </p>
            )}
          </form>

          <div className="space-y-10">
            <div>
              <h2 className="mb-4 text-sm uppercase tracking-[0.18em] text-ink-muted">
                Details
              </h2>
              <p className="text-ink">{contact.email}</p>
              <p className="text-ink">{contact.phone}</p>
              <p className="mt-2 text-sm text-ink-muted">{contact.location}</p>
            </div>
            <div>
              <h2 className="mb-4 text-sm uppercase tracking-[0.18em] text-ink-muted">
                Connect
              </h2>
              <div className="flex gap-4">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-ink"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-ink"
                >
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
