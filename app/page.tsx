"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import EventsAttended from "@/components/EventsAttended";
import Experience from "@/components/Experience";
import CTABanner from "@/components/CTABanner";
import Services from "@/components/Services";
import Certificate from "@/components/Certificate";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <CTABanner />
      <Services />
      <Certificate />
      <EventsAttended />
    </>
  );
}
