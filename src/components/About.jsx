import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-[#020409] text-gray-300 h-auto min-h-screen py-10 scroll-mt-20 mb-10"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Richard Higenbottam. Nice to meet you—please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent applications that provide
              meaningful experiences. Throughout my career, I've thrived in
              target-driven environments and have honed my ability to structure
              work in ways that make me a valuable asset to any team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
