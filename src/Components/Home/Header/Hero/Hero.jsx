import img from "../../../../assets/bannerImg.png";
const Hero = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-start">
        <h2 className="font-bebas text-white text-7xl font-medium tracking-wide bg-red/20">
          Taste the authentic Saudi cuisine
        </h2>
        <p className="font-roboto text-lg font-normal  text-white">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.{" "}
        </p>
        <button className="font-roboto text-blue bg-yellow px-6 py-2 text-base font-bold uppercase">
          Explore Menu
        </button>
      </div>
      <img src={img} alt="" className="h-96 w-96" />
    </div>
  );
};

export default Hero;
