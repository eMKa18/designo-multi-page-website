import expressImg from "/web-design/desktop/image-express.jpg";
import transferImg from "/web-design/desktop/image-transfer.jpg";
import photonImg from "/web-design/desktop/image-photon.jpg";
import builderImg from "/web-design/desktop/image-builder.jpg";
import blogrImg from "/web-design/desktop/image-blogr.jpg";
import campImg from "/web-design/desktop/image-camp.jpg";

import airfilterImg from "/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "/app-design/desktop/image-eyecam.jpg";
import faceitImg from "/app-design/desktop/image-faceit.jpg";
import loopstudiosImg from "/app-design/desktop/image-loopstudios.jpg";
import todoImg from "/app-design/desktop/image-todo.jpg";

import boxedWaterImg from "/graphic-design/desktop/image-boxed-water.jpg";
import changeImg from "/graphic-design/desktop/image-change.jpg";
import scienceImg from "/graphic-design/desktop/image-science.jpg";

export type ProjectRepresentation = {
  name: string;
  description: string;
  image: string;
};

export type Projects = Array<ProjectRepresentation>;

export type PageKey = "web-design" | "app-design" | "graphic-design";

const projects: { [K in PageKey]: { projects: Array<ProjectRepresentation> } } =
  {
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
          image: airfilterImg
        },
        {
          name: "Eyecam",
          description:
            "Product that lets you edit your favorite photos and videos at any time",
          image: eyecamImg
        },
        {
          name: "Faceit",
          description:
            "Get to meet your favorite internet superstar with the faceit app",
          image: faceitImg
        },
        {
          name: "Todo",
          description:
            "A todo app that features cloud sync with light and dark mode",
          image: todoImg
        },
        {
          name: "Loopstudios",
          description: "A VR experience app made for Loopstudios",
          image: loopstudiosImg
        }
      ]
    },
    "graphic-design": {
      projects: [
        {
          name: "Tim Brown",
          description:
            "A book cover designed for Tim Brown’s new release, ‘Change’",
          image: changeImg
        },
        {
          name: "Boxed Water",
          description: "A simple packaging concept made for Boxed Water",
          image: boxedWaterImg
        },
        {
          name: "Science!",
          description:
            "A poster made in collaboration with the Federal Art Project",
          image: scienceImg
        }
      ]
    }
  };

const getProjects = (key: PageKey) => {
  if (!key) return [];
  return projects[key].projects;
};

export { getProjects };
