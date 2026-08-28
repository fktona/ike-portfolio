"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface ExperienceItemProps {
  period: string;
  role: string;
  company: string;
  responsibilities: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  period,
  role,
  company,
  responsibilities,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={itemVariants}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start md:items-center"
    >
      <div className="text-sm text-muted-foreground w-full min-w-[100px]">
        {period}
      </div>
      <br className="md:hidden" />
      <p className="font-bold">{role}</p>
      <div className="col-span-2 text-sm">
        <div className="italic">{company}</div>
        <div>{responsibilities}</div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const experienceData = [
    {
      period: "June 2023 – Present",
      role: "Legislative Aide",
      company: "Senate, National Assembly, Nigeria",
      responsibilities:
        "Legislative, legal, and public policy research; policy analysis, drafting, and advisory support on maritime governance, transportation regulation, environmental governance, and institutional reform. Prepares policy briefs, legislative reports, briefing notes, bills, and amendment proposals.",
    },
    {
      period: "June 2025 – Present",
      role: "Research Assistant",
      company:
        "Faculty of Law, University of Lagos (to Dr. Akinola Ebunolu Akintayo, Editor-in-Chief, African Journal on Privacy and Data Protection)",
      responsibilities:
        "Editorial and research support — manuscript review, citation verification, abstract management, and editorial coordination relating to privacy, data protection, and digital governance.",
    },
    {
      period: "February 2025 – Present",
      role: "Member, Technical Experts Team",
      company: "Nigerian Coast Guard (Establishment) Bill, 2024 (SB 575)",
      responsibilities:
        "Technical consultations, legislative review, and policy discussions on the establishment of a Nigerian Coast Guard and the strengthening of Nigeria's maritime security architecture.",
    },
    {
      period: "August 2022 – June 2023",
      role: "Legal Associate",
      company: "The Chambers of Ubong Akpan, Abuja, Nigeria",
      responsibilities:
        "Legal research, analysis, and case preparation across commercial, regulatory, and public law matters; drafted legal opinions, contracts, pleadings, and memoranda, including engagements with A.A. Malami (SAN) & Co.",
    },
    {
      period: "June 2020 – July 2021",
      role: "Head of Legal Operations",
      company: "Excellent Square Investment Nigeria Limited, Abuja",
      responsibilities:
        "Corporate governance, regulatory compliance, stakeholder engagement, and project implementation for Excellent Mega City, Lugbe, Abuja.",
    },
  ];

  return (
    <section className="container py-10 md:py-20 md:my-20 my-20">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">
        WORK EXPERIENCE
      </h2>
      <div className="space-y-8 md:space-y-12">
        {experienceData.map((item, i) => (
          <React.Fragment key={i}>
            <ExperienceItem {...item} />
            {i < experienceData.length - 1 && (
              <div
                className="my-10 md:my-20 h-[1px] w-full bg-gray-300"
                color="black"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
