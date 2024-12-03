"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CounterAnimation = ({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        setCount(Math.floor(percentage * end));
        if (percentage < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, end, duration, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      <div className="text-4xl md:text-5xl font-bold mb-2">{count}+</div>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="container py-10 md:py-0 md:my-20 my-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="w-full text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            TRANSFORMING LEGAL EXPERTISE
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Into digital solutions for brands to work on.into Practical
            Solutions for Clients Worldwide.
          </motion.p>
          <div className="mt-8 md:mt-12 gap-4 md:gap-8">
            <CounterAnimation end={30} />
            <motion.div
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Completed projects
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
