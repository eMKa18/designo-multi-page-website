import { Link } from "@remix-run/react";

import rightArrow from "/shared/desktop/icon-right-arrow.svg";

const Service = ({
  service,
  useLarge
}: {
  service: {
    name: string;
    route: string;
    image: string;
    mobileImage?: string;
  };
  useLarge?: boolean;
}) => {
  return (
    <div className={`relative ${useLarge ? "xl:row-span-2" : ""}`}>
      {useLarge ? (
        <>
          <img
            className="rounded-xl object-cover w-full h-full hidden xl:block "
            src={service.image}
            alt={service.name}
          />
          <img
            className="rounded-xl object-cover w-full h-full block xl:hidden "
            src={service.mobileImage}
            alt={service.name}
          />
        </>
      ) : (
        <img
          className="rounded-xl object-cover w-full h-full"
          src={service.image}
          alt={service.name}
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
      <div className="absolute inset-0 text-center flex flex-col items-center justify-center text-white uppercase">
        <Link to={service.route} className="text-md group">
          <h2 className="text-2xl font-bold">{service.name}</h2>
          <div className="flex flex-row">
            <p className="mx-auto">View projects</p>
            <img
              className="my-auto mx-auto group-hover:animate-moveRight"
              src={rightArrow}
              alt="Arrow"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

const ServicesGrid = ({
  services,
  twoRows
}: {
  services: Array<{
    name: string;
    route: string;
    image: string;
    mobileImage?: string;
  }>;
  twoRows?: boolean;
}) => {
  return (
    <div className="">
      <div
        className={`grid xl:grid-cols-2 ${
          twoRows ? "xl:grid-rows-2" : ""
        } grid-cols-1 w-auto my-28 gap-6`}
      >
        {services.map((service, index) => (
          <Service
            service={service}
            useLarge={twoRows && index === 0}
            key={service.name}
          />
        ))}
      </div>
    </div>
  );
};

export { ServicesGrid };
