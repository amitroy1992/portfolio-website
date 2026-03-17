import React, { useState, useContext } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { ThemeContext } from "../../Context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 md:px-20 py-6 bg-white dark:bg-gray-900 text-black dark:text-white transition-all">

      {/* Logo */}

      <span className="text-xl font-bold">
        Amit Roy
      </span>


      {/* Navigation Links */}

      <ul
        className={`${
          menu ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent text-center md:text-left gap-6 p-6 md:p-0 transition-all`}
      >

        <a href="#About">
          <li className="hover:text-blue-400 transition duration-300">
            About
          </li>
        </a>

        <a href="#Experience">
          <li className="hover:text-blue-400 transition duration-300">
            Experience
          </li>
        </a>

        <a href="#Projects">
          <li className="hover:text-blue-400 transition duration-300">
            Projects
          </li>
        </a>

        <a href="#Dashboards">
  <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400">
    Dashboards
  </li>
</a>

        <a href="#Contact">
          <li className="hover:text-blue-400 transition duration-300">
            Contact
          </li>
        </a>

      </ul>


      {/* Right side buttons */}

      <div className="flex items-center gap-6">

        {/* Animated Theme Toggle */}

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


        {/* Mobile Menu Icon */}

        <div className="md:hidden">

          {menu ? (

            <RiCloseLine
              size={30}
              onClick={() => setMenu(false)}
            />

          ) : (

            <RiMenu2Line
              size={30}
              onClick={() => setMenu(true)}
            />

          )}

        </div>

      </div>

    </nav>

  );
};

export default Navbar;