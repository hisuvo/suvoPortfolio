import DemoButton from "../shared/DemoButton";
import LiveButton from "../shared/LiveButton";

const Card = ({ project, index }) => {
  return (
    <div>
      <div key={index} className="border">
        {/* Image Part */}
        <div className="w-full">
          <img
            src={project.image}
            alt={project?.title}
            className="w-full object-cover"
          />
        </div>

        {/* Technology List */}
        <div className="border-t border-b flex flex-wrap text-base p-2 gap-2">
          {project.tech_stack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        {/* Project Title Here */}
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-medium">{project?.title}</h2>
          <p className="font-normal text-base text-gray-clr">
            {project?.short_desc}
          </p>

          <div className="flex gap-2">
            <LiveButton link={project?.live_url} />
            <DemoButton link={project?.repo_url}>GitHub</DemoButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
