import { projectList } from "../../public/projectList";

import Card from "./Card";

const ProjectList = () => {
  return (
    <div>
      {/* Complete project */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {projectList.map((project, index) => (
          <Card index={index} project={project} />
        ))}
      </div>

      {/* Smoll Project */}
    </div>
  );
};

export default ProjectList;
