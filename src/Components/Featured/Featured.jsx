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

        {/* IMAGE */}
        <img
          src="/dashboards/roys-kitchen-dashboard.png"
          alt="Roy's Kitchen Dashboard"
          className="rounded-xl w-full md:w-[40%] max-h-[280px] object-cover 
shadow-md hover:scale-105 transition duration-300"
        />

        {/* CONTENT */}
        <div className="space-y-4">

          <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
            Roy’s Kitchen Sales Dashboard
          </h3>

          <p className="text-gray-400">
            Built an interactive Power BI dashboard analyzing restaurant sales,
            revenue trends, and top-selling items. Helped improve business decisions
            using real sales data.
          </p>

          <ul className="text-gray-300 space-y-2">
            <li>✔ Tools: SQL, Power BI</li>
            <li>✔ Dataset: Real restaurant sales data</li>
            <li>✔ Outcome: Identified top items & improved decision-making</li>
          </ul>

          {/* CTA */}
          <a
            href="#Dashboards"
            className="inline-block mt-4 px-6 py-3 rounded-full 
            bg-gradient-to-r from-blue-500 to-indigo-500 
            font-semibold transition-all duration-300 
            hover:scale-105 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
          >
            View Dashboard
          </a>

        </div>
      </div>

    </div>
  );
};

export default Featured;