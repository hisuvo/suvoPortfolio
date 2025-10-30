import ProjectList from "../components/ProjectList";
import SecondTitle from "../shared/SecondTitle";
import SubTitle from "../shared/SubTitle";

const Works = () => {
  return (
    <div>
      <SubTitle icon={"/"} title={"Projects"} text={"List of my Projects"} />

      {/* Completes App section */}
      <div className="mb-8">
        <SecondTitle title={"completes-apps"} />

        {/* project list */}
        <div className="mt-4">
          <ProjectList />
        </div>
      </div>

      {/* Small Project */}
      <div>
        <SecondTitle title={"small prjects"} />
      </div>
    </div>
  );
};

export default Works;
