import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  return (
    <div className="w-3/4 flex flex-col items-center mobile">
      <div className="flex justify-center w-full pt-10 pb-10">
        <nav className="flex justify-between items-center w-full border border-yellow-400">
          <div className="border border-pink-400">
            <img src="/public/shared/desktop/logo-dark.png" alt="Logo" />
          </div>

          <div className="flex items-center justify-between w-1/4 border border-red-700">
            <div className="">Our company</div>
            <div>Locations</div>
            <div>Contact</div>
          </div>
        </nav>
      </div>
      <div className="w-full bg-red-400 rounded-md border border-red-400 flex flex-row">
        <h1>Award-wining custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <img src="/public/home/desktop/image-hero-phone.png" alt="Hero phone" />
        {/* CSS as a background? */}
        <img
          src="/public/home/desktop/bg-pattern-hero-home.svg"
          alt="Background"
        />
        <button>Learn more</button>
      </div>
    </div>
  );
}
