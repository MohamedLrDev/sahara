import { useState, useEffect } from "react";
import saharaQuad_logo from "../../assets/icons/saharaQuad-logo-03.svg";
import { UserRound, ShoppingCart, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
<nav className="flex justify-around text-lg  items-center w-full bg-slate-600 text-white">
  <div className="w-full max-w-screen-3xl mx-auto  py-2 px-10 text-white flex justify-around items-center">
        <div className="w-16 md:max-2xl:w-15">
          <a href="#">
            <img
              src={saharaQuad_logo}
              alt="saharaQuad_logo"
              className="my-2 bg-cover w-full"
            />
          </a>
        </div>

        <ul className="hidden md:flex space-x-4">
          {["Home", "Categories", "About Us", "Contact"].map((item) => (
            <li
              key={item}
              className="group relative text-[3vw] 3xl:text-xl md:text-[1rem] hover:text-gray-400"
            >
              <a  
                href="#"
                className="relative transition-colors hover:text-gray-300"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:bg-gray-100"></span>
              </a>
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#">
              <UserRound className="hover:text-gray-400" />
            </a>
          </li>
          <li>
            <a href="#">
              <ShoppingCart className="hover:text-gray-400" />
            </a>
          </li>
        </ul>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[70px] w-full bg-[#2E5051] text-white flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <ul className="flex flex-col space-y-4 text-center">
            {["Home", "Categories", "Find Us", "Contact"].map((item) => (
              <li key={item} className="text-[3vw] md:text-[1rem]">
                <a
                  href="#"
                  className="relative transition-colors hover:text-gray-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex space-x-4">
            <li>
              <a href="#">
                <UserRound />
              </a>
            </li>
            <li>
              <a href="#">
                <ShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
