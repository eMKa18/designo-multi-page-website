import { Link } from "@remix-run/react";

const LetsTalk = () => {
  return (
    <div className="text-center w-full bg-accent rounded-xl bg-hero-pattern-home bg-repeat bg-contain grid xl:grid-cols-2 grid-cols-1 xl:p-24 p-14 mt-4 gap-4 z-20">
      <div className="text-white xl:text-left text-center grid grid-cols-1 gap-1">
        <h2 className="font-bold xl:text-4xl text-3xl break-words w-full">
          Let’s talk about your project
        </h2>
        <p className="w-full break-words">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="xl:ml-auto xl:my-auto mt-4">
        <Link to={""}>
          <button className="bg-white text-black py-4 px-8 rounded-lg">
            Get in touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export { LetsTalk };
