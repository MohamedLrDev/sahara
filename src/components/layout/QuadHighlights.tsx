import sahara_bg from "../../assets/images/sahara_bg.jpg";
// import quad_rider from "../../assets/images/quad_rider.png";
import { Button } from "@/components/ui/button";
import { Clock, ShieldCheck, Headphones, Award } from "lucide-react";

// Highlights Data
const highlights = [
  {
    id: 1,
    icon: <Award className="w-20 h-auto text-blue-500" />,
    title: "Quality",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 2,
    icon: <Clock className="w-20 h-auto text-blue-500" />,
    title: "Time",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-20 h-auto text-blue-500" />,
    title: "Safety",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 4,
    icon: <Headphones className="w-20 h-auto text-blue-500" />,
    title: "Support",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];

const QuadHighlights = () => {
  return (
    <main className="w-full pt-5">
      <div className=" w-full flex flex-col md:flex-row-reverse justify-center  items-center ">
        <div className="w-full   max-w-[100vh] ">
          <img
            src={sahara_bg}
            alt="sahara_bg"
            className="w-full object-containe" // Ensures the background image is responsive
          />
          
        </div>

        <div className="py-10 px-10  xl:max-3xl:px-24">
          <h1 className="text-2xl xl:text-4xl font-bold leading-tight">
            Exploring The Excitement Of Buggies And Quads
          </h1>
          <p className="text-gray-600 xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nostrum
            laborum ut est dolorious suscipit eligendi provident facere ipsa
            laboriosae fuga.
          </p>

          {/* Highlights Section */}
          <div className="grid grid-cols-2 gap-6 pt-10 pb-6">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="flex items-start space-x-3">
                {highlight.icon}
                <div>
                  <h3 className="font-semibold xl:text-2xl">{highlight.title}</h3>
                  <p className="text-sm xl:text-lg text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center xl:justify-start">
            <Button className="bg-black text-white xl:text-lg px-10 py-2 rounded-none">
              VIEW MORE
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuadHighlights;
