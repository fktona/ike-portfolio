export default function Publications() {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-orange-50 via-orange-50/80 to-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-serif italic text-6xl md:text-7xl mb-12">
          Publications
        </h1>

        <div className="space-y-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <p className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
              Journal Article
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-3">
              Money Laundering (Prevention and Prohibition) Act, 2022 (MLPPA): A
              Step Towards Achieving a More Effective and Balanced Approach to
              Combating Money Laundering in Nigeria
            </h2>
            <p className="text-neutral-600">
              Adetona, I. (2023). <span className="italic">Section on Legal Practice Law Journal</span>, Vol. 9.
            </p>
          </div>

          <div>
            <h2 className="font-serif italic text-3xl md:text-4xl mb-6">
              Statement of Research
            </h2>
            <div className="space-y-4 text-neutral-800 max-w-4xl">
              <p>
                My research focuses on how governments design, implement and
                evaluate public policy, particularly the role of regulatory and
                institutional frameworks in shaping economic development, market
                governance, and policy outcomes in developing and emerging
                economies. My professional experience in legislative research
                has strengthened my interest in understanding how regulatory
                interventions work in practice and how evidence can be used to
                assess their effectiveness.
              </p>
              <p>
                I now look to strengthen my quantitative and empirical research
                skills alongside my existing experience in legal, qualitative,
                and institutional policy analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
