"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const downloadResume = async () => {
    const resumeUrl = "/RESUME_IKEOLUWA_ADETONA_2024.pdf";

    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch resume.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "RESUME_IKEOLUWA_ADETONA_2024.pdf";
      link.click();
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading the resume:", error);
    }
  };

  return (
    <motion.div
      className="min-h-[calc(100vh-80px)] font-neue w-full py-20"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="font-serif italic text-6xl md:text-7xl mb-10"
          variants={itemVariants}
        >
          About me
        </motion.h1>

        <div className="md:grid md:grid-cols-2 flex flex-col-reverse gap-12 items-start">
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.p
              className="text-lg text-neutral-800"
              variants={itemVariants}
            >
              I am Ikeoluwa Adetona, a lawyer, legislative researcher, and
              real-estate consultant. My work spans public policy and
              governance, legal services, and sustainable development — with
              expertise across legislative drafting, regulatory reform, maritime
              governance, and institutional analysis.
            </motion.p>
            <motion.p
              className="text-lg text-neutral-800"
              variants={itemVariants}
            >
              As a Legislative Aide at the Senate, I support legislative and
              public policy research — drafting bills, policy briefs, and
              amendment proposals, and advising on regulatory and institutional
              reform. I also serve as a Research Assistant at the Faculty of Law,
              University of Lagos, contributing to the African Journal on
              Privacy and Data Protection.
            </motion.p>
            <motion.p
              className="text-lg text-neutral-800"
              variants={itemVariants}
            >
              I hold a Bachelor of Laws (LL.B.) from the University of Lagos and
              a Bachelor of Law (B.L.) from the Nigerian Law School. My research
              interests include public policy and governance, regulatory policy
              and institutional reform, economic regulation and political
              economy, and digital governance.
            </motion.p>
            <motion.p
              className="text-lg text-neutral-800"
              variants={itemVariants}
            >
              In addition to my legal and policy work, I am a forward-thinking
              real-estate consultant who provides sound investment advice and
              guides clients through complex property transactions with
              precision and care.
            </motion.p>
            <Button
              className="bg-black text-white  rounded-full px-8 py-6 text-lg"
              onClick={downloadResume}
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            className="space-y-8 relative w-full aspect-square"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src="/ike.jpeg"
              fill
              alt="Ikeoluwa Adetona's portrait"
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl font-bold mb-2">7+</h3>
              <p className="text-neutral-600">Legislative Research Projects</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl font-bold mb-2">6+</h3>
              <p className="text-neutral-600">Years of Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
