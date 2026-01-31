import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pb-10 bg-gray-400/10">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
          <div className="flex flex-col">
            <Link href="/">
              <div className="flex items-center gap-2 overflow-hidden">
                <h1 className="MetalMania text-4xl tracking-widest">
                  SER<span className="text-(--prim)">ENA</span>
                </h1>
              </div>
            </Link>
            <h2 className="text-5xl Rajdhani mt-5">
              <span className="font-semibold Rajdhani">Get Ready</span>to creat
              Greate Greate
            </h2>
            <div className="w-full lg:w-[70%] border-b border-r-gray-600 pb-2 flex justify-between items-center gap-2 mt-10">
              <input
                type="text"
                placeholder="E-mail Adress..."
                className="outline-none"
              />
              <i className="bi bi-envelope"></i>
            </div>
          </div>
          <div className="footer-col ps-0 md:ps-20">
            <h2 className="text-3xl Rajdhani font-semibold mb-5">
              Quick Links
            </h2>

            <div className="flex w-fit footer-link flex-col gap-3">
              <div>
                <Link href="/" className="text-xl">
                  Home
                </Link>
              </div>
              <div>
                <Link href="/#about" className="text-xl">
                  About
                </Link>
              </div>
              <div>
                <Link href="/#work" className="text-xl">
                  Work
                </Link>
              </div>
              <div>
                <Link href="/#services" className="text-xl">
                  Services
                </Link>
              </div>
              <div>
                <Link href="/#portfolio" className="text-xl">
                  Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h2 className="text-3xl Rajdhani font-semibold mb-5">Contact</h2>

            <div className="footer-contact-info">
              <div className="footer-info cursor-pointer flex items-center gap-2">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border-gray-400/30">
                  <i className="bi bi-envelope-open-fill"></i>
                </div>
                <p>djablechristian0@gmail.com</p>
              </div>
              <div className="footer-info cursor-pointer flex items-center gap-2 mt-3">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border-gray-400/30">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <p>Abidjan, cocody-Angre</p>
              </div>
              <div className="footer-info cursor-pointer flex items-center gap-2 mt-3">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-black border-gray-400/30">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <p>+225 07 57 985 147</p>
              </div>
              <div className="nav-icon flex items-center gap-3 mt-5 ">
                <i className="bi bi-instagram bg-gray-600/20 w-10 h-10 flex justify-center items-center rounded-full"></i>
                <i className="ri-linkedin-fill bg-gray-600/20 w-10 h-10 flex justify-center items-center rounded-full"></i>
                <i className="bi bi-twitter bg-gray-600/20 w-10 h-10 flex justify-center items-center rounded-full"></i>
                <i className="ri-facebook-fill bg-gray-600/20 w-10 h-10 flex justify-center items-center rounded-full"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-t border-gray-600/30 pt-10">
            <div className="flex justify-center md:justify-between items-center gap-3 flex-wrap">
               <p className="Rajdhani text-center">© copyright 2026. All Rights Reserved by <Link href="https://github.com/dco47" className="font-semibold">dcoTech</Link></p>

               <div className="flex w-fit footer-link gap-3">
                <div>
                    <Link href="/" className="text-gray-400">Trams & Condition</Link>
                </div>
                <div>
                    <Link href="/" className="text-gray-400">Privacy Policy</Link>
                </div>
                <div>
                    <Link href="/" className="text-gray-400">Contact Us</Link>
                </div>
               </div>
            </div>
        </div>
      </div>
    </>
  );
}
