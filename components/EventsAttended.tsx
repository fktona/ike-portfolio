import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function EventsAttended() {
  const events = [
    {
      title: "GVTHC DINER 2023",
      date: "May 15-17, 2023",
      description:
        "with Honorable Minister Mariya Mahmoud Bunkure- Minister of State for the Federal Capital Territory of Nigeria.",
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

  const isVideo = (url: string) => {
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
    const urlWithoutQuery = url.split("?")[0];
    return videoExtensions.some((ext) => urlWithoutQuery.endsWith(ext));
  };

  return (
    <section className="container py-10 md:py-20">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">
        EVENTS ATTENDED
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {events.map((event, index) => (
          <Card key={index} className="p-4 md:p-6 flex-col flex ">
            {isVideo(event.media) ? (
              <ReactPlayer
                url={event.media}
                controls
                width="100%"
                height="320px"
                className="rounded mb-6 h-80"
                config={{
                  file: {
                    attributes: {
                      title: event.title,
                    },
                  },
                }}
              />
            ) : (
              <Image
                height={400}
                width={600}
                src={event.media}
                alt={event.title}
                className="w-full h-80 object-cover rounded mb-6"
              />
            )}
            <div className="relative">
              <h3 className="text-lg md:text-xl font-bold mb-4">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
              <p className="text-sm">{event.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
