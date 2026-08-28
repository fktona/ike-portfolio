"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: "01",
    title: "Legal Services",
    description:
      "Legal research, drafting, litigation, and regulatory compliance across commercial, regulatory, and public law.",
  },
  {
    id: "02",
    title: "Public Policy & Legislative Research",
    description:
      "Legislative drafting, policy briefs, comparative analysis, and advisory support on governance and regulatory reform.",
  },
  {
    id: "03",
    title: "Real Estate Consultancy",
    description:
      "Guidance on property investments, tenancy agreements, and complex real-estate transactions.",
  },
  {
    id: "04",
    title: "Development Advocacy",
    description:
      "Promoting sustainable development, environmental governance, and evidence-based policy.",
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="bg-surface py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight md:mb-16 md:text-4xl">
          How I can help
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex flex-col rounded-2xl bg-white p-6 md:p-8"
            >
              <span className="mb-8 text-sm font-medium text-copper">{service.id}</span>
              <h3 className="mb-3 text-base font-medium">{service.title}</h3>
              <p className="text-sm leading-6 text-ink-muted">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
