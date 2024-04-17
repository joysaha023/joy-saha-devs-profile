import React, { useState } from "react";
import AboutTab from "./AboutTab";


const About = () => {
    

  return (
    <div className="my-16">
      <h2 className="text-4xl mb-5 font-bold text-center">
        About <span className="text-[#0077be]">Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start px-4 justify-center">
        <div className="">
          <img
            src="https://i.ibb.co/h1fVqCg/dsd.jpg"
            className=" w-full h-full max-w-[280px] shadow-md max-h-[300px] md:max-w-[300px] rounded-md md:max-h-[400px]  border-2 border-solid border-[#0077be]"
          />
        </div>
        <div className="">
          <p className=" w-full lg:w-[600px]">
          Innovative, passionate and hard working certified  Web Developer with more than 1 years of experience  in Web Design and Web Development. Gained a lot experience in web development, specialized in frontend technologies.Committed to collaborating effectively within a team and enthusiastically taking on challenging tasks to contribute to the company's success.
          </p>
          <AboutTab></AboutTab>
        </div>
      </div>
    </div>
  );
};

export default About;
