import { FC } from "react";

const certifications = [
  {
    title: "Certificate in Introduction to Sustainability",
    organization: "University of Illinois, Urbana-Champaign (Online)",
    year: "2024",
  },
  {
    title: "Certificate of National Service",
    organization: "National Youth Service Corps (NYSC)",
    year: "2020",
  },
];

const memberships = [
  {
    title: "Nigerian Bar Association (NBA)",
    detail: "Member",
  },
  {
    title: "Associate, Institute of Chartered Mediators and Conciliators (AICMC)",
    detail: "Institute of Chartered Mediators and Conciliators of Nigeria (ICMC)",
  },
];

const Certificate: FC = () => (
  <section className="my-8 w-full flex text-center flex-col items-center justify-center">
    <h2 className="text-3xl md:text-4xl text-center font-bold">
      Certifications & Memberships
    </h2>
    <div className="my-10 md:my-20 h-[1px] w-full bg-gray-300" />

    <div className="space-y-6 text-center">
      {certifications.map((c) => (
        <div key={c.title} className="space-y-1">
          <h3 className="font-semibold">{c.title}</h3>
          <p className="text-sm text-gray-600">
            {c.organization} &middot; {c.year}
          </p>
        </div>
      ))}
      {memberships.map((m) => (
        <div key={m.title} className="space-y-1">
          <h3 className="font-semibold">{m.title}</h3>
          <p className="text-sm text-gray-600">{m.detail}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Certificate;
