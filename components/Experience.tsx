"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { resumePath } from "@/lib/site";

type Role = {
  period: string;
  role: string;
  company: string;
  responsibilities: string;
  tags: string[];
};

const experienceData: Role[] = [
  {
    period: "June 2023 – Present",
    role: "Legislative Aide",
    company: "Senate, National Assembly, Nigeria",
    responsibilities:
      "Legislative, legal, and public policy research; policy analysis, drafting, and advisory support on maritime governance, transportation regulation, environmental governance, and institutional reform.",
    tags: ["Policy", "Drafting"],
  },
  {
    period: "June 2025 – Present",
    role: "Research Assistant",
    company: "Faculty of Law, University of Lagos",
    responsibilities:
      "Editorial and research support — manuscript review, citation verification, abstract management, and editorial coordination relating to privacy, data protection, and digital governance.",
    tags: ["Research", "Privacy"],
  },
  {
    period: "February 2025 – Present",
    role: "Member, Technical Experts Team",
    company: "Nigerian Coast Guard (Establishment) Bill, 2024 (SB 575)",
    responsibilities:
      "Technical consultations, legislative review, and policy discussions on the establishment of a Nigerian Coast Guard and Nigeria's maritime security architecture.",
    tags: ["Maritime", "Legislation"],
  },
  {
    period: "August 2022 – June 2023",
    role: "Legal Associate",
    company: "The Chambers of Ubong Akpan, Abuja",
    responsibilities:
      "Legal research, analysis, and case preparation across commercial, regulatory, and public law matters; drafted legal opinions, contracts, pleadings, and memoranda.",
    tags: ["Litigation", "Advisory"],
  },
  {
    period: "June 2020 – July 2021",
    role: "Head of Legal Operations",
    company: "Excellent Square Investment Nigeria Limited, Abuja",
    responsibilities:
      "Corporate governance, regulatory compliance, stakeholder engagement, and project implementation for Excellent Mega City, Lugbe, Abuja.",
    tags: ["Real Estate", "Governance"],
  },
];

function RoleItem({
  item,
  index,
  total,
  progress,
}: {
  item: Role;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const [lit, setLit] = useState(false);
  const threshold = index / Math.max(total - 1, 1);

  useMotionValueEvent(progress, "change", (v) => {
    setLit(v >= threshold - 0.04);
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-t border-ink/10 py-8 pl-8 md:grid md:grid-cols-12 md:gap-8 md:py-10 md:pl-0"
    >
      <motion.span
        className="absolute left-0 top-9 z-10 size-3.5 rounded-full border-2 md:hidden"
        animate={{
          scale: lit ? 1.15 : 0.7,
          backgroundColor: lit ? "rgb(var(--copper))" : "rgb(var(--page))",
          borderColor: "rgb(var(--copper))",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      />

      <p className="text-xs text-ink-muted md:col-span-3">{item.period}</p>
      <div className="mt-1 md:col-span-3 md:mt-0">
        <p className="font-medium">{item.role}</p>
        <p className="mt-1 text-sm text-ink-muted">{item.company}</p>
      </div>
      <div className="mt-3 md:col-span-6 md:mt-0">
        <p className="text-sm leading-6 text-ink-muted">{item.responsibilities}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-copper/20 bg-copper/5 px-3 py-1 text-[11px] text-copper"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.78", "end 0.28"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });
  const scaleY = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section className="bg-page py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <h2 className="max-w-md text-3xl font-semibold tracking-tight md:text-5xl">
            Explore My
            <br />
            Practice Journey
          </h2>
          <div className="max-w-sm">
            <p className="text-sm leading-6 text-ink-muted">
              Selected roles across legislative research, legal practice, and
              real-estate consultancy.
            </p>
            <a
              href={resumePath}
              download
              className="btn-primary mt-4 h-11 px-6 text-sm"
            >
              Full CV
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div ref={listRef} className="relative">
          <div className="pointer-events-none absolute bottom-6 left-[5px] top-9 w-px bg-ink/10 md:hidden" />
          <motion.div
            className="pointer-events-none absolute bottom-6 left-[5px] top-9 w-px origin-top bg-copper md:hidden"
            style={{ scaleY }}
          />

          {experienceData.map((item, i) => (
            <RoleItem
              key={item.role + item.period}
              item={item}
              index={i}
              total={experienceData.length}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
