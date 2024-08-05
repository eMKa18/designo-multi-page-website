const Footer = () => {
  return (
    <div className="text-center bg-black -mt-16 z-20 pt-36 pb-36">
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between items-center">
          <img
            className="scale-75 -ml-12"
            src="./shared/desktop/logo-light.png"
            alt="Logo"
          />
          <div className="flex items-center justify-between w-1/4 uppercase text-sm tracking-wider text-white">
            <div>Our company</div>
            <div>Locations</div>
            <div>Contact</div>
          </div>
        </div>
        <hr className="text-white opacity-20 my-8" />
        <div className="text-gray-400 grid md:grid-cols-3 grid-cols-1 text-left">
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
          <div className="grid grid-cols-5 gap-4 md:ml-auto md:mt-auto mt-2 md:mx-0 mx-auto ml-0">
            <img src="./shared/desktop/icon-facebook.svg" alt="Facebook" />
            <img src="./shared/desktop/icon-youtube.svg" alt="YouTube" />
            <img src="./shared/desktop/icon-twitter.svg" alt="Twitter" />
            <img src="./shared/desktop/icon-pinterest.svg" alt="Pinterest" />
            <img src="./shared/desktop/icon-instagram.svg" alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
export { Footer };
