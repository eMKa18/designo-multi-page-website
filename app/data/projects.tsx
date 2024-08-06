import expressImg from "/web-design/desktop/image-express.jpg";
import transferImg from "/web-design/desktop/image-transfer.jpg";
import photonImg from "/web-design/desktop/image-photon.jpg";
import builderImg from "/web-design/desktop/image-builder.jpg";
import blogrImg from "/web-design/desktop/image-blogr.jpg";
import campImg from "/web-design/desktop/image-camp.jpg";

export type ProjectRepresentation = {
  name: string;
  description: string;
  image: string;
};

export type PageKey = "web-design" | "app-design" | "graphic-design";

const projects = {
  "web-design": {
    projects: [
      {
        name: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
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
    ]
  },
  "app-design": {
    projects: [
      {
        name: "Airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
        image: ""
      }
    ]
  },
  "graphic-design": {
    projects: [
      {
        name: "Tim Brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
        image: ""
      }
    ]
  }
};

const getProjects = (key: PageKey) => {
  if (!key) return [];
  return projects[key].projects;
};

export { getProjects };
