import heroPhone from "/home/desktop/image-hero-phone.png";

const AwardPlague = () => {
  return (
    <div className="w-full bg-accent rounded-xl grid xl:grid-cols-3 relative xl:min-h-[700px] bg-hero-pattern-home bg-no-repeat xl:bg-right xl:bg-contain bg-auto min-h-[700px]">
      <div className="font-sans font-bold text-white flex flex-col justify-around xl:items-start items-center xl:p-[100px] md:p-24 lg:p-10 p-8 xl:col-span-2 text-center xl:text-left overflow-hidden">
        <h1 className="lg:text-7xl text-4xl xl:mb-4.5 lg:mb-2 mb-4">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mx-10 xl:mx-0 xl:mb-4.5 lg:mb-2 md:mb-1">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="bg-white text-black xl:rounded-md rounded py-4 px-8 xl:mb-10 mb-4">
          Learn more
        </button>
        <div className="relative w-full flex justify-center items-center xl:hidden">
          <img
            className="scale-50 md:scale-75 lg:scale-100 lg:-bottom-[600px] md:-bottom-[500px] -bottom-[350px] absolute"
            src={heroPhone}
            alt="Hero phone"
          />
        </div>
      </div>
      <div className="relative justify-center items-center overflow-hidden hidden xl:flex xl:col-span-1">
        <div className="h-full w-full rounded-xl overflow-hidden relative">
          <img
            className="absolute xl:-bottom-24 lg:-bottom-20 left-1/2 transform -translate-x-1/2 scale-50 md:scale-75 lg:scale-100 xl:scale-125"
            src={heroPhone}
            alt="Hero phone"
          />
        </div>
      </div>
    </div>
  );
};

export { AwardPlague };
