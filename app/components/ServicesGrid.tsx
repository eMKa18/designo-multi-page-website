import { Link } from "@remix-run/react";

const ServicesGrid = ({
  services
}: {
  services: Array<{
    name: string;
    route: string;
    image: string;
    mobileImage?: string;
  }>;
}) => {
  return (
    <div className="">
      <div className="grid xl:grid-cols-2 xl:grid-rows-2 grid-cols-1 w-auto my-28 gap-6">
        {services.map((service, index) => {
          if (index === 0)
            return (
              <div className="xl:row-span-2 relative">
                <img
                  className="rounded-xl object-cover hidden xl:block w-full h-full"
                  src={service.image}
                  alt={service.name}
                />
                <img
                  className="rounded-xl object-cover block xl:hidden w-full h-full"
                  src={service.mobileImage}
                  alt={service.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
                <div className="absolute inset-0 text-center flex flex-col items-center justify-center text-white uppercase">
                  <h2 className="text-2xl font-bold">{service.name}</h2>
                  <Link to={service.route} className="text-md">
                    <div className="flex flex-row">
                      View projects
                      <img
                        className="m-auto ml-2"
                        src="./shared/desktop/icon-right-arrow.svg"
                        alt="Arrow"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            );
          else
            return (
              <div className="relative">
                <img
                  className="rounded-xl object-cover w-full h-full"
                  src={service.image}
                  alt={service.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
                <div className="absolute inset-0 text-center flex flex-col items-center justify-center text-white uppercase">
                  <h2 className="text-2xl font-bold">{service.name}</h2>
                  <Link to={service.route} className="text-md">
                    <div className="flex flex-row">
                      View projects
                      <img
                        className="m-auto ml-2"
                        src="./shared/desktop/icon-right-arrow.svg"
                        alt="Arrow"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export { ServicesGrid };
