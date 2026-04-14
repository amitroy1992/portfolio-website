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

        <p className="mt-2 text-lg font-semibold text-blue-400">
          I turn raw data into decisions that drive revenue.
        </p>

        <p
          className={`mt-3 text-md md:text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Data Analyst | SQL | Power BI | Python | Business-Focused Analytics
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-blue-400">
            Why Me?
          </h3>

          <ul
            className={`space-y-3 text-sm md:text-base ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>✔ 5+ years of experience in data-driven and product environments</li>
            <li>✔ Real business ownership – analysed ₹2L+ monthly revenue and 1,000+ transactions</li>
            <li>✔ Strong in SQL, Power BI, and Python for end-to-end analytics</li>
            <li>✔ Proven impact – improved customer retention by 15–20% using data insights</li>
            <li>✔ Ability to translate raw data into actionable business decisions</li>
          </ul>

          <img
            src={AboutImg}
            alt="Data Analyst"
            className="w-full rounded-xl shadow-lg 
            hover:scale-105 transition duration-300"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* DATA ANALYSIS */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={24} className="mt-1 text-blue-400 flex-shrink-0" />
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-400">
                Data Analysis
              </h4>
              <p
                className={`text-sm md:text-base ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I analyze structured and real-world business data using SQL and Python to uncover trends, optimize performance, and support strategic decisions.
              </p>
            </div>
          </div>

          {/* DATA VISUALIZATION */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={24} className="mt-1 text-blue-400 flex-shrink-0" />
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-400">
                Data Visualization
              </h4>
              <p
                className={`text-sm md:text-base ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I design interactive dashboards in Power BI and Tableau to track KPIs, monitor business performance, and enable data-driven decision-making.
              </p>
            </div>
          </div>

          {/* BUSINESS INSIGHTS */}
          <div className="flex gap-4 items-start">
            <IoArrowForward size={24} className="mt-1 text-blue-400 flex-shrink-0" />
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-400">
                Business Insights
              </h4>
              <p
                className={`text-sm md:text-base ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I turn insights into action — improving retention, optimizing pricing, and driving measurable business growth through data.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;