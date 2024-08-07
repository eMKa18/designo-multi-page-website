import passionate from "/home/desktop/illustration-passionate.svg";
import resourceful from "/home/desktop/illustration-resourceful.svg";
import friendly from "/home/desktop/illustration-friendly.svg";
import heroPhone from "/home/desktop/image-hero-phone.png";

export type CTAType = {
  title: string;
  description: string;
  cta: string;
  image?: string;
};

export type Attribute = {
  name: string;
  image: string;
  description: string;
};

export type Attributes = Array<Attribute>;

const home: { "lets-talk": CTAType; attributes: Attributes; award: CTAType } = {
  "lets-talk": {
    title: "Let’s talk about your project",
    description:
      "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.",
    cta: "Get in touch"
  },
  attributes: [
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
  ],
  award: {
    title: "Award-winning custom designs and digital branding solutions",
    description:
      "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
    cta: "Learn more",
    image: heroPhone
  }
};
export { home };
