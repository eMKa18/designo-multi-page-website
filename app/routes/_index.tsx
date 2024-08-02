import type { MetaFunction } from "@remix-run/node";

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
      <div className="w-full bg-accent rounded-xl grid xl:grid-cols-3 relative xl:min-h-[700px] bg-hero-pattern-home bg-no-repeat xl:bg-right xl:bg-contain bg-auto">
        <div className="font-sans font-bold text-white flex flex-col justify-around lg:items-start items-center xl:p-[100px] md:p-24 p-16 xl:col-span-2 text-center xl:text-left">
          <h1 className="lg:text-7xl text-4xl xl:mb-4.5 lg:mb-2 mb-4">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="lg:pr-[150px] xl:mb-4.5 lg:mb-2 mb-4">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="bg-white text-black xl:rounded-md rounded py-4 px-8 mb-10">
            Learn more
          </button>
          <div className="relative w-full flex justify-center items-center mt-10 xl:hidden">
            <img
              className="scale-75 md:scale-100 lg:scale-125"
              src="./home/desktop/image-hero-phone.png"
              alt="Hero phone"
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center overflow-hidden hidden xl:flex xl:col-span-1">
          <div className="h-full w-full rounded-xl overflow-hidden relative">
            <img
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-75 md:scale-100 lg:scale-125"
              src="./home/desktop/image-hero-phone.png"
              alt="Hero phone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
