import Image from "next/image";
import ServiceImg from "@/public/Services.webp";

export default function Service() {
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-[8%] 2xl:px-[14%] py-16 sm:py-20 pt-10" id="services">
        <div className="title flex justify-center items-center">
          <div className="text-center w-full lg:w-[60%]">
            <h2 className="uppercase text-(--prim) Rubik text-xl">
              Nos services
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl Rajdhani font-semibold my-3">
              Inspirez le monde à travers chaque projet
            </h1>
            <p className="text-gray-400">
              Je vous accompagne dans la création d’expériences numériques fortes, lisibles et impactantes pour votre audience.
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
                      Portfolio créatif
                    </h2>
                  </div>
                  <p className="text-gray-400 text-md mt-3">
                    Une mise en valeur de votre identité visuelle, de vos projets et de votre savoir-faire à travers une présentation élégante et fonctionnelle.
                  </p>
                </div>
                <div className="bg-gray-600/20 p-8 rounded-2xl mt-5">
                  <div className="flex items-center gap-3">
                    <span className="Rubik text-2xl">02</span>
                    <h2 className="text-2xl Rajdhani font-semibold">
                      Innovation et stratégie
                    </h2>
                  </div>
                  <p className="text-gray-400 text-md mt-3">
                    Je conjuguie design réfléchi et stratégie marketing pour aider les marques à se distinguer et à transformer leur présence digitale.
                  </p>
                </div>

                <div className="bg-gray-600/20 p-8 rounded-2xl mt-5">
                  <div className="flex items-center gap-3">
                    <span className="Rubik text-2xl">03</span>
                    <h2 className="text-2xl Rajdhani font-semibold">
                      Présentation de projets
                    </h2>
                  </div>
                  <p className="text-gray-400 text-md mt-3">
                    Vous trouverez ici des exemples de réalisations mettant en avant mon expertise en design, stratégie et développement web responsive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-[80%]">
                <Image src={ServiceImg} alt="ServiceImag" className="w-full h-full object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
