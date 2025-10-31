import SkillCard from "../shared/SkillCard";
import skills from "../../public/skills";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div key={index}>
          {<SkillCard title={skill?.category} items={skill?.items} />}
        </div>
      ))}
    </div>
  );
};

export default Skills;
