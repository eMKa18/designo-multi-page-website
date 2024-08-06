import { useEffect, useState } from "react";
import { ProjectsGrid } from "~/components/ProjectsGrid";
import { ServiceIntro } from "~/components/ServiceIntro";
import { ServicesGrid } from "~/components/ServicesGrid";
import { getProjects, PageKey, ProjectRepresentation } from "~/data/projects";
import { getService, getServices, ServiceType } from "~/data/services";

const DesignPage = ({ pageKey }: { pageKey: PageKey }) => {
  const [projects, setProjects]: [
    projects: ProjectRepresentation[],
    setProjects: any
  ] = useState([]);
  const [otherServices, setServices]: [
    services: ServiceType[],
    setServices: any
  ] = useState([]);
  const [currentService, setService]: [
    currentService: ServiceType,
    setService: any
  ] = useState({} as ServiceType);

  useEffect(() => {
    setProjects(getProjects(pageKey));
    setServices(getServices(pageKey));
    setService(getService(pageKey));
  }, [pageKey]);

  return (
    <div className="w-full">
      <ServiceIntro
        title={currentService.name}
        description="We build websites that serve as powerful marketing tools and bring
        memorable brand experiences."
      />
      <ProjectsGrid projects={projects} />
      <ServicesGrid services={otherServices} />
    </div>
  );
};

export default DesignPage;
