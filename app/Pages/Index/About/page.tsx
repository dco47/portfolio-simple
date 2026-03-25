import Image from "next/image";
import aboutImg1 from "@/public/about-icon1.d8aeb767.svg";
import aboutImg2 from "@/public/about-icon2.68186437.svg";

export default function About() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-10" id="about">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
          <div className="w-full lg:w-1/2 about-left-content">
            <div className="flex flex-col md:flex-row items-end lg:flex-col gap-3">
              <div className="about-left-info">
                <h1 className="text-7xl Rubik mb-5">10+</h1>
                <h2 className="text-5xl Rajdhani font-bold">
                  Plus de 10 ans d'expérience
                </h2>
              </div>
              <div className="about-left-info2">
                <i className="bi bi-lock"></i>
                <div className="flex flex-col">
                  <h2 className="Rubik text-2xl">Ui/Ux Design</h2>
                  <h4 className="Rajdhani text-xl">241 Projets</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="title">
              <h2 className="uppercase text-(--prim) Rubik text-xl">
                A propos de moi
              </h2>
              <h1 className="text-5xl Rajdhani font-semibold my-3">
                Boostez votre entreprise grâce à nos solutions stratégiques.
              </h1>
              <p className="text-gray-400">
                nos consultants en gestion d'entreprise fournissent des conseils d'experts et un accompagnement aux entreprises afin de les aider à améliorer leurs performances, leur efficacité et leur organisation.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 mt-5">
              <div className="w-full md:w-1/2">
                <div className="about-card flex bg-gray-600/20 flex-col gap-2 p-5 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Image
                      src={aboutImg1}
                      alt="about"
                      className="w-12 h-12 flex justify-center items-center p-2 rounded-full bg-(--prim)"
                    />
                    <h2 className="Rajdhani font-semibold text-2xl">
                      Solutions d'affaires
                    </h2>
                  </div>
                  <p className="text-lg text-gray-400 w-full md:w-[80%] mt-2">
                    Chacunes d'elles témoignent de mon approche, de mon souci du détail et de ma créativité.

                  </p>
                </div>
              </div>
                    <div className="w-full md:w-1/2">
                <div className="about-card flex bg-gray-600/20 flex-col gap-2 p-5 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Image
                      src={aboutImg2}
                      alt="about"
                      className="w-12 h-12 flex justify-center items-center p-2 rounded-full bg-(--prim)"
                    />
                    <h2 className="Rajdhani font-semibold text-2xl">
                      Profit Partners
                    </h2>
                  </div>
                  <p className="text-lg text-gray-400 w-full md:w-[80%] mt-2">
                    Notre cabinet de conseil en gestion d'entreprise vous offre des conseils d'experts.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
                <button className="btn btn1 bg-(--prim) pe-4 py-2 rounded-full">
                    <i className="bi bi-arrow-right-short left-icon"></i>
                    <span className="btn-text">En savoir plus</span>
                    <i className="bi bi-arrow-right-short right-icon"></i>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
