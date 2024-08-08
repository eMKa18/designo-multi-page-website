import { Talent as TalentType } from "~/data/about";

const TalentImage = ({
  talent,
  left
}: {
  talent: TalentType;
  left?: boolean;
}) => {
  return (
    <img
      className={`${
        left
          ? "xl:rounded-l-xl xl:rounded-r-none"
          : "xl:rounded-r-xl xl:rounded-l-none"
      } rounded-xl`}
      src={talent.image}
      alt={talent.title}
    />
  );
};

const TalentDescription = ({ talent }: { talent: TalentType }) => {
  return (
    <>
      <h2 className="text-3xl xl:text-4xl mb-2 text-accent font-bold">
        {talent.title}
      </h2>
      <div className="mb-4 xl:mb-0">
        {talent.sections.map((section, index) => (
          <div key={`section-${index}`}>
            <p>{section}</p>
            {index !== talent.sections.length - 1 ? <br /> : null}
          </div>
        ))}
      </div>
    </>
  );
};

const Talent = ({
  talent,
  imgOnLeft
}: {
  talent: TalentType;
  imgOnLeft?: boolean;
}) => {
  const imageOnLeft = () => {
    return (
      <>
        <div className={`mx-auto xl:mx-0`}>
          <TalentImage talent={talent} left />
        </div>
        <div
          className={`xl:col-span-2 xl:my-auto mx-8 xl:text-left text-center`}
        >
          <TalentDescription talent={talent} />
        </div>
      </>
    );
  };

  const imageOnRight = () => {
    return (
      <>
        <div
          className={`xl:col-span-2 xl:my-auto mx-8 xl:text-left text-center xl:order-1 order-2`}
        >
          <TalentDescription talent={talent} />
        </div>
        <div className={`mx-auto xl:ml-auto xl:mr-0 xl:order-2 order-1`}>
          <TalentImage talent={talent} />
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="bg-accent-light rounded-xl my-8 grid grid-cols-1 xl:grid-cols-3 gap-2">
        {imgOnLeft ? imageOnLeft() : imageOnRight()}
      </div>
    </div>
  );
};
export { Talent };
