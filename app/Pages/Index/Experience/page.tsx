import Image from "next/image";
import customLine from "@/public/custom-line.png";
import ExperienceImg from "@/public/Experience.webp";
import { title } from "process";

const EducationData = [
  {
    id: 1,
    title: "Marketing & Formation",
    date: "2005-2009",
    desc: "Une approche structurée du marketing, de la communication et de la stratégie pour accompagner les entreprises dans leur développement.",
  },
  {
    id: 2,
    title: "Assistante Design",
    date: "2008-2012",
    desc: "Développement de compétences en design visuel, en expérience utilisateur et en création de contenus visuellement impactants.",
  },
  {
    id: 3,
    title: "Directrice Adjointe",
    date: "2010-2014",
    desc: "Gestion de projets, coordination d’équipes et optimisation des processus créatifs et opérationnels.",
  },
  {
    id: 4,
    title: "Rédactrice Créative",
    date: "2018-2024",
    desc: "Création de narratives fortes, de contenus engageants et de stratégies éditoriales pour des publics diversifiés.",
  },
];

export default function Experience() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-10">
        <div className="title flex justify-center items-center">
          <div className="text-center w-full lg:w-[60%]">
            <h2 className="uppercase text-(--prim) Rubik text-xl">
              Éducation & Expérience
            </h2>
            <h1 className="text-5xl Rajdhani font-semibold my-3">
              Donner vie à la créativité avec stratégie
            </h1>
            <p className="text-gray-400">
              Je conçois des solutions créatives et efficaces, en combinant identité visuelle, storytelling et performance digitale.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-4xl Rajdhani font-semibold">Formation</h2>
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
            <h2 className="text-4xl Rajdhani font-semibold">Expériences</h2>
            <Image src={customLine} alt="customLine" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="w-full lg:w-1/2">
              <div className="w-full lg:w-[80%]">
                <div>
                  <div className="flex flex-col">
                    <span className="text-(--prim) Rubik">
                      Marketing Digital
                    </span>
                    <h2 className="text-3xl Rajdhani font-semibold my-2">
                      Soft Tech (2 ans)
                    </h2>
                    <h3 className="Rajdhani font-semibold text-gray-300">
                      Designer UI/UX
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Création de visuels, optimisation du parcours utilisateur et mise en place de stratégies de contenu adaptées aux besoins du marché.
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex flex-col">
                    <span className="text-(--prim) Rubik">Développement</span>
                    <h2 className="text-3xl Rajdhani font-semibold my-2">
                      ModernTech (3 ans)
                    </h2>
                    <h3 className="Rajdhani font-semibold text-gray-300">
                      Développeuse d’applications
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Conception d’outils numériques, développement de parcours utilisateurs fluides et optimisation des expériences sur mesure.
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
