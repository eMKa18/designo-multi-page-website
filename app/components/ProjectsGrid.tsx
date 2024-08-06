import { ProjectRepresentation } from "~/routes/services.web-design";

const ProjectsGrid = ({
  projects
}: {
  projects: Array<ProjectRepresentation>;
}) => {
  return (
    <div className="w-full mt-8">
      {projects.map((project) => (
        <Project
          name={project.name}
          description={project.description}
          image={project.image}
          key={project.name}
        />
      ))}
    </div>
  );
};

const Project = ({ name, description, image }: ProjectRepresentation) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

export { ProjectsGrid };
