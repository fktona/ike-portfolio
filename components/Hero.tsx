"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const item = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 90, damping: 14 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-page">
      <div className="pointer-events-none absolute left-[18%] top-[38%] hidden h-[280px] w-[280px] rounded-full bg-copper/25 blur-[110px] lg:block" />
      <p className="absolute left-5 top-28 hidden text-[11px] uppercase tracking-[0.35em] text-ink-muted [writing-mode:vertical-rl] rotate-180 xl:block">
        Legal Practitioner
      </p>
      <p className="absolute bottom-10 left-5 hidden text-[11px] tracking-[0.35em] text-ink-muted [writing-mode:vertical-rl] rotate-180 xl:block">
        2026
      </p>

      <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="relative z-10 flex flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-24 lg:pt-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className="mb-10 flex flex-wrap gap-x-10 gap-y-2 text-sm font-medium"
            variants={item}
          >
            <p>
              <span className="text-copper">+7</span>{" "}
              <span className="text-ink-muted">Legislative projects</span>
            </p>
            <p>
              <span className="text-copper">+6</span>{" "}
              <span className="text-ink-muted">Years of practice</span>
            </p>
          </motion.div>

          <motion.h1
            className="text-[clamp(4.5rem,14vw,9.5rem)] font-bold leading-[0.82] tracking-tight text-ink"
            variants={item}
          >
            Hello<span className="text-copper">.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted sm:text-xl"
            variants={item}
          >
            — I&apos;m Ikeoluwa Adetona, a legal practitioner, legislative
            researcher &amp; real-estate consultant.
          </motion.p>

          <motion.a
            href="#about"
            className="mt-16 flex items-center gap-2 text-sm text-copper"
            variants={item}
          >
            Scroll down
            <ArrowDown className="size-3.5" />
          </motion.a>
        </motion.div>

        <motion.div
          className="relative min-h-[55vh] lg:min-h-screen"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/ikeoluwa.png"
            alt="Ikeoluwa Adetona"
            fill
            priority
            className="object-cover object-[center_12%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
