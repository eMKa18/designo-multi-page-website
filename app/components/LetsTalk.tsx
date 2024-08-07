import { Link } from "@remix-run/react";
import { home, CTAType } from "~/data/home";

const LetsTalk = () => {
  const letsTalk: CTAType = home["lets-talk"];

  return (
    <div className="text-center w-full bg-accent rounded-xl bg-hero-pattern-call-to-action bg-no-repeat bg-right grid xl:grid-cols-2 grid-cols-1 xl:p-24 p-14 mt-4 gap-4 z-20">
      <div className="text-white xl:text-left text-center grid grid-cols-1 gap-1">
        <h2 className="font-bold xl:text-4xl text-3xl break-words w-full">
          {letsTalk.title}
        </h2>
        <p className="w-full break-words">{letsTalk.description}</p>
      </div>
      <div className="xl:ml-auto xl:my-auto mt-4">
        <Link to={""}>
          <button className="bg-white text-black py-4 px-8 rounded-lg">
            {letsTalk.cta}
          </button>
        </Link>
      </div>
    </div>
  );
};

export { LetsTalk };
