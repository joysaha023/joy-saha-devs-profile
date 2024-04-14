import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-1 mt-6 lg:px-20">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Hi!</h2>
          <h2 className="text-5xl font-bold">I am Joy Saha</h2>
          <p className="text-xl font-semibold">I am a Web Developer</p>
          <p className="text-xl font-semibold">From Bangladesh</p>
          <button className="btn btn-primary text-white">Check Resume</button>
        </div>
        <div>
          <img
            src="https://i.ibb.co/HDTkQ1b/dddd.png"
            className="relative w-full h-full max-w-[280px] max-h-[280px] md:max-w-[350px] md:max-h-[350px] rounded-[50%] border-2 border-solid border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
