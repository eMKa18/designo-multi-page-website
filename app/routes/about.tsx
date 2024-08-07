import { AboutUs } from "~/components/AboutUs";
import { TalentsDescription } from "~/components/TalentsDescription";
import { about } from "~/data/about";

const About = () => {
  return (
    <div className="w-full">
      <AboutUs />
      <TalentsDescription talent={about.talents[0]} imgOnLeft />
      <TalentsDescription talent={about.talents[1]} />
    </div>
  );
};
export default About;
