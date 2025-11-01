import SubTitle from "../shared/SubTitle";
import Skills from "../components/Skills";
import FunFacts from "../components/FunFacts";
import SelfInfo from "../components/SelfInfo";

const About = () => {
  return (
    <div>
      {/* About me  */}
      <SubTitle icon={"/"} title={"About-me"} text={"Who am i?"} />

      {/* self inforamion */}
      <div className="flex-1">
        <SelfInfo />
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
