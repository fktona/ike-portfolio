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

  return (
    <motion.div
      className="min-h-[calc(100vh-80px)] w-full py-20"
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
              I am Ikeoluwa Adetona, a diligent and adaptable lawyer with a
              distinctive capacity to learn new things and excel in diverse
              areas of law. My interests and expertise extend across
              sustainability, legal services, teaching, gender equality
              advocacy, management, conflict resolution, and entertainment law.
            </motion.p>
            <motion.p
              className="text-lg text-neutral-800"
              variants={itemVariants}
            >
              With a proven ability to identify problems, research extensively,
              analyze legal frameworks, and deliver effective solutions, I have
              successfully managed high-profile cases, providing strategic
              guidance and exceptional outcomes for clients. My work emphasizes
              not just professional excellence but also a commitment to
              sustainable community development and advocacy for social
              equality.
            </motion.p>
            <motion.p
              className="text-lg text-neutral-800"
              variants={itemVariants}
            >
              In addition to my legal expertise, I am a forward-thinking real
              estate consultant who provides sound investment advice and guides
              clients through complex property transactions with precision and
              care.
            </motion.p>
            <motion.p
              className="text-lg text-neutral-800"
              variants={itemVariants}
            >
              When I'm not working, you can find me engaging in personal
              development pursuits, exploring innovative ideas, or connecting
              with individuals who share a vision for a sustainable and
              equitable future.
            </motion.p>
            <motion.div className="pt-4" variants={itemVariants}>
              <Button className="bg-black text-white rounded-full px-8 py-6 text-lg">
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-8 relative w-full aspect-square"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src="/ike.jpg"
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
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-neutral-600">Projects Completed</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl font-bold mb-2">5+</h3>
              <p className="text-neutral-600">Years of Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
