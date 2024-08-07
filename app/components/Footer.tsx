import logoLight from "/shared/desktop/logo-light.png";
import facebookLogo from "/shared/desktop/icon-facebook.svg";
import youtubeLogo from "/shared/desktop/icon-youtube.svg";
import twitterLogo from "/shared/desktop/icon-twitter.svg";
import pinterestLogo from "/shared/desktop/icon-pinterest.svg";
import instagramLogo from "/shared/desktop/icon-instagram.svg";
import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <div className="text-center bg-black -mt-16 z-20 pt-36 pb-36">
      <div className="md:w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img className="scale-75 -ml-12" src={logoLight} alt="Logo" />
          </Link>
          <div className="flex items-center justify-between w-1/4 uppercase text-sm tracking-wider text-white">
            <Link to={"/about"}>
              <span>Our company</span>
            </Link>
            <div>Locations</div>
            <div>Contact</div>
          </div>
        </div>
        <hr className="text-white opacity-20 my-8" />
        <div className="text-gray-400 grid md:grid-cols-3 grid-cols-1 md:text-left text-center">
          <div className="md:my-0 my-1">
            <h6 className="font-bold">Designo Central Office</h6>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div>
            <div className="font-bold md:my-0 my-1">
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967 </p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 md:ml-auto md:mt-auto mt-2 md:mx-0 mx-auto">
            <img src={facebookLogo} alt="Facebook" />
            <img src={youtubeLogo} alt="YouTube" />
            <img src={twitterLogo} alt="Twitter" />
            <img src={pinterestLogo} alt="Pinterest" />
            <img src={instagramLogo} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
export { Footer };
