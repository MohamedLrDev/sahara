import Hero from "../components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import bg from "../assets/images/pexels-photo-4869960.jpeg";

const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className=" relative z-10 ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
