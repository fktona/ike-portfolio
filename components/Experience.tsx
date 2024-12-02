import { Separator } from "@radix-ui/react-separator";
import React from "react";

export default function Experience() {
  return (
    <section className="container py-10 md:py-20 md:my-20 my-20">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">
        WORK EXPERIENCE
      </h2>
      <div className="space-y-8 md:space-y-12">
        {[
          {
            period: "June 2023 – Present",
            role: "Legislative Aide, Policy Analyst on Marine and Environmental Matters",
            company: "National Assembly of Nigeria, FCT-Abuja",
            responsibilities:
              "Researching and analyzing legal cases, statutes, regulations, and precedents. Preparing legal documents and conducting interviews with witnesses and clients.",
          },
          {
            period: "August 2022 – June 2023",
            role: "Legal Associate",
            company: "AA. Malami (SAN) & Co, FCT-Abuja",
            responsibilities: "Providing litigation support and legal reviews.",
          },
          {
            period: "September 2021 – March 2022",
            role: "Project Manager, Legal and Real Estate Consultant",
            company: "9 Billion Homes Ltd",
            responsibilities:
              "Legal advisory for investments, site inspections, and marketer training on property law.",
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
            period: "2015 – 2023",
            role: "Legal Review and Policy Analyst",
            company:
              "The Chamber of the Minister of Justice and Attorney General of the Federation",
            responsibilities:
              "Legislative drafting, legal reviews, and policy analysis.",
          },
          {
            period: "2016 – 2019",
            role: "Extership and Internships",
            company:
              "Aluko and Oyebode Law Firm, Senior Magistrate Court, Tokunbo Orimobi LLP",
            responsibilities:
              "Gained foundational experience in legal practice, litigation, and client relations.",
          },
        ].map((item, i) => (
          <React.Fragment key={i}>
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start md:items-center"
            >
              <div className="text-sm text-muted-foreground w-full min-w-[100px]">
                {item.period}
              </div>
              <br className="md:hidden" />
              <p className="font-bold">{item.role}</p>
              <div className="col-span-2 text-sm">
                <div className="italic">{item.company}</div>
                <div>{item.responsibilities}</div>
              </div>
            </div>
            <div
              className="my-10 md:my-20 h-[1px] w-full bg-gray-300"
              color="black"
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
