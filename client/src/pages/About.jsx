import React from "react";
import SubTitle from "../shared/SubTitle";
import Skills from "../components/Skills";
import FunFacts from "../components/FunFacts";

const About = () => {
  return (
    <div>
      <SubTitle icon={"/"} title={"About-me"} text={"Who am i?"} />

      {/* About me description */}
      <div></div>

      {/* About Skills */}
      <div>
        <SubTitle icon={"#"} title={"Skills"} />
        <Skills />
      </div>

      {/* About My Fun Facts */}
      <div className="py-[84px]">
        <SubTitle icon={"#"} title={"my-fun-facts"} />

        <div className="">
          <FunFacts />
        </div>
      </div>
    </div>
  );
};

export default About;
