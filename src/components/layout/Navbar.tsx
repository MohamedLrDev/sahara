import { useState } from "react";
import saharaQuad_logo from "../../assets/icons/saharaQuad-logo-03.svg";
import { UserRound, ShoppingCart, Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-around text-lg font-semibold items-center w-full bg-slate-600 text-white">
      <div className=" w-16 md:max-2xl:w-20">
        <img
          src={saharaQuad_logo}
          alt="saharaQuad_logo"
          className="my-2 bg-cover w-full"
        />
      </div>

      <ul className="hidden md:flex space-x-4  ">
        <li>Home</li>
        <li>Categories</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>

      <ul className="hidden md:flex space-x-4">
        <li>
          <UserRound />
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[55px] w-full bg-slate-600 text-white flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <ul className="flex flex-col space-y-4 text-center">
            <li>Home</li>
            <li>Categories</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <UserRound />
            </li>
            <li>
              <ShoppingCart />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
