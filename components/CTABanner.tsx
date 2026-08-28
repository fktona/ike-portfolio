import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="px-6 py-8 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl md:rounded-3xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/house.jpg')" }}
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-copper/25" />
        <div className="relative flex flex-col items-start justify-between gap-8 px-8 py-16 sm:px-12 md:flex-row md:items-center md:px-16 md:py-24 lg:px-20 lg:py-28">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s work together — book a free consultation.
          </h2>
          <Link
            href="/contact"
            className="btn-primary h-12 shrink-0 px-8 text-base md:h-14 md:px-10 md:text-lg"
          >
            Book a call
            <ArrowUpRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
