import ProjectList from "../components/ProjectList";
import SecondTitle from "../shared/SecondTitle";
import SubTitle from "../shared/SubTitle";

const Works = () => {
  return (
    <div className="py-[84px]">
      <SubTitle icon={"/"} title={"Projects"} text={"List of my Projects"} />

      {/* Completes App section */}
      <div className="mb-12">
        <SecondTitle title={"completes-apps"} />

        {/* project list */}
        <div className="mt-12">
          <ProjectList />
        </div>
      </div>

      {/* Small Project */}
      <div className="mb-12">
        <SecondTitle title={"small prjects"} />
      </div>
    </div>
  );
};

export default Works;
