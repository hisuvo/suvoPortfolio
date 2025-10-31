import React from "react";
import SubTitle from "../shared/SubTitle";
import Skills from "../components/Skills";
import FunFacts from "../components/FunFacts";
import SelfInfo from "../components/SelfInfo";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <SubTitle icon={"/"} title={"About-me"} text={"Who am i?"} />

      {/* About me description */}
      <div className="flex flex-col-reverse gap-4 md:flex-row items-center">
        {/* self inforamion */}
        <div className="flex-1">
          <SelfInfo />
        </div>

        {/* self Image */}
        <div className="max-w-[300px] max-h-[500px]">
          <img
            className="w-full object-cover border-b"
            src={assets.self_image}
            alt="self image"
          />
        </div>
      </div>

      {/* About Skills */}
      <div>
        <SubTitle icon={"#"} title={"Skills"} />
        <Skills />
      </div>

      {/* About My Fun Facts */}
      <div className="py-[84px]">
        <SubTitle icon={"#"} title={"my-fun-facts"} />

        <div>
          <FunFacts />
        </div>
      </div>
    </div>
  );
};

export default About;
