import React from "react";
import { CiCalendar } from "react-icons/ci";

const ProjectCard = ({item}) => {
    const {name, srcURL, liveURL, cover, startDate, tags, summary} = item;
  return (
    <div data-aos="flip-left" className="card w-full h-full border bg-base-100 rounded-md shadow-md">
      <figure className="border  rounded-md">
        <img
          src={cover.srcPath}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {/* <div className="flex my-3 items-center gap-2 secondary_black text-[14px]">
          <CiCalendar />
          <p>{startDate}</p>
        </div> */}
        <div className=" flex flex-wrap my-3 gap-2">
          {tags.map((tag) => {
            return (
              <button key={tag} className="px-2 py-1 text-[14px] bg-gray-100 rounded-md">
                {tag.name}
              </button>
            );
          })}
        </div>
        <p className="text-base font-normal">{summary}</p>
        <div className="card-actions justify-between">
          <a href={liveURL} target="blank"><button className="btn btn-md rounded-md text-white hover:text-black bg-[#0077be]">Live Demo</button></a>
          <a href={srcURL} target="blank"><button className="btn rounded-md btn-outline ">Source code</button></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
