import React from "react";
import {Bio} from "../../data/constants"
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Banner = () => {
 const [text] = useTypewriter({
  words: ['MERN Stack Developer', 'Front-End Developer', 'Web Developer'],
  autoStart: true,
  loop: {},
 });


  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-2 mt-6">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold">Hi!</h2>
          <h2 className="text-5xl font-bold">I am <span className="text-[#0077be] ">Joy Saha</span></h2>
          <p className="text-xl font-semibold">I am a <span className="text-[#0077be]">
            {text}
            </span><span className="text-[#0077be]"><Cursor></Cursor></span></p>
          <p className="text-base font-medium w-full lg:w-[500px]">{Bio.description}</p>
          <button className="btn bg-[#0077be] text-white">Check Resume</button>
        </div>
        <div>
          <img
            src="https://i.ibb.co/HDTkQ1b/dddd.png"
            className="relative w-full h-full max-w-[280px] shadow-md max-h-[280px] md:max-w-[400px] md:max-h-[400px] rounded-[50%] lg:mr-16 border-2 border-solid border-[#0077be]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
