import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#020409]">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Richard Higenbottam
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Frontend Developer who is focused on building responsive web
          applications which meet the needs of the end users. I'm passionate,
          motivated and would be a great addition to your team.
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
