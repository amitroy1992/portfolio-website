import React, { useState, useContext } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { ThemeContext } from "../../Context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-black dark:text-white shadow-md">
      
      {/* Logo */}
      <span className="text-xl font-bold">
        Amit Roy
      </span>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent text-center md:text-left gap-6 p-6 md:p-0 transition-all`}
      >
        <a href="#About" onClick={() => setMenu(false)}>
          <li className="hover:text-blue-400 transition duration-300">
            About
          </li>
        </a>

        <a href="#Experience" onClick={() => setMenu(false)}>
          <li className="hover:text-blue-400 transition duration-300">
            Experience
          </li>
        </a>

        <a href="#Projects" onClick={() => setMenu(false)}>
          <li className="hover:text-blue-400 transition duration-300">
            Projects
          </li>
        </a>

        <a href="#Dashboards" onClick={() => setMenu(false)}>
          <li className="transition-all duration-300 hover:text-blue-400">
            Dashboards
          </li>
        </a>

        <a href="#Contact" onClick={() => setMenu(false)}>
          <li className="hover:text-blue-400 transition duration-300">
            Contact
          </li>
        </a>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-6">

        {/* Theme Toggle */}
        <div
          onClick={toggleTheme}
          className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all"
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 flex items-center justify-center ${
              theme === "dark" ? "translate-x-6" : ""
            }`}
          >
            {theme === "dark" ? (
              <BsSun size={14} className="text-yellow-500" />
            ) : (
              <BsMoon size={14} className="text-gray-800" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {menu ? (
            <RiCloseLine size={30} onClick={() => setMenu(false)} />
          ) : (
            <RiMenu2Line size={30} onClick={() => setMenu(true)} />
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;