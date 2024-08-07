import { Attribute, Attributes, home } from "~/data/home";

const OurAttributes = () => {
  const attributes: Attributes = home.attributes;

  return (
    <div className="xl:w-full grid grid-cols-1 xl:grid-cols-3 text-center mb-6 ">
      {attributes.map((attribute: Attribute) => (
        <div
          key={attribute.name}
          className="xl:mx-2 xl:my-0 my-4 grid grid-cols-2 xl:flex xl:flex-col items-center"
        >
          <img
            className="mx-auto lg:scale-100 scale-75"
            src={attribute.image}
            alt={attribute.name}
          />
          <div className="">
            <h2 className="uppercase mb-3 font-semibold xl:mt-2">
              {attribute.name}
            </h2>
            <p className="font-light">{attribute.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { OurAttributes };
