import aboutHeroImg from "/about/desktop/image-about-hero.jpg";

const AboutUs = () => {
  return (
    <div className="bg-accent rounded-xl grid grid-cols-1 xl:grid-cols-3 gap-4 bg-hero-pattern-about bg-no-repeat mb-8">
      <div className="flex flex-col xl:text-left text-center text-white xl:col-span-2 xl:m-auto my-4 xl:pl-24 p-4 xl:order-1 order-2">
        <h2 className="xl:text-4xl text-3xl mb-2 font-bold">About us</h2>
        <p className="mx-auto break-words text-xl">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients' audiences.
        </p>
      </div>
      <div className="xl:ml-auto xl:mr-0 mx-auto xl:my-0 xl:order-2 order-1">
        <img
          className="xl:rounded-r-xl xl:rounded-l-none rounded-t-xl"
          src={aboutHeroImg}
          alt="Peple around the table"
        />
      </div>
    </div>
  );
};
export { AboutUs };
