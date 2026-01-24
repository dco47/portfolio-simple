import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero-header">
        <div className="hero-content">
          <h1 className="text-7xl md:text-9xl Rajdhani font-bold">
            Serena Holloway
          </h1>
          <h4 className="uppercase Rubik text-xl">
            German Model · Entrepreneur · Content Creator
          </h4>
        </div>
        <div className="hero-header-social-icon flex flex-col gap-4">
          <i className="ri-facebook-fill bg-gray-900 w-10 h-10 flex justify-center items-center rounded-full"></i>
          <i className="bi bi-youtube bg-gray-900 w-10 h-10 flex justify-center items-center rounded-full"></i>
          <i className="bi bi-instagram bg-gray-900 w-10 h-10 flex justify-center items-center rounded-full"></i>
          <i className="ri-linkedin-fill bg-gray-900 w-10 h-10 flex justify-center items-center rounded-full"></i>
          <i className="bi bi-twitter bg-gray-900 w-10 h-10 flex justify-center items-center rounded-full"></i>
          <i className="bi bi-dribbble bg-gray-900 w-10 h-10 flex justify-center items-center rounded-full"></i>
        </div>
      </div>
    </>
  );
}
