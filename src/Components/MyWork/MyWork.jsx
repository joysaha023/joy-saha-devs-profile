import React, { useState } from "react";
import { projectData } from "../../data/ProjectData";
import ProjectCard from "./ProjectCard";


const MyWork = () => {
  

  return (
    <div className="mt-6">
      <h2 className="text-4xl font-bold text-center">
        My <span className="text-[#0077be]">Projects</span>
      </h2>
       <div>
            {
                projectData.map((item) => <ProjectCard key={item.id} item={item}></ProjectCard>)
            }
       </div>
    </div>
  );
};

export default MyWork;
