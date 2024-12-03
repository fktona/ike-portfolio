import Image from "next/image";
import { Button } from "@/components/ui/button";

const properties = [
  {
    id: 1,
    title: "Modern Loft",
    description: "Sleek design meets comfort in this urban paradise",
    image: "/w1.jpg",
    price: "$450,000",
  },
  {
    id: 2,
    title: "Seaside Villa",
    description: "Luxurious beachfront property with stunning ocean views",
    image: "/w2.jpg",
    price: "$1,200,000",
  },
  {
    id: 3,
    title: "Country Retreat",
    description: "Escape to nature in this charming countryside home",
    image: "/w3.jpg",
    price: "$350,000",
  },
  {
    id: 3,
    title: "Country Retreat",
    description: "Escape to nature in this charming countryside home",
    image: "/w5.jpg",
    price: "$350,000",
  },
];

export default function Properties() {
  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gradient-to-br from-orange-50 via-orange-50/80 to-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-serif italic text-4xl md:text-6xl mb-12">
          ONGOING PROJECTS
        </h1>

        <h1 className="text-lg md:text-xl  mb-12">
          Modern Construction Management: Ensuring Quality,
          Sustainability, and Compliance
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <Image
                src={property.image}
                width={400}
                height={300}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              {/* <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
                <p className="text-neutral-600 mb-4">{property.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{property.price}</span>
                  <Button className="bg-black text-white rounded-full px-6">
                    View Details
                  </Button>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
