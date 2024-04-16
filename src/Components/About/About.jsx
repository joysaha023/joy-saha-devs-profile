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
            className=" w-full h-full max-w-[280px] max-h-[280px] md:max-w-[300px] rounded-md md:max-h-[400px]  border-2 border-solid border-[#0077be]"
          />
        </div>
        <div className="">
          <p className=" lg:w-[700px]">
          I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.Committed to collaborating effectively within a team and enthusiastically taking on challenging tasks to contribute to the company's success.
          </p>
          <AboutTab></AboutTab>
        </div>
      </div>
    </div>
  );
};

export default About;
