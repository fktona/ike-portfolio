export default function Services() {
  const services = [
    {
      id: 1,
      title: "Legal Services",
      description:
        "Expert advice on litigation, contract drafting, and policy analysis.",
    },
    {
      id: 2,
      title: "Real Estate Consultancy",
      description:
        "Guidance on safe property investments and tenancy agreements.",
    },
    {
      id: 3,
      title: " Development Advocacy",
      description:
        "Promoting gender equality, environmental policies, and impactful legislation.",
    },
    {
      id: 4,
      title: "Community Development",
      description:
        "Supporting initiatives for sustainable growth and progress.",
    },
  ];

  return (
    <section className="container py-10 md:py-20 my-32 md:my-40">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">
        I CAN HELP YOU WITH
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 md:p-6 flex bg-transparent border-l-4 border-l-black rounded-none flex-col shadow-0 justify-center gap-6"
          >
            <div className="text-4xl md:text-5xl italic  text-muted-foreground mb-2 md:mb-4">
              0{service.id}
            </div>
            <div className="flex flex-col justify-start grow ">
              <h3 className="text-lg md:text-lg font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
