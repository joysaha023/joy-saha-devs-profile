import React from "react";
import { CiCalendar } from "react-icons/ci";

const ProjectCard = ({item}) => {
    const {name, srcURL, cover, startDate, tags, summary} = item;
  return (
    <div className="card w-full border bg-base-100 shadow-xl">
      <figure>
        <img
          src={cover.srcPath}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex my-3 items-center gap-2 secondary_black text-[14px]">
          <CiCalendar />
          <p>{startDate}</p>
        </div>
        <p>{summary}</p>
        <div className=" flex my-3 gap-2">
          {tags.map((tag) => {
            return (
              <button key={tag} className="px-2 py-1 text-[14px] bg-gray-100 rounded-md">
                {tag.name}
              </button>
            );
          })}
        </div>
        <div className="card-actions justify-between">
          <a href={srcURL} target="blank"><button className="btn btn-md bg-[#0077be]">Live Demo</button></a>
          <a href={srcURL} target="blank"><button className="btn btn-outline ">Source code</button></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;