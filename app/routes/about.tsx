import { AboutUs } from "~/components/AboutUs";
import { LocationIllustrationsList } from "~/components/LocationIllustrationsList";
import { Talent } from "~/components/Talent";
import { about } from "~/data/about";

const About = () => {
  return (
    <div className="w-full">
      <AboutUs />
      <Talent talent={about.talents[0]} imgOnLeft />
      <Talent talent={about.talents[1]} />
      <LocationIllustrationsList />
    </div>
  );
};
export default About;
