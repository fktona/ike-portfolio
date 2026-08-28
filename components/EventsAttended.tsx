"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type EventItem = {
  title: string;
  date: string;
  description: string;
  media: string;
};

const events: EventItem[] = [
  {
    title: "GVTHC Dinner 2023",
    date: "May 15–17, 2023",
    description:
      "With Honorable Minister Mariya Mahmoud Bunkure — Minister of State for the Federal Capital Territory of Nigeria.",
    media: "/fctn.jpg",
  },
  {
    title: "GVTHC Dinner 2024",
    date: "November 1–4, 2023",
    description:
      "With The Director of the Diaspora Directorate of the Tinubu-Shettima Presidential Campaign Council, Prince Ade Omole.",
    media: "/gvthc.mp4",
  },
  {
    title: "NDD2024",
    date: "October 12–13, 2023",
    description: "National Diaspora Day 2024 with Hon. Dr. Abike Dabiri-Erewa OON",
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

function isVideo(url: string) {
  return [".mp4", ".webm", ".ogg", ".mov"].some((ext) =>
    url.split("?")[0].endsWith(ext)
  );
}

export default function EventsAttended() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 300) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-page py-8 md:py-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Events Attended
          </h2>
          <p className="max-w-sm text-sm leading-6 text-ink-muted">
            Selected conferences, dinners, and convenings across policy, law,
            and public service.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scroller}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
          >
            {events.map((event) => (
              <article
                key={event.title}
                data-card
                className="w-[78vw] shrink-0 snap-start sm:w-[320px] md:w-[340px]"
              >
                <div className="relative h-[420px] overflow-hidden rounded-2xl bg-surface md:h-[480px]">
                  {isVideo(event.media) ? (
                    <video
                      src={event.media}
                      className="h-full w-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <Image
                      src={event.media}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <p className="mt-4 text-sm font-medium">{event.title}</p>
                <p className="mt-1 text-xs text-ink-muted">{event.date}</p>
              </article>
            ))}
          </div>

          {/* <bπp */}
          {/* <button
            type="button"
            aria-label="Next events"
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-[210px] flex size-12 items-center justify-center rounded-full bg-copper text-white shadow-lg md:top-[240px]"
          >
            <ArrowRight className="size-4" />
          </button> */}
        </div>
      </div>
    </section>
  );
}
