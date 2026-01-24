import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20 pt-10">
        <div className="title text-center">
          <h2 className="uppercase text-(--prim) Rubik text-xl">
            MY PRICE PLAN
          </h2>
          <h1 className="text-5xl Rajdhani font-semibold my-3">
            Enhancing Collaboration <br /> between Remote
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 lg:pt-30 gap-8">
          <div className="bg-gray-600/20 p-8 rounded-2xl">
            <h4 className="text-xl mb-2 font-semibold Rajdhani">Starter</h4>
            <h2 className="text-5xl mb-2 font-bold Rajdhani">$ 29.00</h2>
            <h4 className="text-xl font-semibold Rajdhani">per Month</h4>
            <div className="list-none py-10 space-y-4">
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>5
                Social Media Account
              </li>
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>Free
                Platform Access
              </li>
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>24/7
                Customer Support
              </li>
            </div>
            <div className="mt-5">
              <button className=" mt-1 lg:mt-0 btn btn1 border border-gray-600/60 hover:bg-(--prim) transition-all duration-300 cursor-pointer hover:border-transparent pe-4 py-2 rounded-full ">
                <i className="bi bi-arrow-right-short left-icon"></i>
                <span className="btn-text">Learn More</span>
                <i className="bi bi-arrow-right-short right-icon"></i>
              </button>
            </div>
          </div>
             <div className="bg-gray-600/20 p-8 rounded-2xl lg:-mt-20">
            <h4 className="text-xl mb-2 font-semibold Rajdhani">Basic</h4>
            <h2 className="text-5xl mb-2 font-bold Rajdhani">$ 230.0</h2>
            <h4 className="text-xl font-semibold Rajdhani">per Month</h4>
            <div className="list-none py-10 space-y-4">
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>5
                Social Media Account
              </li>
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>Free
                Platform Access
              </li>
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>
                Marketing Platform
              </li>
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>24/7
                Customer Support
              </li>
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>
                Life time support
              </li>
            </div>
            <div className="mt-5">
              <button className=" mt-1 lg:mt-0 btn btn1 bg-(--prim) border border-gray-600/60 hover:bg-(--prim) transition-all duration-300 cursor-pointer hover:border-transparent pe-4 py-2 rounded-full ">
                <i className="bi bi-arrow-right-short left-icon"></i>
                <span className="btn-text">Learn More</span>
                <i className="bi bi-arrow-right-short right-icon"></i>
              </button>
            </div>
          </div>
           <div className="bg-gray-600/20 p-8 rounded-2xl">
            <h4 className="text-xl mb-2 font-semibold Rajdhani">Premium</h4>
            <h2 className="text-5xl mb-2 font-bold Rajdhani">$ 599.00</h2>
            <h4 className="text-xl font-semibold Rajdhani">per Month</h4>
            <div className="list-none py-10 space-y-4">
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>5
                Social Media Account
              </li>
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>Free
                Platform Access
              </li>
              <li className="flex gap-3 text-gray-300">
                <i className="bi bi-check-circle-fill text-(--prim)"></i>24/7
                Customer Support
              </li>
            </div>
            <div className="mt-5">
              <button className=" mt-1 lg:mt-0 btn btn1 border border-gray-600/60 hover:bg-(--prim) transition-all duration-300 cursor-pointer hover:border-transparent pe-4 py-2 rounded-full ">
                <i className="bi bi-arrow-right-short left-icon"></i>
                <span className="btn-text">Learn More</span>
                <i className="bi bi-arrow-right-short right-icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
