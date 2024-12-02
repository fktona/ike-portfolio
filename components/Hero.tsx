"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateParallax = (strength: number = 0.02) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mousePosition.x - centerX) * strength;
    const moveY = (mousePosition.y - centerY) * strength;
    return `translate(${moveX}px, ${moveY}px)`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      className="container relative min-h-[500px] h-[calc(100vh-4rem)] py-6 md:py-10 max-h-[700px] md:pb-16 top-16 flex flex-col "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-[60%] absolute h-[30%] rounded-full mx-auto self-center  bg-orange-400/90 top-[35%] blur-[120px]" />
      <motion.div className="relative flex h-full flex-col md:justify-between z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl w-full text-center font-serif font-light italic mb-4 md:mb-12"
          variants={itemVariants}
        >
          Hey, there
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 mb-4 md:mb-8"
          variants={itemVariants}
        >
          <Badge variant="secondary" className="mb-2 sm:mb-0 py-2">
            <span className="flex items-center gap-2 min-w-[200px] sm:min-w-[250px] justify-center">
              <span className="w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
              <span className="w-8 h-8 bg-orange-500/700 rounded-full animate-pulse" />
              Let's Work Together
            </span>
          </Badge>
          <p className="text-base text-[16px] font-medium text-muted-foreground md:text-start mt-4 md:mt-0 text-center ">
            Real Estate Consultancy,
            <br />
            Specialized in Legal Services,
            <br />
            Advocacy for Sustainable Development.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row md:relative absolute -bottom-6 md:bottom-0 self-center md:self-auto justify-between items-center sm:items-end gap-4"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 sm:mb-0 text-center sm:text-left"
            variants={itemVariants}
          >
            I AM
            <br />
            IKEOLUWA ADETONA
          </motion.h2>
          <motion.div
            className="flex flex-col items-center sm:items-end"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-right mb-2">
              LEGAL PRACTITIONER & <br /> REAL ESTATE CONSULTANT
            </h3>
            <Link
              href="/about"
              className="flex items-center mt-5 lg:mt-0 gap-2"
            >
              <Button variant="default" className="rounded-full w-fit">
                Learn More About Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
        // style={{ transform: calculateParallax() }}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-3xl aspect-video">
          <Image
            src="/ikeoluwa.png"
            alt="IkeOluwa"
            fill
            className="rounded-lg object-contain"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
