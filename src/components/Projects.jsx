import React from "react";
import Rental from "../assets/car-rent.png";

import Advina from "../assets/advina.png";
import freelance from "../assets/freelance.png";
import aiapmop from "../assets/aiapmop.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full bg-[#020409] text-gray-300 h-auto min-h-screen py-16 scroll-mt-20"
    >
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6 text-sm sm:text-base">
            Check out some of my recent projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Item 1 */}
          <div
            style={{ backgroundImage: `url(${freelance})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                Soldity / React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://freelance-marketplace.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RichHig/freelance-marketplace">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://docs.google.com/document/d/1vsUbxWjEEfkZ_CJIgmOm-EIpHgziYEvMEwl_yHdVi-I/edit?usp=sharing">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Case Study
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project Item 2 */}
          <div
            style={{ backgroundImage: `url(${aiapmop})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                React/ Python / ML / AI
              </span>
              <div className="pt-8 text-center">
                <a href="https://aiapmoptimization.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RichHig/apm-optimization-tool">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://docs.google.com/document/d/13iU9fZ9Uijmj97X2vmcQv4AamYkUMuFNYu0c9qrsHRQ/edit?usp=sharing">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Case Study
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project Item 3 */}
          <div
            style={{ backgroundImage: `url(${Advina})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://bright-macaron-b3fdd9.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RichHig/Hotel-Adina-React-App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Project Item 4 */}
          <div
            style={{ backgroundImage: `url(${Rental})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://lucky-meringue-2c95ed.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RichHig/car-rent">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
