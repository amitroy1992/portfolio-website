import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import AboutImg from "../../assets/about_me_profile_pic.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      id="About"
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      } py-16 px-6 md:px-20`}
    >
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>

        <p
          className={`mt-3 text-md md:text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Data Analyst | Frontend Developer with 5 years of experience
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
            Why Me?
          </h3>

          <ul
            className={`space-y-3 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>✔ 5 years of industry experience</li>
            <li>✔ Real business data analysis (Restaurant + Sales)</li>
            <li>✔ Strong SQL + Power BI + Excel skills</li>
            <li>✔ Ability to turn raw data into insights</li>
          </ul>

          <img
            src={AboutImg}
            alt="Data Analyst"
            className="mt-6 rounded-xl shadow-lg 
            hover:scale-105 transition duration-300"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* DATA ANALYSIS */}
          <div className="flex gap-4">
            <IoArrowForward size={28} className="mt-1 text-blue-400" />
            <div>
              <h4 className="text-xl font-bold text-blue-400">
                Data Analysis
              </h4>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I analyze business data using SQL, Excel, and Python to identify
                trends, extract insights, and support data-driven decisions.
              </p>
            </div>
          </div>

          {/* DATA VISUALIZATION */}
          <div className="flex gap-4">
            <IoArrowForward size={28} className="mt-1 text-blue-400" />
            <div>
              <h4 className="text-xl font-bold text-blue-400">
                Data Visualization
              </h4>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I build interactive dashboards using Power BI and Tableau to
                visualize business performance and key metrics.
              </p>
            </div>
          </div>

          {/* BUSINESS INSIGHTS */}
          <div className="flex gap-4">
            <IoArrowForward size={28} className="mt-1 text-blue-400" />
            <div>
              <h4 className="text-xl font-bold text-blue-400">
                Business Insights
              </h4>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I transform raw data into actionable insights to improve
                strategy, optimize performance, and drive growth.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;