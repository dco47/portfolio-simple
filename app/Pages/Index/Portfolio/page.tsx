import Image from "next/image";
import PortfolioImg1 from "@/public/portfolio-1.webp";
import PortfolioImg2 from "@/public/portfolio-2.webp";
import PortfolioImg3 from "@/public/portfolio-3.webp";
import PortfolioImg4 from "@/public/portfolio-4.webp";
import { title } from "process";

const PortfolioData = [
  {
    id: 1,
    img: PortfolioImg1,
    title: "Wedding Hair Style",
    tag: ["UI Design", "Hair Style"],
  },
  {
    id: 2,
    img: PortfolioImg2,
    title: "Brand Promoting",
    tag: ["Branding", "promoting"],
  },
  {
    id: 3,
    img: PortfolioImg3,
    title: "Product Marketing",
    tag: ["Marketing", "Development"],
  },
  {
    id: 1,
    img: PortfolioImg4,
    title: "Fashion design",
    tag: ["Fashion", "Designer"],
  },
];

export default function Portfolio() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-10" id="porfolio">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full lg:w-1/2">
            <div className="title">
              <div className="w-full">
                <h2 className="uppercase text-(--prim) Rubik text-xl">
                  Recent Portfolio
                </h2>
                <h1 className="text-5xl Rajdhani font-semibold my-3">
                  Transforming Ideas into Exceptional
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ps-0 lg:ps-10">
            <div className="w-full lg:w-[70%]">
              <p className="text-gray-400">
                Business consulting consultants provide expert advice and guida{" "}
                <span className="text-(--prim)">businesses</span> to help them
                improve their performance, efficiency, and organizational
              </p>
            </div>
          </div>
        </div>

        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-2">
          {PortfolioData.map((item, index) => (
            <div
              className=" group bg-gray-600/20 p-5 rounded-2xl border border-gray-600/40 hover:border-(--prim)/40 transition-all duration-300"
              key={index}
            >
              <div className="realative rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  alt="Portfolio"
                  className="group-hover:scale-105 w-full h-full object-cover rounded-2xl transition-all duration-300 cursor-pointer"
                />
                <div className="mt-5">
                  <h2 className="text-3xl lg:text-5xl hover:text-(--prim) transition-all duration-300 cursor-pointer Rajdhani font-semibold">
                    {item.title}
                  </h2>
                  <div className="flex lg:flex-row md:flex-col flex-wrap justify-between items-start lg:items-center gap-3">
                    <div>
                      {item.tag.map((tag, index) => (
                        <span
                          key={index}
                          className="text-gray-400 text-sm mt-2 me-1 px-4 py-1 rounded-full border border-gray-600/60 inline-block hover:bg-(--prim) hover:border-transparent transition-all duration-300 cursor-pointer hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className=" mt-1 lg:mt-0 btn btn1 border border-gray-600/60 hover:bg-(--prim) transition-all duration-300 cursor-pointer hover:border-transparent pe-4 py-2 rounded-full ">
                      <i className="bi bi-arrow-right-short left-icon"></i>
                      <span className="btn-text">View Design</span>
                      <i className="bi bi-arrow-right-short right-icon"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className="mt-1 lg:mt-0 btn btn1 bg-(--prim) transition-all duration-300 cursor-pointer hover:border-transparent pe-4 py-2 rounded-full">
            <i className="bi bi-arrow-right-short left-icon"></i>
            <span className="btn-text">View All Portfolios</span>
            <i className="bi bi-arrow-right-short right-icon"></i>
          </button>
        </div>
      </div>
    </>
  );
}
