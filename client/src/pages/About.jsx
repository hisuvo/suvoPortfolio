import React from "react";
import SubTitle from "../shared/SubTitle";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div>
      <SubTitle icon={"/"} title={"About-me"} text={"Who am i?"} />

      {/* About me description */}
      <div></div>

      {/* About Skills */}
      <div className="">
        <SubTitle icon={"#"} title={"Skills"} />
        <Skills />
      </div>
    </div>
  );
};

export default About;
