import { ProjectsGrid } from "~/components/ProjectsGrid";
import { ServiceIntro } from "~/components/ServiceIntro";

import expressImg from "/web-design/desktop/image-express.jpg";
import transferImg from "/web-design/desktop/image-transfer.jpg";
import photonImg from "/web-design/desktop/image-photon.jpg";
import builderImg from "/web-design/desktop/image-builder.jpg";
import blogrImg from "/web-design/desktop/image-blogr.jpg";
import campImg from "/web-design/desktop/image-camp.jpg";
import appDesign from "/home/desktop/image-app-design.jpg";
import graphicDesign from "/home/desktop/image-graphic-design.jpg";
import { ServicesGrid } from "~/components/ServicesGrid";

export type ProjectRepresentation = {
  name: string;
  description: string;
  image: string;
};

const WebDesign = () => {
  const projects: Array<ProjectRepresentation> = [
    {
      name: "Express",
      description: "A multi-carrier shipping website for ecommerce businesses",
      image: expressImg
    },
    {
      name: "Transfer",
      description:
        "Site for low-cost money transfers and sending money within seconds",
      image: transferImg
    },
    {
      name: "Photon",
      description:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
      image: photonImg
    },
    {
      name: "Builder",
      description:
        "Connects users with local contractors based on their location",
      image: builderImg
    },
    {
      name: "Blogr",
      description:
        "Blogr is a platform for creating an online blog or publication",
      image: blogrImg
    },
    {
      name: "Camp",
      description:
        "Get expert training in coding, data, design, and digital marketing",
      image: campImg
    }
  ];

  const services = [
    {
      name: "App Design",
      route: "services/app-desgin",
      image: appDesign
    },
    {
      name: "Graphic Design",
      route: "services/graphic-design",
      image: graphicDesign
    }
  ];

  return (
    <div className="w-full">
      <ServiceIntro
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring
        memorable brand experiences."
      />
      <ProjectsGrid projects={projects} />
      <ServicesGrid services={services} />
    </div>
  );
};

export default WebDesign;
