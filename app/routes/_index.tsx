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
      <ServicesGrid />
    </div>
  );
}
