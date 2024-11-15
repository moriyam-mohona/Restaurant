import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/x.png";
import insta from "../../../assets/insta.png";
import linkedin from "../../../assets/LinkedIn.png";
import clock from "../../../assets/clock.png";
import call from "../../../assets/call.png";
import mail from "../../../assets/mail.png";
import map from "../../../assets/location.png";

const Footer = () => {
  return (
    <div className="bg-footer-bg relative text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      {/* Content */}
      <div className="relative z-20 lg:py-[120px] py-4 md:py-8 custom-container text-center">
        <h3 className="uppercase font-bebas xl:text-[62px] lg:text-5xl text-[40px] text-white">
          We are ready to provide you with the best dining experiences
        </h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-1 flex flex-col items-center">
            <img src={clock} alt="" />

            <h3 className="font-bebas text-2xl font-bold mb-2 mt-6">
              Opening hours
            </h3>
            <p className="text-white">
              Monday - Sunday <br /> 9:00 AM to 11:30 PM
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <img src={call} alt="" />

            <h3 className="font-bebas text-2xl font-bold mb-2 mt-6">
              LET'S TALK
            </h3>
            <p className="text-white">
              Phone: 1-800-222-4545 <br />
              Fax: 1-800-222-4545
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <img src={mail} alt="" />

            <h3 className="font-bebas text-2xl font-bold mb-2 mt-6">
              BOOK A TABLE
            </h3>
            <p className="text-white">
              Email: demo@website.com <br /> Support: support@website.com
            </p>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <img src={map} alt="" />

            <h3 className="font-bebas text-2xl font-bold mb-2 mt-6">
              Our Address
            </h3>
            <p className="text-white">
              123 Stree New York City , United <br /> States Of America.
            </p>
          </div>
        </div>
        <div className="mt-[120px] flex justify-center gap-6">
          <img src={facebook} alt="" className="border p-2 rounded-full" />
          <img src={twitter} alt="" className="border p-2 rounded-full" />
          <img src={insta} alt="" className="border p-2 rounded-full" />
          <img src={linkedin} alt="" className="border p-2 rounded-full" />
        </div>
        <div className="mt-4 ">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
