import { useState, useEffect } from "react";
import Hero from "@/components/layout/Hero";
import Navbar from "../components/layout/Navbar";
import ContentContainer from "@/components/layout/ContentContainer";
import Categories from "@/components/layout/Categories";
import bg_image from "../assets/images/pexels-photo-4869960.jpeg";
import Loader from "@/components/ui/Loader"; // Import the animated Loader
import QuadHighlights from "@/components/layout/QuadHighlights";
import Footer from "@/components/layout/Footer";
import VehiclesShowcase from "@/components/layout/VehiclesShowcase";
import { BrowserRouter as Router } from "react-router-dom";
import FindUs from "@/components/layout/FindUs";
import Lenis from "lenis";


const Home = () => {
  const [loading, setLoading] = useState(true); // State to track if the app is loading

  useEffect(() => {
    // Simulate a 3-second loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Clean up the timer if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  
  if (loading) {
    // Show the loader while loading is true
    return <Loader />;
  }

  // Once loading is complete, show the main app content
  return (
    <ContentContainer>
      <div
        className="relative bg-cover bg-center min-h-fit"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Categories />
      <Router>
        <VehiclesShowcase />
      </Router>
      <QuadHighlights />
      <FindUs />
      <Footer />
    </ContentContainer>
  );
};

export default Home;
