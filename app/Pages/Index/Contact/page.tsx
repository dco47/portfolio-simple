export default function Contact() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-0 md:pt-20" id="contact">
        <div className="bg-gray-600/20 p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/3">
              <h2 className="text-7xl Rajdhani font-semibold">
                Get Ready To Create Great
              </h2>
              <div className="my-5">
                <div className="cursor-pointer flex items-center gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border border-gray-400/30">
                    <i className="bi bi-envelope-open-fill"></i>
                  </div>
                  <div>
                    <h2 className="text-gray-400">Email</h2>
                    <p className="Rajdhani font-semibold text-lg">
                      djablechristian0@gmail.com
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer flex items-center gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border border-gray-400/30">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h2 className="text-gray-400">Address</h2>
                    <p className="Rajdhani font-semibold text-lg">
                      Abidjan, cocody-Angre
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer flex items-center gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border border-gray-400/30">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h2 className="text-gray-400">Phone</h2>
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
              <h2 className="text-5xl Rajdhani font-semibold">GET IN TOUCH</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 bg-black border border-gray-600/50 focus:border-(--prim)/40 transition-all duration-300 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 bg-black border border-gray-600/50 focus:border-(--prim)/40 transition-all duration-300 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="p-3 bg-black border border-gray-600/50 focus:border-(--prim)/40 transition-all duration-300 rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
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
                  <span className="btn-text Rubik">Appointment Now</span>
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
