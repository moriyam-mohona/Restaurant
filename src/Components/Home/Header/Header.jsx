import Hero from "./Hero/Hero";
import Navbar from "./Navbar/navbar";
import bg from "../../../assets/bannerBg.png";

const Header = () => {
  return (
    <div className="relative w-full h-screen bg-red">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Main Content */}
      <div className="px-56">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Header;
