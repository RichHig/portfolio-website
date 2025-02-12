import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#020409] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Richard Higenbottam. I am a dedicated Product Manager with
              a passion for transforming innovative ideas into market-leading
              solutions.
            </p>
          </div>
          <div>
            <p>
              With a strong background in technology and product strategy, I
              have successfully driven projects that leverage blockchain and AI
              to solve real-world challenges. My experience in target-driven
              industries and my commitment to user-centric design have enabled
              me to create products that deliver measurable impact and lasting
              value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
