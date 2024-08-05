import type { MetaFunction } from "@remix-run/node";
import { AwardPlague } from "~/components/AwardPlague";
import { ServicesGrid } from "~/components/ServicesGrid";

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
      image: "./home/desktop/image-web-design-large.jpg",
      mobileImage: "./home/desktop/image-web-design-small.jpg"
    },
    {
      name: "App Design",
      route: "app-desgin",
      image: "./home/desktop/image-app-design.jpg"
    },
    {
      name: "Graphic Design",
      route: "graphic-design",
      image: "./home/desktop/image-graphic-design.jpg"
    }
  ];
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full flex flex-col items-center mobile">
      <div className="flex justify-center w-full pt-10 pb-10">
        <nav className="flex justify-between items-center w-full">
          <div>
            <img src="./shared/desktop/logo-dark.png" alt="Logo" />
          </div>
          <div className="flex items-center justify-between w-1/4 uppercase text-sm tracking-wider">
            <div>Our company</div>
            <div>Locations</div>
            <div>Contact</div>
          </div>
        </nav>
      </div>
      <AwardPlague />
      <ServicesGrid services={services} />
    </div>
  );
}
