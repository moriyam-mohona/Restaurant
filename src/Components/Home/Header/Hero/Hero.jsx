import img from "../../../../assets/bannerImg.png";
const Hero = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-start">
        <h2>Taste the authentic Saudi cuisine</h2>
        <p>
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
