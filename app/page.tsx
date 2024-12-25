"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import EventsAttended from "@/components/EventsAttended";
import VolunteerWork from "@/components/VolunteerWork";
import Workstation from "@/components/Workstation";

export default function Home() {
  return (
    <div className="font-neue">
      {/* Navigation */}
      <Hero />
      <Services />
      <Stats />
      <Experience />
      <EventsAttended />
      {/* <VolunteerWork /> */}
      {/* <Workstation /> */}
    </div>
  );
}
