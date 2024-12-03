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
      role: "Legislative Aide, Policy Analyst on Marine and Environmental Matters",
      company: "National Assembly of Nigeria, FCT-Abuja",
      responsibilities:
        "Serving as a legal expert for the Chairman of the Senate Committee on Marine Transport since the inception of the 10th Assembly in 2023. Responsibilities include drafting and reviewing laws and bills, providing legal analysis, and effectively communicating legislative matters to stakeholders.",
    },
    {
      period: "August 2022 – June 2023",
      role: "Legal Associate",
      company: "AA. Malami (SAN) & Co, FCT-Abuja",
      responsibilities:
        "Researching and analyzing legal cases, statutes, regulations, and precedents. Preparing legal documents and conducting interviews with witnesses and clients.",
    },
    {
      period: "June 2020 – July 2021",
      role: "Sole Legal Consultant",
      company: "Excellent Square Investment Nigeria Ltd, FCT-Abuja",
      responsibilities:
        "Prepared contractual agreements and provided sustainable community development advice.",
    },
    {
      period: "November 2019 – May 2020",
      role: "Legal Consultant",
      company: "A1 Mega Management and Consultancy, FCT-Abuja",
      responsibilities:
        "Administrative reporting and drafting real estate agreements.",
    },
    {
      period: "2016 – 2019",
      role: "Extership and Internships",
      company:
        "Aluko and Oyebode Law Firm, Senior Magistrate Court, Tokunbo Orimobi LLP",
      responsibilities:
        "Gained foundational experience in legal practice, litigation, and client relations.",
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
