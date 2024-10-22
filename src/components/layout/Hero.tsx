import orange_quad from "../../assets/images/orange_quad.png";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <main className=" px-10 text-white py-10 xl:max-3xl:px-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="text-center  md:text-left md:w-1/2 space-y-4 md:mr-8">
          <h1 className="text-4xl font-semibold 3xl:text-6xl 2xl:text-5xl">
            Rent A Buggy Or Quad
          </h1>
          <p className="text-2xl 3xl:text-3xl ">
            to enjoy the full Sahara experience
          </p>
          <div className="max-[768px]:hidden mt-6">
            <Button variant="outline" className="px-20">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2 max-w-[40rem] ">
          <img src={orange_quad} alt="orange_quad" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex justify-center mt-6 md:max-4xl:hidden">
        <Button variant="outline" className="px-20">
          Learn More
        </Button>
      </div>
    </main>
  );
};

export default Hero;
