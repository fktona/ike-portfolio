"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, Globe, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumePath } from "@/lib/site";

const intro =
  "I am Ikeoluwa Adetona, a lawyer, legislative researcher, and real-estate consultant. My work spans public policy, legal services, and sustainable development — turning complex regulatory problems into clear, workable solutions.";

const extra = [
  "As a Legislative Aide at the Senate, I support legislative and public policy research — drafting bills, policy briefs, and amendment proposals, and advising on regulatory and institutional reform. I also serve as a Research Assistant at the Faculty of Law, University of Lagos, contributing to the African Journal on Privacy and Data Protection.",
  "I hold a Bachelor of Laws (LL.B.) from the University of Lagos and a Bachelor of Law (B.L.) from the Nigerian Law School. My research interests include public policy and governance, regulatory policy and institutional reform, economic regulation and political economy, and digital governance.",
  "In addition to my legal and policy work, I am a forward-thinking real-estate consultant who provides sound investment advice and guides clients through complex property transactions with precision and care.",
];

const points = [
  "With 6+ years of experience, I specialise in legislative research, legal advisory, and real-estate consultancy that solve real-world problems for clients and institutions.",
  "I work closely with clients, blending legal precision with policy strategy to bring their brief to life through thoughtful, impactful solutions.",
];

function downloadResume() {
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "RESUME_IKEOLUWA_ADETONA_2024.pdf";
  link.click();
}

function ResearchCard({ className }: { className: string }) {
  return (
    <Link
      href="/research"
      className={`group relative block overflow-hidden rounded-2xl bg-surface shadow-[0_12px_40px_rgba(0,0,0,0.06)] ${className}`}
    >
      <Image
        src="/research-illustration.png"
        alt="Legislative research illustration"
        fill
        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute bottom-2 left-2 text-[11px] font-medium text-[#222] lg:bottom-3 lg:left-3 lg:text-sm">
        Research
      </span>
      <span className="absolute bottom-2 right-2 flex size-7 items-center justify-center rounded-full bg-copper text-white lg:bottom-3 lg:right-3 lg:size-11">
        <ArrowUpRight className="size-3.5 lg:size-4" />
      </span>
    </Link>
  );
}

function PortraitCard({
  full,
  className,
}: {
  full: boolean;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-surface ${className}`}>
      <Image
        src="/ike.jpeg"
        alt="Ikeoluwa Adetona"
        fill
        className="object-cover"
      />
      <Link
        href={full ? "/contact" : "/about"}
        className="absolute inset-0 m-auto flex size-8 items-center justify-center rounded-full bg-copper text-white shadow-sm lg:size-11"
        aria-label={full ? "Book a call" : "About me"}
      >
        <ArrowUpRight className="size-3.5 lg:size-4" />
      </Link>
    </div>
  );
}

export default function About({ full = false }: { full?: boolean }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section id="about" ref={ref} className="bg-surface px-5 py-16 sm:px-10 md:py-28 lg:px-12">
      <div className="relative mx-auto grid max-w-[1200px] items-start gap-8 lg:grid-cols-12 lg:gap-8">
        <motion.div
          className="flex h-full flex-col lg:col-span-4 lg:justify-between lg:pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:mb-5 md:text-5xl">
              About Me
            </h2>
            <p className="relative z-10 max-w-sm text-[15px] leading-7 text-ink-muted">
              {intro}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
            <ResearchCard className="aspect-square" />
            <PortraitCard full={full} className="aspect-square" />
          </div>

          <ResearchCard className="mt-10 hidden aspect-square w-full max-w-[360px] lg:block" />
        </motion.div>

        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="flex flex-col rounded-2xl bg-elevated p-5 lg:h-full lg:rounded-none lg:p-4">
            <span className="flex size-9 items-center justify-center rounded-full bg-copper/10 lg:size-11">
              <Globe className="size-4 text-copper lg:size-5" />
            </span>
            <p className="mt-4 text-5xl font-semibold tracking-tight text-copper lg:mt-8 lg:text-7xl">
              7+
            </p>
            <p className="mt-2 max-w-[220px] text-sm leading-6 text-ink-muted lg:mt-3">
              Legislative research projects for Senate and institutional
              clients.
            </p>
            <div className="relative mt-6 hidden aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface lg:mt-8 lg:block">
              <Image
                src="/ike.jpg"
                alt="Ikeoluwa Adetona"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex h-full flex-col lg:col-span-4 lg:justify-between lg:pt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          <PortraitCard
            full={full}
            className="mx-auto hidden aspect-square w-full max-w-[360px] lg:ml-auto lg:mr-0 lg:block"
          />

          <div className="space-y-5 lg:mt-8 lg:space-y-6">
            {points.map((point) => (
              <div key={point.slice(0, 28)} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-copper">
                  <Sparkle className="size-3 fill-white text-white" />
                </span>
                <p className="text-sm leading-6 text-ink-muted">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {full && (
        <div className="mx-auto mt-12 max-w-[1200px] md:mt-16">
          <div className="max-w-3xl space-y-4">
            {extra.map((p) => (
              <p key={p.slice(0, 24)} className="text-[15px] leading-7 text-ink-muted">
                {p}
              </p>
            ))}
          </div>
          <Button
            className="mt-8 rounded-full bg-copper px-8 py-6 text-white hover:bg-copper/90"
            onClick={downloadResume}
          >
            Download Resume
          </Button>
        </div>
      )}
    </section>
  );
}
