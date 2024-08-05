import { Link } from "@remix-run/react";

const ServicesGrid = () => {
  const services = [
    {
      name: "Web Design",
      route: "web-design",
      image: "./home/desktop/image-web-design-large.jpg"
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
    <>
      <div className="grid grid-cols-2 grid-rows-2 my-28 gap-6">
        {services.map((service, index) => {
          if (index === 0)
            return (
              <div className="row-span-2 relative">
                <img
                  className="rounded-xl object-cover"
                  src={service.image}
                  alt={service.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 text-center flex flex-col items-center justify-center text-white uppercase">
                  <h2 className="text-2xl font-bold">{service.name}</h2>
                  <Link to={service.route} className="text-md">
                    View projects
                  </Link>
                </div>
              </div>
            );
          else {
            return (
              <div className="relative">
                <img
                  className="rounded-xl object-cover"
                  src={service.image}
                  alt={service.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 text-center flex flex-col items-center justify-center text-white uppercase">
                  <h2 className="text-2xl font-bold">{service.name}</h2>
                  <Link to={service.route} className="text-md">
                    View projects
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export { ServicesGrid };
