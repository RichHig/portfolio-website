import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full bg-[#020409] text-gray-300 h-auto min-h-screen flex items-center pt-[80px]"
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full py-16">
        <p className="text-red-600 text-sm sm:text-base">Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#ccd6f6]">
          Richard Higenbottam
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#8892b0]">
          I'm a Product Manager
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-sm sm:text-base">
          I am a seasoned Product Manager with a proven track record in
          transforming complex challenges into innovative, market-leading
          solutions. My strategic mindset, combined with a passion for
          technology and user-centric design, drives the creation of products
          that not only solve problems but also exceed user expectations.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
