import passionate from "/home/desktop/illustration-passionate.svg";
import resourceful from "/home/desktop/illustration-resourceful.svg";
import friendly from "/home/desktop/illustration-friendly.svg";

const OurAttributes = () => {
  const attributes = [
    {
      name: "Passionate",
      image: passionate,
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
    },
    {
      name: "Resourceful",
      image: resourceful,
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
    },
    {
      name: "Friendly",
      image: friendly,
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
    }
  ];

  return (
    <div className="xl:w-full grid grid-cols-1 xl:grid-cols-3 text-center mb-6 ">
      {attributes.map((attribute) => (
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
