"use client";

import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

interface EventProps {
  title: string;
  date: string;
  description: string;
  media: string;
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  description,
  media,
}) => {
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

  const isVideo = (url: string) => {
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
    const urlWithoutQuery = url.split("?")[0];
    return videoExtensions.some((ext) => urlWithoutQuery.endsWith(ext));
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={itemVariants}
    >
      <Card className="p-4 md:p-6 flex-col flex h-full">
        {isVideo(media) ? (
          <ReactPlayer
            url={media}
            controls
            width="100%"
            height="320px"
            className="rounded mb-6 h-80"
            config={{
              file: {
                attributes: {
                  title: title,
                },
              },
            }}
          />
        ) : (
          <Image
            height={400}
            width={600}
            src={media}
            alt={title}
            className="w-full h-80 object-cover rounded mb-6"
          />
        )}
        <div className="relative flex-grow">
          <h3 className="text-lg md:text-xl font-bold mb-4">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{date}</p>
          <p className="text-sm">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default function EventsAttended() {
  const events = [
    {
      title: "GVTHC Dinner 2023",
      date: "May 15-17, 2023",
      description:
        "With Honorable Minister Mariya Mahmoud Bunkure- Minister of State for the Federal Capital Territory of Nigeria.",
      media: "/fctn.jpg",
    },
    {
      title: "GVTHC Dinner 2024",
      date: "November 1-4, 2023",
      description:
        "With The Director of the Diaspora Directorate of the Tinubu-Shettima Presidential Campaign Council, Prince Ade Omole at the GVTHC Dinner 2024",
      media: "/gvthc.mp4",
    },
    {
      title: "NDD2024",
      date: "October 12-13, 2023",
      description:
        "National Diaspora Day 2024 with Hon. Dr. Abike Dabiri-Erewa OON",
      media: "/ndd.mp4",
    },
    {
      title: "NBA Annual General Conference 2024",
      date: "July 22, 2023",
      description:
        "With the Assistant Inspector General of Police, Yahaya Abubakar",
      media: "/yaya.jpg",
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
    <section className="container py-10 md:py-20" ref={ref}>
      <motion.h2
        className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        EVENTS ATTENDED
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </motion.div>
    </section>
  );
}
