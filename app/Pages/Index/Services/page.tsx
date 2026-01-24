import Image from "next/image";
import ServiceImg from "@/public/Services.webp";

export default function Service() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-10" id="services">
        <div className="title flex justify-center items-center">
          <div className="text-center w-full lg:w-[60%]">
            <h2 className="uppercase text-(--prim) Rubik text-xl">
              Latest Service
            </h2>
            <h1 className="text-5xl Rajdhani font-semibold my-3">
              Inspiring The World One Project
            </h1>
            <p className="text-gray-400">
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and
              organizational
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 mt-10">
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-[90%]">
              <div className="flex flex-col">
                <div className="bg-gray-600/20 p-8 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <span className="Rubik text-2xl">01</span>
                    <h2 className="text-2xl Rajdhani font-semibold">
                      {" "}
                      A Portfolio of Creativity
                    </h2>
                  </div>
                  <p className="text-gray-400 text-md mt-3">
                    Business consulting consultants provide expert advice and
                    guida the a businesses to help theme their performance
                    efficiency
                  </p>
                </div>
                <div className="bg-gray-600/20 p-8 rounded-2xl mt-5">
                  <div className="flex items-center gap-3">
                    <span className="Rubik text-2xl">02</span>
                    <h2 className="text-2xl Rajdhani font-semibold">
                      My Portfolio of Innovation
                    </h2>
                  </div>
                  <p className="text-gray-400 text-md mt-3">
                    My work is driven by the belief that thoughtful design and
                    strategic planning can empower brands, transform businesses
                  </p>
                </div>

                <div className="bg-gray-600/20 p-8 rounded-2xl mt-5">
                  <div className="flex items-center gap-3">
                    <span className="Rubik text-2xl">03</span>
                    <h2 className="text-2xl Rajdhani font-semibold">
                      A Showcase of My Projects
                    </h2>
                  </div>
                  <p className="text-gray-400 text-md mt-3">
                    In this portfolio, you’ll find a curated selection of
                    projects that highlight my skills in Main Areas, e.g.,
                    responsive web design
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-fit lg:w-[80%]">
                <Image src={ServiceImg} alt="ServiceImag" className="w-full h-full object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
