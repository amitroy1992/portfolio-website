import React from "react";

const Featured = () => {
  return (
    <div className="bg-[#0f172a] text-white py-16 px-6 md:px-20">

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Featured Project 🚀
      </h2>

      <div
        className="flex flex-col md:flex-row items-center gap-10 
        bg-[#1e2331] p-6 rounded-2xl shadow-lg 
        transition-all duration-300 
        hover:scale-[1.02] 
        hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
      >

        <img
          src="/dashboards/roys-kitchen-dashboard.png"
          alt="Roy's Kitchen Power BI Dashboard"
          className="rounded-xl w-full md:w-[40%] max-h-[280px] object-cover 
          shadow-md hover:scale-105 transition duration-300"
        />

        <div className="space-y-4">

          <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
            Roy’s Kitchen – Zomato Sales Analytics Dashboard (Power BI)
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Built an interactive Power BI dashboard to analyze restaurant sales performance,
            focusing on revenue trends, order volume, customer ratings, and Month-over-Month (MoM) growth.

            Leveraged DAX calculations and AI-driven insights to uncover business patterns and generate actionable recommendations.

            <br /><br />
            <span className="text-white font-medium">
              Key Insight:
            </span>{" "}
            Revenue dropped by <span className="text-red-400 font-semibold">-9.5% in February</span>,
            indicating the need for targeted marketing and promotional strategies.
          </p>

          <ul className="text-gray-300 space-y-2 text-sm md:text-base">
            <li>✔ Tools: Power BI, DAX</li>
            <li>✔ Features: KPI Cards, MoM Growth, AI Insights</li>
            <li>✔ Outcome: Data-driven decision support for business growth</li>
          </ul>

          <div className="flex gap-4 flex-wrap">

            <a
              href="#Dashboards"
              className="px-6 py-3 rounded-full 
              bg-gradient-to-r from-blue-500 to-indigo-500 
              font-semibold transition-all duration-300 
              hover:scale-105 
              hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            >
              View Dashboard
            </a>

            <a
              href="https://github.com/amitroy1992/roys-kitchen-powerbi-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full 
              bg-gradient-to-r from-blue-500 to-indigo-500 
              font-semibold transition-all duration-300 
              hover:scale-105 
              hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            >
              GitHub Repo
            </a>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Featured;