export default function Publications() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white pb-24 pt-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-ink-muted">
          Writing
        </p>
        <h1 className="mb-16 text-4xl font-semibold tracking-tight md:text-6xl">
          Publications
        </h1>

        <article className="border-t border-ink/10 py-10">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-ink-muted">
            Journal Article · 2023
          </p>
          <h2 className="mb-4 max-w-3xl text-xl font-medium leading-snug md:text-2xl">
            Money Laundering (Prevention and Prohibition) Act, 2022 (MLPPA): A
            Step Towards Achieving a More Effective and Balanced Approach to
            Combating Money Laundering in Nigeria
          </h2>
          <p className="text-sm text-ink-muted">
            Adetona, I. (2023).{" "}
            <span className="italic">Section on Legal Practice Law Journal</span>
            , Vol. 9.
          </p>
        </article>

        <div className="border-t border-ink/10 pt-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
            Statement of Research
          </h2>
          <div className="max-w-3xl space-y-4 text-[15px] leading-7 text-ink-muted">
            <p>
              My research focuses on how governments design, implement and
              evaluate public policy, particularly the role of regulatory and
              institutional frameworks in shaping economic development, market
              governance, and policy outcomes in developing and emerging
              economies. My professional experience in legislative research has
              strengthened my interest in understanding how regulatory
              interventions work in practice and how evidence can be used to
              assess their effectiveness.
            </p>
            <p>
              I now look to strengthen my quantitative and empirical research
              skills alongside my existing experience in legal, qualitative, and
              institutional policy analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
