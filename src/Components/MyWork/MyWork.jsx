import React, { useState } from "react";
import { projectData } from "../../data/ProjectData";
import ProjectCard from "./ProjectCard";


const MyWork = () => {
  

  return (
    <div className="mt-6">
      <h2 className="text-4xl my-6 font-bold text-center">
        My <span className="text-[#0077be]">Projects</span>
      </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10 md:px-8 mt-10 lg:px-16">
            {
                projectData.map((item) => <ProjectCard key={item.id} item={item}></ProjectCard>)
            }
       </div>
    </div>
  );
};

export default MyWork;
