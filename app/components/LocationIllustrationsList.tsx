import { Link } from "@remix-run/react";
import { about, LocationSmall } from "~/data/about";

const LocationCircleImage = ({ location }: { location: LocationSmall }) => {
  return (
    <div className="bg-accent-light rounded-full h-full">
      <img
        className="w-full h-full"
        src={location.image}
        alt={location.country}
      />
    </div>
  );
};

const LocationIllustration = ({ location }: { location: LocationSmall }) => {
  return (
    <div className="flex flex-col items-center">
      <LocationCircleImage location={location} />
      <h2 className="my-4 xl:text-3xl text-2x text-black">
        {location.country}
      </h2>
      <Link to={location.route}>
        <button
          className="bg-accent py-2 px-4 rounded-md text-white"
          type="button"
        >
          {location.cta}
        </button>
      </Link>
    </div>
  );
};

const LocationIllustrationsList = () => {
  const locations = about.locations;
  return (
    <div className="flex xl:flex-row flex-col justify-between items-center px-16 py-8">
      {locations.map((location) => (
        <LocationIllustration location={location} key={location.country} />
      ))}
    </div>
  );
};
export { LocationIllustrationsList };
