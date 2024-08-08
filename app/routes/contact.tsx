import { LocationIllustrationsList } from "~/components/LocationIllustrationsList";
import { contact } from "~/data/contact";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="bg-accent bg-hero-pattern-contact bg-no-repeat grid grid-cols-2 rounded-xl ">
        <div className="text-white m-auto xl:text-left text-center pl-24">
          <h2 className="xl:text-4xl text-3xl font-bold pb-4">
            {contact.title}
          </h2>
          <p className="">{contact.description}</p>
        </div>
        <div>
          <form action="submit" className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4 text-white py-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-accent border border-white rounded-md"
              />
              <label htmlFor="email" className="text-right">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-accent border border-white rounded-md"
              />
              <label htmlFor="phone" className="text-right">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="bg-accent border border-white rounded-md"
              />
              <label htmlFor="msg" className="text-right">
                Your message
              </label>
              <input
                type="text"
                name="msg"
                id="msg"
                className="bg-accent border border-white rounded-md"
              />
            </div>

            <span className="col-span-2 ml-auto pr-8 pb-8">
              <button
                className="bg-white uppercase font-semibold px-8 py-4 rounded-xl col-start-2"
                type="submit"
              >
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
      <LocationIllustrationsList />
    </div>
  );
};

export default Contact;
