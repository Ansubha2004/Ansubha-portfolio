import React, { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import skills from "../data/skills.json";
import Skillchart from "../components/skillchart.jsx";

function Skills() {
  const [globalindex, setglobalindex] = useState(0);

  const viewskills = (index) => {
    setglobalindex(index);
  };

  return (
    <div
      id="Skills"
      className="w-full h-auto border-box sm:py-[60px] py-[40px] scroll-mt-[50px] sm:scroll-mt-[120px] "
    >
      <div className="text-center">
        <p
          className="text-white font-bold text-[3rem] "
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          Skill Statistics{" "}
        </p>
        <p
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="text-orange-500 text-[1rem] font-[700] sm:text-[1.2rem]"
        >
          Core Competencies & Technical Proficiencies
        </p>
      </div>
      <div className="w-full  gap-5 flex flex-wrap justify-center my-7 mb-[50px] sm:mb-[70px]">
        {skills.map((skill, index) => (
          <Button
            handleClick={() => viewskills(index)}
            animation="fade"
            delay={index * 200 + 600}
            key={index}
            themecss="btn-black2"
            content={skill.header}
          />
        ))}
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-delay="300"
        className="w-full flex flex-wrap justify-center  sm:gap-10 gap-5 "
      >
        {skills[globalindex].skilldata.map((skill, index) => (
          <Skillchart
            key={index}
            level={skill.level}
            skillname={skill.skillname}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
