import React from "react";
import useSkilldata from "../../Hooks/useSkilldata";
import SkillBox from "./SkillBox";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { skill } = useSkilldata();

  return (
    <div id="skills" className="mt-6">
      <h2 className="text-4xl font-bold text-center">Technical <span className="text-[#0077be]">Skills</span></h2>
      <SkillCard></SkillCard>


      {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-end items-center mx-auto ">
        {skill.map((item, idx) => (
          <SkillBox key={idx} item={item}></SkillBox>
        ))}
      </div> */}
    </div>
  );
};

export default Skills;
