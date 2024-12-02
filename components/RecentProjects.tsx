import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function RecentProjects() {
  return (
    <section className="container py-10 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12">
        RECENT PROJECTS
      </h2>
      <div className="grid md:grid-cols-2 gap-4 md:gap-8">
        <Card className="p-4 md:p-6 bg-neutral-100 rounded-3xl">
          <Image
            src="/house.jpg"
            width={400}
            height={600}
            alt="Project 1"
            className="rounded-2xl w-full h-auto"
          />
        </Card>
        <Card className="p-4 md:p-6 bg-neutral-100 rounded-3xl">
          <Image
            src="/house.jpg"
            width={400}
            height={600}
            alt="Project 2"
            className="rounded-2xl w-full h-auto"
          />
        </Card>
      </div>
    </section>
  );
}
