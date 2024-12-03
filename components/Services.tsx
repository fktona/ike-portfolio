"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

interface ServiceProps {
  id: number;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ id, title, description }) => {
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
      className="p-4 md:p-6 flex bg-transparent border-l-4 border-l-black rounded-none flex-col shadow-md hover:shadow-lg transition-shadow duration-300 justify-center gap-6"
    >
      <motion.div
        className="text-4xl md:text-5xl italic text-muted-foreground mb-2 md:mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        0{id}
      </motion.div>
      <div className="flex flex-col justify-start grow">
        <h3 className="text-lg md:text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

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
      title: "Development Advocacy",
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="container py-10 md:py-20 my-32 md:my-40">
      <motion.h2
        className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I CAN HELP YOU WITH
      </motion.h2>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </motion.div>
    </section>
  );
}
