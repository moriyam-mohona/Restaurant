import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="h-28 py-8 flex justify-between">
      <div className="flex items-center gap-10 max-w-52">
        {/* Logo  */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9" />
          <p className="font-poppins text-white font-semibold text-xl">
            Restau<span className="font-normal">rant</span>
          </p>
        </div>
        {/* NavItems  */}
        <div className="flex justify-between gap-10 font-raleway text-white">
          <Link className="text-sm font-medium">Home</Link>
          <Link className="text-sm font-medium">About</Link>
          <Link className="text-sm font-medium">Portfolio</Link>
          <Link className="text-sm font-medium">Clients</Link>
          <Link className="text-sm font-medium">Blog</Link>
          <Link className="text-sm font-medium">Contact</Link>
        </div>
      </div>
      <button className="font-roboto text-blue bg-yellow px-6 py-1 ml-48 text-base font-bold uppercase">
        Book a table
      </button>
    </div>
  );
};

export default Navbar;
