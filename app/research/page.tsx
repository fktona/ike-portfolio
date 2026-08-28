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
    <div className="min-h-[calc(100vh-80px)] bg-white pb-24 pt-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-ink-muted">
          Work
        </p>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight md:text-6xl">
          Legislative Research
        </h1>
        <p className="mb-16 max-w-2xl text-[15px] leading-7 text-ink-muted">
          Selected legislative and policy research initiatives — providing
          analytical and drafting support across maritime governance,
          transportation regulation, environmental governance, and
          institutional reform.
        </p>

        <div>
          {bills.map((bill) => (
            <div
              key={bill.id}
              className="flex flex-col justify-between gap-2 border-t border-ink/10 py-6 sm:flex-row sm:items-baseline"
            >
              <h3 className="text-base font-medium md:text-lg">{bill.title}</h3>
              {bill.ref && (
                <span className="shrink-0 text-sm text-ink-muted">{bill.ref}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
