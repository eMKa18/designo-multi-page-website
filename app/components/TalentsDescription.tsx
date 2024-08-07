import { Talent } from "~/data/about";
import { about } from "~/data/about";

const TalentsDescription = ({
  talent,
  imgOnLeft
}: {
  talent: Talent;
  imgOnLeft?: boolean;
}) => {
  return (
    <div>
      <div className="bg-accent-light rounded-xl my-8 grid grid-cols-1 xl:grid-cols-3">
        <div>
          <img className="rounded-l-xl" src={talent.image} alt={talent.title} />
        </div>
        <div className="xl:col-span-2">
          <h2 className="text-3xl xl:text-4xl">{talent.title}</h2>
          {talent.sections.map((section, index) => (
            <p key={`section-${index}`}>{section}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export { TalentsDescription };
