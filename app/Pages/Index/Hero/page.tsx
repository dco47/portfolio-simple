import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero-header">
        <div className="hero-content">
          <h1 className="Rajdhani font-bold">
            Serena Holloway
          </h1>
          <h4 className="uppercase Rubik text-xl">
            MODÈLE ALLEMANDE · ENTREPRENEUSE · CRÉATRICE DE CONTENU
          </h4>
        </div>
        <div className="hero-header-social-icon flex w-full max-w-[20rem] flex-col flex-wrap justify-center gap-2 sm:gap-4">
          <i className="ri-facebook-fill bg-gray-900 w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full"></i>
          <i className="bi bi-youtube bg-gray-900 w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full"></i>
          <i className="bi bi-instagram bg-gray-900 w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full"></i>
          <i className="ri-linkedin-fill bg-gray-900 w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full"></i>
          <i className="bi bi-twitter bg-gray-900 w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full"></i>
          <i className="bi bi-dribbble bg-gray-900 w-9 h-9 sm:w-10 sm:h-10 flex justify-center items-center rounded-full"></i>
        </div>
      </div>
    </>
  );
}
