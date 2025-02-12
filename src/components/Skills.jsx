import React from "react";
import FireBase from "../assets/firebase.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import agile from "../assets/agile.png";
import scrum from "../assets/scrum.png";
import jira from "../assets/jira.png";
import datadriven from "../assets/datadriven.png";
import userresearch from "../assets/userresearch.png";
import solidity from "../assets/solidity.png";
import cross from "../assets/cross.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#020409] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Tech Stack & PM Competencies
          </p>
          <p className="py-4">
            These are the technologies I’ve worked with, along with key product
            management skills that drive my work.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={solidity} alt="Solidity icon" />
            <p className="my-4">Solidity</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="Firebase icon" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
        {/* New PM Competencies Section */}
        <div className="mt-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Product Management
          </p>
          <p className="py-4">
            I leverage agile methodologies, strategic roadmapping, and rigorous
            data-driven insights, combined with in-depth user research and
            strong cross-functional collaboration, to drive innovation and
            deliver products that consistently exceed market expectations.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={agile} alt="Agile icon" />
            <p className="my-4">Agile</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={scrum} alt="Scrum icon" />
            <p className="my-4">Scrum Master</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={jira} alt="Jira icon" />
            <p className="my-4">Jira</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={datadriven}
              alt="Data-Driven Decision Making icon"
            />
            <p className="my-4">Data-Driven Decision Making</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={userresearch}
              alt="User research icon"
            />
            <p className="my-4">User Research</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={cross}
              alt="Cross-Functional icon"
            />
            <p className="my-4">Cross-Functional Collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
