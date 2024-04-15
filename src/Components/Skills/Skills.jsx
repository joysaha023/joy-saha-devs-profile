import React from "react";
import useSkilldata from "../../Hooks/useSkilldata";
import SkillBox from "./SkillBox";

const Skills = () => {
  const { skill } = useSkilldata();

  return (
    <div className="mt-6">
      <h2 className="text-4xl font-bold text-center">Technical Skills</h2>

      <div>
        <div>
          <div className="border w-[151px] h-[91px]">
            <img
              className="w-[50px] h-[50px] "
              src="https://i.ibb.co/0GBWCRx/js-removebg-preview-removebg-preview.png"
              alt="image"
            />
            <h1>JavaScript</h1>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-16 gap-8">
        {skill.map((item, idx) => (
          <SkillBox key={idx} item={item}></SkillBox>
        ))}
      </div> */}
    </div>
  );
};

export default Skills;
