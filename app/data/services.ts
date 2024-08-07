import webDesign from "/home/desktop/image-web-design-large.jpg";
import webDesignSmall from "/home/desktop/image-web-design-small.jpg";
import appDesign from "/home/desktop/image-app-design.jpg";
import graphicDesign from "/home/desktop/image-graphic-design.jpg";
import { PageKey } from "./projects";

export type ServiceType = {
  key: string;
  name: string;
  route: string;
  image: string;
  mobileImage?: string;
};

const services: Array<ServiceType> = [
  {
    key: "web-design",
    name: "Web Design",
    route: "/services/web-design",
    image: webDesign,
    mobileImage: webDesignSmall
  },
  {
    key: "app-design",
    name: "App Design",
    route: "/services/app-desgin",
    image: appDesign
  },
  {
    key: "graphic-design",
    name: "Graphic Design",
    route: "/services/graphic-design",
    image: graphicDesign
  }
];

const getServices = (key?: PageKey) => {
  if (!key) return services;
  else return services.filter((service) => service.key !== key);
};

const getService = (key: PageKey) => {
  if (!key) return { name: "" };
  const service = services.find((service) => service.key === key);
  return !service
    ? ({ name: "", key: "", route: "", image: "" } as ServiceType)
    : service;
};

export { getServices, getService };
