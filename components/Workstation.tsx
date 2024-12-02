import Image from "next/image";

export default function PropertiesForSale() {
  return (
    <section className="container py-10 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12">
        PROPERTIES FOR SALE
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[
          {
            id: 1,
            name: "Modern Apartment",
            price: "$300,000",
            image: "https://via.placeholder.com/300x200",
          },
          {
            id: 2,
            name: "Luxury Villa",
            price: "$1,200,000",
            image: "https://via.placeholder.com/300x200",
          },
          {
            id: 3,
            name: "Cozy Cottage",
            price: "$250,000",
            image: "https://via.placeholder.com/300x200",
          },
          {
            id: 4,
            name: "Penthouse Suite",
            price: "$900,000",
            image: "https://via.placeholder.com/300x200",
          },
        ].map((property) => (
          <div key={property.id} className="relative">
            <img
              src={property.image}
              alt={property.name}
              className="rounded-2xl object-cover w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded-lg">
              <h3 className="text-lg font-bold">{property.name}</h3>
              <p className="text-sm">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
