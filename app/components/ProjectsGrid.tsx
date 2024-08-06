import { ProjectRepresentation } from "~/data/projects";

const ProjectsGrid = ({
  projects
}: {
  projects: Array<ProjectRepresentation>;
}) => {
  return (
    <div className="w-full my-8 grid xl:grid-cols-3 grid-cols-1 gap-8">
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
    <div className="rounded-xl">
      <img src={image} alt={name} className="rounded-t-xl" />
      <div className="bg-accent-light rounded-b-xl text-center p-6">
        <h3 className="text-accent mb-4 font-semibold uppercase">{name}</h3>
        <div className="text-black w-[80%] mx-auto">{description}</div>
      </div>
    </div>
  );
};

export { ProjectsGrid };
