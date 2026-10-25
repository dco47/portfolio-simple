export default function Contact() {
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-[8%] 2xl:px-[14%] py-16 sm:py-20 pt-0 md:pt-20" id="contact">
        <div className="bg-gray-600/20 p-5 sm:p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl Rajdhani font-semibold">
                Préparez-vous à créer de grandes choses
              </h2>
              <div className="my-5">
                <div className="cursor-pointer flex items-center gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border border-gray-400/30">
                    <i className="bi bi-envelope-open-fill"></i>
                  </div>
                  <div>
                    <h2 className="text-gray-400">E-mail</h2>
                    <p className="Rajdhani font-semibold text-lg break-all">
                      djablechristian0@gmail.com
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer flex items-center gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border border-gray-400/30">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h2 className="text-gray-400">Adresse</h2>
                    <p className="Rajdhani font-semibold text-lg">
                      Abidjan, Cocody-Angré
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer flex items-center gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border border-gray-400/30">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h2 className="text-gray-400">Téléphone</h2>
                    <p className="Rajdhani font-semibold text-lg">
                      +225 07-57-98-51-47
                    </p>
                  </div>
                </div>
                <div className="nav-icon flex items-center gap-3 mt-5">
                  <i className="bi bi-instagram bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full"></i>
                  <i className="ri-linkedin-fill bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full"></i>
                  <i className="bi bi-twitter bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full"></i>
                  <i className="ri-facebook-fill bg-gray-800 w-10 h-10 flex justify-center items-center rounded-full"></i>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[60%]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl Rajdhani font-semibold">Entrons en contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="p-3 bg-black border border-gray-600/50 focus:border-(--prim)/40 transition-all duration-300 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Numéro de téléphone"
                  className="p-3 bg-black border border-gray-600/50 focus:border-(--prim)/40 transition-all duration-300 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Votre e-mail"
                  className="p-3 bg-black border border-gray-600/50 focus:border-(--prim)/40 transition-all duration-300 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Objet"
                  className="p-3 bg-black border border-gray-600/50 focus:border-(--prim)/40 transition-all duration-300 rounded-md outline-none"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className=" w-full p-3 mt-3 bg-black border border-gray-600/50 focus:border-(--prim)/40 transition-all duration-300 rounded-md outline-none"
              ></textarea>
              <div className="mt-5">
                <button className="btn btn1 bg-(--prim) w-full text-center flex justify-center items-center pe-4 rounded-full py-3 transition-all duration-300">
                  <i className="bi bi-arrow-right-short left-icon"></i>
                  <span className="btn-text Rubik">Prendre rendez-vous</span>
                  <i className="bi bi-arrow-right-short right-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
