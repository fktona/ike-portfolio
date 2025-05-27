import { FC } from "react";

const Certificate: FC = () => (
  <section className="my-8 w-full flex text-center flex-col items-center justify-center">
    <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 md:mb-12">Certificate Course(s)</h2>
    <div
                className="my-10 md:my-20 h-[1px] w-full bg-gray-300"
                color="black"
              />
    <div className=" p-4 text-center space-y-4 ">
      <h3 className="font-semibold">University of Illinois, Urbana-Champaign</h3>
      <p className="text-sm text-gray-600">February 2024</p>
      <p>Certificate of completion in Introduction to Sustainability</p>
    </div>
  </section>
);

export default Certificate; 