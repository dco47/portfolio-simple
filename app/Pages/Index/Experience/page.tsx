import Image from "next/image";
import customLine from "@/public/custom-line.png";
import ExperienceImg from "@/public/Experience.webp";
import { title } from "process";

const EducationData = [
  {
    id: 1,
    title: "Trainer Marketing",
    date: "2005-2009",
    desc: "A personal portfolio is a curated collection of an individuals professional work, showcasing their skills, experience A personal portfolio.",
  },
  {
    id: 2,
    title: "Design Assistant",
    date: "2008-2012",
    desc: "A personal portfolio is a curated collection of an individuals professional work, showcasing their skills, experience A personal portfolio.",
  },
  {
    id: 3,
    title: "Assistant Director",
    date: "2010-2014",
    desc: "A personal portfolio is a curated collection of an individuals professional work, showcasing their skills, experience A personal portfolio.",
  },
  {
    id: 4,
    title: "Creative Writer",
    date: "2018-2024",
    desc: "A personal portfolio is a curated collection of an individuals professional work, showcasing their skills, experience A personal portfolio.",
  },
];

export default function Experience() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-10">
        <div className="title flex justify-center items-center">
          <div className="text-center w-full lg:w-[60%]">
            <h2 className="uppercase text-(--prim) Rubik text-xl">
              Education & Experience
            </h2>
            <h1 className="text-5xl Rajdhani font-semibold my-3">
              Empowering Creativity through
            </h1>
            <p className="text-gray-400">
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and
              organizational
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-4xl Rajdhani font-semibold">Education</h2>
            <Image src={customLine} alt="customLine" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EducationData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-600/20 p-8 rounded-2xl border border-gray-600/50 hover:border-(--prim) transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <h3 className="text-xl text-gray-300 Rajdhani font-semibold">
                  {item.title}
                </h3>
                <h4 className="text-lg Rajdhani font-semibold">{item.date}</h4>
                <p className="text-gray-400 mt-5">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 my-10 mt-15">
            <h2 className="text-4xl Rajdhani font-semibold">Experiences</h2>
            <Image src={customLine} alt="customLine" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-[80%]">
                <div>
                  <div className="flex flex-col">
                    <span className="text-(--prim) Rubik">
                      Digital Marketeur
                    </span>
                    <h2 className="text-3xl Rajdhani font-semibold my-2">
                      Soft Tech (2 Years)
                    </h2>
                    <h3 className="Rajdhani font-semibold text-gray-300">
                      UI/UX Designer
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum desi dolore eu fugiat nulla pariatu Duis aute
                      irure..
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex flex-col">
                    <span className="text-(--prim) Rubik">Developer</span>
                    <h2 className="text-3xl Rajdhani font-semibold my-2">
                      ModernTech (3 Years)
                    </h2>
                    <h3 className="Rajdhani font-semibold text-gray-300">
                      App Developer
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum desi dolore eu fugiat nulla pariatu Duis aute
                      irure..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
                <Image src={ExperienceImg} alt="ExperienceImg" className="w-full h-full rounded-2xl"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
