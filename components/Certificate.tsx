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

export default function Certificate() {
  const items = [
    ...certifications.map((c) => ({
      title: c.title,
      detail: `${c.organization} · ${c.year}`,
    })),
    ...memberships.map((m) => ({ title: m.title, detail: m.detail })),
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <h2 className="mb-12 text-3xl font-semibold tracking-tight md:mb-16 md:text-4xl">
          Certifications & Memberships
        </h2>
        <div>
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between gap-2 border-t border-ink/10 py-6 md:flex-row md:items-baseline"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-ink-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
