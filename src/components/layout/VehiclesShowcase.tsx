import React from "react";
import { Route, Routes, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import VehiclesContainer from "../common/VehiclesContainer";

interface FadeTransitionProps {
  children: React.ReactNode;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const VehiclesShowcase: React.FC = () => {
  const location = useLocation();

  return (
    <main className="w-full ">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold ">Vehicles</h1>
      <ul className="flex justify-center gap-3 my-5 text-lg md:text-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:underline decoration-[#D2691E] ${
                isActive ? "underline" : ""
              }`
            }
          >
            New Arrivals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recommended"
            className={({ isActive }) =>
              `hover:underline decoration-[#D2691E] ${
                isActive ? "underline" : ""
              }`
            }
          >
            Recommended
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/most-views"
            className={({ isActive }) =>
              `hover:underline decoration-[#D2691E] ${
                isActive ? "underline" : ""
              }`
            }
          >
            Most Views
          </NavLink>
        </li>
      </ul>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <FadeTransition>
                <VehiclesContainer />
              </FadeTransition>
            }
          />
          <Route
            path="/recommended"
            element={
              <FadeTransition>
                <VehiclesContainer />
              </FadeTransition>
            }
          />
          <Route
            path="/most-views"
            element={
              <FadeTransition>
                <VehiclesContainer />
              </FadeTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

export default VehiclesShowcase;
