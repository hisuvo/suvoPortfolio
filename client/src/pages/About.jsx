import SubTitle from "../shared/SubTitle";
import Skills from "../components/Skills";
import FunFacts from "../components/FunFacts";
import SelfInfo from "../components/SelfInfo";

const About = () => {
  return (
    <div className="py-[84px]">
      {/* About me  */}
      <SubTitle icon={"/"} title={"About-me"} text={"Who am i?"} />

      {/* self inforamion */}
      <div className="flex-1">
        <SelfInfo />
      </div>

      {/* About Skills */}
      <div className="pt-20">
        <SubTitle icon={"#"} title={"Skills"} />
        <Skills />
      </div>

      {/* About My Fun Facts */}
      <div className="pt-20">
        <SubTitle icon={"#"} title={"my-fun-facts"} />

        <div>
          <FunFacts />
        </div>
      </div>
    </div>
  );
};

export default About;
