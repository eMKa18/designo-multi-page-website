const ServiceIntro = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-accent rounded-xl text-center text-white p-20 bg-hero-pattern-intro-web bg-no-repeat bg-right mb-8">
      <h1 className="text-4xl sm:text-3xl font-bold mb-8">{title}</h1>
      <h2 className="w-[50%] mx-auto">{description}</h2>
    </div>
  );
};

export { ServiceIntro };
