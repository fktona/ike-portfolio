const bills = [
  {
    id: 1,
    title: "Nigerian Maritime Administration and Safety Agency Bill, 2024",
    ref: "SB 153",
  },
  {
    id: 2,
    title: "Nigerian Ports and Harbours Authority Bill, 2024",
    ref: "SB 235",
  },
  {
    id: 3,
    title: "Constitution of the Federal Republic of Nigeria (Alteration) Bill, 2023",
    ref: "SB 231",
  },
  {
    id: 4,
    title: "Nigerian Coast Guard (Establishment) Bill, 2024",
    ref: "SB 575",
  },
  {
    id: 5,
    title: "Chartered Institute of Safety Engineers of Nigeria Bill, 2025",
    ref: "SB 625",
  },
  {
    id: 6,
    title: "Maritime Academy of Nigeria (Amendment) Bill, 2025",
    ref: "SB 792",
  },
  {
    id: 7,
    title: "Nigerian Inland Waterways Authority Bill",
    ref: "",
  },
];

export default function Research() {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-orange-50 via-orange-50/80 to-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-serif italic text-4xl md:text-6xl mb-6">
          LEGISLATIVE RESEARCH PROJECTS
        </h1>

        <p className="text-lg md:text-xl mb-12 max-w-3xl">
          Selected legislative and policy research initiatives — providing
          analytical and drafting support across maritime governance,
          transportation regulation, environmental governance, and
          institutional reform.
        </p>

        <div className="space-y-4">
          {bills.map((bill) => (
            <div
              key={bill.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg md:text-xl font-semibold">{bill.title}</h3>
              {bill.ref && (
                <span className="shrink-0 text-sm font-bold text-neutral-500">
                  {bill.ref}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
