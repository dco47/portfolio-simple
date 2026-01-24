import Image from "next/image";
import company1 from "@/public/company-1.03429d9d (1).svg";
import company2 from "@/public/company-2.71a94bdb.svg";
import company3 from "@/public/company-3.37f407c2.svg";
import company4 from "@/public/company-4.7cc42374.svg";
import company5 from "@/public/company-5.4cb42f1d.svg";
import company6 from "@/public/company-6.webp";
import company7 from "@/public/company-7.webp";
import company8 from "@/public/company-8.webp";

const companies = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
];

export default function Brands() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-10" id="work">
        <div className="title flex justify-center items-center">
          <div className="text-center w-full lg:w-[60%]">
            <h2 className="uppercase text-(--prim) Rubik text-xl">
              Brand I have Work With
            </h2>
            <h1 className="text-5xl Rajdhani font-semibold my-3">
              You can Find Me on
            </h1>
            <p className="text-gray-400">
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and
              organizational
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {companies.map((img, index) => (
              <div
                key={index}
                className="border border-gray-600/50 py-5 px-3 group flex justify-center items-center"
              >
                <Image
                  src={img}
                  alt="Company"
                  className="group-hover:scale-105 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
