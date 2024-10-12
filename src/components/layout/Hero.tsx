import { MoveRight } from "lucide-react";
import orange_quad from "../../assets/images/orange_quad.png";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col md:max-2xl:flex-row md:max-2xl: items-center justify-start pt-10">
      <div className="text-center  text-white">
        <h1 className="uppercase text-3xl font-bold">Rent a quad or buggy</h1>
        <p className="text-lg font-medium">to enjoy the full Sahara experience</p>
      </div>
      <div className="px-10 ">
        <img src={orange_quad} alt="orange_quad" className="max-w-full h-auto" />
      </div>
      <div className="">
        <Button  variant="outline" className="px-20 text-base">Learn More <MoveRight className="mx-2 mt-1" /> </Button>
      </div>
    </div>
  );
};

export default Hero;
