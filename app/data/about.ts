import worldClassTalentImg from "/about/desktop/image-world-class-talent.jpg";
import realDealImg from "/about/desktop/image-real-deal.jpg";

import australiaIllustrationImg from "/shared/desktop/illustration-australia.svg";
import canadaIllustrationImg from "/shared/desktop/illustration-canada.svg";
import ukIllustrationImg from "/shared/desktop/illustration-united-kingdom.svg";

export type Header = {
  title: string;
  description: string;
};

export type Section = string;
export type Sections = Array<Section>;

export type Talent = {
  title: string;
  sections: Sections;
  image: string;
};

export type Talents = Array<Talent>;

export type LocationSmall = {
  country: string;
  image: string;
  cta: "See location";
  route: string;
};

export type LocationsSmall = Array<LocationSmall>;

export type AboutCompanyType = {
  header: Header;
  talents: Talents;
  locations: LocationsSmall;
};

const about: AboutCompanyType = {
  header: {
    title: "About us",
    description:
      "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
  },
  talents: [
    {
      title: "World-class talent",
      sections: [
        "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully   crafted from concept to launch, ensuring success in its given market. We are constantly updating   our skills in a myriad of platforms.",
        "Our team is multi-disciplinary and we are not merely interested in form — content and meaning   are just as important. We give great importance to craftsmanship, service, and prompt delivery.   Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
      ],
      image: worldClassTalentImg
    },
    {
      title: "The real deal",
      sections: [
        "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every  opportunity. We make design and technology more accessible and give you tools to measure success.",
        "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
      ],
      image: realDealImg
    }
  ],
  locations: [
    {
      country: "Canada",
      image: canadaIllustrationImg,
      cta: "See location",
      route: "/"
    },
    {
      country: "Australia",
      image: australiaIllustrationImg,
      cta: "See location",
      route: "/"
    },
    {
      country: "United Kingdom",
      image: ukIllustrationImg,
      cta: "See location",
      route: "/"
    }
  ]
};
export { about };
