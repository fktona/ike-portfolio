import Image from "next/image";

export default function Stats() {
  return (
    <section className="container py-10 md:py-0 md:my-20 my-20">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center ">
            TURNING MY VISION
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Into digital solutions for brands to work on.
          </p>
          <div className="mt-8 md:mt-12 grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">89+</div>
              <div className="text-sm text-muted-foreground">
                Completed projects
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">18+</div>
              <div className="text-sm text-muted-foreground">
                Different countries
              </div>
            </div>
          </div>
        </div>
        {/* <Image
          src="/placeholder.svg?height=400&width=500"
          width={500}
          height={400}
          alt="Workstation"
          className="rounded-3xl w-full lg:w-auto h-auto"
        /> */}
      </div>
    </section>
  );
}
