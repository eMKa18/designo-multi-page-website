import type { MetaFunction } from "@remix-run/node";
import { AwardPlague } from "~/components/AwardPlague";
import { OurAttributes } from "~/components/OurAttributes";
import { ServicesGrid } from "~/components/ServicesGrid";
import webDesign from "/home/desktop/image-web-design-large.jpg";
import webDesignSmall from "/home/desktop/image-web-design-small.jpg";
import appDesign from "/home/desktop/image-app-design.jpg";
import graphicDesign from "/home/desktop/image-graphic-design.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  const services = [
    {
      name: "Web Design",
      route: "web-design",
      image: webDesign,
      mobileImage: webDesignSmall
    },
    {
      name: "App Design",
      route: "app-desgin",
      image: appDesign
    },
    {
      name: "Graphic Design",
      route: "graphic-design",
      image: graphicDesign
    }
  ];
  return (
    <div>
      <AwardPlague />
      <ServicesGrid services={services} />
      <OurAttributes />
    </div>
  );
}
