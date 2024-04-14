import React from "react";
import {Bio} from "../../data/constants"

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-2 mt-6">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Hi!</h2>
          <h2 className="text-5xl font-bold">I am Joy Saha</h2>
          <p className="text-xl font-semibold">I am a Web Developer</p>
          <p className="text-base font-medium w-full lg:w-[500px]">{Bio.description}</p>
          <button className="btn btn-primary text-white">Check Resume</button>
        </div>
        <div>
          <img
            src="https://i.ibb.co/HDTkQ1b/dddd.png"
            className="relative w-full h-full max-w-[280px] max-h-[280px] md:max-w-[400px] md:max-h-[400px] rounded-[50%] border-2 border-solid border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
