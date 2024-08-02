import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  return (
    <div className="w-[80%] flex flex-col items-center mobile">
      <div className="flex justify-center w-full pt-10 pb-10">
        <nav className="flex justify-between items-center w-full">
          <div className="">
            <img src="./shared/desktop/logo-dark.png" alt="Logo" />
          </div>
          <div className="flex items-center justify-between w-1/4">
            <div className="">Our company</div>
            <div>Locations</div>
            <div>Contact</div>
          </div>
        </nav>
      </div>
      <div className="w-full bg-red-400 rounded-xl grid grid-cols-3 relative min-h-[700px] bg-hero-pattern-home bg-no-repeat bg-right bg-contain">
        <div className="font-sans font-bold text-white flex flex-col justify-around items-center p-10 col-span-2">
          <h1 className="text-center">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-center">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="border border-black">Learn more</button>
        </div>
        <div className="relative flex justify-center items-center overflow-visible">
          <div className="h-full w-full rounded-xl overflow-hidden relative">
            <img
              className="absolute bottom-[-300px] left-[100px]"
              src="./home/desktop/image-hero-phone.png"
              alt="Hero phone"
              style={{
                transform: "scale(1.5)",
                transformOrigin: "bottom right"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
