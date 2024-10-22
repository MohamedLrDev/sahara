import Hero from "@/components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import ContentContainer from "@/components/layout/ContentContainer";
import Categories from "@/components/layout/Categories";
import bg_image from '../assets/images/pexels-photo-4869960.jpeg';

const Home = () => {
  return (
    <ContentContainer>
      {/* Set relative positioning to make sure absolute children are contained */}
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        {/* The black overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>

        {/* Make sure Navbar and Hero are above the overlay using z-index */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Categories />
    </ContentContainer>
  );
};

export default Home;
